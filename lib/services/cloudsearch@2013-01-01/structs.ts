// Autogenerated API structures for: Amazon CloudSearch

import * as cmnP from "../../encoding/common.ts";

// refs: 1 - tags: named, input
export interface BuildSuggestersRequest {
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface CreateDomainRequest {
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface DefineAnalysisSchemeRequest {
  DomainName: string;
  AnalysisScheme: AnalysisScheme;
}

// refs: 1 - tags: named, input
export interface DefineExpressionRequest {
  DomainName: string;
  Expression: Expression;
}

// refs: 1 - tags: named, input
export interface DefineIndexFieldRequest {
  DomainName: string;
  IndexField: IndexField;
}

// refs: 1 - tags: named, input
export interface DefineSuggesterRequest {
  DomainName: string;
  Suggester: Suggester;
}

// refs: 1 - tags: named, input
export interface DeleteAnalysisSchemeRequest {
  DomainName: string;
  AnalysisSchemeName: string;
}

// refs: 1 - tags: named, input
export interface DeleteDomainRequest {
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface DeleteExpressionRequest {
  DomainName: string;
  ExpressionName: string;
}

// refs: 1 - tags: named, input
export interface DeleteIndexFieldRequest {
  DomainName: string;
  IndexFieldName: string;
}

// refs: 1 - tags: named, input
export interface DeleteSuggesterRequest {
  DomainName: string;
  SuggesterName: string;
}

// refs: 1 - tags: named, input
export interface DescribeAnalysisSchemesRequest {
  DomainName: string;
  AnalysisSchemeNames?: string[] | null;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeAvailabilityOptionsRequest {
  DomainName: string;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeDomainEndpointOptionsRequest {
  DomainName: string;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeDomainsRequest {
  DomainNames?: string[] | null;
}

// refs: 1 - tags: named, input
export interface DescribeExpressionsRequest {
  DomainName: string;
  ExpressionNames?: string[] | null;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeIndexFieldsRequest {
  DomainName: string;
  FieldNames?: string[] | null;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeScalingParametersRequest {
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface DescribeServiceAccessPoliciesRequest {
  DomainName: string;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface DescribeSuggestersRequest {
  DomainName: string;
  SuggesterNames?: string[] | null;
  Deployed?: boolean | null;
}

// refs: 1 - tags: named, input
export interface IndexDocumentsRequest {
  DomainName: string;
}

// refs: 1 - tags: named, input
export interface UpdateAvailabilityOptionsRequest {
  DomainName: string;
  MultiAZ: boolean;
}

// refs: 1 - tags: named, input
export interface UpdateDomainEndpointOptionsRequest {
  DomainName: string;
  DomainEndpointOptions: DomainEndpointOptions;
}

// refs: 1 - tags: named, input
export interface UpdateScalingParametersRequest {
  DomainName: string;
  ScalingParameters: ScalingParameters;
}

// refs: 1 - tags: named, input
export interface UpdateServiceAccessPoliciesRequest {
  DomainName: string;
  AccessPolicies: string;
}

// refs: 1 - tags: named, output
export interface BuildSuggestersResponse {
  FieldNames: string[];
}

// refs: 1 - tags: named, output
export interface CreateDomainResponse {
  DomainStatus?: DomainStatus | null;
}

// refs: 1 - tags: named, output
export interface DefineAnalysisSchemeResponse {
  AnalysisScheme: AnalysisSchemeStatus;
}

// refs: 1 - tags: named, output
export interface DefineExpressionResponse {
  Expression: ExpressionStatus;
}

// refs: 1 - tags: named, output
export interface DefineIndexFieldResponse {
  IndexField: IndexFieldStatus;
}

// refs: 1 - tags: named, output
export interface DefineSuggesterResponse {
  Suggester: SuggesterStatus;
}

// refs: 1 - tags: named, output
export interface DeleteAnalysisSchemeResponse {
  AnalysisScheme: AnalysisSchemeStatus;
}

// refs: 1 - tags: named, output
export interface DeleteDomainResponse {
  DomainStatus?: DomainStatus | null;
}

// refs: 1 - tags: named, output
export interface DeleteExpressionResponse {
  Expression: ExpressionStatus;
}

// refs: 1 - tags: named, output
export interface DeleteIndexFieldResponse {
  IndexField: IndexFieldStatus;
}

// refs: 1 - tags: named, output
export interface DeleteSuggesterResponse {
  Suggester: SuggesterStatus;
}

// refs: 1 - tags: named, output
export interface DescribeAnalysisSchemesResponse {
  AnalysisSchemes: AnalysisSchemeStatus[];
}

// refs: 1 - tags: named, output
export interface DescribeAvailabilityOptionsResponse {
  AvailabilityOptions?: AvailabilityOptionsStatus | null;
}

// refs: 1 - tags: named, output
export interface DescribeDomainEndpointOptionsResponse {
  DomainEndpointOptions?: DomainEndpointOptionsStatus | null;
}

// refs: 1 - tags: named, output
export interface DescribeDomainsResponse {
  DomainStatusList: DomainStatus[];
}

// refs: 1 - tags: named, output
export interface DescribeExpressionsResponse {
  Expressions: ExpressionStatus[];
}

// refs: 1 - tags: named, output
export interface DescribeIndexFieldsResponse {
  IndexFields: IndexFieldStatus[];
}

// refs: 1 - tags: named, output
export interface DescribeScalingParametersResponse {
  ScalingParameters: ScalingParametersStatus;
}

// refs: 1 - tags: named, output
export interface DescribeServiceAccessPoliciesResponse {
  AccessPolicies: AccessPoliciesStatus;
}

// refs: 1 - tags: named, output
export interface DescribeSuggestersResponse {
  Suggesters: SuggesterStatus[];
}

// refs: 1 - tags: named, output
export interface IndexDocumentsResponse {
  FieldNames: string[];
}

// refs: 1 - tags: named, output
export interface ListDomainNamesResponse {
  DomainNames: { [key: string]: string | null | undefined };
}

// refs: 1 - tags: named, output
export interface UpdateAvailabilityOptionsResponse {
  AvailabilityOptions?: AvailabilityOptionsStatus | null;
}

// refs: 1 - tags: named, output
export interface UpdateDomainEndpointOptionsResponse {
  DomainEndpointOptions?: DomainEndpointOptionsStatus | null;
}

// refs: 1 - tags: named, output
export interface UpdateScalingParametersResponse {
  ScalingParameters: ScalingParametersStatus;
}

// refs: 1 - tags: named, output
export interface UpdateServiceAccessPoliciesResponse {
  AccessPolicies: AccessPoliciesStatus;
}

// refs: 4 - tags: input, named, interface, output
export interface AnalysisScheme {
  AnalysisSchemeName: string;
  AnalysisSchemeLanguage: AnalysisSchemeLanguage;
  AnalysisOptions?: AnalysisOptions | null;
}

// refs: 4 - tags: input, named, enum, output
export type AnalysisSchemeLanguage =
| "ar"
| "bg"
| "ca"
| "cs"
| "da"
| "de"
| "el"
| "en"
| "es"
| "eu"
| "fa"
| "fi"
| "fr"
| "ga"
| "gl"
| "he"
| "hi"
| "hu"
| "hy"
| "id"
| "it"
| "ja"
| "ko"
| "lv"
| "mul"
| "nl"
| "no"
| "pt"
| "ro"
| "ru"
| "sv"
| "th"
| "tr"
| "zh-Hans"
| "zh-Hant"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface AnalysisOptions {
  Synonyms?: string | null;
  Stopwords?: string | null;
  StemmingDictionary?: string | null;
  JapaneseTokenizationDictionary?: string | null;
  AlgorithmicStemming?: AlgorithmicStemming | null;
}

// refs: 4 - tags: input, named, enum, output
export type AlgorithmicStemming =
| "none"
| "minimal"
| "light"
| "full"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface Expression {
  ExpressionName: string;
  ExpressionValue: string;
}

// refs: 4 - tags: input, named, interface, output
export interface IndexField {
  IndexFieldName: string;
  IndexFieldType: IndexFieldType;
  IntOptions?: IntOptions | null;
  DoubleOptions?: DoubleOptions | null;
  LiteralOptions?: LiteralOptions | null;
  TextOptions?: TextOptions | null;
  DateOptions?: DateOptions | null;
  LatLonOptions?: LatLonOptions | null;
  IntArrayOptions?: IntArrayOptions | null;
  DoubleArrayOptions?: DoubleArrayOptions | null;
  LiteralArrayOptions?: LiteralArrayOptions | null;
  TextArrayOptions?: TextArrayOptions | null;
  DateArrayOptions?: DateArrayOptions | null;
}

// refs: 4 - tags: input, named, enum, output
export type IndexFieldType =
| "int"
| "double"
| "literal"
| "text"
| "date"
| "latlon"
| "int-array"
| "double-array"
| "literal-array"
| "text-array"
| "date-array"
| cmnP.UnexpectedEnumValue;

// refs: 4 - tags: input, named, interface, output
export interface IntOptions {
  DefaultValue?: number | null;
  SourceField?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
  SortEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DoubleOptions {
  DefaultValue?: number | null;
  SourceField?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
  SortEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface LiteralOptions {
  DefaultValue?: string | null;
  SourceField?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
  SortEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface TextOptions {
  DefaultValue?: string | null;
  SourceField?: string | null;
  ReturnEnabled?: boolean | null;
  SortEnabled?: boolean | null;
  HighlightEnabled?: boolean | null;
  AnalysisScheme?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DateOptions {
  DefaultValue?: string | null;
  SourceField?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
  SortEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface LatLonOptions {
  DefaultValue?: string | null;
  SourceField?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
  SortEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface IntArrayOptions {
  DefaultValue?: number | null;
  SourceFields?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DoubleArrayOptions {
  DefaultValue?: number | null;
  SourceFields?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface LiteralArrayOptions {
  DefaultValue?: string | null;
  SourceFields?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface TextArrayOptions {
  DefaultValue?: string | null;
  SourceFields?: string | null;
  ReturnEnabled?: boolean | null;
  HighlightEnabled?: boolean | null;
  AnalysisScheme?: string | null;
}

// refs: 4 - tags: input, named, interface, output
export interface DateArrayOptions {
  DefaultValue?: string | null;
  SourceFields?: string | null;
  FacetEnabled?: boolean | null;
  SearchEnabled?: boolean | null;
  ReturnEnabled?: boolean | null;
}

// refs: 4 - tags: input, named, interface, output
export interface Suggester {
  SuggesterName: string;
  DocumentSuggesterOptions: DocumentSuggesterOptions;
}

// refs: 4 - tags: input, named, interface, output
export interface DocumentSuggesterOptions {
  SourceField: string;
  FuzzyMatching?: SuggesterFuzzyMatching | null;
  SortExpression?: string | null;
}

// refs: 4 - tags: input, named, enum, output
export type SuggesterFuzzyMatching =
| "none"
| "low"
| "high"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface DomainEndpointOptions {
  EnforceHTTPS?: boolean | null;
  TLSSecurityPolicy?: TLSSecurityPolicy | null;
}

// refs: 3 - tags: input, named, enum, output
export type TLSSecurityPolicy =
| "Policy-Min-TLS-1-0-2019-07"
| "Policy-Min-TLS-1-2-2019-07"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: input, named, interface, output
export interface ScalingParameters {
  DesiredInstanceType?: PartitionInstanceType | null;
  DesiredReplicationCount?: number | null;
  DesiredPartitionCount?: number | null;
}

// refs: 3 - tags: input, named, enum, output
export type PartitionInstanceType =
| "search.m1.small"
| "search.m1.large"
| "search.m2.xlarge"
| "search.m2.2xlarge"
| "search.m3.medium"
| "search.m3.large"
| "search.m3.xlarge"
| "search.m3.2xlarge"
| "search.small"
| "search.medium"
| "search.large"
| "search.xlarge"
| "search.2xlarge"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface DomainStatus {
  DomainId: string;
  DomainName: string;
  ARN?: string | null;
  Created?: boolean | null;
  Deleted?: boolean | null;
  DocService?: ServiceEndpoint | null;
  SearchService?: ServiceEndpoint | null;
  RequiresIndexDocuments: boolean;
  Processing?: boolean | null;
  SearchInstanceType?: string | null;
  SearchPartitionCount?: number | null;
  SearchInstanceCount?: number | null;
  Limits?: Limits | null;
}

// refs: 6 - tags: output, named, interface
export interface ServiceEndpoint {
  Endpoint?: string | null;
}

// refs: 3 - tags: output, named, interface
export interface Limits {
  MaximumReplicationCount: number;
  MaximumPartitionCount: number;
}

// refs: 3 - tags: output, named, interface
export interface AnalysisSchemeStatus {
  Options: AnalysisScheme;
  Status: OptionStatus;
}

// refs: 20 - tags: output, named, interface
export interface OptionStatus {
  CreationDate: Date | number;
  UpdateDate: Date | number;
  UpdateVersion?: number | null;
  State: OptionState;
  PendingDeletion?: boolean | null;
}

// refs: 20 - tags: output, named, enum
export type OptionState =
| "RequiresIndexDocuments"
| "Processing"
| "Active"
| "FailedToValidate"
| cmnP.UnexpectedEnumValue;

// refs: 3 - tags: output, named, interface
export interface ExpressionStatus {
  Options: Expression;
  Status: OptionStatus;
}

// refs: 3 - tags: output, named, interface
export interface IndexFieldStatus {
  Options: IndexField;
  Status: OptionStatus;
}

// refs: 3 - tags: output, named, interface
export interface SuggesterStatus {
  Options: Suggester;
  Status: OptionStatus;
}

// refs: 2 - tags: output, named, interface
export interface AvailabilityOptionsStatus {
  Options: boolean;
  Status: OptionStatus;
}

// refs: 2 - tags: output, named, interface
export interface DomainEndpointOptionsStatus {
  Options: DomainEndpointOptions;
  Status: OptionStatus;
}

// refs: 2 - tags: output, named, interface
export interface ScalingParametersStatus {
  Options: ScalingParameters;
  Status: OptionStatus;
}

// refs: 2 - tags: output, named, interface
export interface AccessPoliciesStatus {
  Options: string;
  Status: OptionStatus;
}
