fetch('https://api-m.sandbox.paypal.com/v1/notifications/webhooks', {
    method: 'POST',
    headers: {
        'Authorization': `Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q`, // Use your access token
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        url: 'https://yourapp.com/webhook', // Your webhook endpoint
        event_types: [
            { name: 'BILLING.SUBSCRIPTION.ACTIVATED' },
            { name: 'BILLING.SUBSCRIPTION.CANCELLED' },
            { name: 'PAYMENT.SALE.COMPLETED' },
            { name: 'PAYMENT.SALE.DENIED' },
            // Add more event types as needed
        ],
    })
});
