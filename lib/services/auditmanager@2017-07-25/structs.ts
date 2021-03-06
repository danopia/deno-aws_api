// Autogenerated API structures for: AWS Audit Manager

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateAssessmentReportEvidenceFolderRequest {
  assessmentId: string;
  evidenceFolderId: string;
}

// refs: 1 - tags: named, input
export interface BatchAssociateAssessmentReportEvidenceRequest {
  assessmentId: string;
  evidenceFolderId: string;
  evidenceIds: string[];
}

// refs: 1 - tags: named, input
export interface BatchCreateDelegationByAssessmentRequest {
  createDelegationRequests: CreateDelegationRequest[];
  assessmentId: string;
}

// refs: 1 - tags: named, input
export interface BatchDeleteDelegationByAssessmentRequest {
  delegationIds: string[];
  assessmentId: string;
}

// refs: 1 - tags: named, input
export interface BatchDisassociateAssessmentReportEvidenceRequest {
  assessmentId: string;
  evidenceFolderId: string;
  evidenceIds: string[];
}

// refs: 1 - tags: named, input
export interface BatchImportEvidenceToAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  manualEvidence: ManualEvidence[];
}

// refs: 1 - tags: named, input
export interface CreateAssessmentRequest {
  name: string;
  description?: string | null;
  assessmentReportsDestination: AssessmentReportsDestination;
  scope: Scope;
  roles: Role[];
  frameworkId: string;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateAssessmentFrameworkRequest {
  name: string;
  description?: string | null;
  complianceType?: string | null;
  controlSets: CreateAssessmentFrameworkControlSet[];
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface CreateAssessmentReportRequest {
  name: string;
  description?: string | null;
  assessmentId: string;
}

// refs: 1 - tags: named, input
export interface CreateControlRequest {
  name: string;
  description?: string | null;
  testingInformation?: string | null;
  actionPlanTitle?: string | null;
  actionPlanInstructions?: string | null;
  controlMappingSources: CreateControlMappingSource[];
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteAssessmentRequest {
  assessmentId: string;
}

// refs: 1 - tags: named, input
export interface DeleteAssessmentFrameworkRequest {
  frameworkId: string;
}

// refs: 1 - tags: named, input
export interface DeleteAssessmentReportRequest {
  assessmentId: string;
  assessmentReportId: string;
}

// refs: 1 - tags: named, input
export interface DeleteControlRequest {
  controlId: string;
}

// refs: 1 - tags: named, input
export interface DeregisterAccountRequest {
}

// refs: 1 - tags: named, input
export interface DeregisterOrganizationAdminAccountRequest {
  adminAccountId?: string | null;
}

// refs: 1 - tags: named, input
export interface DisassociateAssessmentReportEvidenceFolderRequest {
  assessmentId: string;
  evidenceFolderId: string;
}

// refs: 1 - tags: named, input
export interface GetAccountStatusRequest {
}

// refs: 1 - tags: named, input
export interface GetAssessmentRequest {
  assessmentId: string;
}

// refs: 1 - tags: named, input
export interface GetAssessmentFrameworkRequest {
  frameworkId: string;
}

// refs: 1 - tags: named, input
export interface GetAssessmentReportUrlRequest {
  assessmentReportId: string;
  assessmentId: string;
}

// refs: 1 - tags: named, input
export interface GetChangeLogsRequest {
  assessmentId: string;
  controlSetId?: string | null;
  controlId?: string | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetControlRequest {
  controlId: string;
}

// refs: 1 - tags: named, input
export interface GetDelegationsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetEvidenceRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
  evidenceId: string;
}

// refs: 1 - tags: named, input
export interface GetEvidenceByEvidenceFolderRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetEvidenceFolderRequest {
  assessmentId: string;
  controlSetId: string;
  evidenceFolderId: string;
}

// refs: 1 - tags: named, input
export interface GetEvidenceFoldersByAssessmentRequest {
  assessmentId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetEvidenceFoldersByAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetOrganizationAdminAccountRequest {
}

// refs: 1 - tags: named, input
export interface GetServicesInScopeRequest {
}

// refs: 1 - tags: named, input
export interface GetSettingsRequest {
  attribute: SettingAttribute;
}

// refs: 1 - tags: named, input
export interface ListAssessmentFrameworksRequest {
  frameworkType: FrameworkType;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAssessmentReportsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListAssessmentsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListControlsRequest {
  controlType: ControlType;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListKeywordsForDataSourceRequest {
  source: SourceType;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListNotificationsRequest {
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface RegisterAccountRequest {
  kmsKey?: string | null;
  delegatedAdminAccount?: string | null;
}

// refs: 1 - tags: named, input
export interface RegisterOrganizationAdminAccountRequest {
  adminAccountId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateAssessmentRequest {
  assessmentId: string;
  assessmentName?: string | null;
  assessmentDescription?: string | null;
  scope: Scope;
  assessmentReportsDestination?: AssessmentReportsDestination | null;
  roles?: Role[] | null;
}

// refs: 1 - tags: named, input
export interface UpdateAssessmentControlRequest {
  assessmentId: string;
  controlSetId: string;
  controlId: string;
  controlStatus?: ControlStatus | null;
  commentBody?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdateAssessmentControlSetStatusRequest {
  assessmentId: string;
  controlSetId: string;
  status: ControlSetStatus;
  comment: string;
}

// refs: 1 - tags: named, input
export interface UpdateAssessmentFrameworkRequest {
  frameworkId: string;
  name: string;
  description?: string | null;
  complianceType?: string | null;
  controlSets: UpdateAssessmentFrameworkControlSet[];
}

// refs: 1 - tags: named, input
export interface UpdateAssessmentStatusRequest {
  assessmentId: string;
  status: AssessmentStatus;
}

// refs: 1 - tags: named, input
export interface UpdateControlRequest {
  controlId: string;
  name: string;
  description?: string | null;
  testingInformation?: string | null;
  actionPlanTitle?: string | null;
  actionPlanInstructions?: string | null;
  controlMappingSources: ControlMappingSource[];
}

// refs: 1 - tags: named, input
export interface UpdateSettingsRequest {
  snsTopic?: string | null;
  defaultAssessmentReportsDestination?: AssessmentReportsDestination | null;
  defaultProcessOwners?: Role[] | null;
  kmsKey?: string | null;
}

// refs: 1 - tags: named, input
export interface ValidateAssessmentReportIntegrityRequest {
  s3RelativePath: string;
}

// refs: 1 - tags: named, output
export interface AssociateAssessmentReportEvidenceFolderResponse {
}

// refs: 1 - tags: named, output
export interface BatchAssociateAssessmentReportEvidenceResponse {
  evidenceIds?: string[] | null;
  errors?: AssessmentReportEvidenceError[] | null;
}

// refs: 1 - tags: named, output
export interface BatchCreateDelegationByAssessmentResponse {
  delegations?: Delegation[] | null;
  errors?: BatchCreateDelegationByAssessmentError[] | null;
}

// refs: 1 - tags: named, output
export interface BatchDeleteDelegationByAssessmentResponse {
  errors?: BatchDeleteDelegationByAssessmentError[] | null;
}

// refs: 1 - tags: named, output
export interface BatchDisassociateAssessmentReportEvidenceResponse {
  evidenceIds?: string[] | null;
  errors?: AssessmentReportEvidenceError[] | null;
}

// refs: 1 - tags: named, output
export interface BatchImportEvidenceToAssessmentControlResponse {
  errors?: BatchImportEvidenceToAssessmentControlError[] | null;
}

// refs: 1 - tags: named, output
export interface CreateAssessmentResponse {
  assessment?: Assessment | null;
}

// refs: 1 - tags: named, output
export interface CreateAssessmentFrameworkResponse {
  framework?: Framework | null;
}

// refs: 1 - tags: named, output
export interface CreateAssessmentReportResponse {
  assessmentReport?: AssessmentReport | null;
}

// refs: 1 - tags: named, output
export interface CreateControlResponse {
  control?: Control | null;
}

// refs: 1 - tags: named, output
export interface DeleteAssessmentResponse {
}

// refs: 1 - tags: named, output
export interface DeleteAssessmentFrameworkResponse {
}

// refs: 1 - tags: named, output
export interface DeleteAssessmentReportResponse {
}

// refs: 1 - tags: named, output
export interface DeleteControlResponse {
}

// refs: 1 - tags: named, output
export interface DeregisterAccountResponse {
  status?: AccountStatus | null;
}

// refs: 1 - tags: named, output
export interface DeregisterOrganizationAdminAccountResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateAssessmentReportEvidenceFolderResponse {
}

// refs: 1 - tags: named, output
export interface GetAccountStatusResponse {
  status?: AccountStatus | null;
}

// refs: 1 - tags: named, output
export interface GetAssessmentResponse {
  assessment?: Assessment | null;
}

// refs: 1 - tags: named, output
export interface GetAssessmentFrameworkResponse {
  framework?: Framework | null;
}

// refs: 1 - tags: named, output
export interface GetAssessmentReportUrlResponse {
  preSignedUrl?: URL | null;
}

// refs: 1 - tags: named, output
export interface GetChangeLogsResponse {
  changeLogs?: ChangeLog[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetControlResponse {
  control?: Control | null;
}

// refs: 1 - tags: named, output
export interface GetDelegationsResponse {
  delegations?: DelegationMetadata[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetEvidenceResponse {
  evidence?: Evidence | null;
}

// refs: 1 - tags: named, output
export interface GetEvidenceByEvidenceFolderResponse {
  evidence?: Evidence[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetEvidenceFolderResponse {
  evidenceFolder?: AssessmentEvidenceFolder | null;
}

// refs: 1 - tags: named, output
export interface GetEvidenceFoldersByAssessmentResponse {
  evidenceFolders?: AssessmentEvidenceFolder[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetEvidenceFoldersByAssessmentControlResponse {
  evidenceFolders?: AssessmentEvidenceFolder[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetOrganizationAdminAccountResponse {
  adminAccountId?: string | null;
  organizationId?: string | null;
}

// refs: 1 - tags: named, output
export interface GetServicesInScopeResponse {
  serviceMetadata?: ServiceMetadata[] | null;
}

// refs: 1 - tags: named, output
export interface GetSettingsResponse {
  settings?: Settings | null;
}

// refs: 1 - tags: named, output
export interface ListAssessmentFrameworksResponse {
  frameworkMetadataList?: AssessmentFrameworkMetadata[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAssessmentReportsResponse {
  assessmentReports?: AssessmentReportMetadata[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListAssessmentsResponse {
  assessmentMetadata?: AssessmentMetadataItem[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListControlsResponse {
  controlMetadataList?: ControlMetadata[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListKeywordsForDataSourceResponse {
  keywords?: string[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListNotificationsResponse {
  notifications?: Notification[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface RegisterAccountResponse {
  status?: AccountStatus | null;
}

// refs: 1 - tags: named, output
export interface RegisterOrganizationAdminAccountResponse {
  adminAccountId?: string | null;
  organizationId?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateAssessmentResponse {
  assessment?: Assessment | null;
}

// refs: 1 - tags: named, output
export interface UpdateAssessmentControlResponse {
  control?: AssessmentControl | null;
}

// refs: 1 - tags: named, output
export interface UpdateAssessmentControlSetStatusResponse {
  controlSet?: AssessmentControlSet | null;
}

// refs: 1 - tags: named, output
export interface UpdateAssessmentFrameworkResponse {
  framework?: Framework | null;
}

// refs: 1 - tags: named, output
export interface UpdateAssessmentStatusResponse {
  assessment?: Assessment | null;
}

// refs: 1 - tags: named, output
export interface UpdateControlResponse {
  control?: Control | null;
}

// refs: 1 - tags: named, output
export interface UpdateSettingsResponse {
  settings?: Settings | null;
}

// refs: 1 - tags: named, output
export interface ValidateAssessmentReportIntegrityResponse {
  signatureValid?: boolean | null;
  signatureAlgorithm?: string | null;
  signatureDateTime?: string | null;
  signatureKeyId?: string | null;
  validationErrors?: string[] | null;
}

// refs: 2 - tags: input, named, interface, output
export interface CreateDelegationRequest {
  comment?: string | null;
  controlSetId?: string | null;
  roleArn?: string | null;
  roleType?: RoleType | null;
}

// refs: 28 - tags: input, named, enum, output
export type RoleType =
| "PROCESS_OWNER"
| "RESOURCE_OWNER"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface ManualEvidence {
  s3ResourcePath?: string | null;
}

// refs: 9 - tags: input, named, interface, output
export interface AssessmentReportsDestination {
  destinationType?: AssessmentReportDestinationType | null;
  destination?: string | null;
}

// refs: 9 - tags: input, named, enum, output
export type AssessmentReportDestinationType =
| "S3"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface Scope {
  awsAccounts?: AWSAccount[] | null;
  awsServices?: AWSService[] | null;
}

// refs: 10 - tags: input, named, interface, output
export interface AWSAccount {
  id?: string | null;
  emailAddress?: string | null;
  name?: string | null;
}

// refs: 6 - tags: input, named, interface, output
export interface AWSService {
  serviceName?: string | null;
}

// refs: 15 - tags: input, named, interface, output
export interface Role {
  roleType?: RoleType | null;
  roleArn?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface CreateAssessmentFrameworkControlSet {
  name?: string | null;
  controls?: CreateAssessmentFrameworkControl[] | null;
}

// refs: 2 - tags: input, named, interface
export interface CreateAssessmentFrameworkControl {
  id?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface CreateControlMappingSource {
  sourceName?: string | null;
  sourceDescription?: string | null;
  sourceSetUpOption?: SourceSetUpOption | null;
  sourceType?: SourceType | null;
  sourceKeyword?: SourceKeyword | null;
  sourceFrequency?: SourceFrequency | null;
  troubleshootingText?: string | null;
}

// refs: 8 - tags: input, named, enum, output
export type SourceSetUpOption =
| "System_Controls_Mapping"
| "Procedural_Controls_Mapping"
| cmnP.UnexpectedEnumValue;

// refs: 9 - tags: input, named, enum, output
export type SourceType =
| "AWS_Cloudtrail"
| "AWS_Config"
| "AWS_Security_Hub"
| "AWS_API_Call"
| "MANUAL"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: input, named, interface, output
export interface SourceKeyword {
  keywordInputType?: KeywordInputType | null;
  keywordValue?: string | null;
}

// refs: 8 - tags: input, named, enum, output
export type KeywordInputType =
| "SELECT_FROM_LIST"
| cmnP.UnexpectedEnumValue;

// refs: 8 - tags: input, named, enum, output
export type SourceFrequency =
| "DAILY"
| "WEEKLY"
| "MONTHLY"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type SettingAttribute =
| "ALL"
| "IS_AWS_ORG_ENABLED"
| "SNS_TOPIC"
| "DEFAULT_ASSESSMENT_REPORTS_DESTINATION"
| "DEFAULT_PROCESS_OWNERS"
| cmnP.UnexpectedEnumValue;

// refs: 5 - tags: input, named, enum, output
export type FrameworkType =
| "Standard"
| "Custom"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, enum, output
export type ControlType =
| "Standard"
| "Custom"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, enum, output
export type ControlStatus =
| "UNDER_REVIEW"
| "REVIEWED"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, enum, output
export type ControlSetStatus =
| "ACTIVE"
| "UNDER_REVIEW"
| "REVIEWED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface UpdateAssessmentFrameworkControlSet {
  id?: string | null;
  name?: string | null;
  controls?: CreateAssessmentFrameworkControl[] | null;
}

// refs: 6 - tags: input, named, enum, output
export type AssessmentStatus =
| "ACTIVE"
| "INACTIVE"
| cmnP.UnexpectedEnumValue;

// refs: 7 - tags: input, named, interface, output
export interface ControlMappingSource {
  sourceId?: string | null;
  sourceName?: string | null;
  sourceDescription?: string | null;
  sourceSetUpOption?: SourceSetUpOption | null;
  sourceType?: SourceType | null;
  sourceKeyword?: SourceKeyword | null;
  sourceFrequency?: SourceFrequency | null;
  troubleshootingText?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface AssessmentReportEvidenceError {
  evidenceId?: string | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

// refs: 11 - tags: output, named, interface
export interface Delegation {
  id?: string | null;
  assessmentName?: string | null;
  assessmentId?: string | null;
  status?: DelegationStatus | null;
  roleArn?: string | null;
  roleType?: RoleType | null;
  creationTime?: Date | number | null;
  lastUpdated?: Date | number | null;
  controlSetId?: string | null;
  comment?: string | null;
  createdBy?: string | null;
}

// refs: 12 - tags: output, named, enum
export type DelegationStatus =
| "IN_PROGRESS"
| "UNDER_REVIEW"
| "COMPLETE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface BatchCreateDelegationByAssessmentError {
  createDelegationRequest?: CreateDelegationRequest | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface BatchDeleteDelegationByAssessmentError {
  delegationId?: string | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface BatchImportEvidenceToAssessmentControlError {
  manualEvidence?: ManualEvidence | null;
  errorCode?: string | null;
  errorMessage?: string | null;
}

// refs: 4 - tags: output, named, interface
export interface Assessment {
  arn?: string | null;
  awsAccount?: AWSAccount | null;
  metadata?: AssessmentMetadata | null;
  framework?: AssessmentFramework | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 4 - tags: output, named, interface
export interface AssessmentMetadata {
  name?: string | null;
  id?: string | null;
  description?: string | null;
  complianceType?: string | null;
  status?: AssessmentStatus | null;
  assessmentReportsDestination?: AssessmentReportsDestination | null;
  scope?: Scope | null;
  roles?: Role[] | null;
  delegations?: Delegation[] | null;
  creationTime?: Date | number | null;
  lastUpdated?: Date | number | null;
}

// refs: 4 - tags: output, named, interface
export interface AssessmentFramework {
  id?: string | null;
  arn?: string | null;
  metadata?: FrameworkMetadata | null;
  controlSets?: AssessmentControlSet[] | null;
}

// refs: 4 - tags: output, named, interface
export interface FrameworkMetadata {
  name?: string | null;
  description?: string | null;
  logo?: string | null;
  complianceType?: string | null;
}

// refs: 5 - tags: output, named, interface
export interface AssessmentControlSet {
  id?: string | null;
  description?: string | null;
  status?: ControlSetStatus | null;
  roles?: Role[] | null;
  controls?: AssessmentControl[] | null;
  delegations?: Delegation[] | null;
  systemEvidenceCount?: number | null;
  manualEvidenceCount?: number | null;
}

// refs: 6 - tags: output, named, interface
export interface AssessmentControl {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  status?: ControlStatus | null;
  response?: ControlResponse | null;
  comments?: ControlComment[] | null;
  evidenceSources?: string[] | null;
  evidenceCount?: number | null;
  assessmentReportEvidenceCount?: number | null;
}

// refs: 6 - tags: output, named, enum
export type ControlResponse =
| "MANUAL"
| "AUTOMATE"
| "DEFER"
| "IGNORE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: output, named, interface
export interface ControlComment {
  authorName?: string | null;
  commentBody?: string | null;
  postedDate?: Date | number | null;
}

// refs: 3 - tags: output, named, interface
export interface Framework {
  arn?: string | null;
  id?: string | null;
  name?: string | null;
  type?: FrameworkType | null;
  complianceType?: string | null;
  description?: string | null;
  logo?: string | null;
  controlSources?: string | null;
  controlSets?: ControlSet[] | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  createdBy?: string | null;
  lastUpdatedBy?: string | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 3 - tags: output, named, interface
export interface ControlSet {
  id?: string | null;
  name?: string | null;
  controls?: Control[] | null;
}

// refs: 6 - tags: output, named, interface
export interface Control {
  arn?: string | null;
  id?: string | null;
  type?: ControlType | null;
  name?: string | null;
  description?: string | null;
  testingInformation?: string | null;
  actionPlanTitle?: string | null;
  actionPlanInstructions?: string | null;
  controlSources?: string | null;
  controlMappingSources?: ControlMappingSource[] | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
  createdBy?: string | null;
  lastUpdatedBy?: string | null;
  tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface AssessmentReport {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  awsAccountId?: string | null;
  assessmentId?: string | null;
  assessmentName?: string | null;
  author?: string | null;
  status?: AssessmentReportStatus | null;
  creationTime?: Date | number | null;
}

// refs: 2 - tags: output, named, enum
export type AssessmentReportStatus =
| "COMPLETE"
| "IN_PROGRESS"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, enum
export type AccountStatus =
| "ACTIVE"
| "INACTIVE"
| "PENDING_ACTIVATION"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface URL {
  hyperlinkName?: string | null;
  link?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ChangeLog {
  objectType?: ObjectTypeEnum | null;
  objectName?: string | null;
  action?: ActionEnum | null;
  createdAt?: Date | number | null;
  createdBy?: string | null;
}

// refs: 1 - tags: output, named, enum
export type ObjectTypeEnum =
| "ASSESSMENT"
| "CONTROL_SET"
| "CONTROL"
| "DELEGATION"
| "ASSESSMENT_REPORT"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, enum
export type ActionEnum =
| "CREATE"
| "UPDATE_METADATA"
| "ACTIVE"
| "INACTIVE"
| "DELETE"
| "UNDER_REVIEW"
| "REVIEWED"
| "IMPORT_EVIDENCE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DelegationMetadata {
  id?: string | null;
  assessmentName?: string | null;
  assessmentId?: string | null;
  status?: DelegationStatus | null;
  roleArn?: string | null;
  creationTime?: Date | number | null;
  controlSetName?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface Evidence {
  dataSource?: string | null;
  evidenceAwsAccountId?: string | null;
  time?: Date | number | null;
  eventSource?: string | null;
  eventName?: string | null;
  evidenceByType?: string | null;
  resourcesIncluded?: Resource[] | null;
  attributes?: { [key: string]: string | null | undefined } | null;
  iamId?: string | null;
  complianceCheck?: string | null;
  awsOrganization?: string | null;
  awsAccountId?: string | null;
  evidenceFolderId?: string | null;
  id?: string | null;
  assessmentReportSelection?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface Resource {
  arn?: string | null;
  value?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface AssessmentEvidenceFolder {
  name?: string | null;
  date?: Date | number | null;
  assessmentId?: string | null;
  controlSetId?: string | null;
  controlId?: string | null;
  id?: string | null;
  dataSource?: string | null;
  author?: string | null;
  totalEvidence?: number | null;
  assessmentReportSelectionCount?: number | null;
  controlName?: string | null;
  evidenceResourcesIncludedCount?: number | null;
  evidenceByTypeConfigurationDataCount?: number | null;
  evidenceByTypeManualCount?: number | null;
  evidenceByTypeComplianceCheckCount?: number | null;
  evidenceByTypeComplianceCheckIssuesCount?: number | null;
  evidenceByTypeUserActivityCount?: number | null;
  evidenceAwsServiceSourceCount?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface ServiceMetadata {
  name?: string | null;
  displayName?: string | null;
  description?: string | null;
  category?: string | null;
}

// refs: 2 - tags: output, named, interface
export interface Settings {
  isAwsOrgEnabled?: boolean | null;
  snsTopic?: string | null;
  defaultAssessmentReportsDestination?: AssessmentReportsDestination | null;
  defaultProcessOwners?: Role[] | null;
  kmsKey?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface AssessmentFrameworkMetadata {
  arn?: string | null;
  id?: string | null;
  type?: FrameworkType | null;
  name?: string | null;
  description?: string | null;
  logo?: string | null;
  complianceType?: string | null;
  controlsCount?: number | null;
  controlSetsCount?: number | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface AssessmentReportMetadata {
  id?: string | null;
  name?: string | null;
  description?: string | null;
  assessmentId?: string | null;
  assessmentName?: string | null;
  author?: string | null;
  status?: AssessmentReportStatus | null;
  creationTime?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface AssessmentMetadataItem {
  name?: string | null;
  id?: string | null;
  complianceType?: string | null;
  status?: AssessmentStatus | null;
  roles?: Role[] | null;
  delegations?: Delegation[] | null;
  creationTime?: Date | number | null;
  lastUpdated?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface ControlMetadata {
  arn?: string | null;
  id?: string | null;
  name?: string | null;
  controlSources?: string | null;
  createdAt?: Date | number | null;
  lastUpdatedAt?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface Notification {
  id?: string | null;
  assessmentId?: string | null;
  assessmentName?: string | null;
  controlSetId?: string | null;
  controlSetName?: string | null;
  description?: string | null;
  eventTime?: Date | number | null;
  source?: string | null;
}
