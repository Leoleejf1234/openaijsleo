/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/usersMappers";
import * as Parameters from "../models/parameters";
import { LabServicesClientContext } from "../labServicesClientContext";

/** Class representing a Users. */
export class Users {
  private readonly client: LabServicesClientContext;

  /**
   * Create a Users.
   * @param {LabServicesClientContext} client Reference to the service client.
   */
  constructor(client: LabServicesClientContext) {
    this.client = client;
  }

  /**
   * Returns a list of all users for a lab.
   * @summary Get all users for a lab.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersListByLabResponse>
   */
  listByLab(resourceGroupName: string, labName: string, options?: Models.UsersListByLabOptionalParams): Promise<Models.UsersListByLabResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param callback The callback
   */
  listByLab(resourceGroupName: string, labName: string, callback: msRest.ServiceCallback<Models.PagedUsers>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLab(resourceGroupName: string, labName: string, options: Models.UsersListByLabOptionalParams, callback: msRest.ServiceCallback<Models.PagedUsers>): void;
  listByLab(resourceGroupName: string, labName: string, options?: Models.UsersListByLabOptionalParams | msRest.ServiceCallback<Models.PagedUsers>, callback?: msRest.ServiceCallback<Models.PagedUsers>): Promise<Models.UsersListByLabResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        options
      },
      listByLabOperationSpec,
      callback) as Promise<Models.UsersListByLabResponse>;
  }

  /**
   * Returns the properties of a lab user.
   * @summary Get a lab user.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersGetResponse>
   */
  get(resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<Models.UsersGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, userName: string, callback: msRest.ServiceCallback<Models.User>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, userName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.User>): void;
  get(resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.User>, callback?: msRest.ServiceCallback<Models.User>): Promise<Models.UsersGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        userName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.UsersGetResponse>;
  }

  /**
   * Operation to create or update a lab user.
   * @summary Create or update a lab user.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersCreateOrUpdateResponse>
   */
  createOrUpdate(body: Models.User, resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<Models.UsersCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(body,resourceGroupName,labName,userName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.UsersCreateOrUpdateResponse>;
  }

  /**
   * Operation to update a lab user.
   * @summary Update a lab user.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersUpdateResponse>
   */
  update(body: Models.UserUpdate, resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<Models.UsersUpdateResponse> {
    return this.beginUpdate(body,resourceGroupName,labName,userName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.UsersUpdateResponse>;
  }

  /**
   * Operation to delete a user resource.
   * @summary Deletes a user resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,labName,userName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Operation to invite a user to a lab.
   * @summary Invite a user to a lab.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  invite(body: Models.InviteBody, resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginInvite(body,resourceGroupName,labName,userName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Operation to create or update a lab user.
   * @summary Create or update a lab user.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(body: Models.User, resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroupName,
        labName,
        userName,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Operation to update a lab user.
   * @summary Update a lab user.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(body: Models.UserUpdate, resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroupName,
        labName,
        userName,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * Operation to delete a user resource.
   * @summary Deletes a user resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        userName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Operation to invite a user to a lab.
   * @summary Invite a user to a lab.
   * @param body The request body.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param labName The name of the lab that uniquely identifies it within containing lab account.
   * Used in resource URIs.
   * @param userName The name of the user that uniquely identifies it within containing lab. Used in
   * resource URIs.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginInvite(body: Models.InviteBody, resourceGroupName: string, labName: string, userName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        body,
        resourceGroupName,
        labName,
        userName,
        options
      },
      beginInviteOperationSpec,
      options);
  }

  /**
   * Returns a list of all users for a lab.
   * @summary Get all users for a lab.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.UsersListByLabNextResponse>
   */
  listByLabNext(nextPageLink: string, options?: Models.UsersListByLabNextOptionalParams): Promise<Models.UsersListByLabNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByLabNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PagedUsers>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByLabNext(nextPageLink: string, options: Models.UsersListByLabNextOptionalParams, callback: msRest.ServiceCallback<Models.PagedUsers>): void;
  listByLabNext(nextPageLink: string, options?: Models.UsersListByLabNextOptionalParams | msRest.ServiceCallback<Models.PagedUsers>, callback?: msRest.ServiceCallback<Models.PagedUsers>): Promise<Models.UsersListByLabNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByLabNextOperationSpec,
      callback) as Promise<Models.UsersListByLabNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByLabOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedUsers
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.User,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    201: {
      bodyMapper: Mappers.User
    },
    202: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.UserUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    202: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginInviteOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labs/{labName}/users/{userName}/invite",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.userName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      ...Mappers.InviteBody,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByLabNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PagedUsers
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
