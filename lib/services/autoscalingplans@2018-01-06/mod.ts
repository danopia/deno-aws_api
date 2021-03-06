// Autogenerated API client for: AWS Auto Scaling Plans

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class AutoScalingPlans {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(AutoScalingPlans.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-01-06",
    "endpointPrefix": "autoscaling-plans",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Auto Scaling Plans",
    "serviceId": "Auto Scaling Plans",
    "signatureVersion": "v4",
    "signingName": "autoscaling-plans",
    "targetPrefix": "AnyScaleScalingPlannerFrontendService",
    "uid": "autoscaling-plans-2018-01-06"
  };

  async createScalingPlan(
    {abortSignal, ...params}: RequestConfig & s.CreateScalingPlanRequest,
  ): Promise<s.CreateScalingPlanResponse> {
    const body: jsonP.JSONObject = {
      ScalingPlanName: params["ScalingPlanName"],
      ApplicationSource: fromApplicationSource(params["ApplicationSource"]),
      ScalingInstructions: params["ScalingInstructions"]?.map(x => fromScalingInstruction(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateScalingPlan",
    });
    return jsonP.readObj({
      required: {
        "ScalingPlanVersion": "n",
      },
      optional: {},
    }, await resp.json());
  }

  async deleteScalingPlan(
    {abortSignal, ...params}: RequestConfig & s.DeleteScalingPlanRequest,
  ): Promise<s.DeleteScalingPlanResponse> {
    const body: jsonP.JSONObject = {
      ScalingPlanName: params["ScalingPlanName"],
      ScalingPlanVersion: params["ScalingPlanVersion"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteScalingPlan",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeScalingPlanResources(
    {abortSignal, ...params}: RequestConfig & s.DescribeScalingPlanResourcesRequest,
  ): Promise<s.DescribeScalingPlanResourcesResponse> {
    const body: jsonP.JSONObject = {
      ScalingPlanName: params["ScalingPlanName"],
      ScalingPlanVersion: params["ScalingPlanVersion"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalingPlanResources",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ScalingPlanResources": [toScalingPlanResource],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeScalingPlans(
    {abortSignal, ...params}: RequestConfig & s.DescribeScalingPlansRequest = {},
  ): Promise<s.DescribeScalingPlansResponse> {
    const body: jsonP.JSONObject = {
      ScalingPlanNames: params["ScalingPlanNames"],
      ScalingPlanVersion: params["ScalingPlanVersion"],
      ApplicationSources: params["ApplicationSources"]?.map(x => fromApplicationSource(x)),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalingPlans",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ScalingPlans": [toScalingPlan],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getScalingPlanResourceForecastData(
    {abortSignal, ...params}: RequestConfig & s.GetScalingPlanResourceForecastDataRequest,
  ): Promise<s.GetScalingPlanResourceForecastDataResponse> {
    const body: jsonP.JSONObject = {
      ScalingPlanName: params["ScalingPlanName"],
      ScalingPlanVersion: params["ScalingPlanVersion"],
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      ForecastDataType: params["ForecastDataType"],
      StartTime: jsonP.serializeDate_unixTimestamp(params["StartTime"]),
      EndTime: jsonP.serializeDate_unixTimestamp(params["EndTime"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetScalingPlanResourceForecastData",
    });
    return jsonP.readObj({
      required: {
        "Datapoints": [toDatapoint],
      },
      optional: {},
    }, await resp.json());
  }

  async updateScalingPlan(
    {abortSignal, ...params}: RequestConfig & s.UpdateScalingPlanRequest,
  ): Promise<s.UpdateScalingPlanResponse> {
    const body: jsonP.JSONObject = {
      ScalingPlanName: params["ScalingPlanName"],
      ScalingPlanVersion: params["ScalingPlanVersion"],
      ApplicationSource: fromApplicationSource(params["ApplicationSource"]),
      ScalingInstructions: params["ScalingInstructions"]?.map(x => fromScalingInstruction(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateScalingPlan",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

function fromApplicationSource(input?: s.ApplicationSource | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    CloudFormationStackARN: input["CloudFormationStackARN"],
    TagFilters: input["TagFilters"]?.map(x => fromTagFilter(x)),
  }
}
function toApplicationSource(root: jsonP.JSONValue): s.ApplicationSource {
  return jsonP.readObj({
    required: {},
    optional: {
      "CloudFormationStackARN": "s",
      "TagFilters": [toTagFilter],
    },
  }, root);
}

function fromTagFilter(input?: s.TagFilter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Values: input["Values"],
  }
}
function toTagFilter(root: jsonP.JSONValue): s.TagFilter {
  return jsonP.readObj({
    required: {},
    optional: {
      "Key": "s",
      "Values": ["s"],
    },
  }, root);
}

function fromScalingInstruction(input?: s.ScalingInstruction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    ServiceNamespace: input["ServiceNamespace"],
    ResourceId: input["ResourceId"],
    ScalableDimension: input["ScalableDimension"],
    MinCapacity: input["MinCapacity"],
    MaxCapacity: input["MaxCapacity"],
    TargetTrackingConfigurations: input["TargetTrackingConfigurations"]?.map(x => fromTargetTrackingConfiguration(x)),
    PredefinedLoadMetricSpecification: fromPredefinedLoadMetricSpecification(input["PredefinedLoadMetricSpecification"]),
    CustomizedLoadMetricSpecification: fromCustomizedLoadMetricSpecification(input["CustomizedLoadMetricSpecification"]),
    ScheduledActionBufferTime: input["ScheduledActionBufferTime"],
    PredictiveScalingMaxCapacityBehavior: input["PredictiveScalingMaxCapacityBehavior"],
    PredictiveScalingMaxCapacityBuffer: input["PredictiveScalingMaxCapacityBuffer"],
    PredictiveScalingMode: input["PredictiveScalingMode"],
    ScalingPolicyUpdateBehavior: input["ScalingPolicyUpdateBehavior"],
    DisableDynamicScaling: input["DisableDynamicScaling"],
  }
}
function toScalingInstruction(root: jsonP.JSONValue): s.ScalingInstruction {
  return jsonP.readObj({
    required: {
      "ServiceNamespace": (x: jsonP.JSONValue) => cmnP.readEnum<s.ServiceNamespace>(x),
      "ResourceId": "s",
      "ScalableDimension": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalableDimension>(x),
      "MinCapacity": "n",
      "MaxCapacity": "n",
      "TargetTrackingConfigurations": [toTargetTrackingConfiguration],
    },
    optional: {
      "PredefinedLoadMetricSpecification": toPredefinedLoadMetricSpecification,
      "CustomizedLoadMetricSpecification": toCustomizedLoadMetricSpecification,
      "ScheduledActionBufferTime": "n",
      "PredictiveScalingMaxCapacityBehavior": (x: jsonP.JSONValue) => cmnP.readEnum<s.PredictiveScalingMaxCapacityBehavior>(x),
      "PredictiveScalingMaxCapacityBuffer": "n",
      "PredictiveScalingMode": (x: jsonP.JSONValue) => cmnP.readEnum<s.PredictiveScalingMode>(x),
      "ScalingPolicyUpdateBehavior": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalingPolicyUpdateBehavior>(x),
      "DisableDynamicScaling": "b",
    },
  }, root);
}

function fromTargetTrackingConfiguration(input?: s.TargetTrackingConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PredefinedScalingMetricSpecification: fromPredefinedScalingMetricSpecification(input["PredefinedScalingMetricSpecification"]),
    CustomizedScalingMetricSpecification: fromCustomizedScalingMetricSpecification(input["CustomizedScalingMetricSpecification"]),
    TargetValue: input["TargetValue"],
    DisableScaleIn: input["DisableScaleIn"],
    ScaleOutCooldown: input["ScaleOutCooldown"],
    ScaleInCooldown: input["ScaleInCooldown"],
    EstimatedInstanceWarmup: input["EstimatedInstanceWarmup"],
  }
}
function toTargetTrackingConfiguration(root: jsonP.JSONValue): s.TargetTrackingConfiguration {
  return jsonP.readObj({
    required: {
      "TargetValue": "n",
    },
    optional: {
      "PredefinedScalingMetricSpecification": toPredefinedScalingMetricSpecification,
      "CustomizedScalingMetricSpecification": toCustomizedScalingMetricSpecification,
      "DisableScaleIn": "b",
      "ScaleOutCooldown": "n",
      "ScaleInCooldown": "n",
      "EstimatedInstanceWarmup": "n",
    },
  }, root);
}

function fromPredefinedScalingMetricSpecification(input?: s.PredefinedScalingMetricSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PredefinedScalingMetricType: input["PredefinedScalingMetricType"],
    ResourceLabel: input["ResourceLabel"],
  }
}
function toPredefinedScalingMetricSpecification(root: jsonP.JSONValue): s.PredefinedScalingMetricSpecification {
  return jsonP.readObj({
    required: {
      "PredefinedScalingMetricType": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalingMetricType>(x),
    },
    optional: {
      "ResourceLabel": "s",
    },
  }, root);
}

function fromCustomizedScalingMetricSpecification(input?: s.CustomizedScalingMetricSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MetricName: input["MetricName"],
    Namespace: input["Namespace"],
    Dimensions: input["Dimensions"]?.map(x => fromMetricDimension(x)),
    Statistic: input["Statistic"],
    Unit: input["Unit"],
  }
}
function toCustomizedScalingMetricSpecification(root: jsonP.JSONValue): s.CustomizedScalingMetricSpecification {
  return jsonP.readObj({
    required: {
      "MetricName": "s",
      "Namespace": "s",
      "Statistic": (x: jsonP.JSONValue) => cmnP.readEnum<s.MetricStatistic>(x),
    },
    optional: {
      "Dimensions": [toMetricDimension],
      "Unit": "s",
    },
  }, root);
}

function fromMetricDimension(input?: s.MetricDimension | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Value: input["Value"],
  }
}
function toMetricDimension(root: jsonP.JSONValue): s.MetricDimension {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromPredefinedLoadMetricSpecification(input?: s.PredefinedLoadMetricSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PredefinedLoadMetricType: input["PredefinedLoadMetricType"],
    ResourceLabel: input["ResourceLabel"],
  }
}
function toPredefinedLoadMetricSpecification(root: jsonP.JSONValue): s.PredefinedLoadMetricSpecification {
  return jsonP.readObj({
    required: {
      "PredefinedLoadMetricType": (x: jsonP.JSONValue) => cmnP.readEnum<s.LoadMetricType>(x),
    },
    optional: {
      "ResourceLabel": "s",
    },
  }, root);
}

function fromCustomizedLoadMetricSpecification(input?: s.CustomizedLoadMetricSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MetricName: input["MetricName"],
    Namespace: input["Namespace"],
    Dimensions: input["Dimensions"]?.map(x => fromMetricDimension(x)),
    Statistic: input["Statistic"],
    Unit: input["Unit"],
  }
}
function toCustomizedLoadMetricSpecification(root: jsonP.JSONValue): s.CustomizedLoadMetricSpecification {
  return jsonP.readObj({
    required: {
      "MetricName": "s",
      "Namespace": "s",
      "Statistic": (x: jsonP.JSONValue) => cmnP.readEnum<s.MetricStatistic>(x),
    },
    optional: {
      "Dimensions": [toMetricDimension],
      "Unit": "s",
    },
  }, root);
}

function toScalingPlanResource(root: jsonP.JSONValue): s.ScalingPlanResource {
  return jsonP.readObj({
    required: {
      "ScalingPlanName": "s",
      "ScalingPlanVersion": "n",
      "ServiceNamespace": (x: jsonP.JSONValue) => cmnP.readEnum<s.ServiceNamespace>(x),
      "ResourceId": "s",
      "ScalableDimension": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalableDimension>(x),
      "ScalingStatusCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalingStatusCode>(x),
    },
    optional: {
      "ScalingPolicies": [toScalingPolicy],
      "ScalingStatusMessage": "s",
    },
  }, root);
}

function toScalingPolicy(root: jsonP.JSONValue): s.ScalingPolicy {
  return jsonP.readObj({
    required: {
      "PolicyName": "s",
      "PolicyType": (x: jsonP.JSONValue) => cmnP.readEnum<s.PolicyType>(x),
    },
    optional: {
      "TargetTrackingConfiguration": toTargetTrackingConfiguration,
    },
  }, root);
}

function toScalingPlan(root: jsonP.JSONValue): s.ScalingPlan {
  return jsonP.readObj({
    required: {
      "ScalingPlanName": "s",
      "ScalingPlanVersion": "n",
      "ApplicationSource": toApplicationSource,
      "ScalingInstructions": [toScalingInstruction],
      "StatusCode": (x: jsonP.JSONValue) => cmnP.readEnum<s.ScalingPlanStatusCode>(x),
    },
    optional: {
      "StatusMessage": "s",
      "StatusStartTime": "d",
      "CreationTime": "d",
    },
  }, root);
}

function toDatapoint(root: jsonP.JSONValue): s.Datapoint {
  return jsonP.readObj({
    required: {},
    optional: {
      "Timestamp": "d",
      "Value": "n",
    },
  }, root);
}
