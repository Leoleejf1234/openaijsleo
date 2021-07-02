/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** The response to a metrics query. */
export interface Response {
  /** The integer value representing the relative cost of the query. */
  cost?: number;
  /** The timespan for which the data was retrieved. Its value consists of two datetimes concatenated, separated by '/'.  This may be adjusted in the future and returned back from what was originally requested. */
  timespan: string;
  /** The interval (window size) for which the metric data was returned in.  This may be adjusted in the future and returned back from what was originally requested.  This is not present if a metadata request was made. */
  interval?: string;
  /** The namespace of the metrics being queried */
  namespace?: string;
  /** The region of the resource being queried for metrics. */
  resourceregion?: string;
  /** the value of the collection. */
  value: Metric[];
}

/** The result data of a query. */
export interface Metric {
  /** the metric Id. */
  id: string;
  /** the resource type of the metric resource. */
  type: string;
  /** the name and the display name of the metric, i.e. it is localizable string. */
  name: LocalizableString;
  /** Detailed description of this metric. */
  displayDescription?: string;
  /** 'Success' or the error details on query failures for this metric. */
  errorCode?: string;
  /** Error message encountered querying this specific metric. */
  errorMessage?: string;
  /** The unit of the metric. */
  unit: MetricUnit;
  /** the time series returned when a data query is performed. */
  timeseries: TimeSeriesElement[];
}

/** The localizable string class. */
export interface LocalizableString {
  /** the invariant value. */
  value: string;
  /** the locale specific value. */
  localizedValue?: string;
}

/** A time series result type. The discriminator value is always TimeSeries in this case. */
export interface TimeSeriesElement {
  /** the metadata values returned if $filter was specified in the call. */
  metadatavalues?: MetadataValue[];
  /** An array of data points representing the metric values.  This is only returned if a result type of data is specified. */
  data?: MetricValue[];
}

/** Represents a metric metadata value. */
export interface MetadataValue {
  /** the name of the metadata. */
  name?: LocalizableString;
  /** the value of the metadata. */
  value?: string;
}

/** Represents a metric value. */
export interface MetricValue {
  /** the timestamp for the metric value in ISO 8601 format. */
  timeStamp: Date;
  /** the average value in the time range. */
  average?: number;
  /** the least value in the time range. */
  minimum?: number;
  /** the greatest value in the time range. */
  maximum?: number;
  /** the sum of all of the values in the time range. */
  total?: number;
  /** the number of samples in the time range. Can be used to determine the number of values that contributed to the average value. */
  count?: number;
}

/** Describes the format of Error response. */
export interface ErrorResponse {
  /** Error code */
  code?: string;
  /** Error message indicating why the operation failed. */
  message?: string;
}

/** Known values of {@link ApiVersion201801} that the service accepts. */
export const enum KnownApiVersion201801 {
  /** Api Version '2018-01-01' */
  TwoThousandEighteen0101 = "2018-01-01"
}

/**
 * Defines values for ApiVersion201801. \
 * {@link KnownApiVersion201801} can be used interchangeably with ApiVersion201801,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **2018-01-01**: Api Version '2018-01-01'
 */
export type ApiVersion201801 = string;

/** Known values of {@link MetricUnit} that the service accepts. */
export const enum KnownMetricUnit {
  Count = "Count",
  Bytes = "Bytes",
  Seconds = "Seconds",
  CountPerSecond = "CountPerSecond",
  BytesPerSecond = "BytesPerSecond",
  Percent = "Percent",
  MilliSeconds = "MilliSeconds",
  ByteSeconds = "ByteSeconds",
  Unspecified = "Unspecified",
  Cores = "Cores",
  MilliCores = "MilliCores",
  NanoCores = "NanoCores",
  BitsPerSecond = "BitsPerSecond"
}

/**
 * Defines values for MetricUnit. \
 * {@link KnownMetricUnit} can be used interchangeably with MetricUnit,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **Count** \
 * **Bytes** \
 * **Seconds** \
 * **CountPerSecond** \
 * **BytesPerSecond** \
 * **Percent** \
 * **MilliSeconds** \
 * **ByteSeconds** \
 * **Unspecified** \
 * **Cores** \
 * **MilliCores** \
 * **NanoCores** \
 * **BitsPerSecond**
 */
export type MetricUnit = string;
/** Defines values for ResultType. */
export type ResultType = "Data" | "Metadata";

/** Optional parameters. */
export interface MetricsListOptionalParams extends coreHttp.OperationOptions {
  /** The timespan of the query. It is a string with the following format 'startDateTime_ISO/endDateTime_ISO'. */
  timespan?: string;
  /** The interval (i.e. timegrain) of the query. */
  interval?: string;
  /** The names of the metrics (comma separated) to retrieve. Special case: If a metricname itself has a comma in it then use %2 to indicate it. Eg: 'Metric,Name1' should be **'Metric%2Name1'** */
  metricnames?: string;
  /** The list of aggregation types (comma separated) to retrieve. */
  aggregation?: string;
  /**
   * The maximum number of records to retrieve.
   * Valid only if $filter is specified.
   * Defaults to 10.
   */
  top?: number;
  /**
   * The aggregation to use for sorting results and the direction of the sort.
   * Only one order can be specified.
   * Examples: sum asc.
   */
  orderby?: string;
  /** The **$filter** is used to reduce the set of metric data returned. Example: Metric contains metadata A, B and C. - Return all time series of C where A = a1 and B = b1 or b2 **$filter=A eq 'a1' and B eq 'b1' or B eq 'b2' and C eq '*'** - Invalid variant: **$filter=A eq 'a1' and B eq 'b1' and C eq '*' or B = 'b2'** This is invalid because the logical or operator cannot separate two different metadata names. - Return all time series where A = a1, B = b1 and C = c1: **$filter=A eq 'a1' and B eq 'b1' and C eq 'c1'** - Return all time series where A = a1 **$filter=A eq 'a1' and B eq '*' and C eq '*'**. Special case: When dimension name or dimension value uses round brackets. Eg: When dimension name is **dim (test) 1** Instead of using $filter= "dim (test) 1 eq '*' " use **$filter= "dim %2528test%2529 1 eq '*' "** When dimension name is **dim (test) 3** and dimension value is **dim3 (test) val** Instead of using $filter= "dim (test) 3 eq 'dim3 (test) val' " use **$filter= "dim %2528test%2529 3 eq 'dim3 %2528test%2529 val' "** */
  filter?: string;
  /** Reduces the set of data collected. The syntax allowed depends on the operation. See the operation's description for details. */
  resultType?: ResultType;
  /** Metric namespace to query metric definitions for. */
  metricnamespace?: string;
}

/** Contains response data for the list operation. */
export type MetricsListResponse = Response & {
  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: Response;
  };
};

/** Optional parameters. */
export interface MonitorManagementClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
