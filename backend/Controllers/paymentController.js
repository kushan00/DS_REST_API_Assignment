const mongoose = require('mongoose');
const Payment = require("../Model/payment");




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

    try {
        await newPayment.save();

        res.status(201).json({data:newPayment , message:"Transtaction Successfull" , status:200});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}





module.exports ={getPayments  ,makePayment};