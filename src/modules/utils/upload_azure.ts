import { BlobServiceClient } from '@azure/storage-blob';
import { v1 as uuidv1 } from 'uuid';
import * as dotenv from 'dotenv';

dotenv.config();

const AZURE_STORAGE_ACCOUNT_NAME = process.env
  .AZURE_STORAGE_ACCOUNT_NAME as string;
const AZURE_STORAGE_ACCOUNT_KEY = process.env
  .AZURE_STORAGE_ACCOUNT_KEY as string;
const AZURE_STORAGE_CONTAINER_NAME = process.env
  .AZURE_STORAGE_CONTAINER_NAME as string;

const blobServiceClient = BlobServiceClient.fromConnectionString(
  `DefaultEndpointsProtocol=https;AccountName=${AZURE_STORAGE_ACCOUNT_NAME};AccountKey=${AZURE_STORAGE_ACCOUNT_KEY};EndpointSuffix=core.windows.net`,
);

async function uploadFile(
  fileData: Uint8Array,
  fileName: string,
  folderPath: string,
): Promise<string> {
  const containerClient = blobServiceClient.getContainerClient(
    AZURE_STORAGE_CONTAINER_NAME,
  );
  await containerClient.createIfNotExists();
  const blockBlobClient = containerClient.getBlockBlobClient(
    `${folderPath}${fileName}`,
  );

  await blockBlobClient.uploadData(fileData);
  return blockBlobClient.url;
}

export { uploadFile };
