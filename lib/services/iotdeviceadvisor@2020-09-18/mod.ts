// Autogenerated API client for: AWS IoT Core Device Advisor

interface RequestConfig {
  abortSignal?: AbortSignal;
}

export * from "./structs.ts";
import * as client from "../../client/common.ts";
import * as cmnP from "../../encoding/common.ts";
import * as jsonP from "../../encoding/json.ts";
import type * as s from "./structs.ts";

export default class IotDeviceAdvisor {
  #client: client.ServiceClient;
  constructor(apiFactory: client.ApiFactory) {
    this.#client = apiFactory.buildServiceClient(IotDeviceAdvisor.ApiMetadata);
  }

  static ApiMetadata: client.ApiMetadata = {
    "apiVersion": "2020-09-18",
    "endpointPrefix": "api.iotdeviceadvisor",
    "jsonVersion": "1.1",
    "protocol": "rest-json",
    "serviceAbbreviation": "AWSIoTDeviceAdvisor",
    "serviceFullName": "AWS IoT Core Device Advisor",
    "serviceId": "IotDeviceAdvisor",
    "signatureVersion": "v4",
    "signingName": "iotdeviceadvisor",
    "uid": "iotdeviceadvisor-2020-09-18"
  };

  async createSuiteDefinition(
    {abortSignal, ...params}: RequestConfig & s.CreateSuiteDefinitionRequest = {},
  ): Promise<s.CreateSuiteDefinitionResponse> {
    const body: jsonP.JSONObject = {
      suiteDefinitionConfiguration: fromSuiteDefinitionConfiguration(params["suiteDefinitionConfiguration"]),
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "CreateSuiteDefinition",
      requestUri: "/suiteDefinitions",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteDefinitionId": "s",
        "suiteDefinitionArn": "s",
        "suiteDefinitionName": "s",
        "createdAt": "d",
      },
    }, await resp.json());
  }

  async deleteSuiteDefinition(
    {abortSignal, ...params}: RequestConfig & s.DeleteSuiteDefinitionRequest,
  ): Promise<s.DeleteSuiteDefinitionResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "DeleteSuiteDefinition",
      method: "DELETE",
      requestUri: cmnP.encodePath`/suiteDefinitions/${params["suiteDefinitionId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {},
    }, await resp.json());
  }

  async getSuiteDefinition(
    {abortSignal, ...params}: RequestConfig & s.GetSuiteDefinitionRequest,
  ): Promise<s.GetSuiteDefinitionResponse> {
    const query = new URLSearchParams;
    if (params["suiteDefinitionVersion"] != null) query.set("suiteDefinitionVersion", params["suiteDefinitionVersion"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "GetSuiteDefinition",
      method: "GET",
      requestUri: cmnP.encodePath`/suiteDefinitions/${params["suiteDefinitionId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteDefinitionId": "s",
        "suiteDefinitionArn": "s",
        "suiteDefinitionVersion": "s",
        "latestVersion": "s",
        "suiteDefinitionConfiguration": toSuiteDefinitionConfiguration,
        "createdAt": "d",
        "lastModifiedAt": "d",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async getSuiteRun(
    {abortSignal, ...params}: RequestConfig & s.GetSuiteRunRequest,
  ): Promise<s.GetSuiteRunResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetSuiteRun",
      method: "GET",
      requestUri: cmnP.encodePath`/suiteDefinitions/${params["suiteDefinitionId"]}/suiteRuns/${params["suiteRunId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteDefinitionId": "s",
        "suiteDefinitionVersion": "s",
        "suiteRunId": "s",
        "suiteRunArn": "s",
        "suiteRunConfiguration": toSuiteRunConfiguration,
        "testResult": toTestResult,
        "startTime": "d",
        "endTime": "d",
        "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SuiteRunStatus>(x),
        "errorReason": "s",
        "tags": x => jsonP.readMap(String, String, x),
      },
    }, await resp.json());
  }

  async getSuiteRunReport(
    {abortSignal, ...params}: RequestConfig & s.GetSuiteRunReportRequest,
  ): Promise<s.GetSuiteRunReportResponse> {

    const resp = await this.#client.performRequest({
      abortSignal,
      action: "GetSuiteRunReport",
      method: "GET",
      requestUri: cmnP.encodePath`/suiteDefinitions/${params["suiteDefinitionId"]}/suiteRuns/${params["suiteRunId"]}/report`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "qualificationReportDownloadUrl": "s",
      },
    }, await resp.json());
  }

  async listSuiteDefinitions(
    {abortSignal, ...params}: RequestConfig & s.ListSuiteDefinitionsRequest = {},
  ): Promise<s.ListSuiteDefinitionsResponse> {
    const query = new URLSearchParams;
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSuiteDefinitions",
      method: "GET",
      requestUri: "/suiteDefinitions",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteDefinitionInformationList": [toSuiteDefinitionInformation],
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async listSuiteRuns(
    {abortSignal, ...params}: RequestConfig & s.ListSuiteRunsRequest = {},
  ): Promise<s.ListSuiteRunsResponse> {
    const query = new URLSearchParams;
    if (params["suiteDefinitionId"] != null) query.set("suiteDefinitionId", params["suiteDefinitionId"]?.toString() ?? "");
    if (params["suiteDefinitionVersion"] != null) query.set("suiteDefinitionVersion", params["suiteDefinitionVersion"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListSuiteRuns",
      method: "GET",
      requestUri: "/suiteRuns",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteRunsList": [toSuiteRunInformation],
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

  async listTestCases(
    {abortSignal, ...params}: RequestConfig & s.ListTestCasesRequest = {},
  ): Promise<s.ListTestCasesResponse> {
    const query = new URLSearchParams;
    if (params["intendedForQualification"] != null) query.set("intendedForQualification", params["intendedForQualification"]?.toString() ?? "");
    if (params["maxResults"] != null) query.set("maxResults", params["maxResults"]?.toString() ?? "");
    if (params["nextToken"] != null) query.set("nextToken", params["nextToken"]?.toString() ?? "");
    const resp = await this.#client.performRequest({
      abortSignal, query,
      action: "ListTestCases",
      method: "GET",
      requestUri: "/testCases",
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "categories": [toTestCaseCategory],
        "rootGroupConfiguration": x => jsonP.readMap(String, String, x),
        "groupConfiguration": x => jsonP.readMap(String, String, x),
        "nextToken": "s",
      },
    }, await resp.json());
  }

  async startSuiteRun(
    {abortSignal, ...params}: RequestConfig & s.StartSuiteRunRequest,
  ): Promise<s.StartSuiteRunResponse> {
    const body: jsonP.JSONObject = {
      suiteDefinitionVersion: params["suiteDefinitionVersion"],
      suiteRunConfiguration: fromSuiteRunConfiguration(params["suiteRunConfiguration"]),
      tags: params["tags"],
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "StartSuiteRun",
      requestUri: cmnP.encodePath`/suiteDefinitions/${params["suiteDefinitionId"]}/suiteRuns`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteRunId": "s",
        "suiteRunArn": "s",
        "createdAt": "d",
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

  async updateSuiteDefinition(
    {abortSignal, ...params}: RequestConfig & s.UpdateSuiteDefinitionRequest,
  ): Promise<s.UpdateSuiteDefinitionResponse> {
    const body: jsonP.JSONObject = {
      suiteDefinitionConfiguration: fromSuiteDefinitionConfiguration(params["suiteDefinitionConfiguration"]),
    };
    const resp = await this.#client.performRequest({
      abortSignal, body,
      action: "UpdateSuiteDefinition",
      method: "PATCH",
      requestUri: cmnP.encodePath`/suiteDefinitions/${params["suiteDefinitionId"]}`,
    });
    return jsonP.readObj({
      required: {},
      optional: {
        "suiteDefinitionId": "s",
        "suiteDefinitionArn": "s",
        "suiteDefinitionName": "s",
        "suiteDefinitionVersion": "s",
        "createdAt": "d",
        "lastUpdatedAt": "d",
      },
    }, await resp.json());
  }

}

function fromSuiteDefinitionConfiguration(input?: s.SuiteDefinitionConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    suiteDefinitionName: input["suiteDefinitionName"],
    devices: input["devices"]?.map(x => fromDeviceUnderTest(x)),
    intendedForQualification: input["intendedForQualification"],
    rootGroup: input["rootGroup"],
    devicePermissionRoleArn: input["devicePermissionRoleArn"],
  }
}
function toSuiteDefinitionConfiguration(root: jsonP.JSONValue): s.SuiteDefinitionConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "suiteDefinitionName": "s",
      "devices": [toDeviceUnderTest],
      "intendedForQualification": "b",
      "rootGroup": "s",
      "devicePermissionRoleArn": "s",
    },
  }, root);
}

function fromDeviceUnderTest(input?: s.DeviceUnderTest | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    thingArn: input["thingArn"],
    certificateArn: input["certificateArn"],
  }
}
function toDeviceUnderTest(root: jsonP.JSONValue): s.DeviceUnderTest {
  return jsonP.readObj({
    required: {},
    optional: {
      "thingArn": "s",
      "certificateArn": "s",
    },
  }, root);
}

function fromSuiteRunConfiguration(input?: s.SuiteRunConfiguration | null): jsonP.JSONValue {
  if (!input) return input;
  return {
    primaryDevice: fromDeviceUnderTest(input["primaryDevice"]),
    secondaryDevice: fromDeviceUnderTest(input["secondaryDevice"]),
    selectedTestList: input["selectedTestList"],
  }
}
function toSuiteRunConfiguration(root: jsonP.JSONValue): s.SuiteRunConfiguration {
  return jsonP.readObj({
    required: {},
    optional: {
      "primaryDevice": toDeviceUnderTest,
      "secondaryDevice": toDeviceUnderTest,
      "selectedTestList": ["s"],
    },
  }, root);
}

function toTestResult(root: jsonP.JSONValue): s.TestResult {
  return jsonP.readObj({
    required: {},
    optional: {
      "groups": [toGroupResult],
    },
  }, root);
}

function toGroupResult(root: jsonP.JSONValue): s.GroupResult {
  return jsonP.readObj({
    required: {},
    optional: {
      "groupId": "s",
      "groupName": "s",
      "tests": [toTestCaseRun],
    },
  }, root);
}

function toTestCaseRun(root: jsonP.JSONValue): s.TestCaseRun {
  return jsonP.readObj({
    required: {},
    optional: {
      "testCaseRunId": "s",
      "testCaseDefinitionId": "s",
      "testCaseDefinitionName": "s",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.Status>(x),
      "startTime": "d",
      "endTime": "d",
      "logUrl": "s",
      "warnings": "s",
      "failure": "s",
    },
  }, root);
}

function toSuiteDefinitionInformation(root: jsonP.JSONValue): s.SuiteDefinitionInformation {
  return jsonP.readObj({
    required: {},
    optional: {
      "suiteDefinitionId": "s",
      "suiteDefinitionName": "s",
      "defaultDevices": [toDeviceUnderTest],
      "intendedForQualification": "b",
      "createdAt": "d",
    },
  }, root);
}

function toSuiteRunInformation(root: jsonP.JSONValue): s.SuiteRunInformation {
  return jsonP.readObj({
    required: {},
    optional: {
      "suiteDefinitionId": "s",
      "suiteDefinitionVersion": "s",
      "suiteDefinitionName": "s",
      "suiteRunId": "s",
      "createdAt": "d",
      "startedAt": "d",
      "endAt": "d",
      "status": (x: jsonP.JSONValue) => cmnP.readEnum<s.SuiteRunStatus>(x),
      "passed": "n",
      "failed": "n",
    },
  }, root);
}

function toTestCaseCategory(root: jsonP.JSONValue): s.TestCaseCategory {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "tests": [toTestCase],
    },
  }, root);
}

function toTestCase(root: jsonP.JSONValue): s.TestCase {
  return jsonP.readObj({
    required: {},
    optional: {
      "name": "s",
      "configuration": x => jsonP.readMap(String, String, x),
      "test": toTestCaseDefinition,
    },
  }, root);
}

function toTestCaseDefinition(root: jsonP.JSONValue): s.TestCaseDefinition {
  return jsonP.readObj({
    required: {},
    optional: {
      "id": "s",
      "testCaseVersion": "s",
    },
  }, root);
}
