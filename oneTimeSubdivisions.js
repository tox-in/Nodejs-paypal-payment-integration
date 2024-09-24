// For One-time Basic Plan
fetch('https://api-m.sandbox.paypal.com/v1/billing/plans', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "product_id": "PROD-05L93114N04111252",
        "name": "Basic One-time Plan",
        "description": "One-time payment of $60",
        "status": "ACTIVE",
        "billing_cycles": [{
            "frequency": {
                "interval_unit": "MONTH",
                "interval_count": 1
            },
            "tenure_type": "REGULAR",
            "sequence": 1,
            "total_cycles": 1,  // One-time payment
            "pricing_scheme": {
                "fixed_price": {
                    "value": "60",
                    "currency_code": "USD"
                }
            }
        }],
        "payment_preferences": {
            "auto_bill_outstanding": false,
            "setup_fee_failure_action": "CONTINUE",
            "payment_failure_threshold": 3
        }
    })
})
.then(response => response.json())
.then(data => console.log('Plan Created:', data));

// For One-time Premium Plan
fetch('https://api-m.sandbox.paypal.com/v1/billing/plans', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer A21AAJxVXDMjBRCUDmZZPDirNNbgHlNNf8tHCjpD9o-ndEpNFnUs2bJ-c3NlaI_CdOJZ036RqD0GcoxTTzJ-DIL4OtOs7pZ6Q',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "product_id": "PROD-8PT92224SA011681P",
        "name": "Premium One-time Plan",
        "description": "One-time payment of $300",
        "status": "ACTIVE",
        "billing_cycles": [{
            "frequency": {
                "interval_unit": "MONTH",
                "interval_count": 1
            },
            "tenure_type": "REGULAR",
            "sequence": 1,
            "total_cycles": 1,  // One-time payment
            "pricing_scheme": {
                "fixed_price": {
                    "value": "300",
                    "currency_code": "USD"
                }
            }
        }],
        "payment_preferences": {
            "auto_bill_outstanding": false,
            "setup_fee_failure_action": "CONTINUE",
            "payment_failure_threshold": 3
        }
    })
})
.then(response => response.json())
.then(data => console.log('Plan Created:', data));
