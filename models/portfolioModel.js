// portfolio model

const mongoose = require("mongoose");

const portfolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
},

    { timestamps: true }
);

module.exports = mongoose.model("portfolio", portfolioSchema)