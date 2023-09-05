// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ContainerBreakLeaseOptionalParams } from "./generatedModels";
import { AbortSignalLike } from "@azure/abort-controller";
import { Blob as StorageBlob, Container } from "./generated/src/operationsInterfaces";
import { ModifiedAccessConditions } from "./models";
import { CommonOptions } from "./StorageClient";
import { ETagNone } from "./utils/constants";
import { tracingClient } from "./utils/tracing";
import { BlobClient } from "./Clients";
import { ContainerClient } from "./ContainerClient";
import { assertResponse, WithResponse } from "./utils/utils.common";
import {
  ContainerAcquireLeaseHeaders,
  ContainerBreakLeaseHeaders,
  ContainerReleaseLeaseHeaders,
} from "./generated/src";
import { randomUUID } from "@azure/core-util";

/**
 * The details for a specific lease.
 */
export interface Lease {
  /**
   * The ETag contains a value that you can use to
   * perform operations conditionally. If the request version is 2011-08-18 or
   * newer, the ETag value will be in quotes.
   */
  etag?: string;
  /**
   * Returns the date and time the container was
   * last modified. Any operation that modifies the blob, including an update
   * of the blob's metadata or properties, changes the last-modified time of
   * the blob.
   */
  lastModified?: Date;
  /**
   * Uniquely identifies a container's lease
   */
  leaseId?: string;
  /**
   * Approximate time remaining in the lease
   * period, in seconds.
   */
  leaseTime?: number;
  /**
   * This header uniquely identifies the request
   * that was made and can be used for troubleshooting the request.
   */
  requestId?: string;
  /**
   * Indicates the version of the Blob service used
   * to execute the request. This header is returned for requests made against
   * version 2009-09-19 and above.
   */
  version?: string;
  /**
   * UTC date/time value generated by the service that
   * indicates the time at which the response was initiated
   */
  date?: Date;
  /**
   * Error code if any associated with the response that returned
   * the Lease information.
   */
  errorCode?: string;
}

/**
 * Contains the response data for operations that create, modify, or delete a lease.
 *
 * See {@link BlobLeaseClient}.
 */
export type LeaseOperationResponse = WithResponse<Lease, Lease>;

/**
 * Configures lease operations.
 */
export interface LeaseOperationOptions extends CommonOptions {
  /**
   * An implementation of the `AbortSignalLike` interface to signal the request to cancel the operation.
   * For example, use the &commat;azure/abort-controller to create an `AbortSignal`.
   */
  abortSignal?: AbortSignalLike;
  /**
   * Conditions to meet when changing the lease.
   */
  conditions?: ModifiedAccessConditions;
}

/**
 * A client that manages leases for a {@link ContainerClient} or a {@link BlobClient}.
 */
export class BlobLeaseClient {
  private _leaseId: string;
  private _url: string;
  private _containerOrBlobOperation: Container | StorageBlob;
  private _isContainer: boolean;

  /**
   * Gets the lease Id.
   *
   * @readonly
   */
  public get leaseId(): string {
    return this._leaseId;
  }

  /**
   * Gets the url.
   *
   * @readonly
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Creates an instance of BlobLeaseClient.
   * @param client - The client to make the lease operation requests.
   * @param leaseId - Initial proposed lease id.
   */
  constructor(client: ContainerClient | BlobClient, leaseId?: string) {
    const clientContext = (client as any).storageClientContext;
    this._url = client.url;

    if ((client as BlobClient).name === undefined) {
      this._isContainer = true;
      this._containerOrBlobOperation = clientContext.container;
    } else {
      this._isContainer = false;
      this._containerOrBlobOperation = clientContext.blob;
    }

    if (!leaseId) {
      leaseId = randomUUID();
    }
    this._leaseId = leaseId;
  }

  /**
   * Establishes and manages a lock on a container for delete operations, or on a blob
   * for write and delete operations.
   * The lock duration can be 15 to 60 seconds, or can be infinite.
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-container
   * and
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-blob
   *
   * @param duration - Must be between 15 to 60 seconds, or infinite (-1)
   * @param options - option to configure lease management operations.
   * @returns Response data for acquire lease operation.
   */
  public async acquireLease(
    duration: number,
    options: LeaseOperationOptions = {}
  ): Promise<LeaseOperationResponse> {
    if (
      this._isContainer &&
      ((options.conditions?.ifMatch && options.conditions?.ifMatch !== ETagNone) ||
        (options.conditions?.ifNoneMatch && options.conditions?.ifNoneMatch !== ETagNone) ||
        options.conditions?.tagConditions)
    ) {
      throw new RangeError(
        "The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable."
      );
    }
    return tracingClient.withSpan(
      "BlobLeaseClient-acquireLease",
      options,
      async (updatedOptions) => {
        return assertResponse<ContainerAcquireLeaseHeaders, ContainerAcquireLeaseHeaders>(
          await this._containerOrBlobOperation.acquireLease({
            abortSignal: options.abortSignal,
            duration,
            modifiedAccessConditions: {
              ...options.conditions,
              ifTags: options.conditions?.tagConditions,
            },
            proposedLeaseId: this._leaseId,
            tracingOptions: updatedOptions.tracingOptions,
          })
        );
      }
    );
  }

  /**
   * To change the ID of the lease.
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-container
   * and
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-blob
   *
   * @param proposedLeaseId - the proposed new lease Id.
   * @param options - option to configure lease management operations.
   * @returns Response data for change lease operation.
   */
  public async changeLease(
    proposedLeaseId: string,
    options: LeaseOperationOptions = {}
  ): Promise<LeaseOperationResponse> {
    if (
      this._isContainer &&
      ((options.conditions?.ifMatch && options.conditions?.ifMatch !== ETagNone) ||
        (options.conditions?.ifNoneMatch && options.conditions?.ifNoneMatch !== ETagNone) ||
        options.conditions?.tagConditions)
    ) {
      throw new RangeError(
        "The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable."
      );
    }

    return tracingClient.withSpan(
      "BlobLeaseClient-changeLease",
      options,
      async (updatedOptions) => {
        const response = assertResponse<Lease, Lease>(
          await this._containerOrBlobOperation.changeLease(this._leaseId, proposedLeaseId, {
            abortSignal: options.abortSignal,
            modifiedAccessConditions: {
              ...options.conditions,
              ifTags: options.conditions?.tagConditions,
            },
            tracingOptions: updatedOptions.tracingOptions,
          })
        );
        this._leaseId = proposedLeaseId;
        return response;
      }
    );
  }

  /**
   * To free the lease if it is no longer needed so that another client may
   * immediately acquire a lease against the container or the blob.
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-container
   * and
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-blob
   *
   * @param options - option to configure lease management operations.
   * @returns Response data for release lease operation.
   */
  public async releaseLease(options: LeaseOperationOptions = {}): Promise<LeaseOperationResponse> {
    if (
      this._isContainer &&
      ((options.conditions?.ifMatch && options.conditions?.ifMatch !== ETagNone) ||
        (options.conditions?.ifNoneMatch && options.conditions?.ifNoneMatch !== ETagNone) ||
        options.conditions?.tagConditions)
    ) {
      throw new RangeError(
        "The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable."
      );
    }
    return tracingClient.withSpan(
      "BlobLeaseClient-releaseLease",
      options,
      async (updatedOptions) => {
        return assertResponse<ContainerReleaseLeaseHeaders, ContainerReleaseLeaseHeaders>(
          await this._containerOrBlobOperation.releaseLease(this._leaseId, {
            abortSignal: options.abortSignal,
            modifiedAccessConditions: {
              ...options.conditions,
              ifTags: options.conditions?.tagConditions,
            },
            tracingOptions: updatedOptions.tracingOptions,
          })
        );
      }
    );
  }

  /**
   * To renew the lease.
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-container
   * and
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-blob
   *
   * @param options - Optional option to configure lease management operations.
   * @returns Response data for renew lease operation.
   */
  public async renewLease(options: LeaseOperationOptions = {}): Promise<Lease> {
    if (
      this._isContainer &&
      ((options.conditions?.ifMatch && options.conditions?.ifMatch !== ETagNone) ||
        (options.conditions?.ifNoneMatch && options.conditions?.ifNoneMatch !== ETagNone) ||
        options.conditions?.tagConditions)
    ) {
      throw new RangeError(
        "The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable."
      );
    }
    return tracingClient.withSpan("BlobLeaseClient-renewLease", options, async (updatedOptions) => {
      return this._containerOrBlobOperation.renewLease(this._leaseId, {
        abortSignal: options.abortSignal,
        modifiedAccessConditions: {
          ...options.conditions,
          ifTags: options.conditions?.tagConditions,
        },
        tracingOptions: updatedOptions.tracingOptions,
      });
    });
  }

  /**
   * To end the lease but ensure that another client cannot acquire a new lease
   * until the current lease period has expired.
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-container
   * and
   * @see https://docs.microsoft.com/en-us/rest/api/storageservices/lease-blob
   *
   * @param breakPeriod - Break period
   * @param options - Optional options to configure lease management operations.
   * @returns Response data for break lease operation.
   */
  public async breakLease(
    breakPeriod: number,
    options: LeaseOperationOptions = {}
  ): Promise<LeaseOperationResponse> {
    if (
      this._isContainer &&
      ((options.conditions?.ifMatch && options.conditions?.ifMatch !== ETagNone) ||
        (options.conditions?.ifNoneMatch && options.conditions?.ifNoneMatch !== ETagNone) ||
        options.conditions?.tagConditions)
    ) {
      throw new RangeError(
        "The IfMatch, IfNoneMatch and tags access conditions are ignored by the service. Values other than undefined or their default values are not acceptable."
      );
    }

    return tracingClient.withSpan("BlobLeaseClient-breakLease", options, async (updatedOptions) => {
      const operationOptions: ContainerBreakLeaseOptionalParams = {
        abortSignal: options.abortSignal,
        breakPeriod,
        modifiedAccessConditions: {
          ...options.conditions,
          ifTags: options.conditions?.tagConditions,
        },
        tracingOptions: updatedOptions.tracingOptions,
      };
      return assertResponse<ContainerBreakLeaseHeaders, ContainerBreakLeaseHeaders>(
        await this._containerOrBlobOperation.breakLease(operationOptions)
      );
    });
  }
}
