/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureStackHCIClient } = require("@azure/arm-azurestackhci");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Implements HybridIdentityMetadata GET method.
 *
 * @summary Implements HybridIdentityMetadata GET method.
 * x-ms-original-file: specification/azurestackhci/resource-manager/Microsoft.AzureStackHCI/preview/2023-09-01-preview/examples/GetHybridIdentityMetadata.json
 */
async function getHybridIdentityMetadata() {
  const resourceUri =
    "subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/Microsoft.HybridCompute/machines/DemoVM";
  const credential = new DefaultAzureCredential();
  const client = new AzureStackHCIClient(credential);
  const result = await client.hybridIdentityMetadataOperations.get(resourceUri);
  console.log(result);
}

async function main() {
  getHybridIdentityMetadata();
}

main().catch(console.error);
