// Autogenerated API client for: AWS CodeStar connections

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class CodeStarconnections {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(CodeStarconnections.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-12-01",
    "endpointPrefix": "codestar-connections",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceFullName": "AWS CodeStar connections",
    "serviceId": "CodeStar connections",
    "signatureVersion": "v4",
    "signingName": "codestar-connections",
    "targetPrefix": "com.amazonaws.codestar.connections.CodeStar_connections_20191201",
    "uid": "codestar-connections-2019-12-01"
  };

  async createConnection(
    {abortSignal, ...params}: RequestConfig & CreateConnectionInput,
  ): Promise<CreateConnectionOutput> {
    const body: jsonP.JSONObject = {
      ProviderType: params["ProviderType"],
      ConnectionName: params["ConnectionName"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
      HostArn: params["HostArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateConnection",
    });
    return jsonP.readObj({
      required: {
        "ConnectionArn": "s",
      },
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async createHost(
    {abortSignal, ...params}: RequestConfig & CreateHostInput,
  ): Promise<CreateHostOutput> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      ProviderType: params["ProviderType"],
      ProviderEndpoint: params["ProviderEndpoint"],
      VpcConfiguration: fromVpcConfiguration(params["VpcConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HostArn": "s",
      },
    }, await resp.json());
  }

  async deleteConnection(
    {abortSignal, ...params}: RequestConfig & DeleteConnectionInput,
  ): Promise<DeleteConnectionOutput> {
    const body: jsonP.JSONObject = {
      ConnectionArn: params["ConnectionArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteConnection",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteHost(
    {abortSignal, ...params}: RequestConfig & DeleteHostInput,
  ): Promise<DeleteHostOutput> {
    const body: jsonP.JSONObject = {
      HostArn: params["HostArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getConnection(
    {abortSignal, ...params}: RequestConfig & GetConnectionInput,
  ): Promise<GetConnectionOutput> {
    const body: jsonP.JSONObject = {
      ConnectionArn: params["ConnectionArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetConnection",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Connection": toConnection,
      },
    }, await resp.json());
  }

  async getHost(
    {abortSignal, ...params}: RequestConfig & GetHostInput,
  ): Promise<GetHostOutput> {
    const body: jsonP.JSONObject = {
      HostArn: params["HostArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Name": "s",
        "Status": "s",
        "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
        "ProviderEndpoint": "s",
        "VpcConfiguration": toVpcConfiguration,
      },
    }, await resp.json());
  }

  async listConnections(
    {abortSignal, ...params}: RequestConfig & ListConnectionsInput = {},
  ): Promise<ListConnectionsOutput> {
    const body: jsonP.JSONObject = {
      ProviderTypeFilter: params["ProviderTypeFilter"],
      HostArnFilter: params["HostArnFilter"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListConnections",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Connections": [toConnection],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listHosts(
    {abortSignal, ...params}: RequestConfig & ListHostsInput = {},
  ): Promise<ListHostsOutput> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListHosts",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Hosts": [toHost],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & ListTagsForResourceInput,
  ): Promise<ListTagsForResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & TagResourceInput,
  ): Promise<TagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & UntagResourceInput,
  ): Promise<UntagResourceOutput> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateHost(
    {abortSignal, ...params}: RequestConfig & UpdateHostInput,
  ): Promise<UpdateHostOutput> {
    const body: jsonP.JSONObject = {
      HostArn: params["HostArn"],
      ProviderEndpoint: params["ProviderEndpoint"],
      VpcConfiguration: fromVpcConfiguration(params["VpcConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateHost",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateConnectionInput {
  ProviderType?: ProviderType | null;
  ConnectionName: string;
  Tags?: Tag[] | null;
  HostArn?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateHostInput {
  Name: string;
  ProviderType: ProviderType;
  ProviderEndpoint: string;
  VpcConfiguration?: VpcConfiguration | null;
}

// refs: 1 - tags: named, input
export interface DeleteConnectionInput {
  ConnectionArn: string;
}

// refs: 1 - tags: named, input
export interface DeleteHostInput {
  HostArn: string;
}

// refs: 1 - tags: named, input
export interface GetConnectionInput {
  ConnectionArn: string;
}

// refs: 1 - tags: named, input
export interface GetHostInput {
  HostArn: string;
}

// refs: 1 - tags: named, input
export interface ListConnectionsInput {
  ProviderTypeFilter?: ProviderType | null;
  HostArnFilter?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListHostsInput {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceInput {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface TagResourceInput {
  ResourceArn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateHostInput {
  HostArn: string;
  ProviderEndpoint?: string | null;
  VpcConfiguration?: VpcConfiguration | null;
}

// refs: 1 - tags: named, output
export interface CreateConnectionOutput {
  ConnectionArn: string;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface CreateHostOutput {
  HostArn?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteConnectionOutput {
}

// refs: 1 - tags: named, output
export interface DeleteHostOutput {
}

// refs: 1 - tags: named, output
export interface GetConnectionOutput {
  Connection?: Connection | null;
}

// refs: 1 - tags: named, output
export interface GetHostOutput {
  Name?: string | null;
  Status?: string | null;
  ProviderType?: ProviderType | null;
  ProviderEndpoint?: string | null;
  VpcConfiguration?: VpcConfiguration | null;
}

// refs: 1 - tags: named, output
export interface ListConnectionsOutput {
  Connections?: Connection[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListHostsOutput {
  Hosts?: Host[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceOutput {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface TagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UntagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UpdateHostOutput {
}

// refs: 7 - tags: input, named, enum, output
export type ProviderType =
| "Bitbucket"
| "GitHub"
| "GitHubEnterpriseServer"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}
function fromTag(input?: Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

// refs: 4 - tags: input, named, interface, output
export interface VpcConfiguration {
  VpcId: string;
  SubnetIds: string[];
  SecurityGroupIds: string[];
  TlsCertificate?: string | null;
}
function fromVpcConfiguration(input?: VpcConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    VpcId: input["VpcId"],
    SubnetIds: input["SubnetIds"],
    SecurityGroupIds: input["SecurityGroupIds"],
    TlsCertificate: input["TlsCertificate"],
  }
}
function toVpcConfiguration(root: jsonP.JSONValue): VpcConfiguration {
  return jsonP.readObj({
    required: {
      "VpcId": "s",
      "SubnetIds": ["s"],
      "SecurityGroupIds": ["s"],
    },
    optional: {
      "TlsCertificate": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface Connection {
  ConnectionName?: string | null;
  ConnectionArn?: string | null;
  ProviderType?: ProviderType | null;
  OwnerAccountId?: string | null;
  ConnectionStatus?: ConnectionStatus | null;
  HostArn?: string | null;
}
function toConnection(root: jsonP.JSONValue): Connection {
  return jsonP.readObj({
    required: {},
    optional: {
      "ConnectionName": "s",
      "ConnectionArn": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
      "OwnerAccountId": "s",
      "ConnectionStatus": (x: jsonP.JSONValue) => cmnP.readEnum<ConnectionStatus>(x),
      "HostArn": "s",
    },
  }, root);
}

// refs: 2 - tags: output, named, enum
export type ConnectionStatus =
| "PENDING"
| "AVAILABLE"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Host {
  Name?: string | null;
  HostArn?: string | null;
  ProviderType?: ProviderType | null;
  ProviderEndpoint?: string | null;
  VpcConfiguration?: VpcConfiguration | null;
  Status?: string | null;
  StatusMessage?: string | null;
}
function toHost(root: jsonP.JSONValue): Host {
  return jsonP.readObj({
    required: {},
    optional: {
      "Name": "s",
      "HostArn": "s",
      "ProviderType": (x: jsonP.JSONValue) => cmnP.readEnum<ProviderType>(x),
      "ProviderEndpoint": "s",
      "VpcConfiguration": toVpcConfiguration,
      "Status": "s",
      "StatusMessage": "s",
    },
  }, root);
}