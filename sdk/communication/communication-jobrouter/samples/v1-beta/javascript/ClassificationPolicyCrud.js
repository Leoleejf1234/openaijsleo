// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary Classification policy crud
 */
const { RouterAdministrationClient } = require("@azure/communication-jobrouter");

// Load the .env file (you will need to set these environment variables)
const dotenv = require("dotenv");
const { assert } = require("chai");
dotenv.config();

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";

// Create an classification policy
const createClassificationPolicy = async () => {
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
  await routerAdministrationClient.createDistributionPolicy(
    distributionPolicyRequest.id,
    distributionPolicyRequest
  );

  // define exception trigger for queue over flow
  const queueLengthExceptionTrigger = {
    kind: "queue-length",
    threshold: 100,
  };

  const exceptionPolicyRequest = {
    id: "exception-policy-123",
    name: "test-policy",
    exceptionRules: {
      MaxWaitTimeExceeded: {
        actions: {
          MoveJobToEscalatedQueue: {
            kind: "reclassify",
            classificationPolicyId: "Main",
            labelsToUpsert: {
              escalated: true,
            },
          },
        },
        trigger: queueLengthExceptionTrigger,
      },
    },
  };
  await routerAdministrationClient.createExceptionPolicy(
    exceptionPolicyRequest.id,
    exceptionPolicyRequest
  );

  const queueRequest = {
    id: "queue-123",
    distributionPolicyId: "distribution-policy-123",
    name: "Main",
    labels: {},
    exceptionPolicyId: "exception-policy-123",
  };
  await routerAdministrationClient.createQueue(queueRequest.id, queueRequest);

  const classificationPolicyRequest = {
    id: "classification-policy-123",
    name: "test-policy",
    fallbackQueueId: "queue-123",
    queueSelectors: [
      {
        kind: "conditional",
        labelSelectors: [
          {
            key: "foo",
            labelOperator: "equal",
            value: { default: 10 },
          },
        ],
      },
    ],
    prioritizationRule: {
      kind: "static-rule",
      value: { default: 2 },
    },
  };

  try {
    const request = classificationPolicyRequest;

    const result = await routerAdministrationClient.createClassificationPolicy(request.id, request);

    console.log("classification policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void createClassificationPolicy();

// Get a classification policy

const getClassificationPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const policyId = "classification-policy-123";

  try {
    const result = await routerAdministrationClient.getClassificationPolicy(policyId);

    console.log("classification policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void getClassificationPolicy();

// Update a classification policy
const updateClassificationPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const classificationPolicyRequest = {
    id: "classification-policy-123",
    name: "test-policy-new-name",
    fallbackQueueId: "queue-123",
    queueSelectors: [
      {
        kind: "conditional",
        labelSelectors: [
          {
            key: "foo",
            labelOperator: "lessThan",
            value: { default: 5 },
          },
        ],
      },
    ],
    prioritizationRule: {
      kind: "static-rule",
      value: { default: 20 },
    },
  };

  try {
    const request = classificationPolicyRequest;

    const result = await routerAdministrationClient.updateClassificationPolicy(request.id, request);

    console.log("classification policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void updateClassificationPolicy();

// List classification policies
const listClassificationPolicies = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  let pagesCount = 1;
  const maxPageSize = 3;
  const receivedPagedItems = [];
  try {
    for await (const page of routerAdministrationClient
      .listClassificationPolicies({ maxPageSize: maxPageSize })
      .byPage()) {
      ++pagesCount;
      let pageSize = 0;
      console.log("page: " + pagesCount);
      for (const policy of page) {
        ++pageSize;
        receivedPagedItems.push(policy);
        console.log("Listing classification policy with id: " + policy.classificationPolicy.id);
      }
      assert.isAtMost(pageSize, maxPageSize);
    }
  } catch (error) {
    console.log(error);
  }
};

void listClassificationPolicies();

// Delete classification policy
const deleteClassificationPolicy = async () => {
  // Create the Router Client
  const routerAdministrationClient = new RouterAdministrationClient(connectionString);

  const policyId = "classification-policy-123";

  try {
    const result = await routerAdministrationClient.deleteClassificationPolicy(policyId);

    console.log("classification policy: " + result);
  } catch (error) {
    console.log(error);
  }
};

void deleteClassificationPolicy();