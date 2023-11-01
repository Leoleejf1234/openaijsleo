/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ProtectedItemModel,
  ProtectedItemListOptionalParams,
  ProtectedItemGetOptionalParams,
  ProtectedItemGetResponse,
  ProtectedItemCreateOptionalParams,
  ProtectedItemCreateResponse,
  ProtectedItemDeleteOptionalParams,
  ProtectedItemDeleteResponse,
  ProtectedItemPlannedFailoverOptionalParams,
  ProtectedItemPlannedFailoverResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ProtectedItem. */
export interface ProtectedItem {
  /**
   * Gets the list of protected items in the given vault.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vaultName: string,
    options?: ProtectedItemListOptionalParams
  ): PagedAsyncIterableIterator<ProtectedItemModel>;
  /**
   * Gets the details of the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemGetOptionalParams
  ): Promise<ProtectedItemGetResponse>;
  /**
   * Creates the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectedItemCreateResponse>,
      ProtectedItemCreateResponse
    >
  >;
  /**
   * Creates the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemCreateOptionalParams
  ): Promise<ProtectedItemCreateResponse>;
  /**
   * Removes the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectedItemDeleteResponse>,
      ProtectedItemDeleteResponse
    >
  >;
  /**
   * Removes the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemDeleteOptionalParams
  ): Promise<ProtectedItemDeleteResponse>;
  /**
   * Performs the planned failover on the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  beginPlannedFailover(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemPlannedFailoverOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<ProtectedItemPlannedFailoverResponse>,
      ProtectedItemPlannedFailoverResponse
    >
  >;
  /**
   * Performs the planned failover on the protected item.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param vaultName The vault name.
   * @param protectedItemName The protected item name.
   * @param options The options parameters.
   */
  beginPlannedFailoverAndWait(
    resourceGroupName: string,
    vaultName: string,
    protectedItemName: string,
    options?: ProtectedItemPlannedFailoverOptionalParams
  ): Promise<ProtectedItemPlannedFailoverResponse>;
}
