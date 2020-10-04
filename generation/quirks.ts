/**
 * Quirks: problems with the 'official' API specifications that need to be fixed up
 * Some of these are minor and only Typescript really noticed.
 * Others are like actual mistakes that are visible in the official SDKs and just no one cares about I guess.
 */

import type * as Schema from './sdk-schema.ts';

////////////////////////////////
// Operation/Shape problems

/** Mutate an api spec to fix any known inconsistencies. */
export function fixupApiSpec(spec: Schema.Api) {
  switch (spec.metadata.serviceId) {

    case "SQS": {
      // ReceiveMessage is asking for queue attribute names, should be message system-attribute names.
      const receiveReqShape = spec.shapes["ReceiveMessageRequest"];
      if (receiveReqShape.type === 'structure') {
        const attrNameMember = receiveReqShape.members["AttributeNames"];
        if (attrNameMember?.shape === "AttributeNameList") {
          // Change to the correct list shape.
          attrNameMember.shape = "MessageSystemAttributeNameList";
          // Add the correct shape since it doesn't even exist.
          spec.shapes["MessageSystemAttributeNameList"] = {
            "type": "list",
            "member": {
              "shape": "MessageSystemAttributeName",
              "locationName": "AttributeName",
            },
            "flattened": true,
          };
          // Finally, add 'All' to the attribute list
          // This is kinda wrong ('All' is only valid in name lists, not the results) but it matches the other shapes.
          if (spec.shapes["MessageSystemAttributeName"]?.type === 'string') {
            spec.shapes["MessageSystemAttributeName"].enum?.splice(0, 0, 'All');
          }
        }
      }
      break;
    }

  }
}


////////////////////////////////
// Waiter problems
// TODO: many of these should be auto detected by comparing the jmespath to the api's shapes

export function fixupWaitersSpec(spec: Schema.Waiters, apiSpec: Schema.Api) {
  switch (apiSpec.metadata.serviceId) {

    case "CloudFormation": {
      for (const waiter of Object.values(spec.waiters)) {
        for (const acceptor of waiter.acceptors) {
          if ((acceptor as Schema.WaiterPathMatcher).argument === 'Stacks[].StackStatus'
              && acceptor.expected === 'UPDATE_FAILED') {
            acceptor.knownBroken = true;
          }
        }
      }
      break;
    }

    case "EC2": {
      delete spec.waiters["ConversionTaskDeleted"];
      break;
    }

  }
}

/** replace parts of a compiled JMESPath that need to be tweaked to pass typecheck */
export function fixupJmesCode(code: string): string {
  return code
    // TODO: compile paths alongside the api shapes to avoid this situation
    .replace(`resp["PasswordData"].length`, `(resp["PasswordData"] ?? '').length`) // ec2
  ;
}
