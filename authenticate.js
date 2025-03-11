const { google } = require('googleapis');
const path = require('path');

// Path to your service account JSON key file
const keyFilePath = "C:\\Users\\dines\\OneDrive\\Documents\\Medicine-Recommendation-System\\caramel-feat-435914-k2-7d6a4d25e15c.json";  // Use full path if needed

// Initialize the Google Auth client using the service account key
const auth = new google.auth.GoogleAuth({
  keyFile: keyFilePath,
  scopes: ['https://www.googleapis.com/auth/cloud-platform'], // Adjust scope as needed
});

// Create an authenticated API client for Google Cloud Storage
const storage = google.storage({
  version: 'v1',
  auth: auth,
});

// Function to list the buckets in Google Cloud Storage
async function listBuckets() {
  try {
    const res = await storage.buckets.list({
      project: 'caramel-feat-435914-k2',  // Replace with your actual project ID
    });

    if (res.data.items) {
      console.log('Buckets:', res.data.items);
    } else {
      console.log('No buckets found.');
    }
  } catch (error) {
    console.error('Error listing buckets:', error);
  }
}

// Call the function to list buckets
listBuckets();
