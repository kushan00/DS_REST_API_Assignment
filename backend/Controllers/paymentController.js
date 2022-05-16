const mongoose = require('mongoose');
const Payment = require("../Model/payment");
var ShoutoutClient = require('shoutout-sdk');

var apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwZjk5OTFiMC1kNGUzLTExZWMtYmViYi0wOTUyMTdlNmY3ZDUiLCJzdWIiOiJTSE9VVE9VVF9BUElfVVNFUiIsImlhdCI6MTY1MjY4MzIyMiwiZXhwIjoxOTY4MzAyNDIyLCJzY29wZXMiOnsiYWN0aXZpdGllcyI6WyJyZWFkIiwid3JpdGUiXSwibWVzc2FnZXMiOlsicmVhZCIsIndyaXRlIl0sImNvbnRhY3RzIjpbInJlYWQiLCJ3cml0ZSJdfSwic29fdXNlcl9pZCI6IjY4MDE1Iiwic29fdXNlcl9yb2xlIjoidXNlciIsInNvX3Byb2ZpbGUiOiJhbGwiLCJzb191c2VyX25hbWUiOiIiLCJzb19hcGlrZXkiOiJub25lIn0.U_m2CPK2xVilqVHN6PMxwkaRaTUXjAD0v13HDcDPv5k';

var debug = true, verifySSL = false;

 const getPayments = async (req, res) => { 
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



 const makePayment = async (req, res) => {
    const payments = req.body;

    const newPayment = new Payment({ ...payments, creator: req.userId })

        let mobile = payments.Usermobileno;
        let name = payments.Username;
        
        //sms api 
        var client = new ShoutoutClient(apiKey, debug, verifySSL);
        var message = {
        "content": {"sms": "Hello! "+name+" Your payment is successfull..!"},
        "destinations": [mobile],
        "source": "ShoutDEMO",
        "transports": ["SMS"]
        };

        client.sendMessage(message, (error, result) => {
        if (error) {
        console.error('Error sending message!',error);
        } else {
        console.log('Sending message successful!',result);
        }
        });


    try {
        await newPayment.save();

        res.status(201).json({data:newPayment , message:"Transtaction Successfull" , status:200});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}





module.exports ={getPayments  ,makePayment};