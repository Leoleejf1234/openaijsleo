/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ContainerServiceFleetClient } from "@azure/arm-containerservicefleet";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a FleetUpdateStrategy
 *
 * @summary Delete a FleetUpdateStrategy
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2023-10-15/examples/UpdateStrategies_Delete.json
 */
async function deleteAFleetUpdateStrategyResource() {
  const subscriptionId =
    process.env["CONTAINERSERVICE_SUBSCRIPTION_ID"] || "subid1";
  const resourceGroupName =
    process.env["CONTAINERSERVICE_RESOURCE_GROUP"] || "rg1";
  const fleetName = "fleet1";
  const updateStrategyName = "strategy1";
  const credential = new DefaultAzureCredential();
  const client = new ContainerServiceFleetClient(credential, subscriptionId);
  const result = await client.fleetUpdateStrategies.beginDeleteAndWait(
    resourceGroupName,
    fleetName,
    updateStrategyName
  );
  console.log(result);
}

async function main() {
  deleteAFleetUpdateStrategyResource();
}

main().catch(console.error);
