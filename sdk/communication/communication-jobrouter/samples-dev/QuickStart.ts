// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * @summary Quick start workflow for creating queue, job and worker, routing/matching job with worker
 */
import { DistributionPolicy, JobQueue, RouterAdministrationClient, RouterClient, RouterWorker } from "../src";

// Load the .env file (you will need to set these environment variables)
import * as dotenv from "dotenv";
import { RouterJob } from "../src";
dotenv.config();

const connectionString = process.env["COMMUNICATION_CONNECTION_STRING"] || "";


const quickStart = async (): Promise<void> => {
  // Create the Router Client
  const routerClient: RouterClient = new RouterClient(connectionString);
  const routerAdministrationClient: RouterAdministrationClient = new RouterAdministrationClient(connectionString);

  // Create a Distribution Policy
  const distributionPolicyRequest: DistributionPolicy = {
    name: "distribution-policy-123",
    mode: {
      kind: "longest-idle",
      minConcurrentOffers: 1,
      maxConcurrentOffers: 1,
      bypassSelectors: false
    },
    offerTtlSeconds: 15
  };
  var distributionPolicy = await routerAdministrationClient.createDistributionPolicy(distributionPolicyRequest.id!, distributionPolicyRequest);

  // Create a Queue
  const queueRequest: JobQueue = {
    id: "queue-123",
    distributionPolicyId: distributionPolicy.id!,
    name: "Main",
    labels: {}
  };
  await routerAdministrationClient.createQueue(queueRequest.id!, queueRequest);

  // Create a Job
  const jobRequest: RouterJob = {
    id: "router-job-123",
    channelId: "ChatChannel",
    queueId: queueRequest.id,
    labels: {}
  };

  await routerClient.createJob(jobRequest.id!, jobRequest);

  // Register a Worker
  // Register a worker associated with the queue that was just created. We will assign labels to the 
  // worker to include all relevant information for example, skills, which will be used to determine 
  // whether a job can be offered to a worker or not.
  const workerRequest: RouterWorker = {
    id: "router-worker-123",
    loadRatio: 1,
    totalCapacity: 100,
    queueAssignments: {
      "queue-123": {},
    },
    labels: {},
    channelConfigurations: {
      CustomChatChannel: {
        capacityCostPerJob: 10
      },
      CustomVoiceChannel: {
        capacityCostPerJob: 100
      }
    }
  };

  await routerClient.registerWorker(workerRequest.id!);

  // Check offers to a Worker
  // Once the worker has been registered, Router will send an offer to the worker if the worker satisfies requirements 
  // for a job. See Offer flow https://docs.microsoft.com/azure/communication-services/concepts/router/concepts#offer
  // 
  // We should get a RouterWorkerOfferIssued from our EventGrid subscription.
  
  // However, we could also wait a few seconds and then query the worker directly against the JobRouter API to see if 
  // an offer was issued to it.
  const workerResult = await routerClient.getWorker(workerRequest.id!);
  for await  (let offer of workerResult.offers!)
  {
    console.log(`Worker ${workerRequest.id} has an active offer for job ${offer.jobId}`);
  }
  
  // Accepting an offer
  // Once a worker receives an offer, it can take two possible actions: accept or decline. We are going to accept the offer.
  // fetching the offer id
  var jobOffer = workerResult.offers![0];

  var offerId = jobOffer.id; // `OfferId` can be retrieved directly from consuming event from Event grid

  // accepting the offer sent to `worker-1`
  var acceptJobOfferResult = await routerClient.acceptJobOffer(workerRequest.id!, offerId);

  console.log(`Offer: ${jobOffer.id} sent to worker: ${workerRequest.id} has been accepted`);
  console.log(`Job has been assigned to worker: ${workerRequest.id} with assignment: ${acceptJobOfferResult.assignmentId}`);

  // verify job assignment is populated when querying job
  var updatedJob = await routerClient.getJob(jobRequest.id!);
  console.log(`Job assignment has been successful: 
  ${updatedJob.jobStatus == "assigned"  && updatedJob.assignments!.hasOwnProperty(acceptJobOfferResult.assignmentId)}`);


  // Completing a job
  // Once the worker is done with the job, the worker has to mark the job as `completed`.
  var completeJob = await routerClient.completeJob(jobRequest.id!, acceptJobOfferResult.assignmentId,
   {
    note : `Job has been completed by ${workerRequest.id} at ${new Date()}`
  });

  console.log(`Job has been successfully completed: ${completeJob._response.status == 200}`);
  
  // Closing a job
  // After a job has been completed, the worker can perform wrap up actions to the job before closing the job and finally 
  // releasing its capacity to accept more incoming jobs
  var closeJob = await routerClient.closeJob(jobRequest.id!, acceptJobOfferResult.assignmentId,
    {
      note : `Job has been closed by ${workerRequest.id} at ${new Date()}`
    });
  console.log(`Job has been successfully closed: ${closeJob._response.status == 200}`);

  
  // Optionally, a job can also be set up to be marked as closed in the future.
  var t = new Date();
  t.setSeconds(t.getSeconds() + 2);
  var closeJobInFuture = await routerClient.closeJob(jobRequest.id!, acceptJobOfferResult.assignmentId, {
    closeTime: t, // this will mark the job as closed after 2 seconds
    note: `Job has been marked to close in the future by ${workerRequest.id} at ${t}`
  });
  console.log(`Job has been marked to close: ${closeJobInFuture._response.status == 202}`); // You'll received a 202 in that case

  await delay(2000);
  

  updatedJob = await routerClient.getJob(jobRequest.id!);
  console.log(`Updated job status: ${updatedJob.jobStatus == "closed"}`);
};

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

void quickStart();