/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CustomerInsightsManagementClient } = require("@azure/arm-customerinsights");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates a hub, or updates an existing hub.
 *
 * @summary Creates a hub, or updates an existing hub.
 * x-ms-original-file: specification/customer-insights/resource-manager/Microsoft.CustomerInsights/stable/2017-04-26/examples/HubsCreateOrUpdate.json
 */
async function hubsCreateOrUpdate() {
  const subscriptionId = "subid";
  const resourceGroupName = "TestHubRG";
  const hubName = "sdkTestHub";
  const parameters = {
    hubBillingInfo: { maxUnits: 5, minUnits: 1, skuName: "B0" },
    location: "West US",
  };
  const credential = new DefaultAzureCredential();
  const client = new CustomerInsightsManagementClient(credential, subscriptionId);
  const result = await client.hubs.createOrUpdate(resourceGroupName, hubName, parameters);
  console.log(result);
}

hubsCreateOrUpdate().catch(console.error);