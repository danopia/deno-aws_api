// Autogenerated API structures for: Amazon EC2 Container Registry

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface BatchCheckLayerAvailabilityRequest {
  registryId?: string | null;
  repositoryName: string;
  layerDigests: string[];
}

// refs: 1 - tags: named, input
export interface BatchDeleteImageRequest {
  registryId?: string | null;
  repositoryName: string;
  imageIds: ImageIdentifier[];
}

// refs: 1 - tags: named, input
export interface BatchGetImageRequest {
  registryId?: string | null;
  repositoryName: string;
  imageIds: ImageIdentifier[];
  acceptedMediaTypes?: string[] | null;
}

// refs: 1 - tags: named, input
export interface CompleteLayerUploadRequest {
  registryId?: string | null;
  repositoryName: string;
  uploadId: string;
  layerDigests: string[];
}

// refs: 1 - tags: named, input
export interface CreateRepositoryRequest {
  repositoryName: string;
  tags?: Tag[] | null;
  imageTagMutability?: ImageTagMutability | null;
  imageScanningConfiguration?: ImageScanningConfiguration | null;
  encryptionConfiguration?: EncryptionConfiguration | null;
}

// refs: 1 - tags: named, input
export interface DeleteLifecyclePolicyRequest {
  registryId?: string | null;
  repositoryName: string;
}

// refs: 1 - tags: named, input
export interface DeleteRegistryPolicyRequest {
}

// refs: 1 - tags: named, input
export interface DeleteRepositoryRequest {
  registryId?: string | null;
  repositoryName: string;
  force?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DeleteRepositoryPolicyRequest {
  registryId?: string | null;
  repositoryName: string;
}

// refs: 1 - tags: named, input
export interface DescribeImageScanFindingsRequest {
  registryId?: string | null;
  repositoryName: string;
  imageId: ImageIdentifier;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface DescribeImagesRequest {
  registryId?: string | null;
  repositoryName: string;
  imageIds?: ImageIdentifier[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
  filter?: DescribeImagesFilter | null;
}

// refs: 1 - tags: named, input
export interface DescribeRegistryRequest {
}

// refs: 1 - tags: named, input
export interface DescribeRepositoriesRequest {
  registryId?: string | null;
  repositoryNames?: string[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface GetAuthorizationTokenRequest {
  registryIds?: string[] | null;
}

// refs: 1 - tags: named, input
export interface GetDownloadUrlForLayerRequest {
  registryId?: string | null;
  repositoryName: string;
  layerDigest: string;
}

// refs: 1 - tags: named, input
export interface GetLifecyclePolicyRequest {
  registryId?: string | null;
  repositoryName: string;
}

// refs: 1 - tags: named, input
export interface GetLifecyclePolicyPreviewRequest {
  registryId?: string | null;
  repositoryName: string;
  imageIds?: ImageIdentifier[] | null;
  nextToken?: string | null;
  maxResults?: number | null;
  filter?: LifecyclePolicyPreviewFilter | null;
}

// refs: 1 - tags: named, input
export interface GetRegistryPolicyRequest {
}

// refs: 1 - tags: named, input
export interface GetRepositoryPolicyRequest {
  registryId?: string | null;
  repositoryName: string;
}

// refs: 1 - tags: named, input
export interface InitiateLayerUploadRequest {
  registryId?: string | null;
  repositoryName: string;
}

// refs: 1 - tags: named, input
export interface ListImagesRequest {
  registryId?: string | null;
  repositoryName: string;
  nextToken?: string | null;
  maxResults?: number | null;
  filter?: ListImagesFilter | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  resourceArn: string;
}

// refs: 1 - tags: named, input
export interface PutImageRequest {
  registryId?: string | null;
  repositoryName: string;
  imageManifest: string;
  imageManifestMediaType?: string | null;
  imageTag?: string | null;
  imageDigest?: string | null;
}

// refs: 1 - tags: named, input
export interface PutImageScanningConfigurationRequest {
  registryId?: string | null;
  repositoryName: string;
  imageScanningConfiguration: ImageScanningConfiguration;
}

// refs: 1 - tags: named, input
export interface PutImageTagMutabilityRequest {
  registryId?: string | null;
  repositoryName: string;
  imageTagMutability: ImageTagMutability;
}

// refs: 1 - tags: named, input
export interface PutLifecyclePolicyRequest {
  registryId?: string | null;
  repositoryName: string;
  lifecyclePolicyText: string;
}

// refs: 1 - tags: named, input
export interface PutRegistryPolicyRequest {
  policyText: string;
}

// refs: 1 - tags: named, input
export interface PutReplicationConfigurationRequest {
  replicationConfiguration: ReplicationConfiguration;
}

// refs: 1 - tags: named, input
export interface SetRepositoryPolicyRequest {
  registryId?: string | null;
  repositoryName: string;
  policyText: string;
  force?: boolean | null;
}

// refs: 1 - tags: named, input
export interface StartImageScanRequest {
  registryId?: string | null;
  repositoryName: string;
  imageId: ImageIdentifier;
}

// refs: 1 - tags: named, input
export interface StartLifecyclePolicyPreviewRequest {
  registryId?: string | null;
  repositoryName: string;
  lifecyclePolicyText?: string | null;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  resourceArn: string;
  tags: Tag[];
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  resourceArn: string;
  tagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UploadLayerPartRequest {
  registryId?: string | null;
  repositoryName: string;
  uploadId: string;
  partFirstByte: number;
  partLastByte: number;
  layerPartBlob: Uint8Array | string;
}

// refs: 1 - tags: named, output
export interface BatchCheckLayerAvailabilityResponse {
  layers?: Layer[] | null;
  failures?: LayerFailure[] | null;
}

// refs: 1 - tags: named, output
export interface BatchDeleteImageResponse {
  imageIds?: ImageIdentifier[] | null;
  failures?: ImageFailure[] | null;
}

// refs: 1 - tags: named, output
export interface BatchGetImageResponse {
  images?: Image[] | null;
  failures?: ImageFailure[] | null;
}

// refs: 1 - tags: named, output
export interface CompleteLayerUploadResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  uploadId?: string | null;
  layerDigest?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateRepositoryResponse {
  repository?: Repository | null;
}

// refs: 1 - tags: named, output
export interface DeleteLifecyclePolicyResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  lifecyclePolicyText?: string | null;
  lastEvaluatedAt?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface DeleteRegistryPolicyResponse {
  registryId?: string | null;
  policyText?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteRepositoryResponse {
  repository?: Repository | null;
}

// refs: 1 - tags: named, output
export interface DeleteRepositoryPolicyResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  policyText?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeImageScanFindingsResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  imageId?: ImageIdentifier | null;
  imageScanStatus?: ImageScanStatus | null;
  imageScanFindings?: ImageScanFindings | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeImagesResponse {
  imageDetails?: ImageDetail[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface DescribeRegistryResponse {
  registryId?: string | null;
  replicationConfiguration?: ReplicationConfiguration | null;
}

// refs: 1 - tags: named, output
export interface DescribeRepositoriesResponse {
  repositories?: Repository[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetAuthorizationTokenResponse {
  authorizationData?: AuthorizationData[] | null;
}

// refs: 1 - tags: named, output
export interface GetDownloadUrlForLayerResponse {
  downloadUrl?: string | null;
  layerDigest?: string | null;
}

// refs: 1 - tags: named, output
export interface GetLifecyclePolicyResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  lifecyclePolicyText?: string | null;
  lastEvaluatedAt?: Date | number | null;
}

// refs: 1 - tags: named, output
export interface GetLifecyclePolicyPreviewResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  lifecyclePolicyText?: string | null;
  status?: LifecyclePolicyPreviewStatus | null;
  nextToken?: string | null;
  previewResults?: LifecyclePolicyPreviewResult[] | null;
  summary?: LifecyclePolicyPreviewSummary | null;
}

// refs: 1 - tags: named, output
export interface GetRegistryPolicyResponse {
  registryId?: string | null;
  policyText?: string | null;
}

// refs: 1 - tags: named, output
export interface GetRepositoryPolicyResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  policyText?: string | null;
}

// refs: 1 - tags: named, output
export interface InitiateLayerUploadResponse {
  uploadId?: string | null;
  partSize?: number | null;
}

// refs: 1 - tags: named, output
export interface ListImagesResponse {
  imageIds?: ImageIdentifier[] | null;
  nextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface PutImageResponse {
  image?: Image | null;
}

// refs: 1 - tags: named, output
export interface PutImageScanningConfigurationResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  imageScanningConfiguration?: ImageScanningConfiguration | null;
}

// refs: 1 - tags: named, output
export interface PutImageTagMutabilityResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  imageTagMutability?: ImageTagMutability | null;
}

// refs: 1 - tags: named, output
export interface PutLifecyclePolicyResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  lifecyclePolicyText?: string | null;
}

// refs: 1 - tags: named, output
export interface PutRegistryPolicyResponse {
  registryId?: string | null;
  policyText?: string | null;
}

// refs: 1 - tags: named, output
export interface PutReplicationConfigurationResponse {
  replicationConfiguration?: ReplicationConfiguration | null;
}

// refs: 1 - tags: named, output
export interface SetRepositoryPolicyResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  policyText?: string | null;
}

// refs: 1 - tags: named, output
export interface StartImageScanResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  imageId?: ImageIdentifier | null;
  imageScanStatus?: ImageScanStatus | null;
}

// refs: 1 - tags: named, output
export interface StartLifecyclePolicyPreviewResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  lifecyclePolicyText?: string | null;
  status?: LifecyclePolicyPreviewStatus | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UploadLayerPartResponse {
  registryId?: string | null;
  repositoryName?: string | null;
  uploadId?: string | null;
  lastByteReceived?: number | null;
}

// refs: 14 - tags: input, named, interface, output
export interface ImageIdentifier {
  imageDigest?: string | null;
  imageTag?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface Tag {
  Key?: string | null;
  Value?: string | null;
}

// refs: 6 - tags: input, named, enum, output
export type ImageTagMutability =
| "MUTABLE"
| "IMMUTABLE"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface ImageScanningConfiguration {
  scanOnPush?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface EncryptionConfiguration {
  encryptionType: EncryptionType;
  kmsKey?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type EncryptionType =
| "AES256"
| "KMS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface DescribeImagesFilter {
  tagStatus?: TagStatus | null;
}

// refs: 3 - tags: input, named, enum
export type TagStatus =
| "TAGGED"
| "UNTAGGED"
| "ANY"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface LifecyclePolicyPreviewFilter {
  tagStatus?: TagStatus | null;
}

// refs: 1 - tags: input, named, interface
export interface ListImagesFilter {
  tagStatus?: TagStatus | null;
}

// refs: 3 - tags: input, named, interface, output
export interface ReplicationConfiguration {
  rules: ReplicationRule[];
}

// refs: 3 - tags: input, named, interface, output
export interface ReplicationRule {
  destinations: ReplicationDestination[];
}

// refs: 3 - tags: input, named, interface, output
export interface ReplicationDestination {
  region: string;
  registryId: string;
}

// refs: 1 - tags: output, named, interface
export interface Layer {
  layerDigest?: string | null;
  layerAvailability?: LayerAvailability | null;
  layerSize?: number | null;
  mediaType?: string | null;
}

// refs: 1 - tags: output, named, enum
export type LayerAvailability =
| "AVAILABLE"
| "UNAVAILABLE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface LayerFailure {
  layerDigest?: string | null;
  failureCode?: LayerFailureCode | null;
  failureReason?: string | null;
}

// refs: 1 - tags: output, named, enum
export type LayerFailureCode =
| "InvalidLayerDigest"
| "MissingLayerDigest"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface ImageFailure {
  imageId?: ImageIdentifier | null;
  failureCode?: ImageFailureCode | null;
  failureReason?: string | null;
}

// refs: 2 - tags: output, named, enum
export type ImageFailureCode =
| "InvalidImageDigest"
| "InvalidImageTag"
| "ImageTagDoesNotMatchDigest"
| "ImageNotFound"
| "MissingDigestAndTag"
| "ImageReferencedByManifestList"
| "KmsError"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface Image {
  registryId?: string | null;
  repositoryName?: string | null;
  imageId?: ImageIdentifier | null;
  imageManifest?: string | null;
  imageManifestMediaType?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface Repository {
  repositoryArn?: string | null;
  registryId?: string | null;
  repositoryName?: string | null;
  repositoryUri?: string | null;
  createdAt?: Date | number | null;
  imageTagMutability?: ImageTagMutability | null;
  imageScanningConfiguration?: ImageScanningConfiguration | null;
  encryptionConfiguration?: EncryptionConfiguration | null;
}

// refs: 3 - tags: output, named, interface
export interface ImageScanStatus {
  status?: ScanStatus | null;
  description?: string | null;
}

// refs: 3 - tags: output, named, enum
export type ScanStatus =
| "IN_PROGRESS"
| "COMPLETE"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface ImageScanFindings {
  imageScanCompletedAt?: Date | number | null;
  vulnerabilitySourceUpdatedAt?: Date | number | null;
  findings?: ImageScanFinding[] | null;
  findingSeverityCounts?: { [key in FindingSeverity]: number | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface ImageScanFinding {
  name?: string | null;
  description?: string | null;
  uri?: string | null;
  severity?: FindingSeverity | null;
  attributes?: Attribute[] | null;
}

// refs: 3 - tags: output, named, enum
export type FindingSeverity =
| "INFORMATIONAL"
| "LOW"
| "MEDIUM"
| "HIGH"
| "CRITICAL"
| "UNDEFINED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface Attribute {
  key: string;
  value?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ImageDetail {
  registryId?: string | null;
  repositoryName?: string | null;
  imageDigest?: string | null;
  imageTags?: string[] | null;
  imageSizeInBytes?: number | null;
  imagePushedAt?: Date | number | null;
  imageScanStatus?: ImageScanStatus | null;
  imageScanFindingsSummary?: ImageScanFindingsSummary | null;
  imageManifestMediaType?: string | null;
  artifactMediaType?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ImageScanFindingsSummary {
  imageScanCompletedAt?: Date | number | null;
  vulnerabilitySourceUpdatedAt?: Date | number | null;
  findingSeverityCounts?: { [key in FindingSeverity]: number | null | undefined } | null;
}

// refs: 1 - tags: output, named, interface
export interface AuthorizationData {
  authorizationToken?: string | null;
  expiresAt?: Date | number | null;
  proxyEndpoint?: string | null;
}

// refs: 2 - tags: output, named, enum
export type LifecyclePolicyPreviewStatus =
| "IN_PROGRESS"
| "COMPLETE"
| "EXPIRED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicyPreviewResult {
  imageTags?: string[] | null;
  imageDigest?: string | null;
  imagePushedAt?: Date | number | null;
  action?: LifecyclePolicyRuleAction | null;
  appliedRulePriority?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicyRuleAction {
  type?: ImageActionType | null;
}

// refs: 1 - tags: output, named, enum
export type ImageActionType =
| "EXPIRE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: output, named, interface
export interface LifecyclePolicyPreviewSummary {
  expiringImageTotalCount?: number | null;
}
