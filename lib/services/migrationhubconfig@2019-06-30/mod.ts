// Autogenerated API client for: AWS Migration Hub Config

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";

export default class MigrationHubConfig {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(MigrationHubConfig.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2019-06-30",
    "endpointPrefix": "migrationhub-config",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceFullName": "AWS Migration Hub Config",
    "serviceId": "MigrationHub Config",
    "signatureVersion": "v4",
    "signingName": "mgh",
    "targetPrefix": "AWSMigrationHubMultiAccountService",
    "uid": "migrationhub-config-2019-06-30"
  };

  async createHomeRegionControl(
    {abortSignal, ...params}: RequestConfig & CreateHomeRegionControlRequest,
  ): Promise<CreateHomeRegionControlResult> {
    const body: jsonP.JSONObject = {
      HomeRegion: params["HomeRegion"],
      Target: fromTarget(params["Target"]),
      DryRun: params["DryRun"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateHomeRegionControl",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HomeRegionControl": toHomeRegionControl,
      },
    }, await resp.json());
  }

  async describeHomeRegionControls(
    {abortSignal, ...params}: RequestConfig & DescribeHomeRegionControlsRequest = {},
  ): Promise<DescribeHomeRegionControlsResult> {
    const body: jsonP.JSONObject = {
      ControlId: params["ControlId"],
      HomeRegion: params["HomeRegion"],
      Target: fromTarget(params["Target"]),
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DescribeHomeRegionControls",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HomeRegionControls": [toHomeRegionControl],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async getHomeRegion(
    {abortSignal, ...params}: RequestConfig & GetHomeRegionRequest = {},
  ): Promise<GetHomeRegionResult> {
    const body: jsonP.JSONObject = {
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetHomeRegion",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "HomeRegion": "s",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface CreateHomeRegionControlRequest {
  HomeRegion: string;
  Target: Target;
  DryRun?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeHomeRegionControlsRequest {
  ControlId?: string | null;
  HomeRegion?: string | null;
  Target?: Target | null;
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface GetHomeRegionRequest {
}

// refs: 1 - tags: named, output
export interface CreateHomeRegionControlResult {
  HomeRegionControl?: HomeRegionControl | null;
}

// refs: 1 - tags: named, output
export interface DescribeHomeRegionControlsResult {
  HomeRegionControls?: HomeRegionControl[] | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, output
export interface GetHomeRegionResult {
  HomeRegion?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Target {
  Type: TargetType;
  Id?: string | null;
}
function fromTarget(input?: Target | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Type: input["Type"],
    Id: input["Id"],
  }
}
function toTarget(root: jsonP.JSONValue): Target {
  return jsonP.readObj({
    required: {
      "Type": (x: jsonP.JSONValue) => cmnP.readEnum<TargetType>(x),
    },
    optional: {
      "Id": "s",
    },
  }, root);
}

// refs: 4 - tags: input, named, enum, output
export type TargetType =
| "ACCOUNT"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface HomeRegionControl {
  ControlId?: string | null;
  HomeRegion?: string | null;
  Target?: Target | null;
  RequestedTime?: Date | number | null;
}
function toHomeRegionControl(root: jsonP.JSONValue): HomeRegionControl {
  return jsonP.readObj({
    required: {},
    optional: {
      "ControlId": "s",
      "HomeRegion": "s",
      "Target": toTarget,
      "RequestedTime": "d",
    },
  }, root);
}