const mongoose = require("mongoose");

const CheckOutSchema = new mongoose.Schema({
	first_name: { type: String,trim: true },
	last_name: { type: String,trim: true },
	email: { type: String,trim: true },
	phone_number: { type: String,trim: true },
	state: { type: String,trim: true },
	city: { type: String,trim: true },
	additional_phone_number: { type: String,trim: true },
	products: { type: Array },
	status: { type: String,default: "pending...." },
	orderID: { type: String,trim: true },
},{ timestamps: true });


const CheckOut = mongoose.model("CheckOut", CheckOutSchema);

module.exports = CheckOut;