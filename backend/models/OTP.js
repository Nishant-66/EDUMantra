const mongoose= require('mongoose'); // taking an instance of mongoose
// Creating a Schema of OTP
const otpSchema= new mongoose.Schema({
    // defining the Fields in the Schema
    email:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:2*60,
    },
    otp:{
        type:String,
        required:true
    }
});
// exporting the model OTP
module.exports=mongoose.model('OTP',otpSchema);