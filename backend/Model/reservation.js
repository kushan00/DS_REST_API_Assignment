const mongoose = require("mongoose");

const ResevationSchema = new mongoose.Schema({
	ResevationNo: {
		type: String,
		required: true,
	},
    ReservedRoomID: {
        type: String, 
        required: true,
    },
    RoomReservedCustomer: {
        type: String, 
		required: true,
    },
    RoomReservedDays: {
        type: String,
        required: true,
    },
    RoomReservedStartDate: {
        type: String,
        required: true,
    },
    RoomReservedENdDate: {
        type: String,
        required: true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Resevation = mongoose.model("resevation", ResevationSchema);


