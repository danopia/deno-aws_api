// Autogenerated API client for: AWS EC2 Instance Connect

import type { ServiceClient, ApiFactory, ApiMetadata } from '../../client/common.ts';
interface RequestConfig {
  abortSignal?: AbortSignal;
}

import { JSONObject, JSONValue } from '../../encoding/json.ts';
import * as prt from "../../encoding/json.ts";

export default class EC2InstanceConnect {
  #client: ServiceClient;
  constructor(apiFactory: ApiFactory) {
    this.#client = apiFactory.buildServiceClient(EC2InstanceConnect.ApiMetadata);
  }

  static ApiMetadata: ApiMetadata = {
    "apiVersion": "2018-04-02",
    "endpointPrefix": "ec2-instance-connect",
    "jsonVersion": "1.1",
    "protocol": "json",
    "serviceAbbreviation": "EC2 Instance Connect",
    "serviceFullName": "AWS EC2 Instance Connect",
    "serviceId": "EC2 Instance Connect",
    "signatureVersion": "v4",
    "targetPrefix": "AWSEC2InstanceConnectService",
    "uid": "ec2-instance-connect-2018-04-02"
  };

  async sendSSHPublicKey(
    {abortSignal, ...params}: RequestConfig & SendSSHPublicKeyRequest,
  ): Promise<SendSSHPublicKeyResponse> {
    const body: JSONObject = {...params,
  };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "SendSSHPublicKey",
    });
    return prt.readObj({
      required: {},
      optional: {
        "RequestId": "s",
        "Success": "b",
      },
    }, await resp.json());
  }

}

// refs: 1 - tags: named, input
export interface SendSSHPublicKeyRequest {
  InstanceId: string;
  InstanceOSUser: string;
  SSHPublicKey: string;
  AvailabilityZone: string;
}

// refs: 1 - tags: named, output
export interface SendSSHPublicKeyResponse {
  RequestId?: string | null;
  Success?: boolean | null;
}