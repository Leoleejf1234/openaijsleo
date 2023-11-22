/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Description for Get a diagnostics item for an App Service Environment.
 *
 * @summary Description for Get a diagnostics item for an App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-01-01/examples/AppServiceEnvironments_GetDiagnosticsItem.json
 */
async function getADiagnosticsItemForAnAppServiceEnvironment() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "test-rg";
  const name = "test-ase";
  const diagnosticsName = "test-diagnostic";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.getDiagnosticsItem(
    resourceGroupName,
    name,
    diagnosticsName
  );
  console.log(result);
}

async function main() {
  getADiagnosticsItemForAnAppServiceEnvironment();
}

main().catch(console.error);
