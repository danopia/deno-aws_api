// Autogenerated API structures for: AWS CodeDeploy

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AddTagsToOnPremisesInstancesInput {
  tags: Tag[];
  instanceNames: string[];
}

// refs: 1 - tags: named, input
export interface BatchGetApplicationRevisionsInput {
  applicationName: string;
  revisions: RevisionLocation[];
}

// refs: 1 - tags: named, input
export interface BatchGetApplicationsInput {
  applicationNames: string[];
}

// refs: 1 - tags: named, input
export interface BatchGetDeploymentGroupsInput {
  applicationName: string;
  deploymentGroupNames: string[];
}

// refs: 1 - tags: named, input
export interface BatchGetDeploymentInstancesInput {
  deploymentId: string;
  instanceIds: string[];
}

// refs: 1 - tags: named, input
export interface BatchGetDeploymentTargetsInput {
  deploymentId?: string | null;
  targetIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface BatchGetDeploymentsInput {
  deploymentIds: string[];
}

// refs: 1 - tags: named, input
export interface BatchGetOnPremisesInstancesInput {
  instanceNames: string[];
}

// refs: 1 - tags: named, input
export interface ContinueDeploymentInput {
  deploymentId?: string | null;
  deploymentWaitType?: DeploymentWaitType | null;
}

// refs: 1 - tags: named, input
export interface CreateApplicationInput {
  applicationName: string;
  computePlatform?: ComputePlatform | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateDeploymentInput {
  applicationName: string;
  deploymentGroupName?: string | null;
  revision?: RevisionLocation | null;
  deploymentConfigName?: string | null;
  description?: string | null;
  ignoreApplicationStopFailures?: boolean | null;
  targetInstances?: TargetInstances | null;
  autoRollbackConfiguration?: AutoRollbackConfiguration | null;
  updateOutdatedInstancesOnly?: boolean | null;
  fileExistsBehavior?: FileExistsBehavior | null;
}

// refs: 1 - tags: named, input
export interface CreateDeploymentConfigInput {
  deploymentConfigName: string;
  minimumHealthyHosts?: MinimumHealthyHosts | null;
  trafficRoutingConfig?: TrafficRoutingConfig | null;
  computePlatform?: ComputePlatform | null;
}

// refs: 1 - tags: named, input
export interface CreateDeploymentGroupInput {
  applicationName: string;
  deploymentGroupName: string;
  deploymentConfigName?: string | null;
  ec2TagFilters?: EC2TagFilter[] | null;
  onPremisesInstanceTagFilters?: TagFilter[] | null;
  autoScalingGroups?: string[] | null;
  serviceRoleArn: string;
  triggerConfigurations?: TriggerConfig[] | null;
  alarmConfiguration?: AlarmConfiguration | null;
  autoRollbackConfiguration?: AutoRollbackConfiguration | null;
  deploymentStyle?: DeploymentStyle | null;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | null;
  loadBalancerInfo?: LoadBalancerInfo | null;
  ec2TagSet?: EC2TagSet | null;
  ecsServices?: ECSService[] | null;
  onPremisesTagSet?: OnPremisesTagSet | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface DeleteApplicationInput {
  applicationName: string;
}

// refs: 1 - tags: named, input
export interface DeleteDeploymentConfigInput {
  deploymentConfigName: string;
}

// refs: 1 - tags: named, input
export interface DeleteDeploymentGroupInput {
  applicationName: string;
  deploymentGroupName: string;
}

// refs: 1 - tags: named, input
export interface DeleteGitHubAccountTokenInput {
  tokenName?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteResourcesByExternalIdInput {
  externalId?: string | null;
}

// refs: 1 - tags: named, input
export interface DeregisterOnPremisesInstanceInput {
  instanceName: string;
}

// refs: 1 - tags: named, input
export interface GetApplicationInput {
  applicationName: string;
}

// refs: 1 - tags: named, input
export interface GetApplicationRevisionInput {
  applicationName: string;
  revision: RevisionLocation;
}

// refs: 1 - tags: named, input
export interface GetDeploymentInput {
  deploymentId: string;
}

// refs: 1 - tags: named, input
export interface GetDeploymentConfigInput {
  deploymentConfigName: string;
}

// refs: 1 - tags: named, input
export interface GetDeploymentGroupInput {
  applicationName: string;
  deploymentGroupName: string;
}

// refs: 1 - tags: named, input
export interface GetDeploymentInstanceInput {
  deploymentId: string;
  instanceId: string;
}

// refs: 1 - tags: named, input
export interface GetDeploymentTargetInput {
  deploymentId?: string | null;
  targetId?: string | null;
}

// refs: 1 - tags: named, input
export interface GetOnPremisesInstanceInput {
  instanceName: string;
}

// refs: 1 - tags: named, input
export interface ListApplicationRevisionsInput {
  applicationName: string;
  sortBy?: ApplicationRevisionSortBy | null;
  sortOrder?: SortOrder | null;
  s3Bucket?: string | null;
  s3KeyPrefix?: string | null;
  deployed?: ListStateFilterAction | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListApplicationsInput {
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentConfigsInput {
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentGroupsInput {
  applicationName: string;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentInstancesInput {
  deploymentId: string;
  nextToken?: string | null;
  instanceStatusFilter?: InstanceStatus[] | null;
  instanceTypeFilter?: InstanceType[] | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentTargetsInput {
  deploymentId?: string | null;
  nextToken?: string | null;
  targetFilters?: { [key in TargetFilterName]: string[] | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface ListDeploymentsInput {
  applicationName?: string | null;
  deploymentGroupName?: string | null;
  externalId?: string | null;
  includeOnlyStatuses?: DeploymentStatus[] | null;
  createTimeRange?: TimeRange | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListGitHubAccountTokenNamesInput {
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListOnPremisesInstancesInput {
  registrationStatus?: RegistrationStatus | null;
  tagFilters?: TagFilter[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceInput {
  ResourceArn: string;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutLifecycleEventHookExecutionStatusInput {
  deploymentId?: string | null;
  lifecycleEventHookExecutionId?: string | null;
  status?: LifecycleEventStatus | null;
}

// refs: 1 - tags: named, input
export interface RegisterApplicationRevisionInput {
  applicationName: string;
  description?: string | null;
  revision: RevisionLocation;
}

// refs: 1 - tags: named, input
export interface RegisterOnPremisesInstanceInput {
  instanceName: string;
  iamSessionArn?: string | null;
  iamUserArn?: string | null;
}

// refs: 1 - tags: named, input
export interface RemoveTagsFromOnPremisesInstancesInput {
  tags: Tag[];
  instanceNames: string[];
}

// refs: 1 - tags: named, input
export interface SkipWaitTimeForInstanceTerminationInput {
  deploymentId?: string | null;
}

// refs: 1 - tags: named, input
export interface StopDeploymentInput {
  deploymentId: string;
  autoRollbackEnabled?: boolean | null;
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
export interface UpdateApplicationInput {
  applicationName?: string | null;
  newApplicationName?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateDeploymentGroupInput {
  applicationName: string;
  currentDeploymentGroupName: string;
  newDeploymentGroupName?: string | null;
  deploymentConfigName?: string | null;
  ec2TagFilters?: EC2TagFilter[] | null;
  onPremisesInstanceTagFilters?: TagFilter[] | null;
  autoScalingGroups?: string[] | null;
  serviceRoleArn?: string | null;
  triggerConfigurations?: TriggerConfig[] | null;
  alarmConfiguration?: AlarmConfiguration | null;
  autoRollbackConfiguration?: AutoRollbackConfiguration | null;
  deploymentStyle?: DeploymentStyle | null;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | null;
  loadBalancerInfo?: LoadBalancerInfo | null;
  ec2TagSet?: EC2TagSet | null;
  ecsServices?: ECSService[] | null;
  onPremisesTagSet?: OnPremisesTagSet | null;
}

// refs: 1 - tags: named, output
export interface BatchGetApplicationRevisionsOutput {
  applicationName?: string | null;
  errorMessage?: string | null;
  revisions?: RevisionInfo[] | null;
}

// refs: 1 - tags: named, output
export interface BatchGetApplicationsOutput {
  applicationsInfo?: ApplicationInfo[] | null;
}

// refs: 1 - tags: named, output
export interface BatchGetDeploymentGroupsOutput {
  deploymentGroupsInfo?: DeploymentGroupInfo[] | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface BatchGetDeploymentInstancesOutput {
  instancesSummary?: InstanceSummary[] | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface BatchGetDeploymentTargetsOutput {
  deploymentTargets?: DeploymentTarget[] | null;
}

// refs: 1 - tags: named, output
export interface BatchGetDeploymentsOutput {
  deploymentsInfo?: DeploymentInfo[] | null;
}

// refs: 1 - tags: named, output
export interface BatchGetOnPremisesInstancesOutput {
  instanceInfos?: InstanceInfo[] | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationOutput {
  applicationId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDeploymentOutput {
  deploymentId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDeploymentConfigOutput {
  deploymentConfigId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDeploymentGroupOutput {
  deploymentGroupId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteDeploymentGroupOutput {
  hooksNotCleanedUp?: AutoScalingGroup[] | null;
}

// refs: 1 - tags: named, output
export interface DeleteGitHubAccountTokenOutput {
  tokenName?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteResourcesByExternalIdOutput {
}

// refs: 1 - tags: named, output
export interface GetApplicationOutput {
  application?: ApplicationInfo | null;
}

// refs: 1 - tags: named, output
export interface GetApplicationRevisionOutput {
  applicationName?: string | null;
  revision?: RevisionLocation | null;
  revisionInfo?: GenericRevisionInfo | null;
}

// refs: 1 - tags: named, output
export interface GetDeploymentOutput {
  deploymentInfo?: DeploymentInfo | null;
}

// refs: 1 - tags: named, output
export interface GetDeploymentConfigOutput {
  deploymentConfigInfo?: DeploymentConfigInfo | null;
}

// refs: 1 - tags: named, output
export interface GetDeploymentGroupOutput {
  deploymentGroupInfo?: DeploymentGroupInfo | null;
}

// refs: 1 - tags: named, output
export interface GetDeploymentInstanceOutput {
  instanceSummary?: InstanceSummary | null;
}

// refs: 1 - tags: named, output
export interface GetDeploymentTargetOutput {
  deploymentTarget?: DeploymentTarget | null;
}

// refs: 1 - tags: named, output
export interface GetOnPremisesInstanceOutput {
  instanceInfo?: InstanceInfo | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationRevisionsOutput {
  revisions?: RevisionLocation[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationsOutput {
  applications?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDeploymentConfigsOutput {
  deploymentConfigsList?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDeploymentGroupsOutput {
  applicationName?: string | null;
  deploymentGroups?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDeploymentInstancesOutput {
  instancesList?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDeploymentTargetsOutput {
  targetIds?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDeploymentsOutput {
  deployments?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListGitHubAccountTokenNamesOutput {
  tokenNameList?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListOnPremisesInstancesOutput {
  instanceNames?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceOutput {
  Tags?: Tag[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutLifecycleEventHookExecutionStatusOutput {
  lifecycleEventHookExecutionId?: string | null;
}

// refs: 1 - tags: named, output
export interface StopDeploymentOutput {
  status?: StopStatus | null;
  statusMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UntagResourceOutput {
}

// refs: 1 - tags: named, output
export interface UpdateDeploymentGroupOutput {
  hooksNotCleanedUp?: AutoScalingGroup[] | null;
}

// refs: 8 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 13 - tags: input, named, interface, output
export interface RevisionLocation {
  revisionType?: RevisionLocationType | null;
  s3Location?: S3Location | null;
  gitHubLocation?: GitHubLocation | null;
  string?: RawString | null;
  appSpecContent?: AppSpecContent | null;
}

// refs: 13 - tags: input, named, enum, output
export type RevisionLocationType =
| "S3"
| "GitHub"
| "String"
| "AppSpecContent"
| cmnP.UnexpectedEnumValue;

// refs: 13 - tags: input, named, interface, output
export interface S3Location {
  bucket?: string | null;
  key?: string | null;
  bundleType?: BundleType | null;
  version?: string | null;
  eTag?: string | null;
}

// refs: 13 - tags: input, named, enum, output
export type BundleType =
| "tar"
| "tgz"
| "zip"
| "YAML"
| "JSON"
| cmnP.UnexpectedEnumValue;

// refs: 13 - tags: input, named, interface, output
export interface GitHubLocation {
  repository?: string | null;
  commitId?: string | null;
}

// refs: 13 - tags: input, named, interface, output
export interface RawString {
  content?: string | null;
  sha256?: string | null;
}

// refs: 13 - tags: input, named, interface, output
export interface AppSpecContent {
  content?: string | null;
  sha256?: string | null;
}

// refs: 1 - tags: input, named, enum
export type DeploymentWaitType =
| "READY_WAIT"
| "TERMINATION_WAIT"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, enum, output
export type ComputePlatform =
| "Server"
| "Lambda"
| "ECS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface TargetInstances {
  tagFilters?: EC2TagFilter[] | null;
  autoScalingGroups?: string[] | null;
  ec2TagSet?: EC2TagSet | null;
}

// refs: 14 - tags: input, named, interface, output
export interface EC2TagFilter {
  Key?: string | null;
  Value?: string | null;
  Type?: EC2TagFilterType | null;
}

// refs: 14 - tags: input, named, enum, output
export type EC2TagFilterType =
| "KEY_ONLY"
| "VALUE_ONLY"
| "KEY_AND_VALUE"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, interface, output
export interface EC2TagSet {
  ec2TagSetList?: EC2TagFilter[][] | null;
}

// refs: 7 - tags: input, named, interface, output
export interface AutoRollbackConfiguration {
  enabled?: boolean | null;
  events?: AutoRollbackEvent[] | null;
}

// refs: 7 - tags: input, named, enum, output
export type AutoRollbackEvent =
| "DEPLOYMENT_FAILURE"
| "DEPLOYMENT_STOP_ON_ALARM"
| "DEPLOYMENT_STOP_ON_REQUEST"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type FileExistsBehavior =
| "DISALLOW"
| "OVERWRITE"
| "RETAIN"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface MinimumHealthyHosts {
  value?: number | null;
  type?: MinimumHealthyHostsType | null;
}

// refs: 2 - tags: input, named, enum, output
export type MinimumHealthyHostsType =
| "HOST_COUNT"
| "FLEET_PERCENT"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface TrafficRoutingConfig {
  type?: TrafficRoutingType | null;
  timeBasedCanary?: TimeBasedCanary | null;
  timeBasedLinear?: TimeBasedLinear | null;
}

// refs: 2 - tags: input, named, enum, output
export type TrafficRoutingType =
| "TimeBasedCanary"
| "TimeBasedLinear"
| "AllAtOnce"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface TimeBasedCanary {
  canaryPercentage?: number | null;
  canaryInterval?: number | null;
}

// refs: 2 - tags: input, named, interface, output
export interface TimeBasedLinear {
  linearPercentage?: number | null;
  linearInterval?: number | null;
}

// refs: 9 - tags: input, named, interface, output
export interface TagFilter {
  Key?: string | null;
  Value?: string | null;
  Type?: TagFilterType | null;
}

// refs: 9 - tags: input, named, enum, output
export type TagFilterType =
| "KEY_ONLY"
| "VALUE_ONLY"
| "KEY_AND_VALUE"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface TriggerConfig {
  triggerName?: string | null;
  triggerTargetArn?: string | null;
  triggerEvents?: TriggerEventType[] | null;
}

// refs: 4 - tags: input, named, enum, output
export type TriggerEventType =
| "DeploymentStart"
| "DeploymentSuccess"
| "DeploymentFailure"
| "DeploymentStop"
| "DeploymentRollback"
| "DeploymentReady"
| "InstanceStart"
| "InstanceSuccess"
| "InstanceFailure"
| "InstanceReady"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface AlarmConfiguration {
  enabled?: boolean | null;
  ignorePollAlarmFailure?: boolean | null;
  alarms?: Alarm[] | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Alarm {
  name?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface DeploymentStyle {
  deploymentType?: DeploymentType | null;
  deploymentOption?: DeploymentOption | null;
}

// refs: 6 - tags: input, named, enum, output
export type DeploymentType =
| "IN_PLACE"
| "BLUE_GREEN"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type DeploymentOption =
| "WITH_TRAFFIC_CONTROL"
| "WITHOUT_TRAFFIC_CONTROL"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface BlueGreenDeploymentConfiguration {
  terminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption | null;
  deploymentReadyOption?: DeploymentReadyOption | null;
  greenFleetProvisioningOption?: GreenFleetProvisioningOption | null;
}

// refs: 6 - tags: input, named, interface, output
export interface BlueInstanceTerminationOption {
  action?: InstanceAction | null;
  terminationWaitTimeInMinutes?: number | null;
}

// refs: 6 - tags: input, named, enum, output
export type InstanceAction =
| "TERMINATE"
| "KEEP_ALIVE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface DeploymentReadyOption {
  actionOnTimeout?: DeploymentReadyAction | null;
  waitTimeInMinutes?: number | null;
}

// refs: 6 - tags: input, named, enum, output
export type DeploymentReadyAction =
| "CONTINUE_DEPLOYMENT"
| "STOP_DEPLOYMENT"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface GreenFleetProvisioningOption {
  action?: GreenFleetProvisioningAction | null;
}

// refs: 6 - tags: input, named, enum, output
export type GreenFleetProvisioningAction =
| "DISCOVER_EXISTING"
| "COPY_AUTO_SCALING_GROUP"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface LoadBalancerInfo {
  elbInfoList?: ELBInfo[] | null;
  targetGroupInfoList?: TargetGroupInfo[] | null;
  targetGroupPairInfoList?: TargetGroupPairInfo[] | null;
}

// refs: 6 - tags: input, named, interface, output
export interface ELBInfo {
  name?: string | null;
}

// refs: 14 - tags: input, named, interface, output
export interface TargetGroupInfo {
  name?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface TargetGroupPairInfo {
  targetGroups?: TargetGroupInfo[] | null;
  prodTrafficRoute?: TrafficRoute | null;
  testTrafficRoute?: TrafficRoute | null;
}

// refs: 12 - tags: input, named, interface, output
export interface TrafficRoute {
  listenerArns?: string[] | null;
}

// refs: 4 - tags: input, named, interface, output
export interface ECSService {
  serviceName?: string | null;
  clusterName?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface OnPremisesTagSet {
  onPremisesTagSetList?: TagFilter[][] | null;
}

// refs: 1 - tags: input, named, enum
export type ApplicationRevisionSortBy =
| "registerTime"
| "firstUsedTime"
| "lastUsedTime"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SortOrder =
| "ascending"
| "descending"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ListStateFilterAction =
| "include"
| "exclude"
| "ignore"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type InstanceStatus =
| "Pending"
| "InProgress"
| "Succeeded"
| "Failed"
| "Skipped"
| "Unknown"
| "Ready"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type InstanceType =
| "Blue"
| "Green"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type TargetFilterName =
| "TargetStatus"
| "ServerInstanceLabel"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, enum, output
export type DeploymentStatus =
| "Created"
| "Queued"
| "InProgress"
| "Baking"
| "Succeeded"
| "Failed"
| "Stopped"
| "Ready"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface TimeRange {
  start?: Date | number | null;
  end?: Date | number | null;
}

// refs: 1 - tags: input, named, enum
export type RegistrationStatus =
| "Registered"
| "Deregistered"
| cmnP.UnexpectedEnumValue;

// refs: 11 - tags: input, named, enum, output
export type LifecycleEventStatus =
| "Pending"
| "InProgress"
| "Succeeded"
| "Failed"
| "Skipped"
| "Unknown"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface RevisionInfo {
  revisionLocation?: RevisionLocation | null;
  genericRevisionInfo?: GenericRevisionInfo | null;
}

// refs: 2 - tags: output, named, interface
export interface GenericRevisionInfo {
  description?: string | null;
  deploymentGroups?: string[] | null;
  firstUsedTime?: Date | number | null;
  lastUsedTime?: Date | number | null;
  registerTime?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface ApplicationInfo {
  applicationId?: string | null;
  applicationName?: string | null;
  createTime?: Date | number | null;
  linkedToGitHub?: boolean | null;
  gitHubAccountName?: string | null;
  computePlatform?: ComputePlatform | null;
}

// refs: 2 - tags: output, named, interface
export interface DeploymentGroupInfo {
  applicationName?: string | null;
  deploymentGroupId?: string | null;
  deploymentGroupName?: string | null;
  deploymentConfigName?: string | null;
  ec2TagFilters?: EC2TagFilter[] | null;
  onPremisesInstanceTagFilters?: TagFilter[] | null;
  autoScalingGroups?: AutoScalingGroup[] | null;
  serviceRoleArn?: string | null;
  targetRevision?: RevisionLocation | null;
  triggerConfigurations?: TriggerConfig[] | null;
  alarmConfiguration?: AlarmConfiguration | null;
  autoRollbackConfiguration?: AutoRollbackConfiguration | null;
  deploymentStyle?: DeploymentStyle | null;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | null;
  loadBalancerInfo?: LoadBalancerInfo | null;
  lastSuccessfulDeployment?: LastDeploymentInfo | null;
  lastAttemptedDeployment?: LastDeploymentInfo | null;
  ec2TagSet?: EC2TagSet | null;
  onPremisesTagSet?: OnPremisesTagSet | null;
  computePlatform?: ComputePlatform | null;
  ecsServices?: ECSService[] | null;
}

// refs: 4 - tags: output, named, interface
export interface AutoScalingGroup {
  name?: string | null;
  hook?: string | null;
}

// refs: 4 - tags: output, named, interface
export interface LastDeploymentInfo {
  deploymentId?: string | null;
  status?: DeploymentStatus | null;
  endTime?: Date | number | null;
  createTime?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface InstanceSummary {
  deploymentId?: string | null;
  instanceId?: string | null;
  status?: InstanceStatus | null;
  lastUpdatedAt?: Date | number | null;
  lifecycleEvents?: LifecycleEvent[] | null;
  instanceType?: InstanceType | null;
}

// refs: 10 - tags: output, named, interface
export interface LifecycleEvent {
  lifecycleEventName?: string | null;
  diagnostics?: Diagnostics | null;
  startTime?: Date | number | null;
  endTime?: Date | number | null;
  status?: LifecycleEventStatus | null;
}

// refs: 10 - tags: output, named, interface
export interface Diagnostics {
  errorCode?: LifecycleErrorCode | null;
  scriptName?: string | null;
  message?: string | null;
  logTail?: string | null;
}

// refs: 10 - tags: output, named, enum
export type LifecycleErrorCode =
| "Success"
| "ScriptMissing"
| "ScriptNotExecutable"
| "ScriptTimedOut"
| "ScriptFailed"
| "UnknownError"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface DeploymentTarget {
  deploymentTargetType?: DeploymentTargetType | null;
  instanceTarget?: InstanceTarget | null;
  lambdaTarget?: LambdaTarget | null;
  ecsTarget?: ECSTarget | null;
  cloudFormationTarget?: CloudFormationTarget | null;
}

// refs: 2 - tags: output, named, enum
export type DeploymentTargetType =
| "InstanceTarget"
| "LambdaTarget"
| "ECSTarget"
| "CloudFormationTarget"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface InstanceTarget {
  deploymentId?: string | null;
  targetId?: string | null;
  targetArn?: string | null;
  status?: TargetStatus | null;
  lastUpdatedAt?: Date | number | null;
  lifecycleEvents?: LifecycleEvent[] | null;
  instanceLabel?: TargetLabel | null;
}

// refs: 8 - tags: output, named, enum
export type TargetStatus =
| "Pending"
| "InProgress"
| "Succeeded"
| "Failed"
| "Skipped"
| "Unknown"
| "Ready"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, enum
export type TargetLabel =
| "Blue"
| "Green"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface LambdaTarget {
  deploymentId?: string | null;
  targetId?: string | null;
  targetArn?: string | null;
  status?: TargetStatus | null;
  lastUpdatedAt?: Date | number | null;
  lifecycleEvents?: LifecycleEvent[] | null;
  lambdaFunctionInfo?: LambdaFunctionInfo | null;
}

// refs: 2 - tags: output, named, interface
export interface LambdaFunctionInfo {
  functionName?: string | null;
  functionAlias?: string | null;
  currentVersion?: string | null;
  targetVersion?: string | null;
  targetVersionWeight?: number | null;
}

// refs: 2 - tags: output, named, interface
export interface ECSTarget {
  deploymentId?: string | null;
  targetId?: string | null;
  targetArn?: string | null;
  lastUpdatedAt?: Date | number | null;
  lifecycleEvents?: LifecycleEvent[] | null;
  status?: TargetStatus | null;
  taskSetsInfo?: ECSTaskSet[] | null;
}

// refs: 2 - tags: output, named, interface
export interface ECSTaskSet {
  identifer?: string | null;
  desiredCount?: number | null;
  pendingCount?: number | null;
  runningCount?: number | null;
  status?: string | null;
  trafficWeight?: number | null;
  targetGroup?: TargetGroupInfo | null;
  taskSetLabel?: TargetLabel | null;
}

// refs: 2 - tags: output, named, interface
export interface CloudFormationTarget {
  deploymentId?: string | null;
  targetId?: string | null;
  lastUpdatedAt?: Date | number | null;
  lifecycleEvents?: LifecycleEvent[] | null;
  status?: TargetStatus | null;
  resourceType?: string | null;
  targetVersionWeight?: number | null;
}

// refs: 2 - tags: output, named, interface
export interface DeploymentInfo {
  applicationName?: string | null;
  deploymentGroupName?: string | null;
  deploymentConfigName?: string | null;
  deploymentId?: string | null;
  previousRevision?: RevisionLocation | null;
  revision?: RevisionLocation | null;
  status?: DeploymentStatus | null;
  errorInformation?: ErrorInformation | null;
  createTime?: Date | number | null;
  startTime?: Date | number | null;
  completeTime?: Date | number | null;
  deploymentOverview?: DeploymentOverview | null;
  description?: string | null;
  creator?: DeploymentCreator | null;
  ignoreApplicationStopFailures?: boolean | null;
  autoRollbackConfiguration?: AutoRollbackConfiguration | null;
  updateOutdatedInstancesOnly?: boolean | null;
  rollbackInfo?: RollbackInfo | null;
  deploymentStyle?: DeploymentStyle | null;
  targetInstances?: TargetInstances | null;
  instanceTerminationWaitTimeStarted?: boolean | null;
  blueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration | null;
  loadBalancerInfo?: LoadBalancerInfo | null;
  additionalDeploymentStatusInfo?: string | null;
  fileExistsBehavior?: FileExistsBehavior | null;
  deploymentStatusMessages?: string[] | null;
  computePlatform?: ComputePlatform | null;
  externalId?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface ErrorInformation {
  code?: ErrorCode | null;
  message?: string | null;
}

// refs: 2 - tags: output, named, enum
export type ErrorCode =
| "AGENT_ISSUE"
| "ALARM_ACTIVE"
| "APPLICATION_MISSING"
| "AUTOSCALING_VALIDATION_ERROR"
| "AUTO_SCALING_CONFIGURATION"
| "AUTO_SCALING_IAM_ROLE_PERMISSIONS"
| "CODEDEPLOY_RESOURCE_CANNOT_BE_FOUND"
| "CUSTOMER_APPLICATION_UNHEALTHY"
| "DEPLOYMENT_GROUP_MISSING"
| "ECS_UPDATE_ERROR"
| "ELASTIC_LOAD_BALANCING_INVALID"
| "ELB_INVALID_INSTANCE"
| "HEALTH_CONSTRAINTS"
| "HEALTH_CONSTRAINTS_INVALID"
| "HOOK_EXECUTION_FAILURE"
| "IAM_ROLE_MISSING"
| "IAM_ROLE_PERMISSIONS"
| "INTERNAL_ERROR"
| "INVALID_ECS_SERVICE"
| "INVALID_LAMBDA_CONFIGURATION"
| "INVALID_LAMBDA_FUNCTION"
| "INVALID_REVISION"
| "MANUAL_STOP"
| "MISSING_BLUE_GREEN_DEPLOYMENT_CONFIGURATION"
| "MISSING_ELB_INFORMATION"
| "MISSING_GITHUB_TOKEN"
| "NO_EC2_SUBSCRIPTION"
| "NO_INSTANCES"
| "OVER_MAX_INSTANCES"
| "RESOURCE_LIMIT_EXCEEDED"
| "REVISION_MISSING"
| "THROTTLED"
| "TIMEOUT"
| "CLOUDFORMATION_STACK_FAILURE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface DeploymentOverview {
  Pending?: number | null;
  InProgress?: number | null;
  Succeeded?: number | null;
  Failed?: number | null;
  Skipped?: number | null;
  Ready?: number | null;
}

// refs: 2 - tags: output, named, enum
export type DeploymentCreator =
| "user"
| "autoscaling"
| "codeDeployRollback"
| "CodeDeploy"
| "CloudFormation"
| "CloudFormationRollback"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface RollbackInfo {
  rollbackDeploymentId?: string | null;
  rollbackTriggeringDeploymentId?: string | null;
  rollbackMessage?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface InstanceInfo {
  instanceName?: string | null;
  iamSessionArn?: string | null;
  iamUserArn?: string | null;
  instanceArn?: string | null;
  registerTime?: Date | number | null;
  deregisterTime?: Date | number | null;
  tags?: Tag[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DeploymentConfigInfo {
  deploymentConfigId?: string | null;
  deploymentConfigName?: string | null;
  minimumHealthyHosts?: MinimumHealthyHosts | null;
  createTime?: Date | number | null;
  computePlatform?: ComputePlatform | null;
  trafficRoutingConfig?: TrafficRoutingConfig | null;
}

// refs: 1 - tags: output, named, enum
export type StopStatus =
| "Pending"
| "Succeeded"
| cmnP.UnexpectedEnumValue;
