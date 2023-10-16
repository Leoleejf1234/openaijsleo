/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
  QueryCollectionFormat
} from "@azure/core-http";
import {
  QueueServiceProperties as QueueServicePropertiesMapper,
  QueueMessage as QueueMessageMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: QueueServicePropertiesMapper
};

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const url: OperationURLParameter = {
  parameterPath: "url",
  mapper: {
    serializedName: "url",
    required: true,
    xmlName: "url",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const restype: OperationQueryParameter = {
  parameterPath: "restype",
  mapper: {
    defaultValue: "service",
    isConstant: true,
    serializedName: "restype",
    type: {
      name: "String"
    }
  }
};

export const comp: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "properties",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const timeoutInSeconds: OperationQueryParameter = {
  parameterPath: ["options", "timeoutInSeconds"],
  mapper: {
    constraints: {
      InclusiveMinimum: 0
    },
    serializedName: "timeout",
    xmlName: "timeout",
    type: {
      name: "Number"
    }
  }
};

export const version: OperationParameter = {
  parameterPath: "version",
  mapper: {
    defaultValue: "2023-11-03",
    isConstant: true,
    serializedName: "x-ms-version",
    type: {
      name: "String"
    }
  }
};

export const requestId: OperationParameter = {
  parameterPath: ["options", "requestId"],
  mapper: {
    serializedName: "x-ms-client-request-id",
    xmlName: "x-ms-client-request-id",
    type: {
      name: "String"
    }
  }
};

export const accept1: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/xml",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const comp1: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "stats",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const comp2: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "list",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const prefix: OperationQueryParameter = {
  parameterPath: ["options", "prefix"],
  mapper: {
    serializedName: "prefix",
    xmlName: "prefix",
    type: {
      name: "String"
    }
  }
};

export const marker: OperationQueryParameter = {
  parameterPath: ["options", "marker"],
  mapper: {
    serializedName: "marker",
    xmlName: "marker",
    type: {
      name: "String"
    }
  }
};

export const maxPageSize: OperationQueryParameter = {
  parameterPath: ["options", "maxPageSize"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "maxresults",
    xmlName: "maxresults",
    type: {
      name: "Number"
    }
  }
};

export const include: OperationQueryParameter = {
  parameterPath: ["options", "include"],
  mapper: {
    serializedName: "include",
    xmlName: "include",
    xmlElementName: "ListQueuesIncludeType",
    type: {
      name: "Sequence",
      element: {
        defaultValue: "metadata",
        isConstant: true,
        type: {
          name: "String"
        }
      }
    }
  },
  collectionFormat: QueryCollectionFormat.Csv
};

export const metadata: OperationParameter = {
  parameterPath: ["options", "metadata"],
  mapper: {
    serializedName: "x-ms-meta",
    xmlName: "x-ms-meta",
    type: {
      name: "Dictionary",
      value: { type: { name: "String" } }
    },
    headerCollectionPrefix: "x-ms-meta-"
  }
};

export const comp3: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "metadata",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const comp4: OperationQueryParameter = {
  parameterPath: "comp",
  mapper: {
    defaultValue: "acl",
    isConstant: true,
    serializedName: "comp",
    type: {
      name: "String"
    }
  }
};

export const queueAcl: OperationParameter = {
  parameterPath: ["options", "queueAcl"],
  mapper: {
    serializedName: "queueAcl",
    xmlName: "SignedIdentifiers",
    xmlIsWrapped: true,
    xmlElementName: "SignedIdentifier",
    type: {
      name: "Sequence",
      element: {
        type: {
          name: "Composite",
          className: "SignedIdentifier"
        }
      }
    }
  }
};

export const numberOfMessages: OperationQueryParameter = {
  parameterPath: ["options", "numberOfMessages"],
  mapper: {
    constraints: {
      InclusiveMinimum: 1
    },
    serializedName: "numofmessages",
    xmlName: "numofmessages",
    type: {
      name: "Number"
    }
  }
};

export const visibilityTimeout: OperationQueryParameter = {
  parameterPath: ["options", "visibilityTimeout"],
  mapper: {
    constraints: {
      InclusiveMaximum: 604800,
      InclusiveMinimum: 0
    },
    serializedName: "visibilitytimeout",
    xmlName: "visibilitytimeout",
    type: {
      name: "Number"
    }
  }
};

export const queueMessage: OperationParameter = {
  parameterPath: "queueMessage",
  mapper: QueueMessageMapper
};

export const messageTimeToLive: OperationQueryParameter = {
  parameterPath: ["options", "messageTimeToLive"],
  mapper: {
    constraints: {
      InclusiveMinimum: -1
    },
    serializedName: "messagettl",
    xmlName: "messagettl",
    type: {
      name: "Number"
    }
  }
};

export const peekonly: OperationQueryParameter = {
  parameterPath: "peekonly",
  mapper: {
    defaultValue: "true",
    isConstant: true,
    serializedName: "peekonly",
    type: {
      name: "String"
    }
  }
};

export const queueMessage1: OperationParameter = {
  parameterPath: ["options", "queueMessage"],
  mapper: QueueMessageMapper
};

export const popReceipt: OperationQueryParameter = {
  parameterPath: "popReceipt",
  mapper: {
    serializedName: "popreceipt",
    required: true,
    xmlName: "popreceipt",
    type: {
      name: "String"
    }
  }
};

export const visibilityTimeout1: OperationQueryParameter = {
  parameterPath: "visibilityTimeout",
  mapper: {
    constraints: {
      InclusiveMaximum: 604800,
      InclusiveMinimum: 0
    },
    serializedName: "visibilitytimeout",
    required: true,
    xmlName: "visibilitytimeout",
    type: {
      name: "Number"
    }
  }
};
