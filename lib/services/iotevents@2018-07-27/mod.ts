// Autogenerated API client for: AWS IoT Events

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class IoTEvents {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(IoTEvents.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-07-27",
    "endpointPrefix": "iotevents",
    "protocol": "rest-json",
    "serviceFullName": "AWS IoT Events",
    "serviceId": "IoT Events",
    "signatureVersion": "v4",
    "signingName": "iotevents",
    "uid": "iotevents-2018-07-27"
  };

  async createDetectorModel(
    {abortSignal, ...params}: RequestConfig & s.CreateDetectorModelRequest,
  ): Promise<s.CreateDetectorModelResponse> {
    const body: jsonP.JSONObject = {
      detectorModelName: params["detectorModelName"],
      detectorModelDefinition: fromDetectorModelDefinition(params["detectorModelDefinition"]),
      detectorModelDescription: params["detectorModelDescription"],
      key: params["key"],
      roleArn: params["roleArn"],
      tags: params["tags"]?.map(x => fromTag(x)),
      evaluationMethod: params["evaluationMethod"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateDetectorModel",
      requestUri: "/detector-models",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "detectorModelConfiguration": toDetectorModelConfiguration,
      },
    }, await resp.json());
  }

  async createInput(
    {abortSignal, ...params}: RequestConfig & s.CreateInputRequest,
  ): Promise<s.CreateInputResponse> {
    const body: jsonP.JSONObject = {
      inputName: params["inputName"],
      inputDescription: params["inputDescription"],
      inputDefinition: fromInputDefinition(params["inputDefinition"]),
      tags: params["tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateInput",
      requestUri: "/inputs",
      responseCode: 201,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "inputConfiguration": toInputConfiguration,
      },
    }, await resp.json());
  }

  async deleteDetectorModel(
    {abortSignal, ...params}: RequestConfig & s.DeleteDetectorModelRequest,
  ): Promise<s.DeleteDetectorModelResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteDetectorModel",
      method: "DELETE",
      requestUri: cmnP.encodePath`/detector-models/${params["detectorModelName"]}`,
      responseCode: 204,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteInput(
    {abortSignal, ...params}: RequestConfig & s.DeleteInputRequest,
  ): Promise<s.DeleteInputResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteInput",
      method: "DELETE",
      requestUri: cmnP.encodePath`/inputs/${params["inputName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeDetectorModel(
    {abortSignal, ...params}: RequestConfig & s.DescribeDetectorModelRequest,
  ): Promise<s.DescribeDetectorModelResponse> {
    const query = new URLSearchParams;
    if (params["detectorModelVersion"] != null) query.set("version", params["detectorModelVersion"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "DescribeDetectorModel",
      method: "GET",
      requestUri: cmnP.encodePath`/detector-models/${params["detectorModelName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "detectorModel": toDetectorModel,
      },
    }, await resp.json());
  }

  async describeInput(
    {abortSignal, ...params}: RequestConfig & s.DescribeInputRequest,
  ): Promise<s.DescribeInputResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeInput",
      method: "GET",
      requestUri: cmnP.encodePath`/inputs/${params["inputName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "input": toInput,
      },
    }, await resp.json());
  }

  async describeLoggingOptions(
    {abortSignal, ...params}: RequestConfig & s.DescribeLoggingOptionsRequest = {},
  ): Promise<s.DescribeLoggingOptionsResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeLoggingOptions",
      method: "GET",
      requestUri: "/logging",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "loggingOptions": toLoggingOptions,
      },
    }, await resp.json());
  }

  async listDetectorModelVersions(
    {abortSignal, ...params}: RequestConfig & s.ListDetectorModelVersionsRequest,
  ): Promise<s.ListDetectorModelVersionsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListDetectorModelVersions",
      method: "GET",
      requestUri: cmnP.encodePath`/detector-models/${params["detectorModelName"]}/versions`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "detectorModelVersionSummaries": [toDetectorModelVersionSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listDetectorModels(
    {abortSignal, ...params}: RequestConfig & s.ListDetectorModelsRequest = {},
  ): Promise<s.ListDetectorModelsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListDetectorModels",
      method: "GET",
      requestUri: "/detector-models",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "detectorModelSummaries": [toDetectorModelSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listInputs(
    {abortSignal, ...params}: RequestConfig & s.ListInputsRequest = {},
  ): Promise<s.ListInputsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListInputs",
      method: "GET",
      requestUri: "/inputs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "inputSummaries": [toInputSummary],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const query = new URLSearchParams;
    query.set("resourceArn", params["resourceArn"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: "/tags",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async putLoggingOptions(
    {abortSignal, ...params}: RequestConfig & s.PutLoggingOptionsRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      loggingOptions: fromLoggingOptions(params["loggingOptions"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutLoggingOptions",
      method: "PUT",
      requestUri: "/logging",
    });
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const query = new URLSearchParams;
    const body: jsonP.JSONObject = {
      tags: params["tags"]?.map(x => fromTag(x)),
    };
    query.set("resourceArn", params["resourceArn"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query, body,
      action: "TagResource",
      requestUri: "/tags",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const query = new URLSearchParams;
    query.set("resourceArn", params["resourceArn"]?.toString() ?? "");
    for (const item of params["tagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: "/tags",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateDetectorModel(
    {abortSignal, ...params}: RequestConfig & s.UpdateDetectorModelRequest,
  ): Promise<s.UpdateDetectorModelResponse> {
    const body: jsonP.JSONObject = {
      detectorModelDefinition: fromDetectorModelDefinition(params["detectorModelDefinition"]),
      detectorModelDescription: params["detectorModelDescription"],
      roleArn: params["roleArn"],
      evaluationMethod: params["evaluationMethod"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateDetectorModel",
      requestUri: cmnP.encodePath`/detector-models/${params["detectorModelName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "detectorModelConfiguration": toDetectorModelConfiguration,
      },
    }, await resp.json());
  }

  async updateInput(
    {abortSignal, ...params}: RequestConfig & s.UpdateInputRequest,
  ): Promise<s.UpdateInputResponse> {
    const body: jsonP.JSONObject = {
      inputDescription: params["inputDescription"],
      inputDefinition: fromInputDefinition(params["inputDefinition"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateInput",
      method: "PUT",
      requestUri: cmnP.encodePath`/inputs/${params["inputName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "inputConfiguration": toInputConfiguration,
      },
    }, await resp.json());
  }

}

function fromDetectorModelDefinition(input?: s.DetectorModelDefinition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    states: input["states"]?.map(x => fromState(x)),
    initialStateName: input["initialStateName"],
  }
}
function toDetectorModelDefinition(root: jsonP.JSONValue): s.DetectorModelDefinition {
  return jsonP.readObj({
    required: {
      "states": [toState],
      "initialStateName": "s",
    },
    optional: {},
  }, root);
}

function fromState(input?: s.State | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    stateName: input["stateName"],
    onInput: fromOnInputLifecycle(input["onInput"]),
    onEnter: fromOnEnterLifecycle(input["onEnter"]),
    onExit: fromOnExitLifecycle(input["onExit"]),
  }
}
function toState(root: jsonP.JSONValue): s.State {
  return jsonP.readObj({
    required: {
      "stateName": "s",
    },
    optional: {
      "onInput": toOnInputLifecycle,
      "onEnter": toOnEnterLifecycle,
      "onExit": toOnExitLifecycle,
    },
  }, root);
}

function fromOnInputLifecycle(input?: s.OnInputLifecycle | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    events: input["events"]?.map(x => fromEvent(x)),
    transitionEvents: input["transitionEvents"]?.map(x => fromTransitionEvent(x)),
  }
}
function toOnInputLifecycle(root: jsonP.JSONValue): s.OnInputLifecycle {
  return jsonP.readObj({
    required: {},
    optional: {
      "events": [toEvent],
      "transitionEvents": [toTransitionEvent],
    },
  }, root);
}

function fromEvent(input?: s.Event | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    eventName: input["eventName"],
    condition: input["condition"],
    actions: input["actions"]?.map(x => fromAction(x)),
  }
}
function toEvent(root: jsonP.JSONValue): s.Event {
  return jsonP.readObj({
    required: {
      "eventName": "s",
    },
    optional: {
      "condition": "s",
      "actions": [toAction],
    },
  }, root);
}

function fromAction(input?: s.Action | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    setVariable: fromSetVariableAction(input["setVariable"]),
    sns: fromSNSTopicPublishAction(input["sns"]),
    iotTopicPublish: fromIotTopicPublishAction(input["iotTopicPublish"]),
    setTimer: fromSetTimerAction(input["setTimer"]),
    clearTimer: fromClearTimerAction(input["clearTimer"]),
    resetTimer: fromResetTimerAction(input["resetTimer"]),
    lambda: fromLambdaAction(input["lambda"]),
    iotEvents: fromIotEventsAction(input["iotEvents"]),
    sqs: fromSqsAction(input["sqs"]),
    firehose: fromFirehoseAction(input["firehose"]),
    dynamoDB: fromDynamoDBAction(input["dynamoDB"]),
    dynamoDBv2: fromDynamoDBv2Action(input["dynamoDBv2"]),
    iotSiteWise: fromIotSiteWiseAction(input["iotSiteWise"]),
  }
}
function toAction(root: jsonP.JSONValue): s.Action {
  return jsonP.readObj({
    required: {},
    optional: {
      "setVariable": toSetVariableAction,
      "sns": toSNSTopicPublishAction,
      "iotTopicPublish": toIotTopicPublishAction,
      "setTimer": toSetTimerAction,
      "clearTimer": toClearTimerAction,
      "resetTimer": toResetTimerAction,
      "lambda": toLambdaAction,
      "iotEvents": toIotEventsAction,
      "sqs": toSqsAction,
      "firehose": toFirehoseAction,
      "dynamoDB": toDynamoDBAction,
      "dynamoDBv2": toDynamoDBv2Action,
      "iotSiteWise": toIotSiteWiseAction,
    },
  }, root);
}

function fromSetVariableAction(input?: s.SetVariableAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    variableName: input["variableName"],
    value: input["value"],
  }
}
function toSetVariableAction(root: jsonP.JSONValue): s.SetVariableAction {
  return jsonP.readObj({
    required: {
      "variableName": "s",
      "value": "s",
    },
    optional: {},
  }, root);
}

function fromSNSTopicPublishAction(input?: s.SNSTopicPublishAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    targetArn: input["targetArn"],
    payload: fromPayload(input["payload"]),
  }
}
function toSNSTopicPublishAction(root: jsonP.JSONValue): s.SNSTopicPublishAction {
  return jsonP.readObj({
    required: {
      "targetArn": "s",
    },
    optional: {
      "payload": toPayload,
    },
  }, root);
}

function fromPayload(input?: s.Payload | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    contentExpression: input["contentExpression"],
    type: input["type"],
  }
}
function toPayload(root: jsonP.JSONValue): s.Payload {
  return jsonP.readObj({
    required: {
      "contentExpression": "s",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.PayloadType>(x),
    },
    optional: {},
  }, root);
}

function fromIotTopicPublishAction(input?: s.IotTopicPublishAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    mqttTopic: input["mqttTopic"],
    payload: fromPayload(input["payload"]),
  }
}
function toIotTopicPublishAction(root: jsonP.JSONValue): s.IotTopicPublishAction {
  return jsonP.readObj({
    required: {
      "mqttTopic": "s",
    },
    optional: {
      "payload": toPayload,
    },
  }, root);
}

function fromSetTimerAction(input?: s.SetTimerAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    timerName: input["timerName"],
    seconds: input["seconds"],
    durationExpression: input["durationExpression"],
  }
}
function toSetTimerAction(root: jsonP.JSONValue): s.SetTimerAction {
  return jsonP.readObj({
    required: {
      "timerName": "s",
    },
    optional: {
      "seconds": "n",
      "durationExpression": "s",
    },
  }, root);
}

function fromClearTimerAction(input?: s.ClearTimerAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    timerName: input["timerName"],
  }
}
function toClearTimerAction(root: jsonP.JSONValue): s.ClearTimerAction {
  return jsonP.readObj({
    required: {
      "timerName": "s",
    },
    optional: {},
  }, root);
}

function fromResetTimerAction(input?: s.ResetTimerAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    timerName: input["timerName"],
  }
}
function toResetTimerAction(root: jsonP.JSONValue): s.ResetTimerAction {
  return jsonP.readObj({
    required: {
      "timerName": "s",
    },
    optional: {},
  }, root);
}

function fromLambdaAction(input?: s.LambdaAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    functionArn: input["functionArn"],
    payload: fromPayload(input["payload"]),
  }
}
function toLambdaAction(root: jsonP.JSONValue): s.LambdaAction {
  return jsonP.readObj({
    required: {
      "functionArn": "s",
    },
    optional: {
      "payload": toPayload,
    },
  }, root);
}

function fromIotEventsAction(input?: s.IotEventsAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    inputName: input["inputName"],
    payload: fromPayload(input["payload"]),
  }
}
function toIotEventsAction(root: jsonP.JSONValue): s.IotEventsAction {
  return jsonP.readObj({
    required: {
      "inputName": "s",
    },
    optional: {
      "payload": toPayload,
    },
  }, root);
}

function fromSqsAction(input?: s.SqsAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    queueUrl: input["queueUrl"],
    useBase64: input["useBase64"],
    payload: fromPayload(input["payload"]),
  }
}
function toSqsAction(root: jsonP.JSONValue): s.SqsAction {
  return jsonP.readObj({
    required: {
      "queueUrl": "s",
    },
    optional: {
      "useBase64": "b",
      "payload": toPayload,
    },
  }, root);
}

function fromFirehoseAction(input?: s.FirehoseAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    deliveryStreamName: input["deliveryStreamName"],
    separator: input["separator"],
    payload: fromPayload(input["payload"]),
  }
}
function toFirehoseAction(root: jsonP.JSONValue): s.FirehoseAction {
  return jsonP.readObj({
    required: {
      "deliveryStreamName": "s",
    },
    optional: {
      "separator": "s",
      "payload": toPayload,
    },
  }, root);
}

function fromDynamoDBAction(input?: s.DynamoDBAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    hashKeyType: input["hashKeyType"],
    hashKeyField: input["hashKeyField"],
    hashKeyValue: input["hashKeyValue"],
    rangeKeyType: input["rangeKeyType"],
    rangeKeyField: input["rangeKeyField"],
    rangeKeyValue: input["rangeKeyValue"],
    operation: input["operation"],
    payloadField: input["payloadField"],
    tableName: input["tableName"],
    payload: fromPayload(input["payload"]),
  }
}
function toDynamoDBAction(root: jsonP.JSONValue): s.DynamoDBAction {
  return jsonP.readObj({
    required: {
      "hashKeyField": "s",
      "hashKeyValue": "s",
      "tableName": "s",
    },
    optional: {
      "hashKeyType": "s",
      "rangeKeyType": "s",
      "rangeKeyField": "s",
      "rangeKeyValue": "s",
      "operation": "s",
      "payloadField": "s",
      "payload": toPayload,
    },
  }, root);
}

function fromDynamoDBv2Action(input?: s.DynamoDBv2Action | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    tableName: input["tableName"],
    payload: fromPayload(input["payload"]),
  }
}
function toDynamoDBv2Action(root: jsonP.JSONValue): s.DynamoDBv2Action {
  return jsonP.readObj({
    required: {
      "tableName": "s",
    },
    optional: {
      "payload": toPayload,
    },
  }, root);
}

function fromIotSiteWiseAction(input?: s.IotSiteWiseAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    entryId: input["entryId"],
    assetId: input["assetId"],
    propertyId: input["propertyId"],
    propertyAlias: input["propertyAlias"],
    propertyValue: fromAssetPropertyValue(input["propertyValue"]),
  }
}
function toIotSiteWiseAction(root: jsonP.JSONValue): s.IotSiteWiseAction {
  return jsonP.readObj({
    required: {
      "propertyValue": toAssetPropertyValue,
    },
    optional: {
      "entryId": "s",
      "assetId": "s",
      "propertyId": "s",
      "propertyAlias": "s",
    },
  }, root);
}

function fromAssetPropertyValue(input?: s.AssetPropertyValue | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    value: fromAssetPropertyVariant(input["value"]),
    timestamp: fromAssetPropertyTimestamp(input["timestamp"]),
    quality: input["quality"],
  }
}
function toAssetPropertyValue(root: jsonP.JSONValue): s.AssetPropertyValue {
  return jsonP.readObj({
    required: {
      "value": toAssetPropertyVariant,
    },
    optional: {
      "timestamp": toAssetPropertyTimestamp,
      "quality": "s",
    },
  }, root);
}

function fromAssetPropertyVariant(input?: s.AssetPropertyVariant | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    stringValue: input["stringValue"],
    integerValue: input["integerValue"],
    doubleValue: input["doubleValue"],
    booleanValue: input["booleanValue"],
  }
}
function toAssetPropertyVariant(root: jsonP.JSONValue): s.AssetPropertyVariant {
  return jsonP.readObj({
    required: {},
    optional: {
      "stringValue": "s",
      "integerValue": "s",
      "doubleValue": "s",
      "booleanValue": "s",
    },
  }, root);
}

function fromAssetPropertyTimestamp(input?: s.AssetPropertyTimestamp | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    timeInSeconds: input["timeInSeconds"],
    offsetInNanos: input["offsetInNanos"],
  }
}
function toAssetPropertyTimestamp(root: jsonP.JSONValue): s.AssetPropertyTimestamp {
  return jsonP.readObj({
    required: {
      "timeInSeconds": "s",
    },
    optional: {
      "offsetInNanos": "s",
    },
  }, root);
}

function fromTransitionEvent(input?: s.TransitionEvent | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    eventName: input["eventName"],
    condition: input["condition"],
    actions: input["actions"]?.map(x => fromAction(x)),
    nextState: input["nextState"],
  }
}
function toTransitionEvent(root: jsonP.JSONValue): s.TransitionEvent {
  return jsonP.readObj({
    required: {
      "eventName": "s",
      "condition": "s",
      "nextState": "s",
    },
    optional: {
      "actions": [toAction],
    },
  }, root);
}

function fromOnEnterLifecycle(input?: s.OnEnterLifecycle | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    events: input["events"]?.map(x => fromEvent(x)),
  }
}
function toOnEnterLifecycle(root: jsonP.JSONValue): s.OnEnterLifecycle {
  return jsonP.readObj({
    required: {},
    optional: {
      "events": [toEvent],
    },
  }, root);
}

function fromOnExitLifecycle(input?: s.OnExitLifecycle | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    events: input["events"]?.map(x => fromEvent(x)),
  }
}
function toOnExitLifecycle(root: jsonP.JSONValue): s.OnExitLifecycle {
  return jsonP.readObj({
    required: {},
    optional: {
      "events": [toEvent],
    },
  }, root);
}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    key: input["key"],
    value: input["value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "key": "s",
      "value": "s",
    },
    optional: {},
  }, root);
}

function fromInputDefinition(input?: s.InputDefinition | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    attributes: input["attributes"]?.map(x => fromAttribute(x)),
  }
}
function toInputDefinition(root: jsonP.JSONValue): s.InputDefinition {
  return jsonP.readObj({
    required: {
      "attributes": [toAttribute],
    },
    optional: {},
  }, root);
}

function fromAttribute(input?: s.Attribute | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    jsonPath: input["jsonPath"],
  }
}
function toAttribute(root: jsonP.JSONValue): s.Attribute {
  return jsonP.readObj({
    required: {
      "jsonPath": "s",
    },
    optional: {},
  }, root);
}

function fromLoggingOptions(input?: s.LoggingOptions | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    roleArn: input["roleArn"],
    level: input["level"],
    enabled: input["enabled"],
    detectorDebugOptions: input["detectorDebugOptions"]?.map(x => fromDetectorDebugOption(x)),
  }
}
function toLoggingOptions(root: jsonP.JSONValue): s.LoggingOptions {
  return jsonP.readObj({
    required: {
      "roleArn": "s",
      "level": (x: jsonP.JSONValue) => cmnP.readEnum<s.LoggingLevel>(x),
      "enabled": "b",
    },
    optional: {
      "detectorDebugOptions": [toDetectorDebugOption],
    },
  }, root);
}

function fromDetectorDebugOption(input?: s.DetectorDebugOption | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    detectorModelName: input["detectorModelName"],
    keyValue: input["keyValue"],
  }
}
function toDetectorDebugOption(root: jsonP.JSONValue): s.DetectorDebugOption {
  return jsonP.readObj({
    required: {
      "detectorModelName": "s",
    },
    optional: {
      "keyValue": "s",
    },
  }, root);
}

function toDetectorModelConfiguration(root: jsonP.JSONValue): s.DetectorModelConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "detectorModelName": "s",
      "detectorModelVersion": "s",
      "detectorModelDescription": "s",
      "detectorModelArn": "s",
      "roleArn": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.DetectorModelVersionStatus>(x),
      "key": "s",
      "evaluationMethod": (x: jsonP.JSONValue) => cmnP.readEnum<s.EvaluationMethod>(x),
    },
  }, root);
}

function toInputConfiguration(root: jsonP.JSONValue): s.InputConfiguration {
  return jsonP.readObj({
    required: {
      "inputName": "s",
      "inputArn": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.InputStatus>(x),
    },
    optional: {
      "inputDescription": "s",
    },
  }, root);
}

function toDetectorModel(root: jsonP.JSONValue): s.DetectorModel {
  return jsonP.readObj({
    required: {},
    optional: {
      "detectorModelDefinition": toDetectorModelDefinition,
      "detectorModelConfiguration": toDetectorModelConfiguration,
    },
  }, root);
}

function toInput(root: jsonP.JSONValue): s.Input {
  return jsonP.readObj({
    required: {},
    optional: {
      "inputConfiguration": toInputConfiguration,
      "inputDefinition": toInputDefinition,
    },
  }, root);
}

function toDetectorModelVersionSummary(root: jsonP.JSONValue): s.DetectorModelVersionSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "detectorModelName": "s",
      "detectorModelVersion": "s",
      "detectorModelArn": "s",
      "roleArn": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.DetectorModelVersionStatus>(x),
      "evaluationMethod": (x: jsonP.JSONValue) => cmnP.readEnum<s.EvaluationMethod>(x),
    },
  }, root);
}

function toDetectorModelSummary(root: jsonP.JSONValue): s.DetectorModelSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "detectorModelName": "s",
      "detectorModelDescription": "s",
      "creationTime": "d",
    },
  }, root);
}

function toInputSummary(root: jsonP.JSONValue): s.InputSummary {
  return jsonP.readObj({
    required: {},
    optional: {
      "inputName": "s",
      "inputDescription": "s",
      "inputArn": "s",
      "creationTime": "d",
      "lastUpdateTime": "d",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.InputStatus>(x),
    },
  }, root);
}
