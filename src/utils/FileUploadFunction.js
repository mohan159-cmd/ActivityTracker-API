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

module.exports = {
    getFiles
};
