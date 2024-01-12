// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import type { LogPolicyOptions } from "./policies/logPolicy.js";
import { logPolicy } from "./policies/logPolicy.js";
import type { Pipeline } from "./pipeline.js";
import { createEmptyPipeline } from "./pipeline.js";
import type { PipelineRetryOptions, ProxySettings, TlsSettings } from "./interfaces.js";
import type { RedirectPolicyOptions } from "./policies/redirectPolicy.js";
import { redirectPolicy } from "./policies/redirectPolicy.js";
import type { UserAgentPolicyOptions } from "./policies/userAgentPolicy.js";
import { userAgentPolicy } from "./policies/userAgentPolicy.js";
import { decompressResponsePolicy } from "./policies/decompressResponsePolicy.js";
import { defaultRetryPolicy } from "./policies/defaultRetryPolicy.js";
import { formDataPolicy } from "./policies/formDataPolicy.js";
import { isNode } from "@azure/core-util";
import { proxyPolicy } from "./policies/proxyPolicy.js";
import { setClientRequestIdPolicy } from "./policies/setClientRequestIdPolicy.js";
import { tlsPolicy } from "./policies/tlsPolicy.js";
import { tracingPolicy } from "./policies/tracingPolicy.js";
import { multipartPolicy } from "./policies/multipartPolicy.js";

/**
 * Defines options that are used to configure the HTTP pipeline for
 * an SDK client.
 */
export interface PipelineOptions {
  /**
   * Options that control how to retry failed requests.
   */
  retryOptions?: PipelineRetryOptions;

  /**
   * Options to configure a proxy for outgoing requests.
   */
  proxyOptions?: ProxySettings;

  /** Options for configuring TLS authentication */
  tlsOptions?: TlsSettings;

  /**
   * Options for how redirect responses are handled.
   */
  redirectOptions?: RedirectPolicyOptions;

  /**
   * Options for adding user agent details to outgoing requests.
   */
  userAgentOptions?: UserAgentPolicyOptions;

  /**
   * Options for setting common telemetry and tracing info to outgoing requests.
   */
  telemetryOptions?: TelemetryOptions;
}

/**
 * Defines options that are used to configure common telemetry and tracing info
 */
export interface TelemetryOptions {
  /**
   * The name of the header to pass the request ID to.
   */
  clientRequestIdHeaderName?: string;
}

/**
 * Defines options that are used to configure internal options of
 * the HTTP pipeline for an SDK client.
 */
export interface InternalPipelineOptions extends PipelineOptions {
  /**
   * Options to configure request/response logging.
   */
  loggingOptions?: LogPolicyOptions;
}

/**
 * Create a new pipeline with a default set of customizable policies.
 * @param options - Options to configure a custom pipeline.
 */
export function createPipelineFromOptions(options: InternalPipelineOptions): Pipeline {
  const pipeline = createEmptyPipeline();

  if (isNode) {
    if (options.tlsOptions) {
      pipeline.addPolicy(tlsPolicy(options.tlsOptions));
    }
    pipeline.addPolicy(proxyPolicy(options.proxyOptions));
    pipeline.addPolicy(decompressResponsePolicy());
  }

  pipeline.addPolicy(formDataPolicy());
  pipeline.addPolicy(userAgentPolicy(options.userAgentOptions));
  pipeline.addPolicy(setClientRequestIdPolicy(options.telemetryOptions?.clientRequestIdHeaderName));
  // The multipart policy is added after policies with no phase, so that
  // policies can be added between it and formDataPolicy to modify
  // properties (e.g., making the boundary constant in recorded tests).
  pipeline.addPolicy(multipartPolicy(), { afterPhase: "Deserialize" });
  pipeline.addPolicy(defaultRetryPolicy(options.retryOptions), { phase: "Retry" });
  pipeline.addPolicy(tracingPolicy(options.userAgentOptions), { afterPhase: "Retry" });
  if (isNode) {
    // Both XHR and Fetch expect to handle redirects automatically,
    // so only include this policy when we're in Node.
    pipeline.addPolicy(redirectPolicy(options.redirectOptions), { afterPhase: "Retry" });
  }
  pipeline.addPolicy(logPolicy(options.loggingOptions), { afterPhase: "Sign" });

  return pipeline;
}
