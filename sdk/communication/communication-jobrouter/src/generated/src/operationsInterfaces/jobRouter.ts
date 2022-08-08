/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import {
  RouterJobItem,
  JobRouterListJobsOptionalParams,
  RouterWorkerItem,
  JobRouterListWorkersOptionalParams,
  RouterJob,
  JobRouterUpsertJobOptionalParams,
  JobRouterUpsertJobResponse,
  JobRouterGetJobOptionalParams,
  JobRouterGetJobResponse,
  JobRouterDeleteJobOptionalParams,
  JobRouterReclassifyJobActionOptionalParams,
  JobRouterReclassifyJobActionResponse,
  JobRouterCancelJobActionOptionalParams,
  JobRouterCancelJobActionResponse,
  JobRouterCompleteJobActionOptionalParams,
  JobRouterCompleteJobActionResponse,
  JobRouterCloseJobActionOptionalParams,
  JobRouterCloseJobActionResponse,
  JobRouterGetInQueuePositionOptionalParams,
  JobRouterGetInQueuePositionResponse,
  JobRouterUnassignJobActionOptionalParams,
  JobRouterUnassignJobActionResponse,
  JobRouterAcceptJobActionOptionalParams,
  JobRouterAcceptJobActionResponse,
  JobRouterDeclineJobActionOptionalParams,
  JobRouterDeclineJobActionResponse,
  JobRouterGetQueueStatisticsOptionalParams,
  JobRouterGetQueueStatisticsResponse,
  RouterWorker,
  JobRouterUpsertWorkerOptionalParams,
  JobRouterUpsertWorkerResponse,
  JobRouterGetWorkerOptionalParams,
  JobRouterGetWorkerResponse,
  JobRouterDeleteWorkerOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a JobRouter. */
export interface JobRouter {
  /**
   * Retrieves list of jobs based on filter parameters
   * @param options The options parameters.
   */
  listJobs(
    options?: JobRouterListJobsOptionalParams
  ): PagedAsyncIterableIterator<RouterJobItem>;
  /**
   * Retrieves existing workers.
   * @param options The options parameters.
   */
  listWorkers(
    options?: JobRouterListWorkersOptionalParams
  ): PagedAsyncIterableIterator<RouterWorkerItem>;
  /**
   * Creates or updates a router job.
   * @param id Id of the job.
   * @param patch Model of job properties to be created or patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386.
   * @param options The options parameters.
   */
  upsertJob(
    id: string,
    patch: RouterJob,
    options?: JobRouterUpsertJobOptionalParams
  ): Promise<JobRouterUpsertJobResponse>;
  /**
   * Retrieves an existing job by Id
   * @param id Id of the job to retrieve
   * @param options The options parameters.
   */
  getJob(
    id: string,
    options?: JobRouterGetJobOptionalParams
  ): Promise<JobRouterGetJobResponse>;
  /**
   * Deletes a job and all of its traces.
   * @param id Id of the job.
   * @param options The options parameters.
   */
  deleteJob(
    id: string,
    options?: JobRouterDeleteJobOptionalParams
  ): Promise<coreHttp.RestResponse>;
  /**
   * Reclassify a job.
   * @param id Id of the job
   * @param options The options parameters.
   */
  reclassifyJobAction(
    id: string,
    options?: JobRouterReclassifyJobActionOptionalParams
  ): Promise<JobRouterReclassifyJobActionResponse>;
  /**
   * Submits request to cancel an existing job by Id while supplying free-form cancellation reason.
   * @param id Id of the job
   * @param options The options parameters.
   */
  cancelJobAction(
    id: string,
    options?: JobRouterCancelJobActionOptionalParams
  ): Promise<JobRouterCancelJobActionResponse>;
  /**
   * Completes an assigned job.
   * @param id Id of the job
   * @param assignmentId The assignment within the job to complete.
   * @param options The options parameters.
   */
  completeJobAction(
    id: string,
    assignmentId: string,
    options?: JobRouterCompleteJobActionOptionalParams
  ): Promise<JobRouterCompleteJobActionResponse>;
  /**
   * Closes a completed job.
   * @param id Id of the job
   * @param assignmentId The assignment within which the job is to be closed.
   * @param options The options parameters.
   */
  closeJobAction(
    id: string,
    assignmentId: string,
    options?: JobRouterCloseJobActionOptionalParams
  ): Promise<JobRouterCloseJobActionResponse>;
  /**
   * Gets a job's position details.
   * @param id Id of the job
   * @param options The options parameters.
   */
  getInQueuePosition(
    id: string,
    options?: JobRouterGetInQueuePositionOptionalParams
  ): Promise<JobRouterGetInQueuePositionResponse>;
  /**
   * Un-assign a job.
   * @param id Id of the job to un-assign
   * @param assignmentId Id of the assignment to un-assign
   * @param options The options parameters.
   */
  unassignJobAction(
    id: string,
    assignmentId: string,
    options?: JobRouterUnassignJobActionOptionalParams
  ): Promise<JobRouterUnassignJobActionResponse>;
  /**
   * Accepts an offer to work on a job and returns a 409/Conflict if another agent accepted the job
   * already.
   * @param workerId Id of the worker
   * @param offerId Id of the offer
   * @param options The options parameters.
   */
  acceptJobAction(
    workerId: string,
    offerId: string,
    options?: JobRouterAcceptJobActionOptionalParams
  ): Promise<JobRouterAcceptJobActionResponse>;
  /**
   * Declines an offer to work on a job.
   * @param workerId Id of the worker
   * @param offerId Id of the offer
   * @param options The options parameters.
   */
  declineJobAction(
    workerId: string,
    offerId: string,
    options?: JobRouterDeclineJobActionOptionalParams
  ): Promise<JobRouterDeclineJobActionResponse>;
  /**
   * Retrieves a queue's statistics
   * @param id Id of the queue to retrieve statistics
   * @param options The options parameters.
   */
  getQueueStatistics(
    id: string,
    options?: JobRouterGetQueueStatisticsOptionalParams
  ): Promise<JobRouterGetQueueStatisticsResponse>;
  /**
   * Creates or updates a worker.
   * @param workerId Id of the worker
   * @param patch Model of worker properties to be patched. See also:
   *              https://datatracker.ietf.org/doc/html/rfc7386
   * @param options The options parameters.
   */
  upsertWorker(
    workerId: string,
    patch: RouterWorker,
    options?: JobRouterUpsertWorkerOptionalParams
  ): Promise<JobRouterUpsertWorkerResponse>;
  /**
   * Retrieves an existing worker by Id
   * @param workerId Id of the worker to retrieve
   * @param options The options parameters.
   */
  getWorker(
    workerId: string,
    options?: JobRouterGetWorkerOptionalParams
  ): Promise<JobRouterGetWorkerResponse>;
  /**
   * Deletes a worker and all of its traces.
   * @param workerId Id of the worker to delete
   * @param options The options parameters.
   */
  deleteWorker(
    workerId: string,
    options?: JobRouterDeleteWorkerOptionalParams
  ): Promise<coreHttp.RestResponse>;
}