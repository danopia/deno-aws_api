// Autogenerated API structures for: Amazon CloudWatch Application Insights

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateApplicationRequest {
  ResourceGroupName: string;
  OpsCenterEnabled?: boolean | null;
  CWEMonitorEnabled?: boolean | null;
  OpsItemSNSTopicArn?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  ResourceList: string[];
}

// refs: 1 - tags: named, input
export interface CreateLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  Pattern: string;
  Rank: number;
}

// refs: 1 - tags: named, input
export interface DeleteApplicationRequest {
  ResourceGroupName: string;
}

// refs: 1 - tags: named, input
export interface DeleteComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
}

// refs: 1 - tags: named, input
export interface DeleteLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
}

// refs: 1 - tags: named, input
export interface DescribeApplicationRequest {
  ResourceGroupName: string;
}

// refs: 1 - tags: named, input
export interface DescribeComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
}

// refs: 1 - tags: named, input
export interface DescribeComponentConfigurationRequest {
  ResourceGroupName: string;
  ComponentName: string;
}

// refs: 1 - tags: named, input
export interface DescribeComponentConfigurationRecommendationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  Tier: Tier;
}

// refs: 1 - tags: named, input
export interface DescribeLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
}

// refs: 1 - tags: named, input
export interface DescribeObservationRequest {
  ObservationId: string;
}

// refs: 1 - tags: named, input
export interface DescribeProblemRequest {
  ProblemId: string;
}

// refs: 1 - tags: named, input
export interface DescribeProblemObservationsRequest {
  ProblemId: string;
}

// refs: 1 - tags: named, input
export interface ListApplicationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListComponentsRequest {
  ResourceGroupName: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListConfigurationHistoryRequest {
  ResourceGroupName?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  EventStatus?: ConfigurationEventStatus | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListLogPatternSetsRequest {
  ResourceGroupName: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListLogPatternsRequest {
  ResourceGroupName: string;
  PatternSetName?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListProblemsRequest {
  ResourceGroupName?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceARN: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceARN: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateApplicationRequest {
  ResourceGroupName: string;
  OpsCenterEnabled?: boolean | null;
  CWEMonitorEnabled?: boolean | null;
  OpsItemSNSTopicArn?: string | null;
  RemoveSNSTopic?: boolean | null;
}

// refs: 1 - tags: named, input
export interface UpdateComponentRequest {
  ResourceGroupName: string;
  ComponentName: string;
  NewComponentName?: string | null;
  ResourceList?: string[] | null;
}

// refs: 1 - tags: named, input
export interface UpdateComponentConfigurationRequest {
  ResourceGroupName: string;
  ComponentName: string;
  Monitor?: boolean | null;
  Tier?: Tier | null;
  ComponentConfiguration?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateLogPatternRequest {
  ResourceGroupName: string;
  PatternSetName: string;
  PatternName: string;
  Pattern?: string | null;
  Rank?: number | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationResponse {
  ApplicationInfo?: ApplicationInfo | null;
}

// refs: 1 - tags: named, output
export interface CreateComponentResponse {
}

// refs: 1 - tags: named, output
export interface CreateLogPatternResponse {
  LogPattern?: LogPattern | null;
  ResourceGroupName?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteApplicationResponse {
}

// refs: 1 - tags: named, output
export interface DeleteComponentResponse {
}

// refs: 1 - tags: named, output
export interface DeleteLogPatternResponse {
}

// refs: 1 - tags: named, output
export interface DescribeApplicationResponse {
  ApplicationInfo?: ApplicationInfo | null;
}

// refs: 1 - tags: named, output
export interface DescribeComponentResponse {
  ApplicationComponent?: ApplicationComponent | null;
  ResourceList?: string[] | null;
}

// refs: 1 - tags: named, output
export interface DescribeComponentConfigurationResponse {
  Monitor?: boolean | null;
  Tier?: Tier | null;
  ComponentConfiguration?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeComponentConfigurationRecommendationResponse {
  ComponentConfiguration?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeLogPatternResponse {
  ResourceGroupName?: string | null;
  LogPattern?: LogPattern | null;
}

// refs: 1 - tags: named, output
export interface DescribeObservationResponse {
  Observation?: Observation | null;
}

// refs: 1 - tags: named, output
export interface DescribeProblemResponse {
  Problem?: Problem | null;
}

// refs: 1 - tags: named, output
export interface DescribeProblemObservationsResponse {
  RelatedObservations?: RelatedObservations | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationsResponse {
  ApplicationInfoList?: ApplicationInfo[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListComponentsResponse {
  ApplicationComponentList?: ApplicationComponent[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListConfigurationHistoryResponse {
  EventList?: ConfigurationEvent[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListLogPatternSetsResponse {
  ResourceGroupName?: string | null;
  LogPatternSets?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListLogPatternsResponse {
  ResourceGroupName?: string | null;
  LogPatterns?: LogPattern[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListProblemsResponse {
  ProblemList?: Problem[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateApplicationResponse {
  ApplicationInfo?: ApplicationInfo | null;
}

// refs: 1 - tags: named, output
export interface UpdateComponentResponse {
}

// refs: 1 - tags: named, output
export interface UpdateComponentConfigurationResponse {
}

// refs: 1 - tags: named, output
export interface UpdateLogPatternResponse {
  ResourceGroupName?: string | null;
  LogPattern?: LogPattern | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 7 - tags: input, named, enum, output
export type Tier =
| "CUSTOM"
| "DEFAULT"
| "DOT_NET_CORE"
| "DOT_NET_WORKER"
| "DOT_NET_WEB_TIER"
| "DOT_NET_WEB"
| "SQL_SERVER"
| "SQL_SERVER_ALWAYSON_AVAILABILITY_GROUP"
| "MYSQL"
| "POSTGRESQL"
| "JAVA_JMX"
| "ORACLE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type ConfigurationEventStatus =
| "INFO"
| "WARN"
| "ERROR"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface ApplicationInfo {
  ResourceGroupName?: string | null;
  LifeCycle?: string | null;
  OpsItemSNSTopicArn?: string | null;
  OpsCenterEnabled?: boolean | null;
  CWEMonitorEnabled?: boolean | null;
  Remarks?: string | null;
}

// refs: 4 - tags: output, named, interface
export interface LogPattern {
  PatternSetName?: string | null;
  PatternName?: string | null;
  Pattern?: string | null;
  Rank?: number | null;
}

// refs: 2 - tags: output, named, interface
export interface ApplicationComponent {
  ComponentName?: string | null;
  ComponentRemarks?: string | null;
  ResourceType?: string | null;
  OsType?: OsType | null;
  Tier?: Tier | null;
  Monitor?: boolean | null;
  DetectedWorkload?: { [key in Tier]: { [key: string]: string | null | undefined } | null | undefined } | null;
}

// refs: 2 - tags: output, named, enum
export type OsType =
| "WINDOWS"
| "LINUX"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Observation {
  Id?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  SourceType?: string | null;
  SourceARN?: string | null;
  LogGroup?: string | null;
  LineTime?: Date | number | null;
  LogText?: string | null;
  LogFilter?: LogFilter | null;
  MetricNamespace?: string | null;
  MetricName?: string | null;
  Unit?: string | null;
  Value?: number | null;
  CloudWatchEventId?: string | null;
  CloudWatchEventSource?: CloudWatchEventSource | null;
  CloudWatchEventDetailType?: string | null;
  HealthEventArn?: string | null;
  HealthService?: string | null;
  HealthEventTypeCode?: string | null;
  HealthEventTypeCategory?: string | null;
  HealthEventDescription?: string | null;
  CodeDeployDeploymentId?: string | null;
  CodeDeployDeploymentGroup?: string | null;
  CodeDeployState?: string | null;
  CodeDeployApplication?: string | null;
  CodeDeployInstanceGroupId?: string | null;
  Ec2State?: string | null;
  RdsEventCategories?: string | null;
  RdsEventMessage?: string | null;
  S3EventName?: string | null;
  StatesExecutionArn?: string | null;
  StatesArn?: string | null;
  StatesStatus?: string | null;
  StatesInput?: string | null;
  EbsEvent?: string | null;
  EbsResult?: string | null;
  EbsCause?: string | null;
  EbsRequestId?: string | null;
  XRayFaultPercent?: number | null;
  XRayThrottlePercent?: number | null;
  XRayErrorPercent?: number | null;
  XRayRequestCount?: number | null;
  XRayRequestAverageLatency?: number | null;
  XRayNodeName?: string | null;
  XRayNodeType?: string | null;
}

// refs: 2 - tags: output, named, enum
export type LogFilter =
| "ERROR"
| "WARN"
| "INFO"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type CloudWatchEventSource =
| "EC2"
| "CODE_DEPLOY"
| "HEALTH"
| "RDS"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Problem {
  Id?: string | null;
  Title?: string | null;
  Insights?: string | null;
  Status?: Status | null;
  AffectedResource?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  SeverityLevel?: SeverityLevel | null;
  ResourceGroupName?: string | null;
  Feedback?: { [key in FeedbackKey]: FeedbackValue | null | undefined } | null;
}

// refs: 2 - tags: output, named, enum
export type Status =
| "IGNORE"
| "RESOLVED"
| "PENDING"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type SeverityLevel =
| "Low"
| "Medium"
| "High"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type FeedbackKey =
| "INSIGHTS_FEEDBACK"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type FeedbackValue =
| "NOT_SPECIFIED"
| "USEFUL"
| "NOT_USEFUL"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface RelatedObservations {
  ObservationList?: Observation[] | null;
}

// refs: 1 - tags: output, named, interface
export interface ConfigurationEvent {
  MonitoredResourceARN?: string | null;
  EventStatus?: ConfigurationEventStatus | null;
  EventResourceType?: ConfigurationEventResourceType | null;
  EventTime?: Date | number | null;
  EventDetail?: string | null;
  EventResourceName?: string | null;
}

// refs: 1 - tags: output, named, enum
export type ConfigurationEventResourceType =
| "CLOUDWATCH_ALARM"
| "CLOUDWATCH_LOG"
| "CLOUDFORMATION"
| "SSM_ASSOCIATION"
| cmnP.UnexpectedEnumValue;
