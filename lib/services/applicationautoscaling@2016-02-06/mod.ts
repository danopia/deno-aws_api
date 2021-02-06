// Autogenerated API client for: Application Auto Scaling

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class ApplicationAutoScaling {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(ApplicationAutoScaling.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2016-02-06",
    "endpointPrefix": "application-autoscaling",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "Application Auto Scaling",
    "serviceId": "Application Auto Scaling",
    "signatureVersion": "v4",
    "signingName": "application-autoscaling",
    "targetPrefix": "AnyScaleFrontendService",
    "uid": "application-autoscaling-2016-02-06"
  };

  async deleteScalingPolicy(
    {abortSignal, ...params}: RequestConfig & DeleteScalingPolicyRequest,
  ): Promise<DeleteScalingPolicyResponse> {
    const body: jsonP.JSONObject = {
      PolicyName: params["PolicyName"],
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteScalingPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deleteScheduledAction(
    {abortSignal, ...params}: RequestConfig & DeleteScheduledActionRequest,
  ): Promise<DeleteScheduledActionResponse> {
    const body: jsonP.JSONObject = {
      ServiceNamespace: params["ServiceNamespace"],
      ScheduledActionName: params["ScheduledActionName"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteScheduledAction",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async deregisterScalableTarget(
    {abortSignal, ...params}: RequestConfig & DeregisterScalableTargetRequest,
  ): Promise<DeregisterScalableTargetResponse> {
    const body: jsonP.JSONObject = {
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeregisterScalableTarget",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async describeScalableTargets(
    {abortSignal, ...params}: RequestConfig & DescribeScalableTargetsRequest,
  ): Promise<DescribeScalableTargetsResponse> {
    const body: jsonP.JSONObject = {
      ServiceNamespace: params["ServiceNamespace"],
      ResourceIds: params["ResourceIds"],
      ScalableDimension: params["ScalableDimension"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalableTargets",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ScalableTargets": [toScalableTarget],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeScalingActivities(
    {abortSignal, ...params}: RequestConfig & DescribeScalingActivitiesRequest,
  ): Promise<DescribeScalingActivitiesResponse> {
    const body: jsonP.JSONObject = {
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalingActivities",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ScalingActivities": [toScalingActivity],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeScalingPolicies(
    {abortSignal, ...params}: RequestConfig & DescribeScalingPoliciesRequest,
  ): Promise<DescribeScalingPoliciesResponse> {
    const body: jsonP.JSONObject = {
      PolicyNames: params["PolicyNames"],
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScalingPolicies",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ScalingPolicies": [toScalingPolicy],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async describeScheduledActions(
    {abortSignal, ...params}: RequestConfig & DescribeScheduledActionsRequest,
  ): Promise<DescribeScheduledActionsResponse> {
    const body: jsonP.JSONObject = {
      ScheduledActionNames: params["ScheduledActionNames"],
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeScheduledActions",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ScheduledActions": [toScheduledAction],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putScalingPolicy(
    {abortSignal, ...params}: RequestConfig & PutScalingPolicyRequest,
  ): Promise<PutScalingPolicyResponse> {
    const body: jsonP.JSONObject = {
      PolicyName: params["PolicyName"],
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      PolicyType: params["PolicyType"],
      StepScalingPolicyConfiguration: fromStepScalingPolicyConfiguration(params["StepScalingPolicyConfiguration"]),
      TargetTrackingScalingPolicyConfiguration: fromTargetTrackingScalingPolicyConfiguration(params["TargetTrackingScalingPolicyConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutScalingPolicy",
    });
    return jsonP.readObj({
      required: {
        "PolicyARN": "s",
      },
      optional: {
        "Alarms": [toAlarm],
      },
    }, await resp.json());
  }

  async putScheduledAction(
    {abortSignal, ...params}: RequestConfig & PutScheduledActionRequest,
  ): Promise<PutScheduledActionResponse> {
    const body: jsonP.JSONObject = {
      ServiceNamespace: params["ServiceNamespace"],
      Schedule: params["Schedule"],
      Timezone: params["Timezone"],
      ScheduledActionName: params["ScheduledActionName"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      StartTime: jsonP.serializeDate_unixTimestamp(params["StartTime"]),
      EndTime: jsonP.serializeDate_unixTimestamp(params["EndTime"]),
      ScalableTargetAction: fromScalableTargetAction(params["ScalableTargetAction"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutScheduledAction",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async registerScalableTarget(
    {abortSignal, ...params}: RequestConfig & RegisterScalableTargetRequest,
  ): Promise<RegisterScalableTargetResponse> {
    const body: jsonP.JSONObject = {
      ServiceNamespace: params["ServiceNamespace"],
      ResourceId: params["ResourceId"],
      ScalableDimension: params["ScalableDimension"],
      MinCapacity: params["MinCapacity"],
      MaxCapacity: params["MaxCapacity"],
      RoleARN: params["RoleARN"],
      SuspendedState: fromSuspendedState(params["SuspendedState"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RegisterScalableTarget",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface DeleteScalingPolicyRequest {
  PolicyName: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
}

// refs: 1 - tags: named, input
export interface DeleteScheduledActionRequest {
  ServiceNamespace: ServiceNamespace;
  ScheduledActionName: string;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
}

// refs: 1 - tags: named, input
export interface DeregisterScalableTargetRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
}

// refs: 1 - tags: named, input
export interface DescribeScalableTargetsRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceIds?: string[] | null;
  ScalableDimension?: ScalableDimension | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeScalingActivitiesRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId?: string | null;
  ScalableDimension?: ScalableDimension | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeScalingPoliciesRequest {
  PolicyNames?: string[] | null;
  ServiceNamespace: ServiceNamespace;
  ResourceId?: string | null;
  ScalableDimension?: ScalableDimension | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DescribeScheduledActionsRequest {
  ScheduledActionNames?: string[] | null;
  ServiceNamespace: ServiceNamespace;
  ResourceId?: string | null;
  ScalableDimension?: ScalableDimension | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutScalingPolicyRequest {
  PolicyName: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  PolicyType?: PolicyType | null;
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | null;
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | null;
}

// refs: 1 - tags: named, input
export interface PutScheduledActionRequest {
  ServiceNamespace: ServiceNamespace;
  Schedule?: string | null;
  Timezone?: string | null;
  ScheduledActionName: string;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  ScalableTargetAction?: ScalableTargetAction | null;
}

// refs: 1 - tags: named, input
export interface RegisterScalableTargetRequest {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  MinCapacity?: number | null;
  MaxCapacity?: number | null;
  RoleARN?: string | null;
  SuspendedState?: SuspendedState | null;
}

// refs: 1 - tags: named, output
export interface DeleteScalingPolicyResponse {
}

// refs: 1 - tags: named, output
export interface DeleteScheduledActionResponse {
}

// refs: 1 - tags: named, output
export interface DeregisterScalableTargetResponse {
}

// refs: 1 - tags: named, output
export interface DescribeScalableTargetsResponse {
  ScalableTargets?: ScalableTarget[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeScalingActivitiesResponse {
  ScalingActivities?: ScalingActivity[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeScalingPoliciesResponse {
  ScalingPolicies?: ScalingPolicy[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeScheduledActionsResponse {
  ScheduledActions?: ScheduledAction[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutScalingPolicyResponse {
  PolicyARN: string;
  Alarms?: Alarm[] | null;
}

// refs: 1 - tags: named, output
export interface PutScheduledActionResponse {
}

// refs: 1 - tags: named, output
export interface RegisterScalableTargetResponse {
}

// refs: 14 - tags: input, named, enum, output
export type ServiceNamespace =
| "ecs"
| "elasticmapreduce"
| "ec2"
| "appstream"
| "dynamodb"
| "rds"
| "sagemaker"
| "custom-resource"
| "comprehend"
| "lambda"
| "cassandra"
| "kafka"
| cmnP.UnexpectedEnumValue;

// refs: 14 - tags: input, named, enum, output
export type ScalableDimension =
| "ecs:service:DesiredCount"
| "ec2:spot-fleet-request:TargetCapacity"
| "elasticmapreduce:instancegroup:InstanceCount"
| "appstream:fleet:DesiredCapacity"
| "dynamodb:table:ReadCapacityUnits"
| "dynamodb:table:WriteCapacityUnits"
| "dynamodb:index:ReadCapacityUnits"
| "dynamodb:index:WriteCapacityUnits"
| "rds:cluster:ReadReplicaCount"
| "sagemaker:variant:DesiredInstanceCount"
| "custom-resource:ResourceType:Property"
| "comprehend:document-classifier-endpoint:DesiredInferenceUnits"
| "comprehend:entity-recognizer-endpoint:DesiredInferenceUnits"
| "lambda:function:ProvisionedConcurrency"
| "cassandra:table:ReadCapacityUnits"
| "cassandra:table:WriteCapacityUnits"
| "kafka:broker-storage:VolumeSize"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type PolicyType =
| "StepScaling"
| "TargetTrackingScaling"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface StepScalingPolicyConfiguration {
  AdjustmentType?: AdjustmentType | null;
  StepAdjustments?: StepAdjustment[] | null;
  MinAdjustmentMagnitude?: number | null;
  Cooldown?: number | null;
  MetricAggregationType?: MetricAggregationType | null;
}
function fromStepScalingPolicyConfiguration(input?: StepScalingPolicyConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    AdjustmentType: input["AdjustmentType"],
    StepAdjustments: input["StepAdjustments"]?.map(x => fromStepAdjustment(x)),
    MinAdjustmentMagnitude: input["MinAdjustmentMagnitude"],
    Cooldown: input["Cooldown"],
    MetricAggregationType: input["MetricAggregationType"],
  }
}
function toStepScalingPolicyConfiguration(root: jsonP.JSONValue): StepScalingPolicyConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "AdjustmentType": (x: jsonP.JSONValue) => cmnP.readEnum<AdjustmentType>(x),
      "StepAdjustments": [toStepAdjustment],
      "MinAdjustmentMagnitude": "n",
      "Cooldown": "n",
      "MetricAggregationType": (x: jsonP.JSONValue) => cmnP.readEnum<MetricAggregationType>(x),
    },
  }, root);
}

// refs: 2 - tags: input, named, enum, output
export type AdjustmentType =
| "ChangeInCapacity"
| "PercentChangeInCapacity"
| "ExactCapacity"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface StepAdjustment {
  MetricIntervalLowerBound?: number | null;
  MetricIntervalUpperBound?: number | null;
  ScalingAdjustment: number;
}
function fromStepAdjustment(input?: StepAdjustment | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MetricIntervalLowerBound: input["MetricIntervalLowerBound"],
    MetricIntervalUpperBound: input["MetricIntervalUpperBound"],
    ScalingAdjustment: input["ScalingAdjustment"],
  }
}
function toStepAdjustment(root: jsonP.JSONValue): StepAdjustment {
  return jsonP.readObj({
    required: {
      "ScalingAdjustment": "n",
    },
    optional: {
      "MetricIntervalLowerBound": "n",
      "MetricIntervalUpperBound": "n",
    },
  }, root);
}

// refs: 2 - tags: input, named, enum, output
export type MetricAggregationType =
| "Average"
| "Minimum"
| "Maximum"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface TargetTrackingScalingPolicyConfiguration {
  TargetValue: number;
  PredefinedMetricSpecification?: PredefinedMetricSpecification | null;
  CustomizedMetricSpecification?: CustomizedMetricSpecification | null;
  ScaleOutCooldown?: number | null;
  ScaleInCooldown?: number | null;
  DisableScaleIn?: boolean | null;
}
function fromTargetTrackingScalingPolicyConfiguration(input?: TargetTrackingScalingPolicyConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    TargetValue: input["TargetValue"],
    PredefinedMetricSpecification: fromPredefinedMetricSpecification(input["PredefinedMetricSpecification"]),
    CustomizedMetricSpecification: fromCustomizedMetricSpecification(input["CustomizedMetricSpecification"]),
    ScaleOutCooldown: input["ScaleOutCooldown"],
    ScaleInCooldown: input["ScaleInCooldown"],
    DisableScaleIn: input["DisableScaleIn"],
  }
}
function toTargetTrackingScalingPolicyConfiguration(root: jsonP.JSONValue): TargetTrackingScalingPolicyConfiguration {
  return jsonP.readObj({
    required: {
      "TargetValue": "n",
    },
    optional: {
      "PredefinedMetricSpecification": toPredefinedMetricSpecification,
      "CustomizedMetricSpecification": toCustomizedMetricSpecification,
      "ScaleOutCooldown": "n",
      "ScaleInCooldown": "n",
      "DisableScaleIn": "b",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface PredefinedMetricSpecification {
  PredefinedMetricType: MetricType;
  ResourceLabel?: string | null;
}
function fromPredefinedMetricSpecification(input?: PredefinedMetricSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    PredefinedMetricType: input["PredefinedMetricType"],
    ResourceLabel: input["ResourceLabel"],
  }
}
function toPredefinedMetricSpecification(root: jsonP.JSONValue): PredefinedMetricSpecification {
  return jsonP.readObj({
    required: {
      "PredefinedMetricType": (x: jsonP.JSONValue) => cmnP.readEnum<MetricType>(x),
    },
    optional: {
      "ResourceLabel": "s",
    },
  }, root);
}

// refs: 2 - tags: input, named, enum, output
export type MetricType =
| "DynamoDBReadCapacityUtilization"
| "DynamoDBWriteCapacityUtilization"
| "ALBRequestCountPerTarget"
| "RDSReaderAverageCPUUtilization"
| "RDSReaderAverageDatabaseConnections"
| "EC2SpotFleetRequestAverageCPUUtilization"
| "EC2SpotFleetRequestAverageNetworkIn"
| "EC2SpotFleetRequestAverageNetworkOut"
| "SageMakerVariantInvocationsPerInstance"
| "ECSServiceAverageCPUUtilization"
| "ECSServiceAverageMemoryUtilization"
| "AppStreamAverageCapacityUtilization"
| "ComprehendInferenceUtilization"
| "LambdaProvisionedConcurrencyUtilization"
| "CassandraReadCapacityUtilization"
| "CassandraWriteCapacityUtilization"
| "KafkaBrokerStorageUtilization"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface CustomizedMetricSpecification {
  MetricName: string;
  Namespace: string;
  Dimensions?: MetricDimension[] | null;
  Statistic: MetricStatistic;
  Unit?: string | null;
}
function fromCustomizedMetricSpecification(input?: CustomizedMetricSpecification | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MetricName: input["MetricName"],
    Namespace: input["Namespace"],
    Dimensions: input["Dimensions"]?.map(x => fromMetricDimension(x)),
    Statistic: input["Statistic"],
    Unit: input["Unit"],
  }
}
function toCustomizedMetricSpecification(root: jsonP.JSONValue): CustomizedMetricSpecification {
  return jsonP.readObj({
    required: {
      "MetricName": "s",
      "Namespace": "s",
      "Statistic": (x: jsonP.JSONValue) => cmnP.readEnum<MetricStatistic>(x),
    },
    optional: {
      "Dimensions": [toMetricDimension],
      "Unit": "s",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface MetricDimension {
  Name: string;
  Value: string;
}
function fromMetricDimension(input?: MetricDimension | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Value: input["Value"],
  }
}
function toMetricDimension(root: jsonP.JSONValue): MetricDimension {
  return jsonP.readObj({
    required: {
      "Name": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

// refs: 2 - tags: input, named, enum, output
export type MetricStatistic =
| "Average"
| "Minimum"
| "Maximum"
| "SampleCount"
| "Sum"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface ScalableTargetAction {
  MinCapacity?: number | null;
  MaxCapacity?: number | null;
}
function fromScalableTargetAction(input?: ScalableTargetAction | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    MinCapacity: input["MinCapacity"],
    MaxCapacity: input["MaxCapacity"],
  }
}
function toScalableTargetAction(root: jsonP.JSONValue): ScalableTargetAction {
  return jsonP.readObj({
    required: {},
    optional: {
      "MinCapacity": "n",
      "MaxCapacity": "n",
    },
  }, root);
}

// refs: 2 - tags: input, named, interface, output
export interface SuspendedState {
  DynamicScalingInSuspended?: boolean | null;
  DynamicScalingOutSuspended?: boolean | null;
  ScheduledScalingSuspended?: boolean | null;
}
function fromSuspendedState(input?: SuspendedState | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    DynamicScalingInSuspended: input["DynamicScalingInSuspended"],
    DynamicScalingOutSuspended: input["DynamicScalingOutSuspended"],
    ScheduledScalingSuspended: input["ScheduledScalingSuspended"],
  }
}
function toSuspendedState(root: jsonP.JSONValue): SuspendedState {
  return jsonP.readObj({
    required: {},
    optional: {
      "DynamicScalingInSuspended": "b",
      "DynamicScalingOutSuspended": "b",
      "ScheduledScalingSuspended": "b",
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ScalableTarget {
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  MinCapacity: number;
  MaxCapacity: number;
  RoleARN: string;
  CreationTime: Date | number;
  SuspendedState?: SuspendedState | null;
}
function toScalableTarget(root: jsonP.JSONValue): ScalableTarget {
  return jsonP.readObj({
    required: {
      "ServiceNamespace": (x: jsonP.JSONValue) => cmnP.readEnum<ServiceNamespace>(x),
      "ResourceId": "s",
      "ScalableDimension": (x: jsonP.JSONValue) => cmnP.readEnum<ScalableDimension>(x),
      "MinCapacity": "n",
      "MaxCapacity": "n",
      "RoleARN": "s",
      "CreationTime": "d",
    },
    optional: {
      "SuspendedState": toSuspendedState,
    },
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ScalingActivity {
  ActivityId: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  Description: string;
  Cause: string;
  StartTime: Date | number;
  EndTime?: Date | number | null;
  StatusCode: ScalingActivityStatusCode;
  StatusMessage?: string | null;
  Details?: string | null;
}
function toScalingActivity(root: jsonP.JSONValue): ScalingActivity {
  return jsonP.readObj({
    required: {
      "ActivityId": "s",
      "ServiceNamespace": (x: jsonP.JSONValue) => cmnP.readEnum<ServiceNamespace>(x),
      "ResourceId": "s",
      "ScalableDimension": (x: jsonP.JSONValue) => cmnP.readEnum<ScalableDimension>(x),
      "Description": "s",
      "Cause": "s",
      "StartTime": "d",
      "StatusCode": (x: jsonP.JSONValue) => cmnP.readEnum<ScalingActivityStatusCode>(x),
    },
    optional: {
      "EndTime": "d",
      "StatusMessage": "s",
      "Details": "s",
    },
  }, root);
}

// refs: 1 - tags: output, named, enum
export type ScalingActivityStatusCode =
| "Pending"
| "InProgress"
| "Successful"
| "Overridden"
| "Unfulfilled"
| "Failed"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ScalingPolicy {
  PolicyARN: string;
  PolicyName: string;
  ServiceNamespace: ServiceNamespace;
  ResourceId: string;
  ScalableDimension: ScalableDimension;
  PolicyType: PolicyType;
  StepScalingPolicyConfiguration?: StepScalingPolicyConfiguration | null;
  TargetTrackingScalingPolicyConfiguration?: TargetTrackingScalingPolicyConfiguration | null;
  Alarms?: Alarm[] | null;
  CreationTime: Date | number;
}
function toScalingPolicy(root: jsonP.JSONValue): ScalingPolicy {
  return jsonP.readObj({
    required: {
      "PolicyARN": "s",
      "PolicyName": "s",
      "ServiceNamespace": (x: jsonP.JSONValue) => cmnP.readEnum<ServiceNamespace>(x),
      "ResourceId": "s",
      "ScalableDimension": (x: jsonP.JSONValue) => cmnP.readEnum<ScalableDimension>(x),
      "PolicyType": (x: jsonP.JSONValue) => cmnP.readEnum<PolicyType>(x),
      "CreationTime": "d",
    },
    optional: {
      "StepScalingPolicyConfiguration": toStepScalingPolicyConfiguration,
      "TargetTrackingScalingPolicyConfiguration": toTargetTrackingScalingPolicyConfiguration,
      "Alarms": [toAlarm],
    },
  }, root);
}

// refs: 2 - tags: output, named, interface
export interface Alarm {
  AlarmName: string;
  AlarmARN: string;
}
function toAlarm(root: jsonP.JSONValue): Alarm {
  return jsonP.readObj({
    required: {
      "AlarmName": "s",
      "AlarmARN": "s",
    },
    optional: {},
  }, root);
}

// refs: 1 - tags: output, named, interface
export interface ScheduledAction {
  ScheduledActionName: string;
  ScheduledActionARN: string;
  ServiceNamespace: ServiceNamespace;
  Schedule: string;
  Timezone?: string | null;
  ResourceId: string;
  ScalableDimension?: ScalableDimension | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  ScalableTargetAction?: ScalableTargetAction | null;
  CreationTime: Date | number;
}
function toScheduledAction(root: jsonP.JSONValue): ScheduledAction {
  return jsonP.readObj({
    required: {
      "ScheduledActionName": "s",
      "ScheduledActionARN": "s",
      "ServiceNamespace": (x: jsonP.JSONValue) => cmnP.readEnum<ServiceNamespace>(x),
      "Schedule": "s",
      "ResourceId": "s",
      "CreationTime": "d",
    },
    optional: {
      "Timezone": "s",
      "ScalableDimension": (x: jsonP.JSONValue) => cmnP.readEnum<ScalableDimension>(x),
      "StartTime": "d",
      "EndTime": "d",
      "ScalableTargetAction": toScalableTargetAction,
    },
  }, root);
}