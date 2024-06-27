const mongoose= require('mongoose'); // taking an instance of mongoose
const mailSender= require('../utils/mailSender'); 
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
async function sendVerification(email,otp){
  try{
    const mailResponse=await mailSender(email,"Verification of Email from EDUMantra",otp);
    console.log("Email sent successfully",mailResponse);
  }
  catch(err){
    console.error("Error while sending verfication of Otp",err)
  }
}
otpSchema.pre('save',async function(next){
  await sendVerification(this.email,this.otp);
  next();
})
// exporting the model OTP
module.exports=mongoose.model('OTP',otpSchema);