const fetch = require('node-fetch');

async function getAccessToken(clientId, clientSecret) {
    const response = await fetch('https://api-m.sandbox.paypal.com/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'grant_type=client_credentials',
    });

    if (!response.ok) {
        throw new Error('Failed to obtain access token: ' + response.statusText);
    }

    const data = await response.json();
    return data.access_token;
}

const clientId = 'AXmctuwNtt7YuBGnlXhg9skmBYeEUgfcaX93gvG7GZEETqx3FXTCS4JgJ6N9l_zdSTVBxVfqCdBXDhlQ';
const clientSecret = 'EF47HtfAP22epv97c_gNzP6V8qxsmD-D1HGeTBbZYE_1SkV-icVTc0HbvI0PwDXZ-J7mjmYxxpxOXyMU';

getAccessToken(clientId, clientSecret)
    .then(accessToken => {
        console.log('Access Token:', accessToken);
        // You can now use the access token for further API requests
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
