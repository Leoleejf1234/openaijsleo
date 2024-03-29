/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ChatTranscriptsNoSubscription } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MicrosoftSupport } from "../microsoftSupport";
import {
  ChatTranscriptsNoSubscriptionGetOptionalParams,
  ChatTranscriptsNoSubscriptionGetResponse
} from "../models";

/** Class containing ChatTranscriptsNoSubscription operations. */
export class ChatTranscriptsNoSubscriptionImpl
  implements ChatTranscriptsNoSubscription {
  private readonly client: MicrosoftSupport;

  /**
   * Initialize a new instance of the class ChatTranscriptsNoSubscription class.
   * @param client Reference to the service client
   */
  constructor(client: MicrosoftSupport) {
    this.client = client;
  }

  /**
   * Returns chatTranscript details for a no subscription support ticket.
   * @param supportTicketName Support ticket name.
   * @param chatTranscriptName ChatTranscript name.
   * @param options The options parameters.
   */
  get(
    supportTicketName: string,
    chatTranscriptName: string,
    options?: ChatTranscriptsNoSubscriptionGetOptionalParams
  ): Promise<ChatTranscriptsNoSubscriptionGetResponse> {
    return this.client.sendOperationRequest(
      { supportTicketName, chatTranscriptName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/providers/Microsoft.Support/supportTickets/{supportTicketName}/chatTranscripts/{chatTranscriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ChatTranscriptDetails
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.supportTicketName,
    Parameters.chatTranscriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
