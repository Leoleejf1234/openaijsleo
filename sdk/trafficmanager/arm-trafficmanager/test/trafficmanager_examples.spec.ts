/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { TrafficManagerManagementClient } from "../src/trafficManagerManagementClient";

const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "azure_subscription_id"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe("TrafficManager test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: TrafficManagerManagementClient;
  let location: string;
  let resourceGroup: string;
  let profileName: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new TrafficManagerManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "global";
    resourceGroup = "myjstest";
    profileName = "azsmnet6386";
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("profiles create test", async function () {
    const res = await client.profiles.createOrUpdate(
      resourceGroup,
      profileName,
      {
        dnsConfig: { relativeName: "azsmnet6386", ttl: 35 },
        location,
        maxReturn: 2,
        monitorConfig: { path: "/testpath.aspx", port: 80, protocol: "HTTP" },
        profileStatus: "Enabled",
        trafficRoutingMethod: "MultiValue",
        trafficViewEnrollmentStatus: "Disabled"
      },
    );
    assert.equal(res.name, profileName);
  });

  it("profiles get test", async function () {
    const res = await client.profiles.get(resourceGroup, profileName);
    assert.equal(res.name, profileName);
  });

  it("profiles list test", async function () {
    const resArray = new Array();
    for await (let item of client.profiles.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("profiles delete test", async function () {
    const resArray = new Array();
    const res = await client.profiles.delete(resourceGroup, profileName)
    for await (let item of client.profiles.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})