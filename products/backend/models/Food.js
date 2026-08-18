const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    category: String,
});

module.exports = mongoose.model("Food", foodSchema, "foods");