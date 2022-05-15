const express = require("express");
const router = express.Router();
const {deleteRoom,updateRoomById , getRooms , getRoomById ,createRoom} = require("../Controllers/roomController");


router.post("/createRoom",createRoom);
router.get("/getAllRooms",getRooms);
router.get("/getRoomById/:id",getRoomById);
router.delete("/deleteRoom/:id",deleteRoom);
router.patch("/updateRoomById/:id",updateRoomById);


module.exports = router;
