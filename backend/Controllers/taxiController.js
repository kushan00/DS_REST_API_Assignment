const mongoose = require('mongoose');
const Taxi = require("../Model/Taxi");



 const bookTaxi = async (req, res) => {
    const taxis = req.body;

    const NewTaxi = new Taxi({ ...taxis, creator: req.userId })

    try {
        await NewTaxi.save();

        res.status(201).json({data:NewTaxi , message:"Taxi booked success" , status:200});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}





module.exports ={bookTaxi};