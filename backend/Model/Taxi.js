const mongoose = require("mongoose");

const taxiSchema = new mongoose.Schema({
	Name: {
		type: String,
		required: true,
	},
    Address: {
		type: String,
		required: true,
	},
    mobileno:{
		type: String,
		required: true,
    },
	email:{
        type:String,
        required:true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Taxi = mongoose.model("taxi", taxiSchema);
