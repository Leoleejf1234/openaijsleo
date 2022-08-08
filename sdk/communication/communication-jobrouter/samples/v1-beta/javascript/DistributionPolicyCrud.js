// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary Distribution policy crud
 */
// Load the .env file (you will need to set these environment variables)
const dotenv = require("dotenv");
const { assert } = require("chai");
const { RouterAdministrationClient } = require("@azure/communication-jobrouter");
dotenv.config();

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// Create an distribution policy
const createDistributionPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const distributionPolicyRequest = {
    name: "distribution-policy-123",
    mode: {
      kind: "longest-idle",
      minConcurrentOffers: 1,
      maxConcurrentOffers: 5,
      bypassSelectors: false,
    },
    offerTtlSeconds: 120,
  };

  try {
    const request = distributionPolicyRequest;

    const result = await routerAdministrationClient.createDistributionPolicy(request.id, request);

    console.log("distribution policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void createDistributionPolicy();

// Get a distribution policy

const getDistributionPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const policyId = "distribution-policy-123";

  try {
    const result = await routerAdministrationClient.getDistributionPolicy(policyId);

    console.log("distribution policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void getDistributionPolicy();

// Update a distribution policy
const updateDistributionPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const distributionPolicyRequest = {
    name: "distribution-policy-123",
    mode: {
      kind: "longest-idle",
      minConcurrentOffers: 1,
      maxConcurrentOffers: 1,
      bypassSelectors: false,
    },
    offerTtlSeconds: 15,
  };

  try {
    const request = distributionPolicyRequest;

    const result = await routerAdministrationClient.updateDistributionPolicy(request.id, request);

    console.log("distribution policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void updateDistributionPolicy();

// List distribution policies
const listDistributionPolicies = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  let pagesCount = 1;
  const maxPageSize = 3;
  const receivedPagedItems = [];
  try {
    for await (const page of routerAdministrationClient
      .listDistributionPolicies({ maxPageSize: maxPageSize })
      .byPage()) {
      ++pagesCount;
      let pageSize = 0;
      console.log("page: " + pagesCount);
      for (const policy of page) {
        ++pageSize;
        receivedPagedItems.push(policy);
        console.log("Listing distribution policy with id: " + policy.distributionPolicy.id);
      }
      assert.isAtMost(pageSize, maxPageSize);
    }
  } catch (error) {
    console.log(error);
  }
};

void listDistributionPolicies();

// Delete distribution policy
const deleteDistributionPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const policyId = "distribution-policy-123";

  try {
    const result = await routerAdministrationClient.deleteDistributionPolicy(policyId);

    console.log("distribution policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void deleteDistributionPolicy();