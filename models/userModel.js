// user model

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username:{
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        unique: true,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isSuperAdmin: {
        type: Boolean,
        default: false,
    },
    // timestamps
},

    { timestamps: true }

);