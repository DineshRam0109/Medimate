const axios = require('axios');
const fs = require('fs');

try {
  // Load the API key from your JSON service account key file
  const keyFilePath = 'E:\\Dinesh Gemini-chatbot\\caramel-feat-435914-k2-7d6a4d25e15c.json';
  const apiKey = JSON.parse(fs.readFileSync(keyFilePath)).private_key.trim();

  // Debugging: Print the API key
  console.log(`API Key: "${apiKey}"`);

  // Define the Gemini API endpoint
  const endpoint = 'http://127.0.0.1:5000/upload';  // Replace with the correct route if different

  // Make the GET request to the Gemini API with the API key in headers
  axios
    .get(endpoint, {
      headers: {
        'X-GEMINI-APIKEY': apiKey,  // Send the API key in the request headers
      },
    })
    .then((response) => {
      // If the request is successful, log the response data
      console.log('Response:', response.data);
    })
    .catch((error) => {
      // If there is an error, log the error details
      console.error('Error:', error.response ? error.response.data : error.message);
    });
} catch (err) {
  console.error('Error loading API key:', err.message);
}
