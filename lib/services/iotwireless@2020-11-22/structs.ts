// Autogenerated API structures for: AWS IoT Wireless

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface AssociateAwsAccountWithPartnerAccountRequest {
  Sidewalk: SidewalkAccountInfo;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface AssociateWirelessDeviceWithThingRequest {
  Id: string;
  ThingArn: string;
}

// refs: 1 - tags: named, input
export interface AssociateWirelessGatewayWithCertificateRequest {
  Id: string;
  IotCertificateId: string;
}

// refs: 1 - tags: named, input
export interface AssociateWirelessGatewayWithThingRequest {
  Id: string;
  ThingArn: string;
}

// refs: 1 - tags: named, input
export interface CreateDestinationRequest {
  Name: string;
  ExpressionType: ExpressionType;
  Expression: string;
  Description?: string | null;
  RoleArn: string;
  Tags?: Tag[] | null;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateDeviceProfileRequest {
  Name?: string | null;
  LoRaWAN?: LoRaWANDeviceProfile | null;
  Tags?: Tag[] | null;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateServiceProfileRequest {
  Name?: string | null;
  LoRaWAN?: LoRaWANServiceProfile | null;
  Tags?: Tag[] | null;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateWirelessDeviceRequest {
  Type: WirelessDeviceType;
  Name?: string | null;
  Description?: string | null;
  DestinationName: string;
  ClientRequestToken?: string | null;
  LoRaWAN?: LoRaWANDevice | null;
}

// refs: 1 - tags: named, input
export interface CreateWirelessGatewayRequest {
  Name?: string | null;
  Description?: string | null;
  LoRaWAN: LoRaWANGateway;
  Tags?: Tag[] | null;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface CreateWirelessGatewayTaskRequest {
  Id: string;
  WirelessGatewayTaskDefinitionId: string;
}

// refs: 1 - tags: named, input
export interface CreateWirelessGatewayTaskDefinitionRequest {
  AutoCreateTasks: boolean;
  Name?: string | null;
  Update?: UpdateWirelessGatewayTaskCreate | null;
  ClientRequestToken?: string | null;
}

// refs: 1 - tags: named, input
export interface DeleteDestinationRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface DeleteDeviceProfileRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteServiceProfileRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteWirelessDeviceRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteWirelessGatewayRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteWirelessGatewayTaskRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DeleteWirelessGatewayTaskDefinitionRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DisassociateAwsAccountFromPartnerAccountRequest {
  PartnerAccountId: string;
  PartnerType: PartnerType;
}

// refs: 1 - tags: named, input
export interface DisassociateWirelessDeviceFromThingRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DisassociateWirelessGatewayFromCertificateRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface DisassociateWirelessGatewayFromThingRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetDestinationRequest {
  Name: string;
}

// refs: 1 - tags: named, input
export interface GetDeviceProfileRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetPartnerAccountRequest {
  PartnerAccountId: string;
  PartnerType: PartnerType;
}

// refs: 1 - tags: named, input
export interface GetServiceEndpointRequest {
  ServiceType?: WirelessGatewayServiceType | null;
}

// refs: 1 - tags: named, input
export interface GetServiceProfileRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetWirelessDeviceRequest {
  Identifier: string;
  IdentifierType: WirelessDeviceIdType;
}

// refs: 1 - tags: named, input
export interface GetWirelessDeviceStatisticsRequest {
  WirelessDeviceId: string;
}

// refs: 1 - tags: named, input
export interface GetWirelessGatewayRequest {
  Identifier: string;
  IdentifierType: WirelessGatewayIdType;
}

// refs: 1 - tags: named, input
export interface GetWirelessGatewayCertificateRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetWirelessGatewayFirmwareInformationRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetWirelessGatewayStatisticsRequest {
  WirelessGatewayId: string;
}

// refs: 1 - tags: named, input
export interface GetWirelessGatewayTaskRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface GetWirelessGatewayTaskDefinitionRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface ListDestinationsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
}

// refs: 1 - tags: named, input
export interface ListDeviceProfilesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListPartnerAccountsRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListServiceProfilesRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface ListTagsForResourceRequest {
  ResourceArn: string;
}

// refs: 1 - tags: named, input
export interface ListWirelessDevicesRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  DestinationName?: string | null;
  DeviceProfileId?: string | null;
  ServiceProfileId?: string | null;
  WirelessDeviceType?: WirelessDeviceType | null;
}

// refs: 1 - tags: named, input
export interface ListWirelessGatewayTaskDefinitionsRequest {
  MaxResults?: number | null;
  NextToken?: string | null;
  TaskDefinitionType?: WirelessGatewayTaskDefinitionType | null;
}

// refs: 1 - tags: named, input
export interface ListWirelessGatewaysRequest {
  NextToken?: string | null;
  MaxResults?: number | null;
}

// refs: 1 - tags: named, input
export interface SendDataToWirelessDeviceRequest {
  Id: string;
  TransmitMode: number;
  PayloadData: string;
  WirelessMetadata?: WirelessMetadata | null;
}

// refs: 1 - tags: named, input
export interface TagResourceRequest {
  ResourceArn: string;
  Tags: Tag[];
}

// refs: 1 - tags: named, input
export interface TestWirelessDeviceRequest {
  Id: string;
}

// refs: 1 - tags: named, input
export interface UntagResourceRequest {
  ResourceArn: string;
  TagKeys: string[];
}

// refs: 1 - tags: named, input
export interface UpdateDestinationRequest {
  Name: string;
  ExpressionType?: ExpressionType | null;
  Expression?: string | null;
  Description?: string | null;
  RoleArn?: string | null;
}

// refs: 1 - tags: named, input
export interface UpdatePartnerAccountRequest {
  Sidewalk: SidewalkUpdateAccount;
  PartnerAccountId: string;
  PartnerType: PartnerType;
}

// refs: 1 - tags: named, input
export interface UpdateWirelessDeviceRequest {
  Id: string;
  DestinationName?: string | null;
  Name?: string | null;
  Description?: string | null;
  LoRaWAN?: LoRaWANUpdateDevice | null;
}

// refs: 1 - tags: named, input
export interface UpdateWirelessGatewayRequest {
  Id: string;
  Name?: string | null;
  Description?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateAwsAccountWithPartnerAccountResponse {
  Sidewalk?: SidewalkAccountInfo | null;
}

// refs: 1 - tags: named, output
export interface AssociateWirelessDeviceWithThingResponse {
}

// refs: 1 - tags: named, output
export interface AssociateWirelessGatewayWithCertificateResponse {
  IotCertificateId?: string | null;
}

// refs: 1 - tags: named, output
export interface AssociateWirelessGatewayWithThingResponse {
}

// refs: 1 - tags: named, output
export interface CreateDestinationResponse {
  Arn?: string | null;
  Name?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateDeviceProfileResponse {
  Arn?: string | null;
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateServiceProfileResponse {
  Arn?: string | null;
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateWirelessDeviceResponse {
  Arn?: string | null;
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateWirelessGatewayResponse {
  Arn?: string | null;
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface CreateWirelessGatewayTaskResponse {
  WirelessGatewayTaskDefinitionId?: string | null;
  Status?: WirelessGatewayTaskStatus | null;
}

// refs: 1 - tags: named, output
export interface CreateWirelessGatewayTaskDefinitionResponse {
  Id?: string | null;
}

// refs: 1 - tags: named, output
export interface DeleteDestinationResponse {
}

// refs: 1 - tags: named, output
export interface DeleteDeviceProfileResponse {
}

// refs: 1 - tags: named, output
export interface DeleteServiceProfileResponse {
}

// refs: 1 - tags: named, output
export interface DeleteWirelessDeviceResponse {
}

// refs: 1 - tags: named, output
export interface DeleteWirelessGatewayResponse {
}

// refs: 1 - tags: named, output
export interface DeleteWirelessGatewayTaskResponse {
}

// refs: 1 - tags: named, output
export interface DeleteWirelessGatewayTaskDefinitionResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateAwsAccountFromPartnerAccountResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateWirelessDeviceFromThingResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateWirelessGatewayFromCertificateResponse {
}

// refs: 1 - tags: named, output
export interface DisassociateWirelessGatewayFromThingResponse {
}

// refs: 1 - tags: named, output
export interface GetDestinationResponse {
  Arn?: string | null;
  Name?: string | null;
  Expression?: string | null;
  ExpressionType?: ExpressionType | null;
  Description?: string | null;
  RoleArn?: string | null;
}

// refs: 1 - tags: named, output
export interface GetDeviceProfileResponse {
  Arn?: string | null;
  Name?: string | null;
  Id?: string | null;
  LoRaWAN?: LoRaWANDeviceProfile | null;
}

// refs: 1 - tags: named, output
export interface GetPartnerAccountResponse {
  Sidewalk?: SidewalkAccountInfoWithFingerprint | null;
  AccountLinked?: boolean | null;
}

// refs: 1 - tags: named, output
export interface GetServiceEndpointResponse {
  ServiceType?: WirelessGatewayServiceType | null;
  ServiceEndpoint?: string | null;
  ServerTrust?: string | null;
}

// refs: 1 - tags: named, output
export interface GetServiceProfileResponse {
  Arn?: string | null;
  Name?: string | null;
  Id?: string | null;
  LoRaWAN?: LoRaWANGetServiceProfileInfo | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessDeviceResponse {
  Type?: WirelessDeviceType | null;
  Name?: string | null;
  Description?: string | null;
  DestinationName?: string | null;
  Id?: string | null;
  Arn?: string | null;
  ThingName?: string | null;
  ThingArn?: string | null;
  LoRaWAN?: LoRaWANDevice | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessDeviceStatisticsResponse {
  WirelessDeviceId?: string | null;
  LastUplinkReceivedAt?: string | null;
  LoRaWAN?: LoRaWANDeviceMetadata | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessGatewayResponse {
  Name?: string | null;
  Id?: string | null;
  Description?: string | null;
  LoRaWAN?: LoRaWANGateway | null;
  Arn?: string | null;
  ThingName?: string | null;
  ThingArn?: string | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessGatewayCertificateResponse {
  IotCertificateId?: string | null;
  LoRaWANNetworkServerCertificateId?: string | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessGatewayFirmwareInformationResponse {
  LoRaWAN?: LoRaWANGatewayCurrentVersion | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessGatewayStatisticsResponse {
  WirelessGatewayId?: string | null;
  LastUplinkReceivedAt?: string | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessGatewayTaskResponse {
  WirelessGatewayId?: string | null;
  WirelessGatewayTaskDefinitionId?: string | null;
  LastUplinkReceivedAt?: string | null;
  TaskCreatedAt?: string | null;
  Status?: WirelessGatewayTaskStatus | null;
}

// refs: 1 - tags: named, output
export interface GetWirelessGatewayTaskDefinitionResponse {
  AutoCreateTasks?: boolean | null;
  Name?: string | null;
  Update?: UpdateWirelessGatewayTaskCreate | null;
}

// refs: 1 - tags: named, output
export interface ListDestinationsResponse {
  NextToken?: string | null;
  DestinationList?: Destinations[] | null;
}

// refs: 1 - tags: named, output
export interface ListDeviceProfilesResponse {
  NextToken?: string | null;
  DeviceProfileList?: DeviceProfile[] | null;
}

// refs: 1 - tags: named, output
export interface ListPartnerAccountsResponse {
  NextToken?: string | null;
  Sidewalk?: SidewalkAccountInfoWithFingerprint[] | null;
}

// refs: 1 - tags: named, output
export interface ListServiceProfilesResponse {
  NextToken?: string | null;
  ServiceProfileList?: ServiceProfile[] | null;
}

// refs: 1 - tags: named, output
export interface ListTagsForResourceResponse {
  Tags?: Tag[] | null;
}

// refs: 1 - tags: named, output
export interface ListWirelessDevicesResponse {
  NextToken?: string | null;
  WirelessDeviceList?: WirelessDeviceStatistics[] | null;
}

// refs: 1 - tags: named, output
export interface ListWirelessGatewayTaskDefinitionsResponse {
  NextToken?: string | null;
  TaskDefinitions?: UpdateWirelessGatewayTaskEntry[] | null;
}

// refs: 1 - tags: named, output
export interface ListWirelessGatewaysResponse {
  NextToken?: string | null;
  WirelessGatewayList?: WirelessGatewayStatistics[] | null;
}

// refs: 1 - tags: named, output
export interface SendDataToWirelessDeviceResponse {
  MessageId?: string | null;
}

// refs: 1 - tags: named, output
export interface TagResourceResponse {
}

// refs: 1 - tags: named, output
export interface TestWirelessDeviceResponse {
  Result?: string | null;
}

// refs: 1 - tags: named, output
export interface UntagResourceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateDestinationResponse {
}

// refs: 1 - tags: named, output
export interface UpdatePartnerAccountResponse {
}

// refs: 1 - tags: named, output
export interface UpdateWirelessDeviceResponse {
}

// refs: 1 - tags: named, output
export interface UpdateWirelessGatewayResponse {
}

// refs: 2 - tags: input, named, interface, output
export interface SidewalkAccountInfo {
  AmazonId?: string | null;
  AppServerPrivateKey?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type ExpressionType =
| "RuleName"
| "MqttTopic"
| cmnP.UnexpectedEnumValue;

// refs: 6 - tags: input, named, interface, output
export interface Tag {
  Key: string;
  Value: string;
}

// refs: 2 - tags: input, named, interface, output
export interface LoRaWANDeviceProfile {
  SupportsClassB?: boolean | null;
  ClassBTimeout?: number | null;
  PingSlotPeriod?: number | null;
  PingSlotDr?: number | null;
  PingSlotFreq?: number | null;
  SupportsClassC?: boolean | null;
  ClassCTimeout?: number | null;
  MacVersion?: string | null;
  RegParamsRevision?: string | null;
  RxDelay1?: number | null;
  RxDrOffset1?: number | null;
  RxDataRate2?: number | null;
  RxFreq2?: number | null;
  FactoryPresetFreqsList?: number[] | null;
  MaxEirp?: number | null;
  MaxDutyCycle?: number | null;
  RfRegion?: string | null;
  SupportsJoin?: boolean | null;
  Supports32BitFCnt?: boolean | null;
}

// refs: 1 - tags: input, named, interface
export interface LoRaWANServiceProfile {
  AddGwMetadata?: boolean | null;
}

// refs: 4 - tags: input, named, enum, output
export type WirelessDeviceType =
| "Sidewalk"
| "LoRaWAN"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, interface, output
export interface LoRaWANDevice {
  DevEui?: string | null;
  DeviceProfileId?: string | null;
  ServiceProfileId?: string | null;
  OtaaV1_1?: OtaaV1_1 | null;
  OtaaV1_0_x?: OtaaV1_0_x | null;
  AbpV1_1?: AbpV1_1 | null;
  AbpV1_0_x?: AbpV1_0_x | null;
}

// refs: 2 - tags: input, named, interface, output
export interface OtaaV1_1 {
  AppKey?: string | null;
  NwkKey?: string | null;
  JoinEui?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface OtaaV1_0_x {
  AppKey?: string | null;
  AppEui?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface AbpV1_1 {
  DevAddr?: string | null;
  SessionKeys?: SessionKeysAbpV1_1 | null;
}

// refs: 2 - tags: input, named, interface, output
export interface SessionKeysAbpV1_1 {
  FNwkSIntKey?: string | null;
  SNwkSIntKey?: string | null;
  NwkSEncKey?: string | null;
  AppSKey?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface AbpV1_0_x {
  DevAddr?: string | null;
  SessionKeys?: SessionKeysAbpV1_0_x | null;
}

// refs: 2 - tags: input, named, interface, output
export interface SessionKeysAbpV1_0_x {
  NwkSKey?: string | null;
  AppSKey?: string | null;
}

// refs: 3 - tags: input, named, interface, output
export interface LoRaWANGateway {
  GatewayEui?: string | null;
  RfRegion?: string | null;
}

// refs: 2 - tags: input, named, interface, output
export interface UpdateWirelessGatewayTaskCreate {
  UpdateDataSource?: string | null;
  UpdateDataRole?: string | null;
  LoRaWAN?: LoRaWANUpdateGatewayTaskCreate | null;
}

// refs: 2 - tags: input, named, interface, output
export interface LoRaWANUpdateGatewayTaskCreate {
  UpdateSignature?: string | null;
  SigKeyCrc?: number | null;
  CurrentVersion?: LoRaWANGatewayVersion | null;
  UpdateVersion?: LoRaWANGatewayVersion | null;
}

// refs: 7 - tags: input, named, interface, output
export interface LoRaWANGatewayVersion {
  PackageVersion?: string | null;
  Model?: string | null;
  Station?: string | null;
}

// refs: 3 - tags: input, named, enum
export type PartnerType =
| "Sidewalk"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: input, named, enum, output
export type WirelessGatewayServiceType =
| "CUPS"
| "LNS"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type WirelessDeviceIdType =
| "WirelessDeviceId"
| "DevEui"
| "ThingName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type WirelessGatewayIdType =
| "GatewayEui"
| "WirelessGatewayId"
| "ThingName"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, enum
export type WirelessGatewayTaskDefinitionType =
| "UPDATE"
| cmnP.UnexpectedEnumValue;

// refs: 1 - tags: input, named, interface
export interface WirelessMetadata {
  LoRaWAN?: LoRaWANSendDataToDevice | null;
  Sidewalk?: SidewalkSendDataToDevice | null;
}

// refs: 1 - tags: input, named, interface
export interface LoRaWANSendDataToDevice {
  FPort?: number | null;
}

// refs: 1 - tags: input, named, interface
export interface SidewalkSendDataToDevice {
  Seq?: number | null;
}

// refs: 1 - tags: input, named, interface
export interface SidewalkUpdateAccount {
  AppServerPrivateKey?: string | null;
}

// refs: 1 - tags: input, named, interface
export interface LoRaWANUpdateDevice {
  DeviceProfileId?: string | null;
  ServiceProfileId?: string | null;
}

// refs: 2 - tags: output, named, enum
export type WirelessGatewayTaskStatus =
| "PENDING"
| "IN_PROGRESS"
| "FIRST_RETRY"
| "SECOND_RETRY"
| "COMPLETED"
| "FAILED"
| cmnP.UnexpectedEnumValue;

// refs: 2 - tags: output, named, interface
export interface SidewalkAccountInfoWithFingerprint {
  AmazonId?: string | null;
  Fingerprint?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface LoRaWANGetServiceProfileInfo {
  UlRate?: number | null;
  UlBucketSize?: number | null;
  UlRatePolicy?: string | null;
  DlRate?: number | null;
  DlBucketSize?: number | null;
  DlRatePolicy?: string | null;
  AddGwMetadata?: boolean | null;
  DevStatusReqFreq?: number | null;
  ReportDevStatusBattery?: boolean | null;
  ReportDevStatusMargin?: boolean | null;
  DrMin?: number | null;
  DrMax?: number | null;
  ChannelMask?: string | null;
  PrAllowed?: boolean | null;
  HrAllowed?: boolean | null;
  RaAllowed?: boolean | null;
  NwkGeoLoc?: boolean | null;
  TargetPer?: number | null;
  MinGwDiversity?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface LoRaWANDeviceMetadata {
  DevEui?: string | null;
  FPort?: number | null;
  DataRate?: number | null;
  Frequency?: number | null;
  Timestamp?: string | null;
  Gateways?: LoRaWANGatewayMetadata[] | null;
}

// refs: 1 - tags: output, named, interface
export interface LoRaWANGatewayMetadata {
  GatewayEui?: string | null;
  Snr?: number | null;
  Rssi?: number | null;
}

// refs: 1 - tags: output, named, interface
export interface LoRaWANGatewayCurrentVersion {
  CurrentVersion?: LoRaWANGatewayVersion | null;
}

// refs: 1 - tags: output, named, interface
export interface Destinations {
  Arn?: string | null;
  Name?: string | null;
  ExpressionType?: ExpressionType | null;
  Expression?: string | null;
  Description?: string | null;
  RoleArn?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface DeviceProfile {
  Arn?: string | null;
  Name?: string | null;
  Id?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface ServiceProfile {
  Arn?: string | null;
  Name?: string | null;
  Id?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface WirelessDeviceStatistics {
  Arn?: string | null;
  Id?: string | null;
  Type?: WirelessDeviceType | null;
  Name?: string | null;
  DestinationName?: string | null;
  LastUplinkReceivedAt?: string | null;
  LoRaWAN?: LoRaWANListDevice | null;
  Sidewalk?: SidewalkListDevice | null;
}

// refs: 1 - tags: output, named, interface
export interface LoRaWANListDevice {
  DevEui?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface SidewalkListDevice {
  AmazonId?: string | null;
}

// refs: 1 - tags: output, named, interface
export interface UpdateWirelessGatewayTaskEntry {
  Id?: string | null;
  LoRaWAN?: LoRaWANUpdateGatewayTaskEntry | null;
}

// refs: 1 - tags: output, named, interface
export interface LoRaWANUpdateGatewayTaskEntry {
  CurrentVersion?: LoRaWANGatewayVersion | null;
  UpdateVersion?: LoRaWANGatewayVersion | null;
}

// refs: 1 - tags: output, named, interface
export interface WirelessGatewayStatistics {
  Arn?: string | null;
  Id?: string | null;
  Name?: string | null;
  Description?: string | null;
  LoRaWAN?: LoRaWANGateway | null;
  LastUplinkReceivedAt?: string | null;
}
