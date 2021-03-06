// Autogenerated API structures for: Amazon Machine Learning

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AddTagsInput {
  Tags: Tag[];
  ResourceId: string;
  ResourceType: TaggableResourceType;
}

// refs: 1 - tags: named, input
export interface CreateBatchPredictionInput {
  BatchPredictionId: string;
  BatchPredictionName?: string | null;
  MLModelId: string;
  BatchPredictionDataSourceId: string;
  OutputUri: string;
}

// refs: 1 - tags: named, input
export interface CreateDataSourceFromRDSInput {
  DataSourceId: string;
  DataSourceName?: string | null;
  RDSData: RDSDataSpec;
  RoleARN: string;
  ComputeStatistics?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateDataSourceFromRedshiftInput {
  DataSourceId: string;
  DataSourceName?: string | null;
  DataSpec: RedshiftDataSpec;
  RoleARN: string;
  ComputeStatistics?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateDataSourceFromS3Input {
  DataSourceId: string;
  DataSourceName?: string | null;
  DataSpec: S3DataSpec;
  ComputeStatistics?: boolean | null;
}

// refs: 1 - tags: named, input
export interface CreateEvaluationInput {
  EvaluationId: string;
  EvaluationName?: string | null;
  MLModelId: string;
  EvaluationDataSourceId: string;
}

// refs: 1 - tags: named, input
export interface CreateMLModelInput {
  MLModelId: string;
  MLModelName?: string | null;
  MLModelType: MLModelType;
  Parameters?: { [key: string]: string | null | undefined } | null;
  TrainingDataSourceId: string;
  Recipe?: string | null;
  RecipeUri?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateRealtimeEndpointInput {
  MLModelId: string;
}

// refs: 1 - tags: named, input
export interface DeleteBatchPredictionInput {
  BatchPredictionId: string;
}

// refs: 1 - tags: named, input
export interface DeleteDataSourceInput {
  DataSourceId: string;
}

// refs: 1 - tags: named, input
export interface DeleteEvaluationInput {
  EvaluationId: string;
}

// refs: 1 - tags: named, input
export interface DeleteMLModelInput {
  MLModelId: string;
}

// refs: 1 - tags: named, input
export interface DeleteRealtimeEndpointInput {
  MLModelId: string;
}

// refs: 1 - tags: named, input
export interface DeleteTagsInput {
  TagKeys: string[];
  ResourceId: string;
  ResourceType: TaggableResourceType;
}

// refs: 1 - tags: named, input
export interface DescribeBatchPredictionsInput {
  FilterVariable?: BatchPredictionFilterVariable | null;
  EQ?: string | null;
  GT?: string | null;
  LT?: string | null;
  GE?: string | null;
  LE?: string | null;
  NE?: string | null;
  Prefix?: string | null;
  SortOrder?: SortOrder | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeDataSourcesInput {
  FilterVariable?: DataSourceFilterVariable | null;
  EQ?: string | null;
  GT?: string | null;
  LT?: string | null;
  GE?: string | null;
  LE?: string | null;
  NE?: string | null;
  Prefix?: string | null;
  SortOrder?: SortOrder | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeEvaluationsInput {
  FilterVariable?: EvaluationFilterVariable | null;
  EQ?: string | null;
  GT?: string | null;
  LT?: string | null;
  GE?: string | null;
  LE?: string | null;
  NE?: string | null;
  Prefix?: string | null;
  SortOrder?: SortOrder | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeMLModelsInput {
  FilterVariable?: MLModelFilterVariable | null;
  EQ?: string | null;
  GT?: string | null;
  LT?: string | null;
  GE?: string | null;
  LE?: string | null;
  NE?: string | null;
  Prefix?: string | null;
  SortOrder?: SortOrder | null;
  NextToken?: string | null;
  Limit?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeTagsInput {
  ResourceId: string;
  ResourceType: TaggableResourceType;
}

// refs: 1 - tags: named, input
export interface GetBatchPredictionInput {
  BatchPredictionId: string;
}

// refs: 1 - tags: named, input
export interface GetDataSourceInput {
  DataSourceId: string;
  Verbose?: boolean | null;
}

// refs: 1 - tags: named, input
export interface GetEvaluationInput {
  EvaluationId: string;
}

// refs: 1 - tags: named, input
export interface GetMLModelInput {
  MLModelId: string;
  Verbose?: boolean | null;
}

// refs: 1 - tags: named, input
export interface PredictInput {
  MLModelId: string;
  Record: { [key: string]: string | null | undefined };
  PredictEndpoint: string;
}

// refs: 1 - tags: named, input
export interface UpdateBatchPredictionInput {
  BatchPredictionId: string;
  BatchPredictionName: string;
}

// refs: 1 - tags: named, input
export interface UpdateDataSourceInput {
  DataSourceId: string;
  DataSourceName: string;
}

// refs: 1 - tags: named, input
export interface UpdateEvaluationInput {
  EvaluationId: string;
  EvaluationName: string;
}

// refs: 1 - tags: named, input
export interface UpdateMLModelInput {
  MLModelId: string;
  MLModelName?: string | null;
  ScoreThreshold?: number | null;
}

// refs: 1 - tags: named, output
export interface AddTagsOutput {
  ResourceId?: string | null;
  ResourceType?: TaggableResourceType | null;
}

// refs: 1 - tags: named, output
export interface CreateBatchPredictionOutput {
  BatchPredictionId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDataSourceFromRDSOutput {
  DataSourceId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDataSourceFromRedshiftOutput {
  DataSourceId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDataSourceFromS3Output {
  DataSourceId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateEvaluationOutput {
  EvaluationId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateMLModelOutput {
  MLModelId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRealtimeEndpointOutput {
  MLModelId?: string | null;
  RealtimeEndpointInfo?: RealtimeEndpointInfo | null;
}

// refs: 1 - tags: named, output
export interface DeleteBatchPredictionOutput {
  BatchPredictionId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteDataSourceOutput {
  DataSourceId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteEvaluationOutput {
  EvaluationId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteMLModelOutput {
  MLModelId?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteRealtimeEndpointOutput {
  MLModelId?: string | null;
  RealtimeEndpointInfo?: RealtimeEndpointInfo | null;
}

// refs: 1 - tags: named, output
export interface DeleteTagsOutput {
  ResourceId?: string | null;
  ResourceType?: TaggableResourceType | null;
}

// refs: 1 - tags: named, output
export interface DescribeBatchPredictionsOutput {
  Results?: BatchPrediction[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDataSourcesOutput {
  Results?: DataSource[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeEvaluationsOutput {
  Results?: Evaluation[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeMLModelsOutput {
  Results?: MLModel[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeTagsOutput {
  ResourceId?: string | null;
  ResourceType?: TaggableResourceType | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface GetBatchPredictionOutput {
  BatchPredictionId?: string | null;
  MLModelId?: string | null;
  BatchPredictionDataSourceId?: string | null;
  InputDataLocationS3?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  OutputUri?: string | null;
  LogUri?: string | null;
  Message?: string | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
  TotalRecordCount?: number | null;
  InvalidRecordCount?: number | null;
}

// refs: 1 - tags: named, output
export interface GetDataSourceOutput {
  DataSourceId?: string | null;
  DataLocationS3?: string | null;
  DataRearrangement?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  DataSizeInBytes?: number | null;
  NumberOfFiles?: number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  LogUri?: string | null;
  Message?: string | null;
  RedshiftMetadata?: RedshiftMetadata | null;
  RDSMetadata?: RDSMetadata | null;
  RoleARN?: string | null;
  ComputeStatistics?: boolean | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
  DataSourceSchema?: string | null;
}

// refs: 1 - tags: named, output
export interface GetEvaluationOutput {
  EvaluationId?: string | null;
  MLModelId?: string | null;
  EvaluationDataSourceId?: string | null;
  InputDataLocationS3?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  PerformanceMetrics?: PerformanceMetrics | null;
  LogUri?: string | null;
  Message?: string | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface GetMLModelOutput {
  MLModelId?: string | null;
  TrainingDataSourceId?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  SizeInBytes?: number | null;
  EndpointInfo?: RealtimeEndpointInfo | null;
  TrainingParameters?: { [key: string]: string | null | undefined } | null;
  InputDataLocationS3?: string | null;
  MLModelType?: MLModelType | null;
  ScoreThreshold?: number | null;
  ScoreThresholdLastUpdatedAt?: Date | number | null;
  LogUri?: string | null;
  Message?: string | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
  Recipe?: string | null;
  Schema?: string | null;
}

// refs: 1 - tags: named, output
export interface PredictOutput {
  Prediction?: Prediction | null;
}

// refs: 1 - tags: named, output
export interface UpdateBatchPredictionOutput {
  BatchPredictionId?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateDataSourceOutput {
  DataSourceId?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateEvaluationOutput {
  EvaluationId?: string | null;
}

// refs: 1 - tags: named, output
export interface UpdateMLModelOutput {
  MLModelId?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 6 - tags: input, named, enum, output
export type TaggableResourceType =
| "BatchPrediction"
| "DataSource"
| "Evaluation"
| "MLModel"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface RDSDataSpec {
  DatabaseInformation: RDSDatabase;
  SelectSqlQuery: string;
  DatabaseCredentials: RDSDatabaseCredentials;
  S3StagingLocation: string;
  DataRearrangement?: string | null;
  DataSchema?: string | null;
  DataSchemaUri?: string | null;
  ResourceRole: string;
  ServiceRole: string;
  SubnetId: string;
  SecurityGroupIds: string[];
}

// refs: 3 - tags: input, named, interface, output
export interface RDSDatabase {
  InstanceIdentifier: string;
  DatabaseName: string;
}

// refs: 1 - tags: input, named, interface
export interface RDSDatabaseCredentials {
  Username: string;
  Password: string;
}

// refs: 1 - tags: input, named, interface
export interface RedshiftDataSpec {
  DatabaseInformation: RedshiftDatabase;
  SelectSqlQuery: string;
  DatabaseCredentials: RedshiftDatabaseCredentials;
  S3StagingLocation: string;
  DataRearrangement?: string | null;
  DataSchema?: string | null;
  DataSchemaUri?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface RedshiftDatabase {
  DatabaseName: string;
  ClusterIdentifier: string;
}

// refs: 1 - tags: input, named, interface
export interface RedshiftDatabaseCredentials {
  Username: string;
  Password: string;
}

// refs: 1 - tags: input, named, interface
export interface S3DataSpec {
  DataLocationS3: string;
  DataRearrangement?: string | null;
  DataSchema?: string | null;
  DataSchemaLocationS3?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type MLModelType =
| "REGRESSION"
| "BINARY"
| "MULTICLASS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type BatchPredictionFilterVariable =
| "CreatedAt"
| "LastUpdatedAt"
| "Status"
| "Name"
| "IAMUser"
| "MLModelId"
| "DataSourceId"
| "DataURI"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum
export type SortOrder =
| "asc"
| "dsc"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type DataSourceFilterVariable =
| "CreatedAt"
| "LastUpdatedAt"
| "Status"
| "Name"
| "DataLocationS3"
| "IAMUser"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type EvaluationFilterVariable =
| "CreatedAt"
| "LastUpdatedAt"
| "Status"
| "Name"
| "IAMUser"
| "MLModelId"
| "DataSourceId"
| "DataURI"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type MLModelFilterVariable =
| "CreatedAt"
| "LastUpdatedAt"
| "Status"
| "Name"
| "IAMUser"
| "TrainingDataSourceId"
| "RealtimeEndpointStatus"
| "MLModelType"
| "Algorithm"
| "TrainingDataURI"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: output, named, interface
export interface RealtimeEndpointInfo {
  PeakRequestsPerSecond?: number | null;
  CreatedAt?: Date | number | null;
  EndpointUrl?: string | null;
  EndpointStatus?: RealtimeEndpointStatus | null;
}

// refs: 4 - tags: output, named, enum
export type RealtimeEndpointStatus =
| "NONE"
| "READY"
| "UPDATING"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface BatchPrediction {
  BatchPredictionId?: string | null;
  MLModelId?: string | null;
  BatchPredictionDataSourceId?: string | null;
  InputDataLocationS3?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  OutputUri?: string | null;
  Message?: string | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
  TotalRecordCount?: number | null;
  InvalidRecordCount?: number | null;
}

// refs: 8 - tags: output, named, enum
export type EntityStatus =
| "PENDING"
| "INPROGRESS"
| "FAILED"
| "COMPLETED"
| "DELETED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DataSource {
  DataSourceId?: string | null;
  DataLocationS3?: string | null;
  DataRearrangement?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  DataSizeInBytes?: number | null;
  NumberOfFiles?: number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  Message?: string | null;
  RedshiftMetadata?: RedshiftMetadata | null;
  RDSMetadata?: RDSMetadata | null;
  RoleARN?: string | null;
  ComputeStatistics?: boolean | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface RedshiftMetadata {
  RedshiftDatabase?: RedshiftDatabase | null;
  DatabaseUserName?: string | null;
  SelectSqlQuery?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface RDSMetadata {
  Database?: RDSDatabase | null;
  DatabaseUserName?: string | null;
  SelectSqlQuery?: string | null;
  ResourceRole?: string | null;
  ServiceRole?: string | null;
  DataPipelineId?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface Evaluation {
  EvaluationId?: string | null;
  MLModelId?: string | null;
  EvaluationDataSourceId?: string | null;
  InputDataLocationS3?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  PerformanceMetrics?: PerformanceMetrics | null;
  Message?: string | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
}

// refs: 2 - tags: output, named, interface
export interface PerformanceMetrics {
  Properties?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface MLModel {
  MLModelId?: string | null;
  TrainingDataSourceId?: string | null;
  CreatedByIamUser?: string | null;
  CreatedAt?: Date | number | null;
  LastUpdatedAt?: Date | number | null;
  Name?: string | null;
  Status?: EntityStatus | null;
  SizeInBytes?: number | null;
  EndpointInfo?: RealtimeEndpointInfo | null;
  TrainingParameters?: { [key: string]: string | null | undefined } | null;
  InputDataLocationS3?: string | null;
  Algorithm?: Algorithm | null;
  MLModelType?: MLModelType | null;
  ScoreThreshold?: number | null;
  ScoreThresholdLastUpdatedAt?: Date | number | null;
  Message?: string | null;
  ComputeTime?: number | null;
  FinishedAt?: Date | number | null;
  StartedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, enum
export type Algorithm =
| "sgd"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Prediction {
  predictedLabel?: string | null;
  predictedValue?: number | null;
  predictedScores?: { [key: string]: number | null | undefined } | null;
  details?: { [key in DetailsAttributes]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, enum
export type DetailsAttributes =
| "PredictiveModelType"
| "Algorithm"
| cmnP.UnexpectedEnumValue;
