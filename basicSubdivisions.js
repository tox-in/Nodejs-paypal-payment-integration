// For Basic Monthly Subscription
fetch('https://api-m.sandbox.paypal.com/v1/billing/plans', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "product_id": "PROD-05L93114N04111252",
        "name": "Basic Monthly Plan",
        "description": "$20 per month",
        "status": "ACTIVE",
        "billing_cycles": [{
            "frequency": {
                "interval_unit": "MONTH",
                "interval_count": 1
            },
            "tenure_type": "REGULAR",
            "sequence": 1,
            "total_cycles": 0,  // 0 for infinite billing
            "pricing_scheme": {
                "fixed_price": {
                    "value": "20",
                    "currency_code": "USD"
                }
            }
        }],
        "payment_preferences": {
            "auto_bill_outstanding": true,
            "setup_fee_failure_action": "CONTINUE",
            "payment_failure_threshold": 3
        }
    })
})
.then(response => response.json())
.then(data => console.log('Plan Created:', data));

// For Premium Monthly Subscription
fetch('https://api-m.sandbox.paypal.com/v1/billing/plans', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "product_id": "PROD-8PT92224SA011681P", // Replace with your created product ID
        "name": "Premium Monthly Plan",
        "description": "$99.99 per month",
        "status": "ACTIVE",
        "billing_cycles": [{
            "frequency": {
                "interval_unit": "MONTH",
                "interval_count": 1
            },
            "tenure_type": "REGULAR",
            "sequence": 1,
            "total_cycles": 0,
            "pricing_scheme": {
                "fixed_price": {
                    "value": "99.99",
                    "currency_code": "USD"
                }
            }
        }],
        "payment_preferences": {
            "auto_bill_outstanding": true,
            "setup_fee_failure_action": "CONTINUE",
            "payment_failure_threshold": 3
        }
    })
})
.then(response => response.json())
.then(data => console.log('Plan Created:', data));
