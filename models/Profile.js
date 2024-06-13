const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of Profile
const profileSchema=new mongoose.Schema({
    // defining the Fields in the Schema
    // Created a Field gender where user can add male or female .
   gender:{
   type:String,
   },
   // User can add his/her dateofbirth
   dateOfBirth:{
    type:String,
   },
   // user can add his/her contactNumber
   contactNumber:{
    type:Number, // type should of number 
    required:true
   },
   // user can write his/her description in short in the about field.
   about:{
    type:String
   }
    });
    // exporting the model Profile
module.exports=mongoose.model('Profile',profileSchema);