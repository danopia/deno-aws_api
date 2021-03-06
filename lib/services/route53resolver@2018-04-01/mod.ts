// Autogenerated API client for: Amazon Route 53 Resolver

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

export default class Route53Resolver {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(Route53Resolver.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2018-04-01",
    "endpointPrefix": "route53resolver",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "Route53Resolver",
    "serviceFullName": "Amazon Route 53 Resolver",
    "serviceId": "Route53Resolver",
    "signatureVersion": "v4",
    "targetPrefix": "Route53Resolver",
    "uid": "route53resolver-2018-04-01"
  };

  async associateResolverEndpointIpAddress(
    {abortSignal, ...params}: RequestConfig & s.AssociateResolverEndpointIpAddressRequest,
  ): Promise<s.AssociateResolverEndpointIpAddressResponse> {
    const body: jsonP.JSONObject = {
      ResolverEndpointId: params["ResolverEndpointId"],
      IpAddress: fromIpAddressUpdate(params["IpAddress"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateResolverEndpointIpAddress",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async associateResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & s.AssociateResolverQueryLogConfigRequest,
  ): Promise<s.AssociateResolverQueryLogConfigResponse> {
    const body: jsonP.JSONObject = {
      ResolverQueryLogConfigId: params["ResolverQueryLogConfigId"],
      ResourceId: params["ResourceId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateResolverQueryLogConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigAssociation": toResolverQueryLogConfigAssociation,
      },
    }, await resp.json());
  }

  async associateResolverRule(
    {abortSignal, ...params}: RequestConfig & s.AssociateResolverRuleRequest,
  ): Promise<s.AssociateResolverRuleResponse> {
    const body: jsonP.JSONObject = {
      ResolverRuleId: params["ResolverRuleId"],
      Name: params["Name"],
      VPCId: params["VPCId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "AssociateResolverRule",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRuleAssociation": toResolverRuleAssociation,
      },
    }, await resp.json());
  }

  async createResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & s.CreateResolverEndpointRequest,
  ): Promise<s.CreateResolverEndpointResponse> {
    const body: jsonP.JSONObject = {
      CreatorRequestId: params["CreatorRequestId"],
      Name: params["Name"],
      SecurityGroupIds: params["SecurityGroupIds"],
      Direction: params["Direction"],
      IpAddresses: params["IpAddresses"]?.map(x => fromIpAddressRequest(x)),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResolverEndpoint",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async createResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & s.CreateResolverQueryLogConfigRequest,
  ): Promise<s.CreateResolverQueryLogConfigResponse> {
    const body: jsonP.JSONObject = {
      Name: params["Name"],
      DestinationArn: params["DestinationArn"],
      CreatorRequestId: params["CreatorRequestId"] ?? generateIdemptToken(),
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResolverQueryLogConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfig": toResolverQueryLogConfig,
      },
    }, await resp.json());
  }

  async createResolverRule(
    {abortSignal, ...params}: RequestConfig & s.CreateResolverRuleRequest,
  ): Promise<s.CreateResolverRuleResponse> {
    const body: jsonP.JSONObject = {
      CreatorRequestId: params["CreatorRequestId"],
      Name: params["Name"],
      RuleType: params["RuleType"],
      DomainName: params["DomainName"],
      TargetIps: params["TargetIps"]?.map(x => fromTargetAddress(x)),
      ResolverEndpointId: params["ResolverEndpointId"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateResolverRule",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

  async deleteResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & s.DeleteResolverEndpointRequest,
  ): Promise<s.DeleteResolverEndpointResponse> {
    const body: jsonP.JSONObject = {
      ResolverEndpointId: params["ResolverEndpointId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResolverEndpoint",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async deleteResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & s.DeleteResolverQueryLogConfigRequest,
  ): Promise<s.DeleteResolverQueryLogConfigResponse> {
    const body: jsonP.JSONObject = {
      ResolverQueryLogConfigId: params["ResolverQueryLogConfigId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResolverQueryLogConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfig": toResolverQueryLogConfig,
      },
    }, await resp.json());
  }

  async deleteResolverRule(
    {abortSignal, ...params}: RequestConfig & s.DeleteResolverRuleRequest,
  ): Promise<s.DeleteResolverRuleResponse> {
    const body: jsonP.JSONObject = {
      ResolverRuleId: params["ResolverRuleId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DeleteResolverRule",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

  async disassociateResolverEndpointIpAddress(
    {abortSignal, ...params}: RequestConfig & s.DisassociateResolverEndpointIpAddressRequest,
  ): Promise<s.DisassociateResolverEndpointIpAddressResponse> {
    const body: jsonP.JSONObject = {
      ResolverEndpointId: params["ResolverEndpointId"],
      IpAddress: fromIpAddressUpdate(params["IpAddress"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateResolverEndpointIpAddress",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async disassociateResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & s.DisassociateResolverQueryLogConfigRequest,
  ): Promise<s.DisassociateResolverQueryLogConfigResponse> {
    const body: jsonP.JSONObject = {
      ResolverQueryLogConfigId: params["ResolverQueryLogConfigId"],
      ResourceId: params["ResourceId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateResolverQueryLogConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigAssociation": toResolverQueryLogConfigAssociation,
      },
    }, await resp.json());
  }

  async disassociateResolverRule(
    {abortSignal, ...params}: RequestConfig & s.DisassociateResolverRuleRequest,
  ): Promise<s.DisassociateResolverRuleResponse> {
    const body: jsonP.JSONObject = {
      VPCId: params["VPCId"],
      ResolverRuleId: params["ResolverRuleId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "DisassociateResolverRule",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRuleAssociation": toResolverRuleAssociation,
      },
    }, await resp.json());
  }

  async getResolverDnssecConfig(
    {abortSignal, ...params}: RequestConfig & s.GetResolverDnssecConfigRequest,
  ): Promise<s.GetResolverDnssecConfigResponse> {
    const body: jsonP.JSONObject = {
      ResourceId: params["ResourceId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverDnssecConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverDNSSECConfig": toResolverDnssecConfig,
      },
    }, await resp.json());
  }

  async getResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & s.GetResolverEndpointRequest,
  ): Promise<s.GetResolverEndpointResponse> {
    const body: jsonP.JSONObject = {
      ResolverEndpointId: params["ResolverEndpointId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverEndpoint",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async getResolverQueryLogConfig(
    {abortSignal, ...params}: RequestConfig & s.GetResolverQueryLogConfigRequest,
  ): Promise<s.GetResolverQueryLogConfigResponse> {
    const body: jsonP.JSONObject = {
      ResolverQueryLogConfigId: params["ResolverQueryLogConfigId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverQueryLogConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfig": toResolverQueryLogConfig,
      },
    }, await resp.json());
  }

  async getResolverQueryLogConfigAssociation(
    {abortSignal, ...params}: RequestConfig & s.GetResolverQueryLogConfigAssociationRequest,
  ): Promise<s.GetResolverQueryLogConfigAssociationResponse> {
    const body: jsonP.JSONObject = {
      ResolverQueryLogConfigAssociationId: params["ResolverQueryLogConfigAssociationId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverQueryLogConfigAssociation",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigAssociation": toResolverQueryLogConfigAssociation,
      },
    }, await resp.json());
  }

  async getResolverQueryLogConfigPolicy(
    {abortSignal, ...params}: RequestConfig & s.GetResolverQueryLogConfigPolicyRequest,
  ): Promise<s.GetResolverQueryLogConfigPolicyResponse> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverQueryLogConfigPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverQueryLogConfigPolicy": "s",
      },
    }, await resp.json());
  }

  async getResolverRule(
    {abortSignal, ...params}: RequestConfig & s.GetResolverRuleRequest,
  ): Promise<s.GetResolverRuleResponse> {
    const body: jsonP.JSONObject = {
      ResolverRuleId: params["ResolverRuleId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverRule",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

  async getResolverRuleAssociation(
    {abortSignal, ...params}: RequestConfig & s.GetResolverRuleAssociationRequest,
  ): Promise<s.GetResolverRuleAssociationResponse> {
    const body: jsonP.JSONObject = {
      ResolverRuleAssociationId: params["ResolverRuleAssociationId"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverRuleAssociation",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRuleAssociation": toResolverRuleAssociation,
      },
    }, await resp.json());
  }

  async getResolverRulePolicy(
    {abortSignal, ...params}: RequestConfig & s.GetResolverRulePolicyRequest,
  ): Promise<s.GetResolverRulePolicyResponse> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "GetResolverRulePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRulePolicy": "s",
      },
    }, await resp.json());
  }

  async listResolverDnssecConfigs(
    {abortSignal, ...params}: RequestConfig & s.ListResolverDnssecConfigsRequest = {},
  ): Promise<s.ListResolverDnssecConfigsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverDnssecConfigs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "ResolverDnssecConfigs": [toResolverDnssecConfig],
      },
    }, await resp.json());
  }

  async listResolverEndpointIpAddresses(
    {abortSignal, ...params}: RequestConfig & s.ListResolverEndpointIpAddressesRequest,
  ): Promise<s.ListResolverEndpointIpAddressesResponse> {
    const body: jsonP.JSONObject = {
      ResolverEndpointId: params["ResolverEndpointId"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverEndpointIpAddresses",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "IpAddresses": [toIpAddressResponse],
      },
    }, await resp.json());
  }

  async listResolverEndpoints(
    {abortSignal, ...params}: RequestConfig & s.ListResolverEndpointsRequest = {},
  ): Promise<s.ListResolverEndpointsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverEndpoints",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "ResolverEndpoints": [toResolverEndpoint],
      },
    }, await resp.json());
  }

  async listResolverQueryLogConfigAssociations(
    {abortSignal, ...params}: RequestConfig & s.ListResolverQueryLogConfigAssociationsRequest = {},
  ): Promise<s.ListResolverQueryLogConfigAssociationsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
      SortBy: params["SortBy"],
      SortOrder: params["SortOrder"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverQueryLogConfigAssociations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "TotalCount": "n",
        "TotalFilteredCount": "n",
        "ResolverQueryLogConfigAssociations": [toResolverQueryLogConfigAssociation],
      },
    }, await resp.json());
  }

  async listResolverQueryLogConfigs(
    {abortSignal, ...params}: RequestConfig & s.ListResolverQueryLogConfigsRequest = {},
  ): Promise<s.ListResolverQueryLogConfigsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
      SortBy: params["SortBy"],
      SortOrder: params["SortOrder"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverQueryLogConfigs",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "TotalCount": "n",
        "TotalFilteredCount": "n",
        "ResolverQueryLogConfigs": [toResolverQueryLogConfig],
      },
    }, await resp.json());
  }

  async listResolverRuleAssociations(
    {abortSignal, ...params}: RequestConfig & s.ListResolverRuleAssociationsRequest = {},
  ): Promise<s.ListResolverRuleAssociationsResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverRuleAssociations",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "ResolverRuleAssociations": [toResolverRuleAssociation],
      },
    }, await resp.json());
  }

  async listResolverRules(
    {abortSignal, ...params}: RequestConfig & s.ListResolverRulesRequest = {},
  ): Promise<s.ListResolverRulesResponse> {
    const body: jsonP.JSONObject = {
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
      Filters: params["Filters"]?.map(x => fromFilter(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListResolverRules",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "NextToken": "s",
        "MaxResults": "n",
        "ResolverRules": [toResolverRule],
      },
    }, await resp.json());
  }

  async listTagsForResource(
    {abortSignal, ...params}: RequestConfig & s.ListTagsForResourceRequest,
  ): Promise<s.ListTagsForResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      MaxResults: params["MaxResults"],
      NextToken: params["NextToken"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "ListTagsForResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "Tags": [toTag],
        "NextToken": "s",
      },
    }, await resp.json());
  }

  async putResolverQueryLogConfigPolicy(
    {abortSignal, ...params}: RequestConfig & s.PutResolverQueryLogConfigPolicyRequest,
  ): Promise<s.PutResolverQueryLogConfigPolicyResponse> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      ResolverQueryLogConfigPolicy: params["ResolverQueryLogConfigPolicy"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutResolverQueryLogConfigPolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ReturnValue": "b",
      },
    }, await resp.json());
  }

  async putResolverRulePolicy(
    {abortSignal, ...params}: RequestConfig & s.PutResolverRulePolicyRequest,
  ): Promise<s.PutResolverRulePolicyResponse> {
    const body: jsonP.JSONObject = {
      Arn: params["Arn"],
      ResolverRulePolicy: params["ResolverRulePolicy"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "PutResolverRulePolicy",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ReturnValue": "b",
      },
    }, await resp.json());
  }

  async tagResource(
    {abortSignal, ...params}: RequestConfig & s.TagResourceRequest,
  ): Promise<s.TagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      Tags: params["Tags"]?.map(x => fromTag(x)),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "TagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async untagResource(
    {abortSignal, ...params}: RequestConfig & s.UntagResourceRequest,
  ): Promise<s.UntagResourceResponse> {
    const body: jsonP.JSONObject = {
      ResourceArn: params["ResourceArn"],
      TagKeys: params["TagKeys"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UntagResource",
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async updateResolverDnssecConfig(
    {abortSignal, ...params}: RequestConfig & s.UpdateResolverDnssecConfigRequest,
  ): Promise<s.UpdateResolverDnssecConfigResponse> {
    const body: jsonP.JSONObject = {
      ResourceId: params["ResourceId"],
      Validation: params["Validation"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateResolverDnssecConfig",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverDNSSECConfig": toResolverDnssecConfig,
      },
    }, await resp.json());
  }

  async updateResolverEndpoint(
    {abortSignal, ...params}: RequestConfig & s.UpdateResolverEndpointRequest,
  ): Promise<s.UpdateResolverEndpointResponse> {
    const body: jsonP.JSONObject = {
      ResolverEndpointId: params["ResolverEndpointId"],
      Name: params["Name"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateResolverEndpoint",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverEndpoint": toResolverEndpoint,
      },
    }, await resp.json());
  }

  async updateResolverRule(
    {abortSignal, ...params}: RequestConfig & s.UpdateResolverRuleRequest,
  ): Promise<s.UpdateResolverRuleResponse> {
    const body: jsonP.JSONObject = {
      ResolverRuleId: params["ResolverRuleId"],
      Config: fromResolverRuleConfig(params["Config"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateResolverRule",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "ResolverRule": toResolverRule,
      },
    }, await resp.json());
  }

}

function fromIpAddressUpdate(input?: s.IpAddressUpdate | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    IpId: input["IpId"],
    SubnetId: input["SubnetId"],
    Ip: input["Ip"],
  }
}

function fromIpAddressRequest(input?: s.IpAddressRequest | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    SubnetId: input["SubnetId"],
    Ip: input["Ip"],
  }
}

function fromTag(input?: s.Tag | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Key: input["Key"],
    Value: input["Value"],
  }
}
function toTag(root: jsonP.JSONValue): s.Tag {
  return jsonP.readObj({
    required: {
      "Key": "s",
      "Value": "s",
    },
    optional: {},
  }, root);
}

function fromTargetAddress(input?: s.TargetAddress | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Ip: input["Ip"],
    Port: input["Port"],
  }
}
function toTargetAddress(root: jsonP.JSONValue): s.TargetAddress {
  return jsonP.readObj({
    required: {
      "Ip": "s",
    },
    optional: {
      "Port": "n",
    },
  }, root);
}

function fromFilter(input?: s.Filter | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    Values: input["Values"],
  }
}

function fromResolverRuleConfig(input?: s.ResolverRuleConfig | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    Name: input["Name"],
    TargetIps: input["TargetIps"]?.map(x => fromTargetAddress(x)),
    ResolverEndpointId: input["ResolverEndpointId"],
  }
}

function toResolverEndpoint(root: jsonP.JSONValue): s.ResolverEndpoint {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "CreatorRequestId": "s",
      "Arn": "s",
      "Name": "s",
      "SecurityGroupIds": ["s"],
      "Direction": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverEndpointDirection>(x),
      "IpAddressCount": "n",
      "HostVPCId": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverEndpointStatus>(x),
      "StatusMessage": "s",
      "CreationTime": "s",
      "ModificationTime": "s",
    },
  }, root);
}

function toResolverQueryLogConfigAssociation(root: jsonP.JSONValue): s.ResolverQueryLogConfigAssociation {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "ResolverQueryLogConfigId": "s",
      "ResourceId": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverQueryLogConfigAssociationStatus>(x),
      "Error": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverQueryLogConfigAssociationError>(x),
      "ErrorMessage": "s",
      "CreationTime": "s",
    },
  }, root);
}

function toResolverRuleAssociation(root: jsonP.JSONValue): s.ResolverRuleAssociation {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "ResolverRuleId": "s",
      "Name": "s",
      "VPCId": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverRuleAssociationStatus>(x),
      "StatusMessage": "s",
    },
  }, root);
}

function toResolverQueryLogConfig(root: jsonP.JSONValue): s.ResolverQueryLogConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "OwnerId": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverQueryLogConfigStatus>(x),
      "ShareStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ShareStatus>(x),
      "AssociationCount": "n",
      "Arn": "s",
      "Name": "s",
      "DestinationArn": "s",
      "CreatorRequestId": "s",
      "CreationTime": "s",
    },
  }, root);
}

function toResolverRule(root: jsonP.JSONValue): s.ResolverRule {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "CreatorRequestId": "s",
      "Arn": "s",
      "DomainName": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverRuleStatus>(x),
      "StatusMessage": "s",
      "RuleType": (x: jsonP.JSONValue) => cmnP.readEnum<s.RuleTypeOption>(x),
      "Name": "s",
      "TargetIps": [toTargetAddress],
      "ResolverEndpointId": "s",
      "OwnerId": "s",
      "ShareStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ShareStatus>(x),
      "CreationTime": "s",
      "ModificationTime": "s",
    },
  }, root);
}

function toResolverDnssecConfig(root: jsonP.JSONValue): s.ResolverDnssecConfig {
  return jsonP.readObj({
    required: {},
    optional: {
      "Id": "s",
      "OwnerId": "s",
      "ResourceId": "s",
      "ValidationStatus": (x: jsonP.JSONValue) => cmnP.readEnum<s.ResolverDNSSECValidationStatus>(x),
    },
  }, root);
}

function toIpAddressResponse(root: jsonP.JSONValue): s.IpAddressResponse {
  return jsonP.readObj({
    required: {},
    optional: {
      "IpId": "s",
      "SubnetId": "s",
      "Ip": "s",
      "Status": (x: jsonP.JSONValue) => cmnP.readEnum<s.IpAddressStatus>(x),
      "StatusMessage": "s",
      "CreationTime": "s",
      "ModificationTime": "s",
    },
  }, root);
}
