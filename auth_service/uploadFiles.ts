import multer from 'multer';
import { AbortController } from "@azure/abort-controller";
import { BlobServiceClient } from "@azure/storage-blob";
import { setLogLevel } from "@azure/logger";
import { v4 as uuid } from "uuid";
import fs from "fs";
import { Request, Response } from "express";
// import compression from "compression";
var path = require('path');

setLogLevel("error");

export const upload = multer({ dest: 'uploads/' })

export async function uploadFile(localFilePath: string) {
    if (!localFilePath) {
    return {
      status: 500,
      error: "File not provided",
      message: "",
    };
  }

  const AZURE_STORAGE_CONNECTION_STRING =
  process.env.AZURE_STORAGE_CONNECTION_STRING;

  if (!AZURE_STORAGE_CONNECTION_STRING) {
    console.log("Azure Storage Connection string not found");
    return {
      status: 500,
      error: "Internal error",
      message: "",
    };
  }
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_STORAGE_CONTAINER_NAME!
  );

  const blobName = uuid();
  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
      await blockBlobClient.uploadFile(localFilePath, {
          blockSize: 4 * 1024 * 1024,
          concurrency: 20,
      // onProgress: (ev) => console.log(ev),
    });
    // deleteLocalFile(localFilePath);
    return {
      status: 301,
      message: `https://schooltalkz.blob.core.windows.net/schooltalkz/${blockBlobClient.name}`,
      error: "",
    };
  } catch (err: any) {
    await blockBlobClient.delete();
    console.log(
      `uploadFile failed, requestId - ${err.request.requestId}, statusCode - ${err.statusCode}, errorCode - ${err.details.errorCode}`
    );
    return {
      status: 500,
      error: "Internal error",
      message: "",
    };
  }
}

export async function deleteLocalFile(localFilePath: string) {
  fs.unlink(localFilePath, (err) => {
    if (err) {
      throw err;
    }
  });
}

export async function deleteFileFromBlobStorage(blobStoragePath: string) {
  if (!blobStoragePath) {
    return {
      status: 500,
      error: "File not provided",
    };
  }

  const AZURE_STORAGE_CONNECTION_STRING =
    process.env.AZURE_STORAGE_CONNECTION_STRING;

  if (!AZURE_STORAGE_CONNECTION_STRING) {
    console.log("Azure Storage Connection string not found");
    return;
  }
  const blobServiceClient = BlobServiceClient.fromConnectionString(
    AZURE_STORAGE_CONNECTION_STRING
  );
  const containerClient = blobServiceClient.getContainerClient(
    process.env.AZURE_STORAGE_CONTAINER_NAME!
  );
  const blobPathArray = blobStoragePath.split("/");
  const blockBlobClient = containerClient.getBlockBlobClient(
    blobPathArray[blobPathArray.length - 1]
  );
  blockBlobClient.deleteIfExists();
  return;
}
