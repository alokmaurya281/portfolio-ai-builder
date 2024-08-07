// social links model

const mongoose = require("mongoose");

const socialLinksSchema = new mongoose.Schema({
    name: {
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

module.exports = mongoose.model("socialLinks", socialLinksSchema)