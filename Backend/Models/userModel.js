const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: { 
        type: String,
        unique: true 
    },
    phone: { 
        type: String,
        unique: true 
    },
    otp: {
        type: String 
    },
    otpExpires: {
        type: Date 
    },
    isVerified: {
        type: Boolean,
        default: false 
    },
    refreshToken: { 
        type: String
    }
});

module.exports = mongoose.model("User", userSchema);
