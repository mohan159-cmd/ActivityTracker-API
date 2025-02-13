require("dotenv").config();
const { BlobServiceClient } = require("@azure/storage-blob");

const AZURE_STORAGE_CONNECTION_STRING = process.env.BLOB_CONNECTION_STRING;
const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_STORAGE_CONNECTION_STRING);

const getFiles = async (req, res) => {
    const CONTAINER_NAME = "websiteimage";
    const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

    try {
        const files = [];
        for await (const blob of containerClient.listBlobsFlat()) {
            const blobClient = containerClient.getBlobClient(blob.name);
            const url = blobClient.url;
            files.push({ name: blob.name, url: url });
        }
        res.json(files);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const uploadFile = async (containerName,file) => {
    try {
        const CONTAINER_NAME = containerName || "websiteimage"; // Default container name
        const containerClient = blobServiceClient.getContainerClient(CONTAINER_NAME);

        // Create the container if it doesn't exist (optional, but good practice)
        const createContainerResponse = await containerClient.createIfNotExists();
        console.log(`createContainerResponse: ${createContainerResponse.requestId}`);

        // Get the blob client
        const blockBlobClient = containerClient.getBlockBlobClient(file.filename); // Use original filename

        // Upload the file
        const uploadBlobResponse = await blockBlobClient.uploadFile(file.path); // Use file path
        console.log(`uploadBlobResponse: ${uploadBlobResponse.requestId}`);

        // Get the URL of the uploaded blob
        const blobUrl = blockBlobClient.url;

        return blobUrl; // Return the URL
    } catch (error) {
        console.error("Error uploading to Azure Blob Storage:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

module.exports = {
    getFiles,
    uploadFile
};
