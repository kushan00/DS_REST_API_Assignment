const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
	RoomNo: {
		type: String,
		required: true,
	},
	RoomFloor: {
		type: String,
		required: true,
	},
	RoomType: {
		type: String,
		required: true,
	},
	RoomPrice: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Room = mongoose.model("room", RoomSchema);
