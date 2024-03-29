/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The OperationStatus object returns the state of an asynchronous operation. */
export interface OperationStatus {
  /** Unique Operation Status Identifier. */
  name?: string;
  /** Status of the operation. */
  status?: AsyncOperationStatus;
  /** Start Time when the operation was initially executed. */
  startTime?: string;
  /** An error from the Azure Bare Metal Infrastructure service. */
  error?: OperationStatusError;
}

/** An error from the Azure Bare Metal Infrastructure service. */
export interface OperationStatusError {
  /** Server-defined set of error codes. */
  code?: string;
  /** Human-readable representation of the error. */
  message?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** The active state empowers the server with the ability to forcefully terminate and halt any existing processes that may be running on the server */
export interface ForceState {
  /** Whether to force restart by shutting all processes. */
  forceState?: AzureBareMetalInstanceForcePowerState;
}

/** The response from the List Azure Bare Metal Instances operation. */
export interface AzureBareMetalInstancesListResult {
  /** The list of Azure Bare Metal Instances. */
  value?: AzureBareMetalInstance[];
  /** The URL to get the next set of Azure Bare Metal Instances. */
  nextLink?: string;
}

/** Specifies the hardware settings for the Azure Bare Metal Instance. */
export interface HardwareProfile {
  /**
   * Name of the hardware type (vendor and/or their product name)
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hardwareType?: AzureBareMetalHardwareTypeNamesEnum;
  /**
   * Specifies the Azure Bare Metal Instance SKU.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly azureBareMetalInstanceSize?: AzureBareMetalInstanceSizeNamesEnum;
}

/** Specifies the storage settings for the Azure Bare Metal instance disks. */
export interface StorageProfile {
  /**
   * IP Address to connect to storage.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nfsIpAddress?: string;
  /** Specifies information about the operating system disk used by bare metal instance. */
  osDisks?: Disk[];
}

/** Specifies the disk information fo the Azure Bare Metal Instance */
export interface Disk {
  /** The disk name. */
  name?: string;
  /** Specifies the size of an empty data disk in gigabytes. */
  diskSizeGB?: number;
  /**
   * Specifies the logical unit number of the data disk. This value is used to identify data disks within the VM and therefore must be unique for each data disk attached to a VM.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lun?: number;
}

/** Specifies the operating system settings for the Azure Bare Metal instance. */
export interface OSProfile {
  /** Specifies the host OS name of the Azure Bare Metal instance. */
  computerName?: string;
  /**
   * This property allows you to specify the type of the OS.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly osType?: string;
  /**
   * Specifies version of operating system.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /** Specifies the SSH public key used to access the operating system. */
  sshPublicKey?: string;
}

/** Specifies the network settings for the Azure Bare Metal Instance disks. */
export interface NetworkProfile {
  /** Specifies the network interfaces for the Azure Bare Metal Instance. */
  networkInterfaces?: NetworkInterface[];
  /**
   * Specifies the circuit id for connecting to express route.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly circuitId?: string;
}

/** Specifies the network interfaces of a bare metal resource. */
export interface NetworkInterface {
  /** Specifies the IP address of the network interface. */
  ipAddress?: string;
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Tags field of the AzureBareMetal/AzureBareMetaStorage instance. */
export interface Tags {
  /** Tags field of the AzureBareMetal/AzureBareMetaStorage instance. */
  tags?: { [propertyName: string]: string };
}

/** The response from the Get AzureBareMetalStorageInstances operation. */
export interface AzureBareMetalStorageInstancesListResult {
  /** The list of AzureBareMetalStorage instances. */
  value?: AzureBareMetalStorageInstance[];
  /** The URL to get the next set of AzureBareMetalStorage instances. */
  nextLink?: string;
}

/** described the storage properties of the azure bare metal storage instance */
export interface StorageProperties {
  /** State of provisioning of the AzureBareMetalStorageInstance */
  provisioningState?: ProvisioningState;
  /** the offering type for which the resource is getting provisioned */
  offeringType?: string;
  /** the storage protocol for which the resource is getting provisioned */
  storageType?: string;
  /** the kind of storage instance */
  generation?: string;
  /** the hardware type of the storage instance */
  hardwareType?: string;
  /** the workload for which the resource is getting provisioned */
  workloadType?: string;
  /** the billing related information for the resource */
  storageBillingProperties?: StorageBillingProperties;
}

/** Describes the billing related details of the AzureBareMetalStorageInstance. */
export interface StorageBillingProperties {
  /** the billing mode for the storage instance */
  billingMode?: string;
  /** the SKU type that is provisioned */
  azureBareMetalStorageInstanceSize?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** AzureBareMetal instance info on Azure (ARM properties and AzureBareMetal properties) */
export interface AzureBareMetalInstance extends TrackedResource {
  /** Specifies the hardware settings for the Azure Bare Metal Instance. */
  hardwareProfile?: HardwareProfile;
  /** Specifies the storage settings for the Azure Bare Metal Instance disks. */
  storageProfile?: StorageProfile;
  /** Specifies the operating system settings for the Azure Bare Metal Instance. */
  osProfile?: OSProfile;
  /** Specifies the network settings for the Azure Bare Metal Instance. */
  networkProfile?: NetworkProfile;
  /**
   * Specifies the Azure Bare Metal Instance unique ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly azureBareMetalInstanceId?: string;
  /**
   * Resource power state
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly powerState?: AzureBareMetalInstancePowerStateEnum;
  /**
   * Resource proximity placement group
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly proximityPlacementGroup?: string;
  /**
   * Hardware revision of an Azure Bare Metal Instance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hwRevision?: string;
  /** ARM ID of another AzureBareMetalInstance that will share a network with this AzureBareMetalInstance */
  partnerNodeId?: string;
  /**
   * State of provisioning of the AzureBareMetalInstance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: AzureBareMetalProvisioningStatesEnum;
}

/** AzureBareMetalStorageInstance info on Azure (ARM properties and AzureBareMetalStorage properties) */
export interface AzureBareMetalStorageInstance extends TrackedResource {
  /** Specifies the AzureBareMetaStorageInstance unique ID. */
  azureBareMetalStorageInstanceUniqueIdentifier?: string;
  /** Specifies the storage properties for the AzureBareMetalStorage instance. */
  storageProperties?: StorageProperties;
}

/** Defines headers for AzureBareMetalInstances_start operation. */
export interface AzureBareMetalInstancesStartHeaders {
  /** URL to track the operation status of the Microsoft Bare Metal Infrastructure in the specified location. */
  location?: string;
}

/** Defines headers for AzureBareMetalInstances_restart operation. */
export interface AzureBareMetalInstancesRestartHeaders {
  /** URL to track the operation status of the Microsoft Bare Metal Infrastructure in the specified location. */
  location?: string;
}

/** Defines headers for AzureBareMetalInstances_shutdown operation. */
export interface AzureBareMetalInstancesShutdownHeaders {
  /** URL to track the operation status of the Microsoft Bare Metal Infrastructure in the specified location. */
  location?: string;
}

/** Known values of {@link AsyncOperationStatus} that the service accepts. */
export enum KnownAsyncOperationStatus {
  /** Requesting */
  Requesting = "Requesting",
  /** Executing */
  Executing = "Executing",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed"
}

/**
 * Defines values for AsyncOperationStatus. \
 * {@link KnownAsyncOperationStatus} can be used interchangeably with AsyncOperationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Requesting** \
 * **Executing** \
 * **Succeeded** \
 * **Failed**
 */
export type AsyncOperationStatus = string;

/** Known values of {@link AzureBareMetalInstanceForcePowerState} that the service accepts. */
export enum KnownAzureBareMetalInstanceForcePowerState {
  /** Active */
  Active = "active",
  /** Inactive */
  Inactive = "inactive"
}

/**
 * Defines values for AzureBareMetalInstanceForcePowerState. \
 * {@link KnownAzureBareMetalInstanceForcePowerState} can be used interchangeably with AzureBareMetalInstanceForcePowerState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **active** \
 * **inactive**
 */
export type AzureBareMetalInstanceForcePowerState = string;

/** Known values of {@link AzureBareMetalHardwareTypeNamesEnum} that the service accepts. */
export enum KnownAzureBareMetalHardwareTypeNamesEnum {
  /** CiscoUCS */
  CiscoUCS = "Cisco_UCS",
  /** HPE */
  HPE = "HPE",
  /** Sdflex */
  Sdflex = "SDFLEX"
}

/**
 * Defines values for AzureBareMetalHardwareTypeNamesEnum. \
 * {@link KnownAzureBareMetalHardwareTypeNamesEnum} can be used interchangeably with AzureBareMetalHardwareTypeNamesEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Cisco_UCS** \
 * **HPE** \
 * **SDFLEX**
 */
export type AzureBareMetalHardwareTypeNamesEnum = string;

/** Known values of {@link AzureBareMetalInstanceSizeNamesEnum} that the service accepts. */
export enum KnownAzureBareMetalInstanceSizeNamesEnum {
  /** S72M */
  S72M = "S72m",
  /** S144M */
  S144M = "S144m",
  /** S72 */
  S72 = "S72",
  /** S144 */
  S144 = "S144",
  /** S192 */
  S192 = "S192",
  /** S192M */
  S192M = "S192m",
  /** S192Xm */
  S192Xm = "S192xm",
  /** S96 */
  S96 = "S96",
  /** S112 */
  S112 = "S112",
  /** S224 */
  S224 = "S224",
  /** S224M */
  S224M = "S224m",
  /** S224Om */
  S224Om = "S224om",
  /** S224Oo */
  S224Oo = "S224oo",
  /** S224Oom */
  S224Oom = "S224oom",
  /** S224Ooo */
  S224Ooo = "S224ooo",
  /** S384 */
  S384 = "S384",
  /** S384M */
  S384M = "S384m",
  /** S384Xm */
  S384Xm = "S384xm",
  /** S384Xxm */
  S384Xxm = "S384xxm",
  /** S448 */
  S448 = "S448",
  /** S448M */
  S448M = "S448m",
  /** S448Om */
  S448Om = "S448om",
  /** S448Oo */
  S448Oo = "S448oo",
  /** S448Oom */
  S448Oom = "S448oom",
  /** S448Ooo */
  S448Ooo = "S448ooo",
  /** S448Se */
  S448Se = "S448se",
  /** S576M */
  S576M = "S576m",
  /** S576Xm */
  S576Xm = "S576xm",
  /** S672 */
  S672 = "S672",
  /** S672M */
  S672M = "S672m",
  /** S672Om */
  S672Om = "S672om",
  /** S672Oo */
  S672Oo = "S672oo",
  /** S672Oom */
  S672Oom = "S672oom",
  /** S672Ooo */
  S672Ooo = "S672ooo",
  /** S768 */
  S768 = "S768",
  /** S768M */
  S768M = "S768m",
  /** S768Xm */
  S768Xm = "S768xm",
  /** S896 */
  S896 = "S896",
  /** S896M */
  S896M = "S896m",
  /** S896Om */
  S896Om = "S896om",
  /** S896Oo */
  S896Oo = "S896oo",
  /** S896Oom */
  S896Oom = "S896oom",
  /** S896Ooo */
  S896Ooo = "S896ooo",
  /** S960M */
  S960M = "S960m"
}

/**
 * Defines values for AzureBareMetalInstanceSizeNamesEnum. \
 * {@link KnownAzureBareMetalInstanceSizeNamesEnum} can be used interchangeably with AzureBareMetalInstanceSizeNamesEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **S72m** \
 * **S144m** \
 * **S72** \
 * **S144** \
 * **S192** \
 * **S192m** \
 * **S192xm** \
 * **S96** \
 * **S112** \
 * **S224** \
 * **S224m** \
 * **S224om** \
 * **S224oo** \
 * **S224oom** \
 * **S224ooo** \
 * **S384** \
 * **S384m** \
 * **S384xm** \
 * **S384xxm** \
 * **S448** \
 * **S448m** \
 * **S448om** \
 * **S448oo** \
 * **S448oom** \
 * **S448ooo** \
 * **S448se** \
 * **S576m** \
 * **S576xm** \
 * **S672** \
 * **S672m** \
 * **S672om** \
 * **S672oo** \
 * **S672oom** \
 * **S672ooo** \
 * **S768** \
 * **S768m** \
 * **S768xm** \
 * **S896** \
 * **S896m** \
 * **S896om** \
 * **S896oo** \
 * **S896oom** \
 * **S896ooo** \
 * **S960m**
 */
export type AzureBareMetalInstanceSizeNamesEnum = string;

/** Known values of {@link AzureBareMetalInstancePowerStateEnum} that the service accepts. */
export enum KnownAzureBareMetalInstancePowerStateEnum {
  /** Starting */
  Starting = "starting",
  /** Started */
  Started = "started",
  /** Stopping */
  Stopping = "stopping",
  /** Stopped */
  Stopped = "stopped",
  /** Restarting */
  Restarting = "restarting",
  /** Unknown */
  Unknown = "unknown"
}

/**
 * Defines values for AzureBareMetalInstancePowerStateEnum. \
 * {@link KnownAzureBareMetalInstancePowerStateEnum} can be used interchangeably with AzureBareMetalInstancePowerStateEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **starting** \
 * **started** \
 * **stopping** \
 * **stopped** \
 * **restarting** \
 * **unknown**
 */
export type AzureBareMetalInstancePowerStateEnum = string;

/** Known values of {@link AzureBareMetalProvisioningStatesEnum} that the service accepts. */
export enum KnownAzureBareMetalProvisioningStatesEnum {
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Deleting */
  Deleting = "Deleting",
  /** Migrating */
  Migrating = "Migrating"
}

/**
 * Defines values for AzureBareMetalProvisioningStatesEnum. \
 * {@link KnownAzureBareMetalProvisioningStatesEnum} can be used interchangeably with AzureBareMetalProvisioningStatesEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Migrating**
 */
export type AzureBareMetalProvisioningStatesEnum = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key"
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system"
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal"
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Accepted */
  Accepted = "Accepted",
  /** Creating */
  Creating = "Creating",
  /** Updating */
  Updating = "Updating",
  /** Failed */
  Failed = "Failed",
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Deleting */
  Deleting = "Deleting",
  /** Canceled */
  Canceled = "Canceled",
  /** Migrating */
  Migrating = "Migrating"
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Creating** \
 * **Updating** \
 * **Failed** \
 * **Succeeded** \
 * **Deleting** \
 * **Canceled** \
 * **Migrating**
 */
export type ProvisioningState = string;

/** Optional parameters. */
export interface AzureBareMetalInstancesStartOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the start operation. */
export type AzureBareMetalInstancesStartResponse = OperationStatus;

/** Optional parameters. */
export interface AzureBareMetalInstancesRestartOptionalParams
  extends coreClient.OperationOptions {
  /** When set to 'active', this parameter empowers the server with the ability to forcefully terminate and halt any existing processes that may be running on the server */
  forceParameter?: ForceState;
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the restart operation. */
export type AzureBareMetalInstancesRestartResponse = OperationStatus;

/** Optional parameters. */
export interface AzureBareMetalInstancesShutdownOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the shutdown operation. */
export type AzureBareMetalInstancesShutdownResponse = OperationStatus;

/** Optional parameters. */
export interface AzureBareMetalInstancesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type AzureBareMetalInstancesListBySubscriptionResponse = AzureBareMetalInstancesListResult;

/** Optional parameters. */
export interface AzureBareMetalInstancesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AzureBareMetalInstancesListByResourceGroupResponse = AzureBareMetalInstancesListResult;

/** Optional parameters. */
export interface AzureBareMetalInstancesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureBareMetalInstancesGetResponse = AzureBareMetalInstance;

/** Optional parameters. */
export interface AzureBareMetalInstancesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type AzureBareMetalInstancesUpdateResponse = AzureBareMetalInstance;

/** Optional parameters. */
export interface AzureBareMetalInstancesListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type AzureBareMetalInstancesListBySubscriptionNextResponse = AzureBareMetalInstancesListResult;

/** Optional parameters. */
export interface AzureBareMetalInstancesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type AzureBareMetalInstancesListByResourceGroupNextResponse = AzureBareMetalInstancesListResult;

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type AzureBareMetalStorageInstancesListBySubscriptionResponse = AzureBareMetalStorageInstancesListResult;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type AzureBareMetalStorageInstancesListByResourceGroupResponse = AzureBareMetalStorageInstancesListResult;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type AzureBareMetalStorageInstancesGetResponse = AzureBareMetalStorageInstance;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesCreateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type AzureBareMetalStorageInstancesCreateResponse = AzureBareMetalStorageInstance;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type AzureBareMetalStorageInstancesUpdateResponse = AzureBareMetalStorageInstance;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type AzureBareMetalStorageInstancesListBySubscriptionNextResponse = AzureBareMetalStorageInstancesListResult;

/** Optional parameters. */
export interface AzureBareMetalStorageInstancesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type AzureBareMetalStorageInstancesListByResourceGroupNextResponse = AzureBareMetalStorageInstancesListResult;

/** Optional parameters. */
export interface BareMetalInfrastructureClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
