require('dotenv').config();
const express = require('express');
const paypal = require('paypal-rest-sdk');


paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': process.env.PAYPAL_CLIENT_ID,
    'client_secret': process.env.PAYPAL_CLIENT_SECRET
});

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.sendFile(__dirname + "/index.html"));

app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:2300/success",
            "cancel_url": "http://localhost:2300/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Red Sox Hat",
                    "sku": "001",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "Hat for the best team ever"
        }]
    };


    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            console.error(error);
            res.send('Error occurred');
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });
});

app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "25.00"
            }
        }]
    };

    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            res.send('Error');
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            res.send('Payment Successful');
        }
    });
});

app.get("/cancel", (req, res) => res.send("Cancelled"));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
