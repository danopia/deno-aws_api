// Autogenerated API client for: AWS Signer

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import * as uuidv4 from "https://deno.land/std@0.86.0/uuid/v4.ts";
import type * as s from "./structs.ts";
function generateIdemptToken() {
  return uuidv4.generate();
}

export default class Signer {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Signer.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2017-08-25",
    "endpointPrefix": "signer",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "signer",
    "serviceFullName": "AWS Signer",
    "serviceId": "signer",
    "signatureVersion": "v4",
    "signingName": "signer",
    "uid": "signer-2017-08-25"
  };

  async addProfilePermission(
    {abortSignal, ...params}: RequestConfig & s.AddProfilePermissionRequest,
  ): Promise<s.AddProfilePermissionResponse> {
    const body: jsonP.JSONObject = {
      profileVersion: params["profileVersion"],
      action: params["action"],
      principal: params["principal"],
      revisionId: params["revisionId"],
      statementId: params["statementId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AddProfilePermission",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}/permissions`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "revisionId": "s",
      },
    }, await resp.json());
  }

  async cancelSigningProfile(
    {abortSignal, ...params}: RequestConfig & s.CancelSigningProfileRequest,
  ): Promise<void> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "CancelSigningProfile",
      method: "DELETE",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}`,
    });
  }

  async describeSigningJob(
    {abortSignal, ...params}: RequestConfig & s.DescribeSigningJobRequest,
  ): Promise<s.DescribeSigningJobResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DescribeSigningJob",
      method: "GET",
      requestUri: cmnP.encodePath`/signing-jobs/${params["jobId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobId": "s",
        "source": toSource,
        "signingMaterial": toSigningMaterial,
        "platformId": "s",
        "platformDisplayName": "s",
        "profileName": "s",
        "profileVersion": "s",
        "overrides": toSigningPlatformOverrides,
        "signingParameters": x => jsonP.readMap(String, String, x),
        "createdAt": "d",
        "completedAt": "d",
        "signatureExpiresAt": "d",
        "requestedBy": "s",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SigningStatus>(x),
        "statusReason": "s",
        "revocationRecord": toSigningJobRevocationRecord,
        "signedObject": toSignedObject,
        "jobOwner": "s",
        "jobInvoker": "s",
      },
    }, await resp.json());
  }

  async getSigningPlatform(
    {abortSignal, ...params}: RequestConfig & s.GetSigningPlatformRequest,
  ): Promise<s.GetSigningPlatformResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetSigningPlatform",
      method: "GET",
      requestUri: cmnP.encodePath`/signing-platforms/${params["platformId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "platformId": "s",
        "displayName": "s",
        "partner": "s",
        "target": "s",
        "category": (x: jsonP.JSONValue) => cmnP.readEnum<s.Category>(x),
        "signingConfiguration": toSigningConfiguration,
        "signingImageFormat": toSigningImageFormat,
        "maxSizeInMB": "n",
        "revocationSupported": "b",
      },
    }, await resp.json());
  }

  async getSigningProfile(
    {abortSignal, ...params}: RequestConfig & s.GetSigningProfileRequest,
  ): Promise<s.GetSigningProfileResponse> {
    const query = new URLSearchParams;
    if (params["profileOwner"] != null) query.set("profileOwner", params["profileOwner"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetSigningProfile",
      method: "GET",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "profileName": "s",
        "profileVersion": "s",
        "profileVersionArn": "s",
        "revocationRecord": toSigningProfileRevocationRecord,
        "signingMaterial": toSigningMaterial,
        "platformId": "s",
        "platformDisplayName": "s",
        "signatureValidityPeriod": toSignatureValidityPeriod,
        "overrides": toSigningPlatformOverrides,
        "signingParameters": x => jsonP.readMap(String, String, x),
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SigningProfileStatus>(x),
        "statusReason": "s",
        "arn": "s",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async listProfilePermissions(
    {abortSignal, ...params}: RequestConfig & s.ListProfilePermissionsRequest,
  ): Promise<s.ListProfilePermissionsResponse> {
    const query = new URLSearchParams;
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListProfilePermissions",
      method: "GET",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}/permissions`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "revisionId": "s",
        "policySizeBytes": "n",
        "permissions": [toPermission],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listSigningJobs(
    {abortSignal, ...params}: RequestConfig & s.ListSigningJobsRequest = {},
  ): Promise<s.ListSigningJobsResponse> {
    const query = new URLSearchParams;
    if (params["status"] != null) query.set("status", params["status"]?.toString() ?? "");
    if (params["platformId"] != null) query.set("platformId", params["platformId"]?.toString() ?? "");
    if (params["requestedBy"] != null) query.set("requestedBy", params["requestedBy"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["isRevoked"] != null) query.set("isRevoked", params["isRevoked"]?.toString() ?? "");
    if (params["signatureExpiresBefore"] != null) query.set("signatureExpiresBefore", cmnP.serializeDate_iso8601(params["signatureExpiresBefore"]) ?? "");
    if (params["signatureExpiresAfter"] != null) query.set("signatureExpiresAfter", cmnP.serializeDate_iso8601(params["signatureExpiresAfter"]) ?? "");
    if (params["jobInvoker"] != null) query.set("jobInvoker", params["jobInvoker"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSigningJobs",
      method: "GET",
      requestUri: "/signing-jobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobs": [toSigningJob],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listSigningPlatforms(
    {abortSignal, ...params}: RequestConfig & s.ListSigningPlatformsRequest = {},
  ): Promise<s.ListSigningPlatformsResponse> {
    const query = new URLSearchParams;
    if (params["category"] != null) query.set("category", params["category"]?.toString() ?? "");
    if (params["partner"] != null) query.set("partner", params["partner"]?.toString() ?? "");
    if (params["target"] != null) query.set("target", params["target"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSigningPlatforms",
      method: "GET",
      requestUri: "/signing-platforms",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "platforms": [toSigningPlatform],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listSigningProfiles(
    {abortSignal, ...params}: RequestConfig & s.ListSigningProfilesRequest = {},
  ): Promise<s.ListSigningProfilesResponse> {
    const query = new URLSearchParams;
    if (params["includeCanceled"] != null) query.set("includeCanceled", params["includeCanceled"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    if (params["platformId"] != null) query.set("platformId", params["platformId"]?.toString() ?? "");
    for (const item of params["statuses"] ?? []) {
      query.append("statuses", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSigningProfiles",
      method: "GET",
      requestUri: "/signing-profiles",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "profiles": [toSigningProfile],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "ListTagsForResource",
      method: "GET",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async putSigningProfile(
    {abortSignal, ...params}: RequestConfig & s.PutSigningProfileRequest,
  ): Promise<s.PutSigningProfileResponse> {
    const body: jsonP.JSONObject = {
      signingMaterial: fromSigningMaterial(params["signingMaterial"]),
      signatureValidityPeriod: fromSignatureValidityPeriod(params["signatureValidityPeriod"]),
      platformId: params["platformId"],
      overrides: fromSigningPlatformOverrides(params["overrides"]),
      signingParameters: params["signingParameters"],
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutSigningProfile",
      method: "PUT",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "arn": "s",
        "profileVersion": "s",
        "profileVersionArn": "s",
      },
    }, await resp.json());
  }

  async removeProfilePermission(
    {abortSignal, ...params}: RequestConfig & s.RemoveProfilePermissionRequest,
  ): Promise<s.RemoveProfilePermissionResponse> {
    const query = new URLSearchParams;
    query.set("revisionId", params["revisionId"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "RemoveProfilePermission",
      method: "DELETE",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}/permissions/${params["statementId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "revisionId": "s",
      },
    }, await resp.json());
  }

  async revokeSignature(
    {abortSignal, ...params}: RequestConfig & s.RevokeSignatureRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      jobOwner: params["jobOwner"],
      reason: params["reason"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RevokeSignature",
      method: "PUT",
      requestUri: cmnP.encodePath`/signing-jobs/${params["jobId"]}/revoke`,
    });
  }

  async revokeSigningProfile(
    {abortSignal, ...params}: RequestConfig & s.RevokeSigningProfileRequest,
  ): Promise<void> {
    const body: jsonP.JSONObject = {
      profileVersion: params["profileVersion"],
      reason: params["reason"],
      effectiveTime: jsonP.serializeDate_unixTimestamp(params["effectiveTime"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "RevokeSigningProfile",
      method: "PUT",
      requestUri: cmnP.encodePath`/signing-profiles/${params["profileName"]}/revoke`,
    });
  }

  async startSigningJob(
    {abortSignal, ...params}: RequestConfig & s.StartSigningJobRequest,
  ): Promise<s.StartSigningJobResponse> {
    const body: jsonP.JSONObject = {
      source: fromSource(params["source"]),
      destination: fromDestination(params["destination"]),
      profileName: params["profileName"],
      clientRequestToken: params["clientRequestToken"] ?? generateIdemptToken(),
      profileOwner: params["profileOwner"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartSigningJob",
      requestUri: "/signing-jobs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "jobId": "s",
        "jobOwner": "s",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const query = new URLSearchParams;
    for (const item of params["tagKeys"]) {
      query.append("tagKeys", item?.toString() ?? "");
    }
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "UntagResource",
      method: "DELETE",
      requestUri: cmnP.encodePath`/tags/${params["resourceArn"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  // Resource State Waiters

  /** Checks state up to 25 times, 20 seconds apart (about 9 minutes max wait time). */
  async waitForSuccessfulSigningJob(
    params: RequestConfig & s.DescribeSigningJobRequest,
  ): Promise<s.DescribeSigningJobResponse> {
    const errMessage = 'ResourceNotReady: Resource is not in the state SuccessfulSigningJob';
    for (let i = 0; i < 25; i++) {
      try {
        const resp = await this.describeSigningJob(params);
        const field = resp?.status;
        if (field === "Succeeded") return resp;
        if (field === "Failed") throw new Error(errMessage);
      } catch (err) {
        if (["ResourceNotFoundException"].includes(err.shortCode)) throw err;
        throw err;
      }
      await new Promise(r => setTimeout(r, 20000));
    }
    throw new Error(errMessage);
  }

}

function fromSigningMaterial(input?: s.SigningMaterial | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    certificateArn: input["certificateArn"],
  }
}
function toSigningMaterial(root: jsonP.JSONValue): s.SigningMaterial {
  return jsonP.readObj({
    required: {
      "certificateArn": "s",
    },
    optional: {},
  }, root);
}

function fromSignatureValidityPeriod(input?: s.SignatureValidityPeriod | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    value: input["value"],
    type: input["type"],
  }
}
function toSignatureValidityPeriod(root: jsonP.JSONValue): s.SignatureValidityPeriod {
  return jsonP.readObj({
    required: {},
    optional: {
      "value": "n",
      "type": (x: jsonP.JSONValue) => cmnP.readEnum<s.ValidityType>(x),
    },
  }, root);
}

function fromSigningPlatformOverrides(input?: s.SigningPlatformOverrides | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    signingConfiguration: fromSigningConfigurationOverrides(input["signingConfiguration"]),
    signingImageFormat: input["signingImageFormat"],
  }
}
function toSigningPlatformOverrides(root: jsonP.JSONValue): s.SigningPlatformOverrides {
  return jsonP.readObj({
    required: {},
    optional: {
      "signingConfiguration": toSigningConfigurationOverrides,
      "signingImageFormat": (x: jsonP.JSONValue) => cmnP.readEnum<s.ImageFormat>(x),
    },
  }, root);
}

function fromSigningConfigurationOverrides(input?: s.SigningConfigurationOverrides | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    encryptionAlgorithm: input["encryptionAlgorithm"],
    hashAlgorithm: input["hashAlgorithm"],
  }
}
function toSigningConfigurationOverrides(root: jsonP.JSONValue): s.SigningConfigurationOverrides {
  return jsonP.readObj({
    required: {},
    optional: {
      "encryptionAlgorithm": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionAlgorithm>(x),
      "hashAlgorithm": (x: jsonP.JSONValue) => cmnP.readEnum<s.HashAlgorithm>(x),
    },
  }, root);
}

function fromSource(input?: s.Source | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    s3: fromS3Source(input["s3"]),
  }
}
function toSource(root: jsonP.JSONValue): s.Source {
  return jsonP.readObj({
    required: {},
    optional: {
      "s3": toS3Source,
    },
  }, root);
}

function fromS3Source(input?: s.S3Source | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    bucketName: input["bucketName"],
    key: input["key"],
    version: input["version"],
  }
}
function toS3Source(root: jsonP.JSONValue): s.S3Source {
  return jsonP.readObj({
    required: {
      "bucketName": "s",
      "key": "s",
      "version": "s",
    },
    optional: {},
  }, root);
}

function fromDestination(input?: s.Destination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    s3: fromS3Destination(input["s3"]),
  }
}

function fromS3Destination(input?: s.S3Destination | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    bucketName: input["bucketName"],
    prefix: input["prefix"],
  }
}

function toSigningJobRevocationRecord(root: jsonP.JSONValue): s.SigningJobRevocationRecord {
  return jsonP.readObj({
    required: {},
    optional: {
      "reason": "s",
      "revokedAt": "d",
      "revokedBy": "s",
    },
  }, root);
}

function toSignedObject(root: jsonP.JSONValue): s.SignedObject {
  return jsonP.readObj({
    required: {},
    optional: {
      "s3": toS3SignedObject,
    },
  }, root);
}

function toS3SignedObject(root: jsonP.JSONValue): s.S3SignedObject {
  return jsonP.readObj({
    required: {},
    optional: {
      "bucketName": "s",
      "key": "s",
    },
  }, root);
}

function toSigningConfiguration(root: jsonP.JSONValue): s.SigningConfiguration {
  return jsonP.readObj({
    required: {
      "encryptionAlgorithmOptions": toEncryptionAlgorithmOptions,
      "hashAlgorithmOptions": toHashAlgorithmOptions,
    },
    optional: {},
  }, root);
}

function toEncryptionAlgorithmOptions(root: jsonP.JSONValue): s.EncryptionAlgorithmOptions {
  return jsonP.readObj({
    required: {
      "allowedValues": [(x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionAlgorithm>(x)],
      "defaultValue": (x: jsonP.JSONValue) => cmnP.readEnum<s.EncryptionAlgorithm>(x),
    },
    optional: {},
  }, root);
}

function toHashAlgorithmOptions(root: jsonP.JSONValue): s.HashAlgorithmOptions {
  return jsonP.readObj({
    required: {
      "allowedValues": [(x: jsonP.JSONValue) => cmnP.readEnum<s.HashAlgorithm>(x)],
      "defaultValue": (x: jsonP.JSONValue) => cmnP.readEnum<s.HashAlgorithm>(x),
    },
    optional: {},
  }, root);
}

function toSigningImageFormat(root: jsonP.JSONValue): s.SigningImageFormat {
  return jsonP.readObj({
    required: {
      "supportedFormats": [(x: jsonP.JSONValue) => cmnP.readEnum<s.ImageFormat>(x)],
      "defaultFormat": (x: jsonP.JSONValue) => cmnP.readEnum<s.ImageFormat>(x),
    },
    optional: {},
  }, root);
}

function toSigningProfileRevocationRecord(root: jsonP.JSONValue): s.SigningProfileRevocationRecord {
  return jsonP.readObj({
    required: {},
    optional: {
      "revocationEffectiveFrom": "d",
      "revokedAt": "d",
      "revokedBy": "s",
    },
  }, root);
}

function toPermission(root: jsonP.JSONValue): s.Permission {
  return jsonP.readObj({
    required: {},
    optional: {
      "action": "s",
      "principal": "s",
      "statementId": "s",
      "profileVersion": "s",
    },
  }, root);
}

function toSigningJob(root: jsonP.JSONValue): s.SigningJob {
  return jsonP.readObj({
    required: {},
    optional: {
      "jobId": "s",
      "source": toSource,
      "signedObject": toSignedObject,
      "signingMaterial": toSigningMaterial,
      "createdAt": "d",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SigningStatus>(x),
      "isRevoked": "b",
      "profileName": "s",
      "profileVersion": "s",
      "platformId": "s",
      "platformDisplayName": "s",
      "signatureExpiresAt": "d",
      "jobOwner": "s",
      "jobInvoker": "s",
    },
  }, root);
}

function toSigningPlatform(root: jsonP.JSONValue): s.SigningPlatform {
  return jsonP.readObj({
    required: {},
    optional: {
      "platformId": "s",
      "displayName": "s",
      "partner": "s",
      "target": "s",
      "category": (x: jsonP.JSONValue) => cmnP.readEnum<s.Category>(x),
      "signingConfiguration": toSigningConfiguration,
      "signingImageFormat": toSigningImageFormat,
      "maxSizeInMB": "n",
      "revocationSupported": "b",
    },
  }, root);
}

function toSigningProfile(root: jsonP.JSONValue): s.SigningProfile {
  return jsonP.readObj({
    required: {},
    optional: {
      "profileName": "s",
      "profileVersion": "s",
      "profileVersionArn": "s",
      "signingMaterial": toSigningMaterial,
      "signatureValidityPeriod": toSignatureValidityPeriod,
      "platformId": "s",
      "platformDisplayName": "s",
      "signingParameters": x => jsonP.readMap(String, String, x),
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SigningProfileStatus>(x),
      "arn": "s",
      "tags": x => jsonP.readMap(String, String, x),
    },
  }, root);
}
