import type * as Schema from './sdk-schema.ts';
import ProtocolQueryCodegen from './protocol-query.ts';
import ShapeLibrary, { KnownShape } from './shape-library.ts';
import { fixupApiSpec, fixupWaitersSpec } from './quirks.ts';
import GenWaiter from "./gen-waiter.ts";

export default class ServiceCodeGen {
  apiSpec: Schema.Api;
  pagersSpec?: Schema.Pagination;
  waitersSpec?: Schema.Waiters;

  shapes: ShapeLibrary;
  protocol: ProtocolQueryCodegen; // TODO: others too

  constructor(specs: {
    api: Schema.Api,
    pagers?: Schema.Pagination,
    waiters?: Schema.Waiters,
  }) {
    this.apiSpec = specs.api;
    this.pagersSpec = specs.pagers;
    this.waitersSpec = specs.waiters;

    // mutate the specs to fix inaccuracies
    fixupApiSpec(this.apiSpec);
    if (this.waitersSpec) {
      fixupWaitersSpec(this.waitersSpec, this.apiSpec);
    }

    const inputShapes = new Set<string>();
    const outputShapes = new Set<string>();
    for (const op of Object.values(specs.api.operations)) {
      if (op.input) inputShapes.add(op.input.shape);
      if (op.output) outputShapes.add(op.output.shape);
    }

    this.shapes = new ShapeLibrary({
      shapeSpecs: specs.api.shapes,
      inputNames: Array.from(inputShapes),
      outputNames: Array.from(outputShapes),
    });

    switch (specs.api.metadata.protocol) {
      case 'ec2':
        this.protocol = new ProtocolQueryCodegen(this.shapes, {ec2: true});
        break;
      case 'query':
        this.protocol = new ProtocolQueryCodegen(this.shapes);
        break;
      default: throw new Error(
        `TODO: unimpl protocol ${specs.api.metadata.protocol}`);
    }

  }

  generateTypescript(): string {
    // console.log(wholeSpec.metadata)
    const apiCamelName = this.apiSpec.metadata.serviceId.split(' ').map(x => x[0].toUpperCase()+x.slice(1)).join('');

    const allMethods = new Set(Object.values(this.apiSpec.operations).map(x => x.http?.method ?? 'POST'));

    const chunks = new Array<string>();
    chunks.push(`// Autogenerated API client for: ${this.apiSpec.metadata.serviceFullName}`);

    chunks.push(`
// The HTTP contract put forth by aws-typescript-client/core/mod.ts
interface ApiRequestConfig {
  // fixed per operation
  action: string;
  method?: ${Array.from(allMethods).map(x => JSON.stringify(x)).join(' | ')};
  requestUri?: string;
  responseCode?: number;
  hostPrefix?: string;
  // "endpointdiscovery"?: {} // only in dynamodb
// dynamic per call
  headers?: Headers;
  query?: URLSearchParams;
  body?: ${this.protocol.requestBodyTypeName};
  abortSignal?: AbortSignal;
}
type ApiResponse = Response & {
  xml(resultWrapper?: string): Promise<XmlNode>;
}
// Things that JSON can handle directly
// type ApiWireStructure = {
//   [param: string]: string | number | boolean | null | ApiWireStructure;
// };
interface ApiFactory {
  buildServiceClient(apiMetadata: Object): ServiceClient;
}
interface ServiceClient {
  performRequest(request: ApiRequestConfig): Promise<ApiResponse>;
}
interface RequestConfig {
  abortSignal?: AbortSignal;
}
interface XmlNode {
  name: string;
  attributes: {[key: string]: string};
  content?: string;
  children: XmlNode[];

  first(name: string, required: true): XmlNode;
  first<T>(name: string, required: true, accessor: (node: XmlNode) => T | undefined): T;
  first(name: string, required?: false): XmlNode | undefined;
  first<T>(name: string, required: false, accessor: (node: XmlNode) => T): T | undefined;
  getList(...namePath: string[]): XmlNode[]; // you can just map this
  strings<R extends {[key: string]: true}, O extends {[key: string]: true}>(
    opts: { required?: R, optional?: O }
  ): { [key in keyof R]: string } & { [key in keyof O]: string | undefined };
}

`);
    chunks.push(this.protocol.globalHelpers);

    chunks.push(`export default class ${apiCamelName} {`);
    chunks.push(`  #client: ServiceClient;`);
    chunks.push(`  constructor(apiFactory: ApiFactory) {`);
    chunks.push(`    this.#client = apiFactory.buildServiceClient(${apiCamelName}.ApiMetadata);`);
    chunks.push(`  }\n`);
    chunks.push(`  static ApiMetadata: Object = ${JSON.stringify(this.apiSpec.metadata, null, 2).replace(/\n/g, `\n  `)};\n`);

    for (const operation of Object.values(this.apiSpec.operations)) {
      const inputShape =  operation.input ? this.shapes.get(operation.input) : null;
      const outputShape = operation.output ? this.shapes.get(operation.output) : null;

      let signature = `(\n    {abortSignal, ...params}: RequestConfig`;
      if (inputShape?.spec.type === 'structure') {
        signature += ' & ' + this.specifyShapeType(inputShape);
        if (!inputShape.spec.required?.length) {
          signature += ' = {}';
        }
      } else if (inputShape) {
        throw new Error(`TODO: ${inputShape.spec.type} input`);
      } else {
        signature += ' = {}';
      }

      signature += `,\n  ): Promise<`;
      if (outputShape?.spec.type === 'structure') {
        signature += this.specifyShapeType(outputShape);
      } else if (outputShape) {
        throw new Error(`TODO: ${outputShape.spec.type} output`);
      } else {
        signature += 'void';
      }
      signature += '>';

      const lowerCamelName = operation.name[0].toLowerCase() + operation.name.slice(1);
      chunks.push(`  async ${lowerCamelName}${signature} {`);
      const pathParts = new Map;
      const referencedInputs = new Set(['abortSignal']);
      if (inputShape?.spec.type === 'structure') {
        const {inputParsingCode, inputVariables} = this.protocol
          .generateOperationInputParsingTypescript(inputShape.spec);
        chunks.push(inputParsingCode);
        inputVariables.forEach(x => referencedInputs.add(x));
      } else {
        referencedInputs.add(`body: new URLSearchParams()`);
      }

      chunks.push(`    const resp = await this.#client.performRequest({`);
      chunks.push(`      ${Array.from(referencedInputs).join(', ')},`);
      chunks.push(`      action: ${JSON.stringify(operation.name)},`);
      if (operation.http?.method && operation.http.method !== 'POST') {
        chunks.push(`      method: ${JSON.stringify(operation.http.method)},`);
      }
      if (operation.http?.requestUri && operation.http.requestUri !== '/') {
        const formattedPath = operation.http?.requestUri?.includes('{')
          ? ('encodePath`'+operation.http.requestUri
              .replace(/{[^}]+}/g, x => pathParts.get(x)||x)
            +'`').replace(/\+encodePath``/g, '')
          : JSON.stringify(operation.http?.requestUri || '/');
        chunks.push(`      requestUri: ${formattedPath},`);
      }
      if (operation.http?.responseCode) {
        chunks.push(`      responseCode: ${JSON.stringify(operation.http.responseCode)},`);
      }
      if (operation.endpoint?.hostPrefix) {
        const templatedPrefix = operation.endpoint.hostPrefix.replace(/{/g, '${params.');
        chunks.push(`      hostPrefix: \`${templatedPrefix}\`,`);
      }
      chunks.push(`    });`);

      /////
      // OVERALL TODO: Detect 'framing' shapes (e.g. for s3 headers) and treat them specially

      if (outputShape?.spec.type === 'structure') {
        chunks.push(`    const xml = await resp.xml(${JSON.stringify(operation.output?.resultWrapper ?? outputShape?.spec.resultWrapper ?? undefined)});`);
        if (outputShape.refCount > 1) {
          chunks.push(`    return ${outputShape.censoredName}_Parse(xml);`);
        } else {
          const {outputParsingCode, outputVariables} = this.protocol
            .generateOperationOutputParsingTypescript(outputShape.spec);
          chunks.push(outputParsingCode);
        }
      }

      chunks.push(`  }\n`);
    }

    if (this.waitersSpec && Object.keys(this.waitersSpec.waiters).length > 0) {
      chunks.push(`  // Resource State Waiters\n`);
      for (const [name, spec] of Object.entries(this.waitersSpec.waiters)) {
        const operation = this.apiSpec.operations[spec.operation];
        const waiter = new GenWaiter(name, spec, operation, this.shapes);
        chunks.push(waiter.generateTypescript());
      }
    }

    chunks.push(`}\n`);

    for (const shape of this.shapes.allNamedShapes) {
      if (!shape.tags.has('named')) continue;

      chunks.push(`// refs: ${shape.refCount
        } - tags: ${Array.from(shape.tags).join(', ')}`);

      // if (this.#singleRefShapes.has(shape.name)) {
      //   chunks.push(`// TODO: can be inlined (only used once)`);
      // }
      chunks.push(`${
        this.writeStructureType(shape)}`);

      // TODO: other types might want a helper func... enums??
      if (shape.tags.has('interface')) {
        // Maybe include input reading (prep for wire)
        if (!(this.shapes.inputShapes.includes(shape) && shape.refCount === 1) && shape.tags.has('input')) {
          chunks.push(this.protocol.generateShapeInputParsingTypescript(shape).inputParsingFunction);
        }
        // Maybe include output reading (post-wire enriching)
        if (!(this.shapes.outputShapes.includes(shape) && shape.refCount === 1) && shape.tags.has('output')) {
          chunks.push(this.protocol.generateShapeOutputParsingTypescript(shape).outputParsingFunction);
        }
      }
      chunks.push('');
    }

    return chunks.join('\n');
  }

  writeStructureType(shape: KnownShape): string {
    switch (shape.spec.type) {

      case 'structure':
        const required = new Set(shape.spec.required?.map(x => x.toLowerCase()) || []);
        const reqLists = shape.tags.has('output') && !this.apiSpec.metadata.protocol.includes('json');
        return [`export interface ${shape.censoredName} {`,
          ...Object.entries(shape.spec.members).map(([key, spec]) => {
            const shape = this.shapes.get(spec);
            const isRequired = required.has(key.toLowerCase())
              || (reqLists && (shape.spec.type === 'list' || shape.spec.type === 'map'));
            return `  ${key}${isRequired ? '' : '?'}: ${this.specifyShapeType(shape)};`;
          }),
        '}'].join('\n');

      case 'string':
        if (shape.spec.enum) {
          return [`export type ${shape.censoredName} =`,
            ...shape.spec.enum.map(value => `| ${JSON.stringify(value)}`),
          ';'].join('\n');
        }
        break;

    }
    return `// TODO: forgotten shape ${shape.name} of type ${shape.spec.type}\n`;
  }

  // TODO: enums as a map key type should become an object instead
  specifyShapeType(shape: KnownShape, isDictKey = false): string {
    if (shape.tags.has('named') && !isDictKey) {
      return shape.censoredName;
    }

    switch (shape.spec.type) {
      case 'string':
        if (shape.spec.enum && !isDictKey) {
          return shape.spec.enum.map(x => JSON.stringify(x)).join(' | ');
        }
      case 'boolean':
        return shape.spec.type;
      case 'character':
        return 'string';
      case 'double':
      case 'float':
      case 'long':
      case 'integer':
        return 'number';
      case 'list':
        const memberShape = this.shapes.get(shape.spec.member);
        let memberType = this.specifyShapeType(memberShape);
        if (memberType.includes(' ')) memberType = `(${memberType})`;
        return `${memberType}[]`;
      case 'map':
        const keyShape = this.shapes.get(shape.spec.key);
        const valueShape = this.shapes.get(shape.spec.value);
        const keyType = (keyShape.spec.type === 'string' && keyShape.spec.enum)
          ? `key in ${keyShape.censoredName}`
          : `key: ${this.specifyShapeType(keyShape, true)}`;
        return `{ [${keyType}]: ${this.specifyShapeType(valueShape)} }`;
      case 'structure':
        return this.writeStructureType(shape).replace(/\n/g, '\n  ');
      case 'timestamp':
        return 'Date | number';
      case 'blob':
        return 'Uint8Array | string'; // TODO
      default:
        console.log(shape);
        throw new Error(`TODO: unimpl shape type ${(shape as any).spec.type}`);
    }
  }

}

function censorShapeName(name: string): string {
  if (['Object', 'Date', 'String'].includes(name)) {
    return '_'+name;
  }
  return name;
}
