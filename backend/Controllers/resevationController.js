const mongoose = require('mongoose');
const Resevation = require("../Model/reservation");

const Room = require("../Model/room");
const User = require('../Model/user.js');

 const getAllresevations = async (req, res) => { 
    try {
        const data = [];
        const reservations = await Resevation.find();
        for(let i =0;i<reservations.length;i++){
            const roomID = reservations[i].ReservedRoomID;
            const userID = reservations[i].RoomReservedCustomer;
            const rooms = await Room.findById(roomID);
            const user = await User.findById(userID);
            data.push({res: reservations[i], room: rooms , User :user});
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getReservationsById = async (req, res) => { 
    const { id } = req.params;
  
    try {
        const reservations = await Resevation.findById(id);
        const roomID = reservations.ReservedRoomID;
        const userID = reservations.RoomReservedCustomer;
        const rooms = await Room.findById(roomID);
        const user = await User.findById(userID);
        const data = {
            roomDetails: rooms,
            customerDetails :  user,
            resevationdetails: reservations,
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const getReservationsByUserId = async (req, res) => { 
    const { id } = req.params;
    try {
        const data = [];
        const reservations = await Resevation.find({RoomReservedCustomer:id});
        for(let i =0;i<reservations.length;i++){
            const roomID = reservations[i].ReservedRoomID;
            const userID = reservations[i].RoomReservedCustomer;
            const rooms = await Room.findById(roomID);
            const user = await User.findById(userID);
            data.push({res: reservations[i], room: rooms , User :user});
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

 const createReservations = async (req, res) => {
    const reservations = req.body;
    
    const newReservations = new Resevation({ ...reservations, creator: req.userId })
    console.log("saved data",newReservations);
    try {
        await newReservations.save();

        res.status(201).json(newReservations );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateReservationsById = async (req, res) => {
    const { id } = req.params;
    const { ResevationNo,ReservedRoomID, RoomReservedCustomer, RoomReservedDays , RoomReservedStartDate , RoomReservedENdDate } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No resevation with id: ${id}`);

    const updatedResevation = { ResevationNo,ReservedRoomID , RoomReservedCustomer, RoomReservedDays , RoomReservedStartDate , RoomReservedENdDate , _id:id};

    await Resevation.findByIdAndUpdate(id, updatedResevation, { new: true });

    res.json(updatedResevation);
}


 const deleteResevation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No resevation with id: ${id}`);

    await Resevation.findByIdAndRemove(id);

    res.json({ message: "Resevation deleted successfully." });
}



module.exports ={deleteResevation , createReservations , updateReservationsById , getAllresevations , getReservationsById , getReservationsByUserId};
