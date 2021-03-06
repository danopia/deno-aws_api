// Autogenerated API structures for: Amazon Cognito Identity

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateIdentityPoolInput {
  IdentityPoolName: string;
  AllowUnauthenticatedIdentities: boolean;
  AllowClassicFlow?: boolean | null;
  SupportedLoginProviders?: { [key: string]: string | null | undefined } | null;
  DeveloperProviderName?: string | null;
  OpenIdConnectProviderARNs?: string[] | null;
  CognitoIdentityProviders?: CognitoIdentityProvider[] | null;
  SamlProviderARNs?: string[] | null;
  IdentityPoolTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface DeleteIdentitiesInput {
  IdentityIdsToDelete: string[];
}

// refs: 1 - tags: named, input
export interface DeleteIdentityPoolInput {
  IdentityPoolId: string;
}

// refs: 1 - tags: named, input
export interface DescribeIdentityInput {
  IdentityId: string;
}

// refs: 1 - tags: named, input
export interface DescribeIdentityPoolInput {
  IdentityPoolId: string;
}

// refs: 1 - tags: named, input
export interface GetCredentialsForIdentityInput {
  IdentityId: string;
  Logins?: { [key: string]: string | null | undefined } | null;
  CustomRoleArn?: string | null;
}

// refs: 1 - tags: named, input
export interface GetIdInput {
  AccountId?: string | null;
  IdentityPoolId: string;
  Logins?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface GetIdentityPoolRolesInput {
  IdentityPoolId: string;
}

// refs: 1 - tags: named, input
export interface GetOpenIdTokenInput {
  IdentityId: string;
  Logins?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface GetOpenIdTokenForDeveloperIdentityInput {
  IdentityPoolId: string;
  IdentityId?: string | null;
  Logins: { [key: string]: string | null | undefined };
  PrincipalTags?: { [key: string]: string | null | undefined } | null;
  TokenDuration?: number | null;
}

// refs: 1 - tags: named, input
export interface GetPrincipalTagAttributeMapInput {
  IdentityPoolId: string;
  IdentityProviderName: string;
}

// refs: 1 - tags: named, input
export interface ListIdentitiesInput {
  IdentityPoolId: string;
  MaxResults: number;
  NextToken?: string | null;
  HideDisabled?: boolean | null;
}

// refs: 1 - tags: named, input
export interface ListIdentityPoolsInput {
  MaxResults: number;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceInput {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface LookupDeveloperIdentityInput {
  IdentityPoolId: string;
  IdentityId?: string | null;
  DeveloperUserIdentifier?: string | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface MergeDeveloperIdentitiesInput {
  SourceUserIdentifier: string;
  DestinationUserIdentifier: string;
  DeveloperProviderName: string;
  IdentityPoolId: string;
}

// refs: 1 - tags: named, input
export interface SetIdentityPoolRolesInput {
  IdentityPoolId: string;
  Roles: { [key: string]: string | null | undefined };
  RoleMappings?: { [key: string]: RoleMapping | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface SetPrincipalTagAttributeMapInput {
  IdentityPoolId: string;
  IdentityProviderName: string;
  UseDefaults?: boolean | null;
  PrincipalTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, input
export interface TagResourceInput {
  ResourceArn: string;
  Tags: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, input
export interface UnlinkDeveloperIdentityInput {
  IdentityId: string;
  IdentityPoolId: string;
  DeveloperProviderName: string;
  DeveloperUserIdentifier: string;
}

// refs: 1 - tags: named, input
export interface UnlinkIdentityInput {
  IdentityId: string;
  Logins: { [key: string]: string | null | undefined };
  LoginsToRemove: string[];
}

// refs: 1 - tags: named, input
export interface UntagResourceInput {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 2 - tags: named, input, output
export interface IdentityPool {
  IdentityPoolId: string;
  IdentityPoolName: string;
  AllowUnauthenticatedIdentities: boolean;
  AllowClassicFlow?: boolean | null;
  SupportedLoginProviders?: { [key: string]: string | null | undefined } | null;
  DeveloperProviderName?: string | null;
  OpenIdConnectProviderARNs?: string[] | null;
  CognitoIdentityProviders?: CognitoIdentityProvider[] | null;
  SamlProviderARNs?: string[] | null;
  IdentityPoolTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface DeleteIdentitiesResponse {
  UnprocessedIdentityIds?: UnprocessedIdentityId[] | null;
}

// refs: 2 - tags: named, output, interface
export interface IdentityDescription {
  IdentityId?: string | null;
  Logins?: string[] | null;
  CreationDate?: Date | number | null;
  LastModifiedDate?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface GetCredentialsForIdentityResponse {
  IdentityId?: string | null;
  Credentials?: Credentials | null;
}

// refs: 1 - tags: named, output
export interface GetIdResponse {
  IdentityId?: string | null;
}

// refs: 1 - tags: named, output
export interface GetIdentityPoolRolesResponse {
  IdentityPoolId?: string | null;
  Roles?: { [key: string]: string | null | undefined } | null;
  RoleMappings?: { [key: string]: RoleMapping | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface GetOpenIdTokenResponse {
  IdentityId?: string | null;
  Token?: string | null;
}

// refs: 1 - tags: named, output
export interface GetOpenIdTokenForDeveloperIdentityResponse {
  IdentityId?: string | null;
  Token?: string | null;
}

// refs: 1 - tags: named, output
export interface GetPrincipalTagAttributeMapResponse {
  IdentityPoolId?: string | null;
  IdentityProviderName?: string | null;
  UseDefaults?: boolean | null;
  PrincipalTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface ListIdentitiesResponse {
  IdentityPoolId?: string | null;
  Identities?: IdentityDescription[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListIdentityPoolsResponse {
  IdentityPools?: IdentityPoolShortDescription[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface LookupDeveloperIdentityResponse {
  IdentityId?: string | null;
  DeveloperUserIdentifierList?: string[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface MergeDeveloperIdentitiesResponse {
  IdentityId?: string | null;
}

// refs: 1 - tags: named, output
export interface SetPrincipalTagAttributeMapResponse {
  IdentityPoolId?: string | null;
  IdentityProviderName?: string | null;
  UseDefaults?: boolean | null;
  PrincipalTags?: { [key: string]: string | null | undefined } | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 3 - tags: input, named, interface, output
export interface CognitoIdentityProvider {
  ProviderName?: string | null;
  ClientId?: string | null;
  ServerSideTokenCheck?: boolean | null;
}

// refs: 2 - tags: input, named, interface, output
export interface RoleMapping {
  Type: RoleMappingType;
  AmbiguousRoleResolution?: AmbiguousRoleResolutionType | null;
  RulesConfiguration?: RulesConfigurationType | null;
}

// refs: 2 - tags: input, named, enum, output
export type RoleMappingType =
| "Token"
| "Rules"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type AmbiguousRoleResolutionType =
| "AuthenticatedRole"
| "Deny"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface RulesConfigurationType {
  Rules: MappingRule[];
}

// refs: 2 - tags: input, named, interface, output
export interface MappingRule {
  Claim: string;
  MatchType: MappingRuleMatchType;
  Value: string;
  RoleARN: string;
}

// refs: 2 - tags: input, named, enum, output
export type MappingRuleMatchType =
| "Equals"
| "Contains"
| "StartsWith"
| "NotEqual"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface UnprocessedIdentityId {
  IdentityId?: string | null;
  ErrorCode?: ErrorCode | null;
}

// refs: 1 - tags: output, named, enum
export type ErrorCode =
| "AccessDenied"
| "InternalServerError"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Credentials {
  AccessKeyId?: string | null;
  SecretKey?: string | null;
  SessionToken?: string | null;
  Expiration?: Date | number | null;
}

// refs: 1 - tags: output, named, interface
export interface IdentityPoolShortDescription {
  IdentityPoolId?: string | null;
  IdentityPoolName?: string | null;
}
