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
 * This sample demonstrates how to Description for Delete the certificate associated with a certificate order.
 *
 * @summary Description for Delete the certificate associated with a certificate order.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.CertificateRegistration/stable/2023-01-01/examples/DeleteAppServiceCertificate.json
 */
async function deleteAppServiceCertificate() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "testrg123";
  const certificateOrderName = "SampleCertificateOrderName";
  const name = "SampleCertName1";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceCertificateOrders.deleteCertificate(
    resourceGroupName,
    certificateOrderName,
    name
  );
  console.log(result);
}

async function main() {
  deleteAppServiceCertificate();
}

main().catch(console.error);
