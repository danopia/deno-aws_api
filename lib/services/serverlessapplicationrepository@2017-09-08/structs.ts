// Autogenerated API structures for: AWSServerlessApplicationRepository

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateApplicationRequest {
  Author: string;
  Description: string;
  HomePageUrl?: string | null;
  Labels?: string[] | null;
  LicenseBody?: string | null;
  LicenseUrl?: string | null;
  Name: string;
  ReadmeBody?: string | null;
  ReadmeUrl?: string | null;
  SemanticVersion?: string | null;
  SourceCodeArchiveUrl?: string | null;
  SourceCodeUrl?: string | null;
  SpdxLicenseId?: string | null;
  TemplateBody?: string | null;
  TemplateUrl?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateApplicationVersionRequest {
  ApplicationId: string;
  SemanticVersion: string;
  SourceCodeArchiveUrl?: string | null;
  SourceCodeUrl?: string | null;
  TemplateBody?: string | null;
  TemplateUrl?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateCloudFormationChangeSetRequest {
  ApplicationId: string;
  Capabilities?: string[] | null;
  ChangeSetName?: string | null;
  ClientToken?: string | null;
  Description?: string | null;
  NotificationArns?: string[] | null;
  ParameterOverrides?: ParameterValue[] | null;
  ResourceTypes?: string[] | null;
  RollbackConfiguration?: RollbackConfiguration | null;
  SemanticVersion?: string | null;
  StackName: string;
  Tags?: Tag[] | null;
  TemplateId?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateCloudFormationTemplateRequest {
  ApplicationId: string;
  SemanticVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteApplicationRequest {
  ApplicationId: string;
}

// refs: 1 - tags: named, input
export interface GetApplicationRequest {
  ApplicationId: string;
  SemanticVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface GetApplicationPolicyRequest {
  ApplicationId: string;
}

// refs: 1 - tags: named, input
export interface GetCloudFormationTemplateRequest {
  ApplicationId: string;
  TemplateId: string;
}

// refs: 1 - tags: named, input
export interface ListApplicationDependenciesRequest {
  ApplicationId: string;
  MaxItems?: number | null;
  NextToken?: string | null;
  SemanticVersion?: string | null;
}

// refs: 1 - tags: named, input
export interface ListApplicationVersionsRequest {
  ApplicationId: string;
  MaxItems?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListApplicationsRequest {
  MaxItems?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface PutApplicationPolicyRequest {
  ApplicationId: string;
  Statements: ApplicationPolicyStatement[];
}

// refs: 1 - tags: named, input
export interface UnshareApplicationRequest {
  ApplicationId: string;
  OrganizationId: string;
}

// refs: 1 - tags: named, input
export interface UpdateApplicationRequest {
  ApplicationId: string;
  Author?: string | null;
  Description?: string | null;
  HomePageUrl?: string | null;
  Labels?: string[] | null;
  ReadmeBody?: string | null;
  ReadmeUrl?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationResponse {
  ApplicationId?: string | null;
  Author?: string | null;
  CreationTime?: string | null;
  Description?: string | null;
  HomePageUrl?: string | null;
  IsVerifiedAuthor?: boolean | null;
  Labels?: string[] | null;
  LicenseUrl?: string | null;
  Name?: string | null;
  ReadmeUrl?: string | null;
  SpdxLicenseId?: string | null;
  VerifiedAuthorUrl?: string | null;
  Version?: Version | null;
}

// refs: 1 - tags: named, output
export interface CreateApplicationVersionResponse {
  ApplicationId?: string | null;
  CreationTime?: string | null;
  ParameterDefinitions?: ParameterDefinition[] | null;
  RequiredCapabilities?: Capability[] | null;
  ResourcesSupported?: boolean | null;
  SemanticVersion?: string | null;
  SourceCodeArchiveUrl?: string | null;
  SourceCodeUrl?: string | null;
  TemplateUrl?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateCloudFormationChangeSetResponse {
  ApplicationId?: string | null;
  ChangeSetId?: string | null;
  SemanticVersion?: string | null;
  StackId?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateCloudFormationTemplateResponse {
  ApplicationId?: string | null;
  CreationTime?: string | null;
  ExpirationTime?: string | null;
  SemanticVersion?: string | null;
  Status?: Status | null;
  TemplateId?: string | null;
  TemplateUrl?: string | null;
}

// refs: 1 - tags: named, output
export interface GetApplicationResponse {
  ApplicationId?: string | null;
  Author?: string | null;
  CreationTime?: string | null;
  Description?: string | null;
  HomePageUrl?: string | null;
  IsVerifiedAuthor?: boolean | null;
  Labels?: string[] | null;
  LicenseUrl?: string | null;
  Name?: string | null;
  ReadmeUrl?: string | null;
  SpdxLicenseId?: string | null;
  VerifiedAuthorUrl?: string | null;
  Version?: Version | null;
}

// refs: 1 - tags: named, output
export interface GetApplicationPolicyResponse {
  Statements?: ApplicationPolicyStatement[] | null;
}

// refs: 1 - tags: named, output
export interface GetCloudFormationTemplateResponse {
  ApplicationId?: string | null;
  CreationTime?: string | null;
  ExpirationTime?: string | null;
  SemanticVersion?: string | null;
  Status?: Status | null;
  TemplateId?: string | null;
  TemplateUrl?: string | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationDependenciesResponse {
  Dependencies?: ApplicationDependencySummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationVersionsResponse {
  NextToken?: string | null;
  Versions?: VersionSummary[] | null;
}

// refs: 1 - tags: named, output
export interface ListApplicationsResponse {
  Applications?: ApplicationSummary[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface PutApplicationPolicyResponse {
  Statements?: ApplicationPolicyStatement[] | null;
}

// refs: 1 - tags: named, output
export interface UpdateApplicationResponse {
  ApplicationId?: string | null;
  Author?: string | null;
  CreationTime?: string | null;
  Description?: string | null;
  HomePageUrl?: string | null;
  IsVerifiedAuthor?: boolean | null;
  Labels?: string[] | null;
  LicenseUrl?: string | null;
  Name?: string | null;
  ReadmeUrl?: string | null;
  SpdxLicenseId?: string | null;
  VerifiedAuthorUrl?: string | null;
  Version?: Version | null;
}

// refs: 1 - tags: input, named, interface
export interface ParameterValue {
  Name: string;
  Value: string;
}

// refs: 1 - tags: input, named, interface
export interface RollbackConfiguration {
  MonitoringTimeInMinutes?: number | null;
  RollbackTriggers?: RollbackTrigger[] | null;
}

// refs: 1 - tags: input, named, interface
export interface RollbackTrigger {
  Arn: string;
  Type: string;
}

// refs: 1 - tags: input, named, interface
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 3 - tags: input, named, interface, output
export interface ApplicationPolicyStatement {
  Actions: string[];
  PrincipalOrgIDs?: string[] | null;
  Principals: string[];
  StatementId?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface Version {
  ApplicationId: string;
  CreationTime: string;
  ParameterDefinitions: ParameterDefinition[];
  RequiredCapabilities: Capability[];
  ResourcesSupported: boolean;
  SemanticVersion: string;
  SourceCodeArchiveUrl?: string | null;
  SourceCodeUrl?: string | null;
  TemplateUrl: string;
}

// refs: 4 - tags: output, named, interface
export interface ParameterDefinition {
  AllowedPattern?: string | null;
  AllowedValues?: string[] | null;
  ConstraintDescription?: string | null;
  DefaultValue?: string | null;
  Description?: string | null;
  MaxLength?: number | null;
  MaxValue?: number | null;
  MinLength?: number | null;
  MinValue?: number | null;
  Name: string;
  NoEcho?: boolean | null;
  ReferencedByResources: string[];
  Type?: string | null;
}

// refs: 4 - tags: output, named, enum
export type Capability =
| "CAPABILITY_IAM"
| "CAPABILITY_NAMED_IAM"
| "CAPABILITY_AUTO_EXPAND"
| "CAPABILITY_RESOURCE_POLICY"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, enum
export type Status =
| "PREPARING"
| "ACTIVE"
| "EXPIRED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ApplicationDependencySummary {
  ApplicationId: string;
  SemanticVersion: string;
}

// refs: 1 - tags: output, named, interface
export interface VersionSummary {
  ApplicationId: string;
  CreationTime: string;
  SemanticVersion: string;
  SourceCodeUrl?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ApplicationSummary {
  ApplicationId: string;
  Author: string;
  CreationTime?: string | null;
  Description: string;
  HomePageUrl?: string | null;
  Labels?: string[] | null;
  Name: string;
  SpdxLicenseId?: string | null;
}