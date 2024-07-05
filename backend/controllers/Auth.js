const OTP=require('../models/OTP');
const otpGenerator=require('otp-generator')
const user=require('../models/User')
// send otp
exports.sendotp=async(req,res)=>{
    try{
  const {email}=req.body;
  const checkUser=user.findOne({email:email});
  // checking if user already exist or not
  if(checkUser){
    return res.status(401).json({
        sucess:false,
        message:"User already exists"
    })
  }
 // generating otp
  var otp=otpGenerator.generate(6,{
    upperCaseAlphabets:false,
    lowerCaseAlphabets:false,
    specialChars:false,
  })
  const check=OTP.findOne({otp});
  // checking if otp is unique or not 
  while(check){
    otp=otpGenerator.generate(6,{
        lowerCaseAlphabets:false, 
        upperCaseAlphabets:false,
        specialChars:false
    })
    check=OTP.findOne({otp});
  }
  const otpPayLoad={email,otp};
  // creating the database and saving the data
  const otpBody=OTP.create(otpPayLoad);
  return res.status(200).json({
    sucess:false,
    message:"Otp Sent Successfully"
  })
}
  catch(err){
   return res.status(500).json({
     sucess:false,
     message:err.message,
   })
  }
}
// signup
exports.signup=async(req,res)=>{
    // taking the data from body
    // validating the data
    // hashing the password
    // creating the entry in database
}
// login
