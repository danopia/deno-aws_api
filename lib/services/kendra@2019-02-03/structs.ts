// Autogenerated API structures for: AWSKendraFrontendService

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface BatchDeleteDocumentRequest {
  IndexId: string;
  DocumentIdList: string[];
  DataSourceSyncJobMetricTarget?: DataSourceSyncJobMetricTarget | null;
}

// refs: 1 - tags: named, input
export interface BatchPutDocumentRequest {
  IndexId: string;
  RoleArn?: string | null;
  Documents: Document[];
}

// refs: 1 - tags: named, input
export interface CreateDataSourceRequest {
  Name: string;
  IndexId: string;
  Type: DataSourceType;
  Configuration?: DataSourceConfiguration | null;
  Description?: string | null;
  Schedule?: string | null;
  RoleArn?: string | null;
  Tags?: Tag[] | null;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateFaqRequest {
  IndexId: string;
  Name: string;
  Description?: string | null;
  S3Path: S3Path;
  RoleArn: string;
  Tags?: Tag[] | null;
  FileFormat?: FaqFileFormat | null;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateIndexRequest {
  Name: string;
  Edition?: IndexEdition | null;
  RoleArn: string;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | null;
  Description?: string | null;
  ClientToken?: string | null;
  Tags?: Tag[] | null;
  UserTokenConfigurations?: UserTokenConfiguration[] | null;
  UserContextPolicy?: UserContextPolicy | null;
}

// refs: 1 - tags: named, input
export interface CreateThesaurusRequest {
  IndexId: string;
  Name: string;
  Description?: string | null;
  RoleArn: string;
  Tags?: Tag[] | null;
  SourceS3Path: S3Path;
  ClientToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteDataSourceRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface DeleteFaqRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface DeleteIndexRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteThesaurusRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface DescribeDataSourceRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface DescribeFaqRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface DescribeIndexRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DescribeThesaurusRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface ListDataSourceSyncJobsRequest {
  Id: string;
  IndexId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
  StartTimeFilter?: TimeRange | null;
  StatusFilter?: DataSourceSyncJobStatus | null;
}

// refs: 1 - tags: named, input
export interface ListDataSourcesRequest {
  IndexId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListFaqsRequest {
  IndexId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListIndicesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceARN: string;
}

// refs: 1 - tags: named, input
export interface ListThesauriRequest {
  IndexId: string;
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface QueryRequest {
  IndexId: string;
  QueryText: string;
  AttributeFilter?: AttributeFilter | null;
  Facets?: Facet[] | null;
  RequestedDocumentAttributes?: string[] | null;
  QueryResultTypeFilter?: QueryResultType | null;
  PageNumber?: number | null;
  PageSize?: number | null;
  SortingConfiguration?: SortingConfiguration | null;
  UserContext?: UserContext | null;
  VisitorId?: string | null;
}

// refs: 1 - tags: named, input
export interface StartDataSourceSyncJobRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface StopDataSourceSyncJobRequest {
  Id: string;
  IndexId: string;
}

// refs: 1 - tags: named, input
export interface SubmitFeedbackRequest {
  IndexId: string;
  QueryId: string;
  ClickFeedbackItems?: ClickFeedback[] | null;
  RelevanceFeedbackItems?: RelevanceFeedback[] | null;
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
export interface UpdateDataSourceRequest {
  Id: string;
  Name?: string | null;
  IndexId: string;
  Configuration?: DataSourceConfiguration | null;
  Description?: string | null;
  Schedule?: string | null;
  RoleArn?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateIndexRequest {
  Id: string;
  Name?: string | null;
  RoleArn?: string | null;
  Description?: string | null;
  DocumentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[] | null;
  CapacityUnits?: CapacityUnitsConfiguration | null;
  UserTokenConfigurations?: UserTokenConfiguration[] | null;
  UserContextPolicy?: UserContextPolicy | null;
}

// refs: 1 - tags: named, input
export interface UpdateThesaurusRequest {
  Id: string;
  Name?: string | null;
  IndexId: string;
  Description?: string | null;
  RoleArn?: string | null;
  SourceS3Path?: S3Path | null;
}

// refs: 1 - tags: named, output
export interface BatchDeleteDocumentResponse {
  FailedDocuments?: BatchDeleteDocumentResponseFailedDocument[] | null;
}

// refs: 1 - tags: named, output
export interface BatchPutDocumentResponse {
  FailedDocuments?: BatchPutDocumentResponseFailedDocument[] | null;
}

// refs: 1 - tags: named, output
export interface CreateDataSourceResponse {
  Id: string;
}

// refs: 1 - tags: named, output
export interface CreateFaqResponse {
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateIndexResponse {
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateThesaurusResponse {
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeDataSourceResponse {
  Id?: string | null;
  IndexId?: string | null;
  Name?: string | null;
  Type?: DataSourceType | null;
  Configuration?: DataSourceConfiguration | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
  Description?: string | null;
  Status?: DataSourceStatus | null;
  Schedule?: string | null;
  RoleArn?: string | null;
  ErrorMessage?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeFaqResponse {
  Id?: string | null;
  IndexId?: string | null;
  Name?: string | null;
  Description?: string | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
  S3Path?: S3Path | null;
  Status?: FaqStatus | null;
  RoleArn?: string | null;
  ErrorMessage?: string | null;
  FileFormat?: FaqFileFormat | null;
}

// refs: 1 - tags: named, output
export interface DescribeIndexResponse {
  Name?: string | null;
  Id?: string | null;
  Edition?: IndexEdition | null;
  RoleArn?: string | null;
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | null;
  Status?: IndexStatus | null;
  Description?: string | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
  DocumentMetadataConfigurations?: DocumentMetadataConfiguration[] | null;
  IndexStatistics?: IndexStatistics | null;
  ErrorMessage?: string | null;
  CapacityUnits?: CapacityUnitsConfiguration | null;
  UserTokenConfigurations?: UserTokenConfiguration[] | null;
  UserContextPolicy?: UserContextPolicy | null;
}

// refs: 1 - tags: named, output
export interface DescribeThesaurusResponse {
  Id?: string | null;
  IndexId?: string | null;
  Name?: string | null;
  Description?: string | null;
  Status?: ThesaurusStatus | null;
  ErrorMessage?: string | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
  RoleArn?: string | null;
  SourceS3Path?: S3Path | null;
  FileSizeBytes?: number | null;
  TermCount?: number | null;
  SynonymRuleCount?: number | null;
}

// refs: 1 - tags: named, output
export interface ListDataSourceSyncJobsResponse {
  History?: DataSourceSyncJob[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListDataSourcesResponse {
  SummaryItems?: DataSourceSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListFaqsResponse {
  NextToken?: string | null;
  FaqSummaryItems?: FaqSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListIndicesResponse {
  IndexConfigurationSummaryItems?: IndexConfigurationSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface ListThesauriResponse {
  NextToken?: string | null;
  ThesaurusSummaryItems?: ThesaurusSummary[] | null;
}

// refs: 1 - tags: named, output
export interface QueryResult {
  QueryId?: string | null;
  ResultItems?: QueryResultItem[] | null;
  FacetResults?: FacetResult[] | null;
  TotalNumberOfResults?: number | null;
}

// refs: 1 - tags: named, output
export interface StartDataSourceSyncJobResponse {
  ExecutionId?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: input, named, interface
export interface DataSourceSyncJobMetricTarget {
  DataSourceId: string;
  DataSourceSyncJobId: string;
}

// refs: 1 - tags: input, named, interface
export interface Document {
  Id: string;
  Title?: string | null;
  Blob?: Uint8Array | string | null;
  S3Path?: S3Path | null;
  Attributes?: DocumentAttribute[] | null;
  AccessControlList?: Principal[] | null;
  ContentType?: ContentType | null;
}

// refs: 9 - tags: input, named, interface, output
export interface S3Path {
  Bucket: string;
  Key: string;
}

// refs: 9 - tags: input, named, interface, output
export interface DocumentAttribute {
  Key: string;
  Value: DocumentAttributeValue;
}

// refs: 10 - tags: input, named, interface, output
export interface DocumentAttributeValue {
  StringValue?: string | null;
  StringListValue?: string[] | null;
  LongValue?: number | null;
  DateValue?: Date | number | null;
}

// refs: 1 - tags: input, named, interface
export interface Principal {
  Name: string;
  Type: PrincipalType;
  Access: ReadAccessType;
}

// refs: 1 - tags: input, named, enum
export type PrincipalType =
| "USER"
| "GROUP"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ReadAccessType =
| "ALLOW"
| "DENY"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type ContentType =
| "PDF"
| "HTML"
| "MS_WORD"
| "PLAIN_TEXT"
| "PPT"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type DataSourceType =
| "S3"
| "SHAREPOINT"
| "DATABASE"
| "SALESFORCE"
| "ONEDRIVE"
| "SERVICENOW"
| "CUSTOM"
| "CONFLUENCE"
| "GOOGLEDRIVE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface DataSourceConfiguration {
  S3Configuration?: S3DataSourceConfiguration | null;
  SharePointConfiguration?: SharePointConfiguration | null;
  DatabaseConfiguration?: DatabaseConfiguration | null;
  SalesforceConfiguration?: SalesforceConfiguration | null;
  OneDriveConfiguration?: OneDriveConfiguration | null;
  ServiceNowConfiguration?: ServiceNowConfiguration | null;
  ConfluenceConfiguration?: ConfluenceConfiguration | null;
  GoogleDriveConfiguration?: GoogleDriveConfiguration | null;
}

// refs: 3 - tags: input, named, interface, output
export interface S3DataSourceConfiguration {
  BucketName: string;
  InclusionPrefixes?: string[] | null;
  InclusionPatterns?: string[] | null;
  ExclusionPatterns?: string[] | null;
  DocumentsMetadataConfiguration?: DocumentsMetadataConfiguration | null;
  AccessControlListConfiguration?: AccessControlListConfiguration | null;
}

// refs: 3 - tags: input, named, interface, output
export interface DocumentsMetadataConfiguration {
  S3Prefix?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface AccessControlListConfiguration {
  KeyPath?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SharePointConfiguration {
  SharePointVersion: SharePointVersion;
  Urls: string[];
  SecretArn: string;
  CrawlAttachments?: boolean | null;
  UseChangeLog?: boolean | null;
  InclusionPatterns?: string[] | null;
  ExclusionPatterns?: string[] | null;
  VpcConfiguration?: DataSourceVpcConfiguration | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
  DocumentTitleFieldName?: string | null;
  DisableLocalGroups?: boolean | null;
}

// refs: 3 - tags: input, named, enum, output
export type SharePointVersion =
| "SHAREPOINT_ONLINE"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, interface, output
export interface DataSourceVpcConfiguration {
  SubnetIds: string[];
  SecurityGroupIds: string[];
}

// refs: 33 - tags: input, named, interface, output
export interface DataSourceToIndexFieldMapping {
  DataSourceFieldName: string;
  DateFieldFormat?: string | null;
  IndexFieldName: string;
}

// refs: 3 - tags: input, named, interface, output
export interface DatabaseConfiguration {
  DatabaseEngineType: DatabaseEngineType;
  ConnectionConfiguration: ConnectionConfiguration;
  VpcConfiguration?: DataSourceVpcConfiguration | null;
  ColumnConfiguration: ColumnConfiguration;
  AclConfiguration?: AclConfiguration | null;
  SqlConfiguration?: SqlConfiguration | null;
}

// refs: 3 - tags: input, named, enum, output
export type DatabaseEngineType =
| "RDS_AURORA_MYSQL"
| "RDS_AURORA_POSTGRESQL"
| "RDS_MYSQL"
| "RDS_POSTGRESQL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ConnectionConfiguration {
  DatabaseHost: string;
  DatabasePort: number;
  DatabaseName: string;
  TableName: string;
  SecretArn: string;
}

// refs: 3 - tags: input, named, interface, output
export interface ColumnConfiguration {
  DocumentIdColumnName: string;
  DocumentDataColumnName: string;
  DocumentTitleColumnName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
  ChangeDetectingColumns: string[];
}

// refs: 3 - tags: input, named, interface, output
export interface AclConfiguration {
  AllowedGroupsColumnName: string;
}

// refs: 3 - tags: input, named, interface, output
export interface SqlConfiguration {
  QueryIdentifiersEnclosingOption?: QueryIdentifiersEnclosingOption | null;
}

// refs: 3 - tags: input, named, enum, output
export type QueryIdentifiersEnclosingOption =
| "DOUBLE_QUOTES"
| "NONE"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SalesforceConfiguration {
  ServerUrl: string;
  SecretArn: string;
  StandardObjectConfigurations?: SalesforceStandardObjectConfiguration[] | null;
  KnowledgeArticleConfiguration?: SalesforceKnowledgeArticleConfiguration | null;
  ChatterFeedConfiguration?: SalesforceChatterFeedConfiguration | null;
  CrawlAttachments?: boolean | null;
  StandardObjectAttachmentConfiguration?: SalesforceStandardObjectAttachmentConfiguration | null;
  IncludeAttachmentFilePatterns?: string[] | null;
  ExcludeAttachmentFilePatterns?: string[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SalesforceStandardObjectConfiguration {
  Name: SalesforceStandardObjectName;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, enum, output
export type SalesforceStandardObjectName =
| "ACCOUNT"
| "CAMPAIGN"
| "CASE"
| "CONTACT"
| "CONTRACT"
| "DOCUMENT"
| "GROUP"
| "IDEA"
| "LEAD"
| "OPPORTUNITY"
| "PARTNER"
| "PRICEBOOK"
| "PRODUCT"
| "PROFILE"
| "SOLUTION"
| "TASK"
| "USER"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SalesforceKnowledgeArticleConfiguration {
  IncludedStates: SalesforceKnowledgeArticleState[];
  StandardKnowledgeArticleTypeConfiguration?: SalesforceStandardKnowledgeArticleTypeConfiguration | null;
  CustomKnowledgeArticleTypeConfigurations?: SalesforceCustomKnowledgeArticleTypeConfiguration[] | null;
}

// refs: 3 - tags: input, named, enum, output
export type SalesforceKnowledgeArticleState =
| "DRAFT"
| "PUBLISHED"
| "ARCHIVED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SalesforceStandardKnowledgeArticleTypeConfiguration {
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SalesforceCustomKnowledgeArticleTypeConfiguration {
  Name: string;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface SalesforceChatterFeedConfiguration {
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
  IncludeFilterTypes?: SalesforceChatterFeedIncludeFilterType[] | null;
}

// refs: 3 - tags: input, named, enum, output
export type SalesforceChatterFeedIncludeFilterType =
| "ACTIVE_USER"
| "STANDARD_USER"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface SalesforceStandardObjectAttachmentConfiguration {
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface OneDriveConfiguration {
  TenantDomain: string;
  SecretArn: string;
  OneDriveUsers: OneDriveUsers;
  InclusionPatterns?: string[] | null;
  ExclusionPatterns?: string[] | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
  DisableLocalGroups?: boolean | null;
}

// refs: 3 - tags: input, named, interface, output
export interface OneDriveUsers {
  OneDriveUserList?: string[] | null;
  OneDriveUserS3Path?: S3Path | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ServiceNowConfiguration {
  HostUrl: string;
  SecretArn: string;
  ServiceNowBuildVersion: ServiceNowBuildVersionType;
  KnowledgeArticleConfiguration?: ServiceNowKnowledgeArticleConfiguration | null;
  ServiceCatalogConfiguration?: ServiceNowServiceCatalogConfiguration | null;
}

// refs: 3 - tags: input, named, enum, output
export type ServiceNowBuildVersionType =
| "LONDON"
| "OTHERS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ServiceNowKnowledgeArticleConfiguration {
  CrawlAttachments?: boolean | null;
  IncludeAttachmentFilePatterns?: string[] | null;
  ExcludeAttachmentFilePatterns?: string[] | null;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ServiceNowServiceCatalogConfiguration {
  CrawlAttachments?: boolean | null;
  IncludeAttachmentFilePatterns?: string[] | null;
  ExcludeAttachmentFilePatterns?: string[] | null;
  DocumentDataFieldName: string;
  DocumentTitleFieldName?: string | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceConfiguration {
  ServerUrl: string;
  SecretArn: string;
  Version: ConfluenceVersion;
  SpaceConfiguration?: ConfluenceSpaceConfiguration | null;
  PageConfiguration?: ConfluencePageConfiguration | null;
  BlogConfiguration?: ConfluenceBlogConfiguration | null;
  AttachmentConfiguration?: ConfluenceAttachmentConfiguration | null;
  VpcConfiguration?: DataSourceVpcConfiguration | null;
  InclusionPatterns?: string[] | null;
  ExclusionPatterns?: string[] | null;
}

// refs: 3 - tags: input, named, enum, output
export type ConfluenceVersion =
| "CLOUD"
| "SERVER"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceSpaceConfiguration {
  CrawlPersonalSpaces?: boolean | null;
  CrawlArchivedSpaces?: boolean | null;
  IncludeSpaces?: string[] | null;
  ExcludeSpaces?: string[] | null;
  SpaceFieldMappings?: ConfluenceSpaceToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceSpaceToIndexFieldMapping {
  DataSourceFieldName?: ConfluenceSpaceFieldName | null;
  DateFieldFormat?: string | null;
  IndexFieldName?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type ConfluenceSpaceFieldName =
| "DISPLAY_URL"
| "ITEM_TYPE"
| "SPACE_KEY"
| "URL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ConfluencePageConfiguration {
  PageFieldMappings?: ConfluencePageToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ConfluencePageToIndexFieldMapping {
  DataSourceFieldName?: ConfluencePageFieldName | null;
  DateFieldFormat?: string | null;
  IndexFieldName?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type ConfluencePageFieldName =
| "AUTHOR"
| "CONTENT_STATUS"
| "CREATED_DATE"
| "DISPLAY_URL"
| "ITEM_TYPE"
| "LABELS"
| "MODIFIED_DATE"
| "PARENT_ID"
| "SPACE_KEY"
| "SPACE_NAME"
| "URL"
| "VERSION"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceBlogConfiguration {
  BlogFieldMappings?: ConfluenceBlogToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceBlogToIndexFieldMapping {
  DataSourceFieldName?: ConfluenceBlogFieldName | null;
  DateFieldFormat?: string | null;
  IndexFieldName?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type ConfluenceBlogFieldName =
| "AUTHOR"
| "DISPLAY_URL"
| "ITEM_TYPE"
| "LABELS"
| "PUBLISH_DATE"
| "SPACE_KEY"
| "SPACE_NAME"
| "URL"
| "VERSION"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceAttachmentConfiguration {
  CrawlAttachments?: boolean | null;
  AttachmentFieldMappings?: ConfluenceAttachmentToIndexFieldMapping[] | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ConfluenceAttachmentToIndexFieldMapping {
  DataSourceFieldName?: ConfluenceAttachmentFieldName | null;
  DateFieldFormat?: string | null;
  IndexFieldName?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type ConfluenceAttachmentFieldName =
| "AUTHOR"
| "CONTENT_TYPE"
| "CREATED_DATE"
| "DISPLAY_URL"
| "FILE_SIZE"
| "ITEM_TYPE"
| "PARENT_ID"
| "SPACE_KEY"
| "SPACE_NAME"
| "URL"
| "VERSION"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface GoogleDriveConfiguration {
  SecretArn: string;
  InclusionPatterns?: string[] | null;
  ExclusionPatterns?: string[] | null;
  FieldMappings?: DataSourceToIndexFieldMapping[] | null;
  ExcludeMimeTypes?: string[] | null;
  ExcludeUserAccounts?: string[] | null;
  ExcludeSharedDrives?: string[] | null;
}

// refs: 6 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 3 - tags: input, named, enum, output
export type FaqFileFormat =
| "CSV"
| "CSV_WITH_HEADER"
| "JSON"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, enum, output
export type IndexEdition =
| "DEVELOPER_EDITION"
| "ENTERPRISE_EDITION"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface ServerSideEncryptionConfiguration {
  KmsKeyId?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface UserTokenConfiguration {
  JwtTokenTypeConfiguration?: JwtTokenTypeConfiguration | null;
  JsonTokenTypeConfiguration?: JsonTokenTypeConfiguration | null;
}

// refs: 3 - tags: input, named, interface, output
export interface JwtTokenTypeConfiguration {
  KeyLocation: KeyLocation;
  URL?: string | null;
  SecretManagerArn?: string | null;
  UserNameAttributeField?: string | null;
  GroupAttributeField?: string | null;
  Issuer?: string | null;
  ClaimRegex?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type KeyLocation =
| "URL"
| "SECRET_MANAGER"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface JsonTokenTypeConfiguration {
  UserNameAttributeField: string;
  GroupAttributeField: string;
}

// refs: 3 - tags: input, named, enum, output
export type UserContextPolicy =
| "ATTRIBUTE_FILTER"
| "USER_TOKEN"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface TimeRange {
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
}

// refs: 2 - tags: input, named, enum, output
export type DataSourceSyncJobStatus =
| "FAILED"
| "SUCCEEDED"
| "SYNCING"
| "INCOMPLETE"
| "STOPPING"
| "ABORTED"
| "SYNCING_INDEXING"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, recursed, recursive
export interface AttributeFilter {
  AndAllFilters?: AttributeFilter[] | null;
  OrAllFilters?: AttributeFilter[] | null;
  NotFilter?: AttributeFilter | null;
  EqualsTo?: DocumentAttribute | null;
  ContainsAll?: DocumentAttribute | null;
  ContainsAny?: DocumentAttribute | null;
  GreaterThan?: DocumentAttribute | null;
  GreaterThanOrEquals?: DocumentAttribute | null;
  LessThan?: DocumentAttribute | null;
  LessThanOrEquals?: DocumentAttribute | null;
}

// refs: 1 - tags: input, named, interface
export interface Facet {
  DocumentAttributeKey?: string | null;
}

// refs: 2 - tags: input, named, enum, output
export type QueryResultType =
| "DOCUMENT"
| "QUESTION_ANSWER"
| "ANSWER"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface SortingConfiguration {
  DocumentAttributeKey: string;
  SortOrder: SortOrder;
}

// refs: 1 - tags: input, named, enum
export type SortOrder =
| "DESC"
| "ASC"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface UserContext {
  Token?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface ClickFeedback {
  ResultId: string;
  ClickTime: Date | number;
}

// refs: 1 - tags: input, named, interface
export interface RelevanceFeedback {
  ResultId: string;
  RelevanceValue: RelevanceType;
}

// refs: 1 - tags: input, named, enum
export type RelevanceType =
| "RELEVANT"
| "NOT_RELEVANT"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface DocumentMetadataConfiguration {
  Name: string;
  Type: DocumentAttributeValueType;
  Relevance?: Relevance | null;
  Search?: Search | null;
}

// refs: 3 - tags: input, named, enum, output
export type DocumentAttributeValueType =
| "STRING_VALUE"
| "STRING_LIST_VALUE"
| "LONG_VALUE"
| "DATE_VALUE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface Relevance {
  Freshness?: boolean | null;
  Importance?: number | null;
  Duration?: string | null;
  RankOrder?: Order | null;
  ValueImportanceMap?: { [key: string]: number | null | undefined } | null;
}

// refs: 2 - tags: input, named, enum, output
export type Order =
| "ASCENDING"
| "DESCENDING"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface Search {
  Facetable?: boolean | null;
  Searchable?: boolean | null;
  Displayable?: boolean | null;
  Sortable?: boolean | null;
}

// refs: 2 - tags: input, named, interface, output
export interface CapacityUnitsConfiguration {
  StorageCapacityUnits: number;
  QueryCapacityUnits: number;
}

// refs: 1 - tags: output, named, interface
export interface BatchDeleteDocumentResponseFailedDocument {
  Id?: string | null;
  ErrorCode?: ErrorCode | null;
  ErrorMessage?: string | null;
}

// refs: 3 - tags: output, named, enum
export type ErrorCode =
| "InternalError"
| "InvalidRequest"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface BatchPutDocumentResponseFailedDocument {
  Id?: string | null;
  ErrorCode?: ErrorCode | null;
  ErrorMessage?: string | null;
}

// refs: 2 - tags: output, named, enum
export type DataSourceStatus =
| "CREATING"
| "DELETING"
| "FAILED"
| "UPDATING"
| "ACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type FaqStatus =
| "CREATING"
| "UPDATING"
| "ACTIVE"
| "DELETING"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type IndexStatus =
| "CREATING"
| "ACTIVE"
| "DELETING"
| "FAILED"
| "UPDATING"
| "SYSTEM_UPDATING"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface IndexStatistics {
  FaqStatistics: FaqStatistics;
  TextDocumentStatistics: TextDocumentStatistics;
}

// refs: 1 - tags: output, named, interface
export interface FaqStatistics {
  IndexedQuestionAnswersCount: number;
}

// refs: 1 - tags: output, named, interface
export interface TextDocumentStatistics {
  IndexedTextDocumentsCount: number;
  IndexedTextBytes: number;
}

// refs: 2 - tags: output, named, enum
export type ThesaurusStatus =
| "CREATING"
| "ACTIVE"
| "DELETING"
| "UPDATING"
| "ACTIVE_BUT_UPDATE_FAILED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DataSourceSyncJob {
  ExecutionId?: string | null;
  StartTime?: Date | number | null;
  EndTime?: Date | number | null;
  Status?: DataSourceSyncJobStatus | null;
  ErrorMessage?: string | null;
  ErrorCode?: ErrorCode | null;
  DataSourceErrorCode?: string | null;
  Metrics?: DataSourceSyncJobMetrics | null;
}

// refs: 1 - tags: output, named, interface
export interface DataSourceSyncJobMetrics {
  DocumentsAdded?: string | null;
  DocumentsModified?: string | null;
  DocumentsDeleted?: string | null;
  DocumentsFailed?: string | null;
  DocumentsScanned?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface DataSourceSummary {
  Name?: string | null;
  Id?: string | null;
  Type?: DataSourceType | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
  Status?: DataSourceStatus | null;
}

// refs: 1 - tags: output, named, interface
export interface FaqSummary {
  Id?: string | null;
  Name?: string | null;
  Status?: FaqStatus | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
  FileFormat?: FaqFileFormat | null;
}

// refs: 1 - tags: output, named, interface
export interface IndexConfigurationSummary {
  Name?: string | null;
  Id?: string | null;
  Edition?: IndexEdition | null;
  CreatedAt: Date | number;
  UpdatedAt: Date | number;
  Status: IndexStatus;
}

// refs: 1 - tags: output, named, interface
export interface ThesaurusSummary {
  Id?: string | null;
  Name?: string | null;
  Status?: ThesaurusStatus | null;
  CreatedAt?: Date | number | null;
  UpdatedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface QueryResultItem {
  Id?: string | null;
  Type?: QueryResultType | null;
  AdditionalAttributes?: AdditionalResultAttribute[] | null;
  DocumentId?: string | null;
  DocumentTitle?: TextWithHighlights | null;
  DocumentExcerpt?: TextWithHighlights | null;
  DocumentURI?: string | null;
  DocumentAttributes?: DocumentAttribute[] | null;
  ScoreAttributes?: ScoreAttributes | null;
  FeedbackToken?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface AdditionalResultAttribute {
  Key: string;
  ValueType: AdditionalResultAttributeValueType;
  Value: AdditionalResultAttributeValue;
}

// refs: 1 - tags: output, named, enum
export type AdditionalResultAttributeValueType =
| "TEXT_WITH_HIGHLIGHTS_VALUE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface AdditionalResultAttributeValue {
  TextWithHighlightsValue?: TextWithHighlights | null;
}

// refs: 3 - tags: output, named, interface
export interface TextWithHighlights {
  Text?: string | null;
  Highlights?: Highlight[] | null;
}

// refs: 3 - tags: output, named, interface
export interface Highlight {
  BeginOffset: number;
  EndOffset: number;
  TopAnswer?: boolean | null;
  Type?: HighlightType | null;
}

// refs: 3 - tags: output, named, enum
export type HighlightType =
| "STANDARD"
| "THESAURUS_SYNONYM"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ScoreAttributes {
  ScoreConfidence?: ScoreConfidence | null;
}

// refs: 1 - tags: output, named, enum
export type ScoreConfidence =
| "VERY_HIGH"
| "HIGH"
| "MEDIUM"
| "LOW"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface FacetResult {
  DocumentAttributeKey?: string | null;
  DocumentAttributeValueType?: DocumentAttributeValueType | null;
  DocumentAttributeValueCountPairs?: DocumentAttributeValueCountPair[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DocumentAttributeValueCountPair {
  DocumentAttributeValue?: DocumentAttributeValue | null;
  Count?: number | null;
}
