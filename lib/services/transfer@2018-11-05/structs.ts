// Autogenerated API structures for: AWS Transfer Family

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface CreateServerRequest {
  Certificate?: string | null;
  Domain?: Domain | null;
  EndpointDetails?: EndpointDetails | null;
  EndpointType?: EndpointType | null;
  HostKey?: string | null;
  IdentityProviderDetails?: IdentityProviderDetails | null;
  IdentityProviderType?: IdentityProviderType | null;
  LoggingRole?: string | null;
  Protocols?: Protocol[] | null;
  SecurityPolicyName?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, input
export interface CreateUserRequest {
  HomeDirectory?: string | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | null;
  Policy?: string | null;
  PosixProfile?: PosixProfile | null;
  Role: string;
  ServerId: string;
  SshPublicKeyBody?: string | null;
  Tags?: Tag[] | null;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface DeleteServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface DeleteSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface DeleteUserRequest {
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface DescribeSecurityPolicyRequest {
  SecurityPolicyName: string;
}

// refs: 1 - tags: named, input
export interface DescribeServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface DescribeUserRequest {
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface ImportSshPublicKeyRequest {
  ServerId: string;
  SshPublicKeyBody: string;
  UserName: string;
}

// refs: 1 - tags: named, input
export interface ListSecurityPoliciesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListServersRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  Arn: string;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListUsersRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface StartServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface StopServerRequest {
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  Arn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface TestIdentityProviderRequest {
  ServerId: string;
  ServerProtocol?: Protocol | null;
  SourceIp?: string | null;
  UserName: string;
  UserPassword?: string | null;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  Arn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateServerRequest {
  Certificate?: string | null;
  EndpointDetails?: EndpointDetails | null;
  EndpointType?: EndpointType | null;
  HostKey?: string | null;
  IdentityProviderDetails?: IdentityProviderDetails | null;
  LoggingRole?: string | null;
  Protocols?: Protocol[] | null;
  SecurityPolicyName?: string | null;
  ServerId: string;
}

// refs: 1 - tags: named, input
export interface UpdateUserRequest {
  HomeDirectory?: string | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | null;
  Policy?: string | null;
  PosixProfile?: PosixProfile | null;
  Role?: string | null;
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, output
export interface CreateServerResponse {
  ServerId: string;
}

// refs: 1 - tags: named, output
export interface CreateUserResponse {
  ServerId: string;
  UserName: string;
}

// refs: 1 - tags: named, output
export interface DescribeSecurityPolicyResponse {
  SecurityPolicy: DescribedSecurityPolicy;
}

// refs: 1 - tags: named, output
export interface DescribeServerResponse {
  Server: DescribedServer;
}

// refs: 1 - tags: named, output
export interface DescribeUserResponse {
  ServerId: string;
  User: DescribedUser;
}

// refs: 1 - tags: named, output
export interface ImportSshPublicKeyResponse {
  ServerId: string;
  SshPublicKeyId: string;
  UserName: string;
}

// refs: 1 - tags: named, output
export interface ListSecurityPoliciesResponse {
  NextToken?: string | null;
  SecurityPolicyNames: string[];
}

// refs: 1 - tags: named, output
export interface ListServersResponse {
  NextToken?: string | null;
  Servers: ListedServer[];
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Arn?: string | null;
  NextToken?: string | null;
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface ListUsersResponse {
  NextToken?: string | null;
  ServerId: string;
  Users: ListedUser[];
}

// refs: 1 - tags: named, output
export interface TestIdentityProviderResponse {
  Response?: string | null;
  StatusCode: number;
  Message?: string | null;
  Url: string;
}

// refs: 1 - tags: named, output
export interface UpdateServerResponse {
  ServerId: string;
}

// refs: 1 - tags: named, output
export interface UpdateUserResponse {
  ServerId: string;
  UserName: string;
}

// refs: 3 - tags: input, named, enum, output
export type Domain =
| "S3"
| "EFS"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface EndpointDetails {
  AddressAllocationIds?: string[] | null;
  SubnetIds?: string[] | null;
  VpcEndpointId?: string | null;
  VpcId?: string | null;
  SecurityGroupIds?: string[] | null;
}

// refs: 4 - tags: input, named, enum, output
export type EndpointType =
| "PUBLIC"
| "VPC"
| "VPC_ENDPOINT"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface IdentityProviderDetails {
  Url?: string | null;
  InvocationRole?: string | null;
}

// refs: 3 - tags: input, named, enum, output
export type IdentityProviderType =
| "SERVICE_MANAGED"
| "API_GATEWAY"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, enum, output
export type Protocol =
| "SFTP"
| "FTP"
| "FTPS"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 4 - tags: input, named, enum, output
export type HomeDirectoryType =
| "PATH"
| "LOGICAL"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface HomeDirectoryMapEntry {
  Entry: string;
  Target: string;
}

// refs: 3 - tags: input, named, interface, output
export interface PosixProfile {
  Uid: number;
  Gid: number;
  SecondaryGids?: number[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DescribedSecurityPolicy {
  Fips?: boolean | null;
  SecurityPolicyName: string;
  SshCiphers?: string[] | null;
  SshKexs?: string[] | null;
  SshMacs?: string[] | null;
  TlsCiphers?: string[] | null;
}

// refs: 1 - tags: output, named, interface
export interface DescribedServer {
  Arn: string;
  Certificate?: string | null;
  Domain?: Domain | null;
  EndpointDetails?: EndpointDetails | null;
  EndpointType?: EndpointType | null;
  HostKeyFingerprint?: string | null;
  IdentityProviderDetails?: IdentityProviderDetails | null;
  IdentityProviderType?: IdentityProviderType | null;
  LoggingRole?: string | null;
  Protocols?: Protocol[] | null;
  SecurityPolicyName?: string | null;
  ServerId?: string | null;
  State?: State | null;
  Tags?: Tag[] | null;
  UserCount?: number | null;
}

// refs: 2 - tags: output, named, enum
export type State =
| "OFFLINE"
| "ONLINE"
| "STARTING"
| "STOPPING"
| "START_FAILED"
| "STOP_FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface DescribedUser {
  Arn: string;
  HomeDirectory?: string | null;
  HomeDirectoryMappings?: HomeDirectoryMapEntry[] | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  Policy?: string | null;
  PosixProfile?: PosixProfile | null;
  Role?: string | null;
  SshPublicKeys?: SshPublicKey[] | null;
  Tags?: Tag[] | null;
  UserName?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface SshPublicKey {
  DateImported: Date | number;
  SshPublicKeyBody: string;
  SshPublicKeyId: string;
}

// refs: 1 - tags: output, named, interface
export interface ListedServer {
  Arn: string;
  Domain?: Domain | null;
  IdentityProviderType?: IdentityProviderType | null;
  EndpointType?: EndpointType | null;
  LoggingRole?: string | null;
  ServerId?: string | null;
  State?: State | null;
  UserCount?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface ListedUser {
  Arn: string;
  HomeDirectory?: string | null;
  HomeDirectoryType?: HomeDirectoryType | null;
  Role?: string | null;
  SshPublicKeyCount?: number | null;
  UserName?: string | null;
}