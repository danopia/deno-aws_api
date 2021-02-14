// Autogenerated API structures for: Application Auto Scaling

import * as cmnP from "../../encoding/common.ts";

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

// refs: 2 - tags: input, named, interface, output
export interface PredefinedMetricSpecification {
  PredefinedMetricType: MetricType;
  ResourceLabel?: string | null;
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

// refs: 2 - tags: input, named, interface, output
export interface MetricDimension {
  Name: string;
  Value: string;
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

// refs: 2 - tags: input, named, interface, output
export interface SuspendedState {
  DynamicScalingInSuspended?: boolean | null;
  DynamicScalingOutSuspended?: boolean | null;
  ScheduledScalingSuspended?: boolean | null;
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

// refs: 2 - tags: output, named, interface
export interface Alarm {
  AlarmName: string;
  AlarmARN: string;
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