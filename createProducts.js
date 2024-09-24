require('dotenv').config();


fetch('https://api-m.sandbox.paypal.com/v1/catalogs/products', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q`,  // Use the access token here
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "Basic Subscription",
        "description": "Basic subscription for $20/month",
        "type": "SERVICE",
        "category": "SOFTWARE",
    })
})
.then(response => response.json())
.then(data => console.log('Product Created:', data));

// Same for premium subscription
fetch('https://api-m.sandbox.paypal.com/v1/catalogs/products', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q`,  // Use the access token here
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "name": "Premium Subscription",
        "description": "Premium subscription for $99.99/month",
        "type": "SERVICE",
        "category": "SOFTWARE",
    })
})
.then(response => response.json())
.then(data => console.log('Product Created:', data));
