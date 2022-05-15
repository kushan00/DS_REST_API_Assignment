const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
	Username: {
		type: String,
		required: true,
	},
	Useremail: {
		type: String,
		required: true,
	},
    Usermobileno:{
		type: String,
		required: true,
    },
	amount:{
        type:String,
        required:true,
    },
	BankName: {
		type: String,
		required: true,
	},
	CardNo: {
		type: String,
		required: true,
	},
    CVV:{
        type:String,
        required:true,
    },
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Payment = mongoose.model("payment", paymentSchema);
