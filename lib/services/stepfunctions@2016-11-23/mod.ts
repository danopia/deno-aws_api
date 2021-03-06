// Autogenerated API client for: AWS Step Functions

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class StepFunctions {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(StepFunctions.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2016-11-23",
    "endpointPrefix": "states",
    "jsonVersion": "1.0",
    "protocol": "json",
    "serviceAbbreviation": "AWS SFN",
    "serviceFullName": "AWS Step Functions",
    "serviceId": "SFN",
    "signatureVersion": "v4",
    "targetPrefix": "AWSStepFunctions",
    "uid": "states-2016-11-23"
  };

  async createActivity(
    {abortSignal, ...params}: RequestConfig & s.CreateActivityInput,
  ): Promise<s.CreateActivityOutput> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      tags: params["tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateActivity",
    });
    return jsonP.readObj({
      required: {
        "activityArn": "s",
        "creationDate": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async createStateMachine(
    {abortSignal, ...params}: RequestConfig & s.CreateStateMachineInput,
  ): Promise<s.CreateStateMachineOutput> {
    const body: jsonP.JSONObject = {
      name: params["name"],
      definition: params["definition"],
      roleArn: params["roleArn"],
      type: params["type"],
      loggingConfiguration: fromLoggingConfiguration(params["loggingConfiguration"]),
      tags: params["tags"]?.map(x => fromTag(x)),
      tracingConfiguration: fromTracingConfiguration(params["tracingConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateStateMachine",
    });
    return jsonP.readObj({
      required: {
        "stateMachineArn": "s",
        "creationDate": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteActivity(
    {abortSignal, ...params}: RequestConfig & s.DeleteActivityInput,
  ): Promise<s.DeleteActivityOutput> {
    const body: jsonP.JSONObject = {
      activityArn: params["activityArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteActivity",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteStateMachine(
    {abortSignal, ...params}: RequestConfig & s.DeleteStateMachineInput,
  ): Promise<s.DeleteStateMachineOutput> {
    const body: jsonP.JSONObject = {
      stateMachineArn: params["stateMachineArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteStateMachine",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeActivity(
    {abortSignal, ...params}: RequestConfig & s.DescribeActivityInput,
  ): Promise<s.DescribeActivityOutput> {
    const body: jsonP.JSONObject = {
      activityArn: params["activityArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeActivity",
    });
    return jsonP.readObj({
      required: {
        "activityArn": "s",
        "name": "s",
        "creationDate": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async describeExecution(
    {abortSignal, ...params}: RequestConfig & s.DescribeExecutionInput,
  ): Promise<s.DescribeExecutionOutput> {
    const body: jsonP.JSONObject = {
      executionArn: params["executionArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeExecution",
    });
    return jsonP.readObj({
      required: {
        "executionArn": "s",
        "stateMachineArn": "s",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ExecutionStatus>(x),
        "startDate": "d",
      },
      optional: {
        "name": "s",
        "stopDate": "d",
        "input": "s",
        "inputDetails": toCloudWatchEventsExecutionDataDetails,
        "output": "s",
        "outputDetails": toCloudWatchEventsExecutionDataDetails,
        "traceHeader": "s",
      },
    }, await resp.json());
  }

  async describeStateMachine(
    {abortSignal, ...params}: RequestConfig & s.DescribeStateMachineInput,
  ): Promise<s.DescribeStateMachineOutput> {
    const body: jsonP.JSONObject = {
      stateMachineArn: params["stateMachineArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStateMachine",
    });
    return jsonP.readObj({
      required: {
        "stateMachineArn": "s",
        "name": "s",
        "definition": "s",
        "roleArn": "s",
        "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.StateMachineType>(x),
        "creationDate": "d",
      },
      optional: {
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.StateMachineStatus>(x),
        "loggingConfiguration": toLoggingConfiguration,
        "tracingConfiguration": toTracingConfiguration,
      },
    }, await resp.json());
  }

  async describeStateMachineForExecution(
    {abortSignal, ...params}: RequestConfig & s.DescribeStateMachineForExecutionInput,
  ): Promise<s.DescribeStateMachineForExecutionOutput> {
    const body: jsonP.JSONObject = {
      executionArn: params["executionArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeStateMachineForExecution",
    });
    return jsonP.readObj({
      required: {
        "stateMachineArn": "s",
        "name": "s",
        "definition": "s",
        "roleArn": "s",
        "updateDate": "d",
      },
      optional: {
        "loggingConfiguration": toLoggingConfiguration,
        "tracingConfiguration": toTracingConfiguration,
      },
    }, await resp.json());
  }

  async getActivityTask(
    {abortSignal, ...params}: RequestConfig & s.GetActivityTaskInput,
  ): Promise<s.GetActivityTaskOutput> {
    const body: jsonP.JSONObject = {
      activityArn: params["activityArn"],
      workerName: params["workerName"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetActivityTask",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "taskToken": "s",
        "input": "s",
      },
    }, await resp.json());
  }

  async getExecutionHistory(
    {abortSignal, ...params}: RequestConfig & s.GetExecutionHistoryInput,
  ): Promise<s.GetExecutionHistoryOutput> {
    const body: jsonP.JSONObject = {
      executionArn: params["executionArn"],
      maxResults: params["maxResults"],
      reverseOrder: params["reverseOrder"],
      nextToken: params["nextToken"],
      includeExecutionData: params["includeExecutionData"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetExecutionHistory",
    });
    return jsonP.readObj({
      required: {
        "events": [toHistoryEvent],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listActivities(
    {abortSignal, ...params}: RequestConfig & s.ListActivitiesInput = {},
  ): Promise<s.ListActivitiesOutput> {
    const body: jsonP.JSONObject = {
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListActivities",
    });
    return jsonP.readObj({
      required: {
        "activities": [toActivityListItem],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listExecutions(
    {abortSignal, ...params}: RequestConfig & s.ListExecutionsInput,
  ): Promise<s.ListExecutionsOutput> {
    const body: jsonP.JSONObject = {
      stateMachineArn: params["stateMachineArn"],
      statusFilter: params["statusFilter"],
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListExecutions",
    });
    return jsonP.readObj({
      required: {
        "executions": [toExecutionListItem],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listStateMachines(
    {abortSignal, ...params}: RequestConfig & s.ListStateMachinesInput = {},
  ): Promise<s.ListStateMachinesOutput> {
    const body: jsonP.JSONObject = {
      maxResults: params["maxResults"],
      nextToken: params["nextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListStateMachines",
    });
    return jsonP.readObj({
      required: {
        "stateMachines": [toStateMachineListItem],
      },
      optional: {
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceInput,
  ): Promise<s.ListTagsForResourceOutput> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": [toTag],
      },
    }, await resp.json());
  }

  async sendTaskFailure(
    {abortSignal, ...params}: RequestConfig & s.SendTaskFailureInput,
  ): Promise<s.SendTaskFailureOutput> {
    const body: jsonP.JSONObject = {
      taskToken: params["taskToken"],
      error: params["error"],
      cause: params["cause"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendTaskFailure",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async sendTaskHeartbeat(
    {abortSignal, ...params}: RequestConfig & s.SendTaskHeartbeatInput,
  ): Promise<s.SendTaskHeartbeatOutput> {
    const body: jsonP.JSONObject = {
      taskToken: params["taskToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendTaskHeartbeat",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async sendTaskSuccess(
    {abortSignal, ...params}: RequestConfig & s.SendTaskSuccessInput,
  ): Promise<s.SendTaskSuccessOutput> {
    const body: jsonP.JSONObject = {
      taskToken: params["taskToken"],
      output: params["output"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendTaskSuccess",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async startExecution(
    {abortSignal, ...params}: RequestConfig & s.StartExecutionInput,
  ): Promise<s.StartExecutionOutput> {
    const body: jsonP.JSONObject = {
      stateMachineArn: params["stateMachineArn"],
      name: params["name"],
      input: params["input"],
      traceHeader: params["traceHeader"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartExecution",
    });
    return jsonP.readObj({
      required: {
        "executionArn": "s",
        "startDate": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async startSyncExecution(
    {abortSignal, ...params}: RequestConfig & s.StartSyncExecutionInput,
  ): Promise<s.StartSyncExecutionOutput> {
    const body: jsonP.JSONObject = {
      stateMachineArn: params["stateMachineArn"],
      name: params["name"],
      input: params["input"],
      traceHeader: params["traceHeader"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartSyncExecution",
      hostPrefix: `sync-`,
    });
    return jsonP.readObj({
      required: {
        "executionArn": "s",
        "startDate": "d",
        "stopDate": "d",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SyncExecutionStatus>(x),
      },
      optional: {
        "stateMachineArn": "s",
        "name": "s",
        "error": "s",
        "cause": "s",
        "input": "s",
        "inputDetails": toCloudWatchEventsExecutionDataDetails,
        "output": "s",
        "outputDetails": toCloudWatchEventsExecutionDataDetails,
        "traceHeader": "s",
        "billingDetails": toBillingDetails,
      },
    }, await resp.json());
  }

  async stopExecution(
    {abortSignal, ...params}: RequestConfig & s.StopExecutionInput,
  ): Promise<s.StopExecutionOutput> {
    const body: jsonP.JSONObject = {
      executionArn: params["executionArn"],
      error: params["error"],
      cause: params["cause"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StopExecution",
    });
    return jsonP.readObj({
      required: {
        "stopDate": "d",
      },
      optional: {},
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceInput,
  ): Promise<s.TagResourceOutput> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      tags: params["tags"]?.map(x => fromTag(x)),
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
    {abortSignal, ...params}: RequestConfig & s.UntagResourceInput,
  ): Promise<s.UntagResourceOutput> {
    const body: jsonP.JSONObject = {
      resourceArn: params["resourceArn"],
      tagKeys: params["tagKeys"],
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

  async updateStateMachine(
    {abortSignal, ...params}: RequestConfig & s.UpdateStateMachineInput,
  ): Promise<s.UpdateStateMachineOutput> {
    const body: jsonP.JSONObject = {
      stateMachineArn: params["stateMachineArn"],
      definition: params["definition"],
      roleArn: params["roleArn"],
      loggingConfiguration: fromLoggingConfiguration(params["loggingConfiguration"]),
      tracingConfiguration: fromTracingConfiguration(params["tracingConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateStateMachine",
    });
    return jsonP.readObj({
      required: {
        "updateDate": "d",
      },
      optional: {},
    }, await resp.json());
  }

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
    required: {},
    optional: {
      "key": "s",
      "value": "s",
    },
  }, root);
}

function fromLoggingConfiguration(input?: s.LoggingConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    level: input["level"],
    includeExecutionData: input["includeExecutionData"],
    destinations: input["destinations"]?.map(x => fromLogDestination(x)),
  }
}
function toLoggingConfiguration(root: jsonP.JSONValue): s.LoggingConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "level": (x: jsonP.JSONValue) => cmnP.readEnum<s.LogLevel>(x),
      "includeExecutionData": "b",
      "destinations": [toLogDestination],
    },
  }, root);
}

function fromLogDestination(input?: s.LogDestination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    cloudWatchLogsLogGroup: fromCloudWatchLogsLogGroup(input["cloudWatchLogsLogGroup"]),
  }
}
function toLogDestination(root: jsonP.JSONValue): s.LogDestination {
  return jsonP.readObj({
    required: {},
    optional: {
      "cloudWatchLogsLogGroup": toCloudWatchLogsLogGroup,
    },
  }, root);
}

function fromCloudWatchLogsLogGroup(input?: s.CloudWatchLogsLogGroup | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    logGroupArn: input["logGroupArn"],
  }
}
function toCloudWatchLogsLogGroup(root: jsonP.JSONValue): s.CloudWatchLogsLogGroup {
  return jsonP.readObj({
    required: {},
    optional: {
      "logGroupArn": "s",
    },
  }, root);
}

function fromTracingConfiguration(input?: s.TracingConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    enabled: input["enabled"],
  }
}
function toTracingConfiguration(root: jsonP.JSONValue): s.TracingConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "enabled": "b",
    },
  }, root);
}

function toCloudWatchEventsExecutionDataDetails(root: jsonP.JSONValue): s.CloudWatchEventsExecutionDataDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "included": "b",
    },
  }, root);
}

function toHistoryEvent(root: jsonP.JSONValue): s.HistoryEvent {
  return jsonP.readObj({
    required: {
      "timestamp": "d",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.HistoryEventType>(x),
      "id": "n",
    },
    optional: {
      "previousEventId": "n",
      "activityFailedEventDetails": toActivityFailedEventDetails,
      "activityScheduleFailedEventDetails": toActivityScheduleFailedEventDetails,
      "activityScheduledEventDetails": toActivityScheduledEventDetails,
      "activityStartedEventDetails": toActivityStartedEventDetails,
      "activitySucceededEventDetails": toActivitySucceededEventDetails,
      "activityTimedOutEventDetails": toActivityTimedOutEventDetails,
      "taskFailedEventDetails": toTaskFailedEventDetails,
      "taskScheduledEventDetails": toTaskScheduledEventDetails,
      "taskStartFailedEventDetails": toTaskStartFailedEventDetails,
      "taskStartedEventDetails": toTaskStartedEventDetails,
      "taskSubmitFailedEventDetails": toTaskSubmitFailedEventDetails,
      "taskSubmittedEventDetails": toTaskSubmittedEventDetails,
      "taskSucceededEventDetails": toTaskSucceededEventDetails,
      "taskTimedOutEventDetails": toTaskTimedOutEventDetails,
      "executionFailedEventDetails": toExecutionFailedEventDetails,
      "executionStartedEventDetails": toExecutionStartedEventDetails,
      "executionSucceededEventDetails": toExecutionSucceededEventDetails,
      "executionAbortedEventDetails": toExecutionAbortedEventDetails,
      "executionTimedOutEventDetails": toExecutionTimedOutEventDetails,
      "mapStateStartedEventDetails": toMapStateStartedEventDetails,
      "mapIterationStartedEventDetails": toMapIterationEventDetails,
      "mapIterationSucceededEventDetails": toMapIterationEventDetails,
      "mapIterationFailedEventDetails": toMapIterationEventDetails,
      "mapIterationAbortedEventDetails": toMapIterationEventDetails,
      "lambdaFunctionFailedEventDetails": toLambdaFunctionFailedEventDetails,
      "lambdaFunctionScheduleFailedEventDetails": toLambdaFunctionScheduleFailedEventDetails,
      "lambdaFunctionScheduledEventDetails": toLambdaFunctionScheduledEventDetails,
      "lambdaFunctionStartFailedEventDetails": toLambdaFunctionStartFailedEventDetails,
      "lambdaFunctionSucceededEventDetails": toLambdaFunctionSucceededEventDetails,
      "lambdaFunctionTimedOutEventDetails": toLambdaFunctionTimedOutEventDetails,
      "stateEnteredEventDetails": toStateEnteredEventDetails,
      "stateExitedEventDetails": toStateExitedEventDetails,
    },
  }, root);
}

function toActivityFailedEventDetails(root: jsonP.JSONValue): s.ActivityFailedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toActivityScheduleFailedEventDetails(root: jsonP.JSONValue): s.ActivityScheduleFailedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toActivityScheduledEventDetails(root: jsonP.JSONValue): s.ActivityScheduledEventDetails {
  return jsonP.readObj({
    required: {
      "resource": "s",
    },
    optional: {
      "input": "s",
      "inputDetails": toHistoryEventExecutionDataDetails,
      "timeoutInSeconds": "n",
      "heartbeatInSeconds": "n",
    },
  }, root);
}

function toHistoryEventExecutionDataDetails(root: jsonP.JSONValue): s.HistoryEventExecutionDataDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "truncated": "b",
    },
  }, root);
}

function toActivityStartedEventDetails(root: jsonP.JSONValue): s.ActivityStartedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "workerName": "s",
    },
  }, root);
}

function toActivitySucceededEventDetails(root: jsonP.JSONValue): s.ActivitySucceededEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "output": "s",
      "outputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toActivityTimedOutEventDetails(root: jsonP.JSONValue): s.ActivityTimedOutEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toTaskFailedEventDetails(root: jsonP.JSONValue): s.TaskFailedEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toTaskScheduledEventDetails(root: jsonP.JSONValue): s.TaskScheduledEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
      "region": "s",
      "parameters": "s",
    },
    optional: {
      "timeoutInSeconds": "n",
      "heartbeatInSeconds": "n",
    },
  }, root);
}

function toTaskStartFailedEventDetails(root: jsonP.JSONValue): s.TaskStartFailedEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toTaskStartedEventDetails(root: jsonP.JSONValue): s.TaskStartedEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {},
  }, root);
}

function toTaskSubmitFailedEventDetails(root: jsonP.JSONValue): s.TaskSubmitFailedEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toTaskSubmittedEventDetails(root: jsonP.JSONValue): s.TaskSubmittedEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {
      "output": "s",
      "outputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toTaskSucceededEventDetails(root: jsonP.JSONValue): s.TaskSucceededEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {
      "output": "s",
      "outputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toTaskTimedOutEventDetails(root: jsonP.JSONValue): s.TaskTimedOutEventDetails {
  return jsonP.readObj({
    required: {
      "resourceType": "s",
      "resource": "s",
    },
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toExecutionFailedEventDetails(root: jsonP.JSONValue): s.ExecutionFailedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toExecutionStartedEventDetails(root: jsonP.JSONValue): s.ExecutionStartedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "input": "s",
      "inputDetails": toHistoryEventExecutionDataDetails,
      "roleArn": "s",
    },
  }, root);
}

function toExecutionSucceededEventDetails(root: jsonP.JSONValue): s.ExecutionSucceededEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "output": "s",
      "outputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toExecutionAbortedEventDetails(root: jsonP.JSONValue): s.ExecutionAbortedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toExecutionTimedOutEventDetails(root: jsonP.JSONValue): s.ExecutionTimedOutEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toMapStateStartedEventDetails(root: jsonP.JSONValue): s.MapStateStartedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "length": "n",
    },
  }, root);
}

function toMapIterationEventDetails(root: jsonP.JSONValue): s.MapIterationEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "index": "n",
    },
  }, root);
}

function toLambdaFunctionFailedEventDetails(root: jsonP.JSONValue): s.LambdaFunctionFailedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toLambdaFunctionScheduleFailedEventDetails(root: jsonP.JSONValue): s.LambdaFunctionScheduleFailedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toLambdaFunctionScheduledEventDetails(root: jsonP.JSONValue): s.LambdaFunctionScheduledEventDetails {
  return jsonP.readObj({
    required: {
      "resource": "s",
    },
    optional: {
      "input": "s",
      "inputDetails": toHistoryEventExecutionDataDetails,
      "timeoutInSeconds": "n",
    },
  }, root);
}

function toLambdaFunctionStartFailedEventDetails(root: jsonP.JSONValue): s.LambdaFunctionStartFailedEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toLambdaFunctionSucceededEventDetails(root: jsonP.JSONValue): s.LambdaFunctionSucceededEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "output": "s",
      "outputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toLambdaFunctionTimedOutEventDetails(root: jsonP.JSONValue): s.LambdaFunctionTimedOutEventDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "error": "s",
      "cause": "s",
    },
  }, root);
}

function toStateEnteredEventDetails(root: jsonP.JSONValue): s.StateEnteredEventDetails {
  return jsonP.readObj({
    required: {
      "name": "s",
    },
    optional: {
      "input": "s",
      "inputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toStateExitedEventDetails(root: jsonP.JSONValue): s.StateExitedEventDetails {
  return jsonP.readObj({
    required: {
      "name": "s",
    },
    optional: {
      "output": "s",
      "outputDetails": toHistoryEventExecutionDataDetails,
    },
  }, root);
}

function toActivityListItem(root: jsonP.JSONValue): s.ActivityListItem {
  return jsonP.readObj({
    required: {
      "activityArn": "s",
      "name": "s",
      "creationDate": "d",
    },
    optional: {},
  }, root);
}

function toExecutionListItem(root: jsonP.JSONValue): s.ExecutionListItem {
  return jsonP.readObj({
    required: {
      "executionArn": "s",
      "stateMachineArn": "s",
      "name": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ExecutionStatus>(x),
      "startDate": "d",
    },
    optional: {
      "stopDate": "d",
    },
  }, root);
}

function toStateMachineListItem(root: jsonP.JSONValue): s.StateMachineListItem {
  return jsonP.readObj({
    required: {
      "stateMachineArn": "s",
      "name": "s",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.StateMachineType>(x),
      "creationDate": "d",
    },
    optional: {},
  }, root);
}

function toBillingDetails(root: jsonP.JSONValue): s.BillingDetails {
  return jsonP.readObj({
    required: {},
    optional: {
      "billedMemoryUsedInMB": "n",
      "billedDurationInMilliseconds": "n",
    },
  }, root);
}
