/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AfdOrigins } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  AFDOrigin,
  AfdOriginsListByOriginGroupNextOptionalParams,
  AfdOriginsListByOriginGroupOptionalParams,
  AfdOriginsListByOriginGroupResponse,
  AfdOriginsGetOptionalParams,
  AfdOriginsGetResponse,
  AfdOriginsCreateOptionalParams,
  AfdOriginsCreateResponse,
  AFDOriginUpdateParameters,
  AfdOriginsUpdateOptionalParams,
  AfdOriginsUpdateResponse,
  AfdOriginsDeleteOptionalParams,
  AfdOriginsListByOriginGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AfdOrigins operations. */
export class AfdOriginsImpl implements AfdOrigins {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class AfdOrigins class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the existing origins within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The options parameters.
   */
  public listByOriginGroup(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginsListByOriginGroupOptionalParams
  ): PagedAsyncIterableIterator<AFDOrigin> {
    const iter = this.listByOriginGroupPagingAll(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByOriginGroupPagingPage(
          resourceGroupName,
          profileName,
          originGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByOriginGroupPagingPage(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginsListByOriginGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AFDOrigin[]> {
    let result: AfdOriginsListByOriginGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByOriginGroup(
        resourceGroupName,
        profileName,
        originGroupName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByOriginGroupNext(
        resourceGroupName,
        profileName,
        originGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByOriginGroupPagingAll(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginsListByOriginGroupOptionalParams
  ): AsyncIterableIterator<AFDOrigin> {
    for await (const page of this.listByOriginGroupPagingPage(
      resourceGroupName,
      profileName,
      originGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the existing origins within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param options The options parameters.
   */
  private _listByOriginGroup(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    options?: AfdOriginsListByOriginGroupOptionalParams
  ): Promise<AfdOriginsListByOriginGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, options },
      listByOriginGroupOperationSpec
    );
  }

  /**
   * Gets an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    options?: AfdOriginsGetOptionalParams
  ): Promise<AfdOriginsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, originName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a new origin within the specified origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin that is unique within the profile.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    origin: AFDOrigin,
    options?: AfdOriginsCreateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AfdOriginsCreateResponse>,
      AfdOriginsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AfdOriginsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        origin,
        options
      },
      spec: createOperationSpec
    });
    const poller = await createHttpPoller<
      AfdOriginsCreateResponse,
      OperationState<AfdOriginsCreateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new origin within the specified origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin that is unique within the profile.
   * @param origin Origin properties
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    origin: AFDOrigin,
    options?: AfdOriginsCreateOptionalParams
  ): Promise<AfdOriginsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      profileName,
      originGroupName,
      originName,
      origin,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    originUpdateProperties: AFDOriginUpdateParameters,
    options?: AfdOriginsUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<AfdOriginsUpdateResponse>,
      AfdOriginsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<AfdOriginsUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        originUpdateProperties,
        options
      },
      spec: updateOperationSpec
    });
    const poller = await createHttpPoller<
      AfdOriginsUpdateResponse,
      OperationState<AfdOriginsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Updates an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param originUpdateProperties Origin properties
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    originUpdateProperties: AFDOriginUpdateParameters,
    options?: AfdOriginsUpdateOptionalParams
  ): Promise<AfdOriginsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      profileName,
      originGroupName,
      originName,
      originUpdateProperties,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    options?: AfdOriginsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        profileName,
        originGroupName,
        originName,
        options
      },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes an existing origin within an origin group.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param originName Name of the origin which is unique within the profile.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    originName: string,
    options?: AfdOriginsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      profileName,
      originGroupName,
      originName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByOriginGroupNext
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group.
   * @param originGroupName Name of the origin group which is unique within the profile.
   * @param nextLink The nextLink from the previous successful call to the ListByOriginGroup method.
   * @param options The options parameters.
   */
  private _listByOriginGroupNext(
    resourceGroupName: string,
    profileName: string,
    originGroupName: string,
    nextLink: string,
    options?: AfdOriginsListByOriginGroupNextOptionalParams
  ): Promise<AfdOriginsListByOriginGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, originGroupName, nextLink, options },
      listByOriginGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByOriginGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.originGroupName,
    Parameters.originName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    201: {
      bodyMapper: Mappers.AFDOrigin
    },
    202: {
      bodyMapper: Mappers.AFDOrigin
    },
    204: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.origin,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.originGroupName,
    Parameters.originName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOrigin
    },
    201: {
      bodyMapper: Mappers.AFDOrigin
    },
    202: {
      bodyMapper: Mappers.AFDOrigin
    },
    204: {
      bodyMapper: Mappers.AFDOrigin
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  requestBody: Parameters.originUpdateProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.originGroupName,
    Parameters.originName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/originGroups/{originGroupName}/origins/{originName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.originGroupName,
    Parameters.originName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByOriginGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AFDOriginListResult
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
    Parameters.nextLink,
    Parameters.originGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
