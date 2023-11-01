/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CdnManagementClient } = require("@azure/arm-cdn");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Upgrade a profile from Standard_AzureFrontDoor to Premium_AzureFrontDoor.
 *
 * @summary Upgrade a profile from Standard_AzureFrontDoor to Premium_AzureFrontDoor.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2023-05-01/examples/AFDProfiles_Upgrade.json
 */
async function afdProfilesUpgrade() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const profileUpgradeParameters = {
    wafMappingList: [
      {
        changeToWafPolicy: {
          id: "/subscriptions/subid/resourcegroups/RG/providers/Microsoft.Network/frontdoorwebapplicationfirewallpolicies/waf2",
        },
        securityPolicyName: "securityPolicy1",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.afdProfiles.beginUpgradeAndWait(
    resourceGroupName,
    profileName,
    profileUpgradeParameters
  );
  console.log(result);
}

async function main() {
  afdProfilesUpgrade();
}

main().catch(console.error);
