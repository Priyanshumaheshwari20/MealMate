const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    street: { type: String, required: true },
    city: { type: String },
    state: { type: String },
    country: { type: String },
    pincode: { type: String },
    phone: { type: String, required: true },
    userEmail: { type: String, required: true },
}); { timestamps: true };

module.exports = mongoose.model("Address", addressSchema);