/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  GuestAgentCreateOptionalParams,
  GuestAgentCreateResponse,
  GuestAgentGetOptionalParams,
  GuestAgentGetResponse,
  GuestAgentDeleteOptionalParams,
  GuestAgentDeleteResponse
} from "../models";

/** Interface representing a GuestAgentOperations. */
export interface GuestAgentOperations {
  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginCreate(
    resourceUri: string,
    options?: GuestAgentCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GuestAgentCreateResponse>,
      GuestAgentCreateResponse
    >
  >;
  /**
   * Create Or Update GuestAgent.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceUri: string,
    options?: GuestAgentCreateOptionalParams
  ): Promise<GuestAgentCreateResponse>;
  /**
   * Implements GuestAgent GET method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    options?: GuestAgentGetOptionalParams
  ): Promise<GuestAgentGetResponse>;
  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginDelete(
    resourceUri: string,
    options?: GuestAgentDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<GuestAgentDeleteResponse>,
      GuestAgentDeleteResponse
    >
  >;
  /**
   * Implements GuestAgent DELETE method.
   * @param resourceUri The fully qualified Azure Resource manager identifier of the Hybrid Compute
   *                    machine resource to be extended.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceUri: string,
    options?: GuestAgentDeleteOptionalParams
  ): Promise<GuestAgentDeleteResponse>;
}
