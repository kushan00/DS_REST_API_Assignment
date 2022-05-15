const mongoose = require('mongoose');
const Room = require("../Model/room");




 const getRooms = async (req, res) => { 
    try {
        const rooms = await Room.find();
                 
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const getRoomById = async (req, res) => { 
    const { id } = req.params;

    try {
        const rooms = await Room.findById(id);
        
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


 const createRoom = async (req, res) => {
    const rooms = req.body;

    const newRoom = new Room({ ...rooms, creator: req.userId })

    try {
        await newRoom.save();

        res.status(201).json(newRoom );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


 const updateRoomById = async (req, res) => {
    const { id } = req.params;
    const { RoomNo, RoomFloor, RoomType , RoomPrice } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No room with id: ${id}`);

    const updatedRoom = { RoomNo, RoomFloor, RoomType , RoomPrice, _id:id};

    await Room.findByIdAndUpdate(id, updatedRoom, { new: true });

    res.json(updatedRoom);
}


 const deleteRoom = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No room with id: ${id}`);

    await Room.findByIdAndRemove(id);

    res.json({ message: "room deleted successfully." });
}



module.exports ={deleteRoom,updateRoomById , getRooms , getRoomById ,createRoom};