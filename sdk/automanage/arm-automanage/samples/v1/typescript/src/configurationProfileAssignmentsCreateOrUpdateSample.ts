/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ConfigurationProfileAssignment,
  AutomanageClient
} from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates an association between a VM and Automanage configuration profile
 *
 * @summary Creates an association between a VM and Automanage configuration profile
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/createOrUpdateConfigurationProfileAssignment.json
 */
async function createOrUpdateConfigurationProfileAssignment() {
  const subscriptionId = "mySubscriptionId";
  const configurationProfileAssignmentName = "default";
  const resourceGroupName = "myResourceGroupName";
  const vmName = "myVMName";
  const parameters: ConfigurationProfileAssignment = {
    properties: {
      configurationProfile:
        "/providers/Microsoft.Automanage/bestPractices/AzureBestPracticesProduction"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const result = await client.configurationProfileAssignments.createOrUpdate(
    configurationProfileAssignmentName,
    resourceGroupName,
    vmName,
    parameters
  );
  console.log(result);
}

createOrUpdateConfigurationProfileAssignment().catch(console.error);