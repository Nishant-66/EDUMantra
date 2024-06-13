const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of User
const userSchema=new mongoose.Schema({
    // defining the Fields in the Schema
  firstName:{
    type:String,   // firstName should be a string 
    trim:true,     
    required:true,  // this field is required 

  }  ,
  lastName:{
    type:String,   // lastName should be a string 
    trim:true,
    required:true,  // this field is required 

  },
  password:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
  },
  ProfileDetails:{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Profile ID from profile Collection 
    ref:'Profile'          // Reference to the Profile
},
owner:{
    type:String,     // owner type should be string 
    enum:["Admin","Student","Instructor"],  // Owner can be Student or Instructor or Admin
    required:true,
},
// Course field should be an array because student can have multiple Courses.
courses:[{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Course ID from Course Collection 
    ref:'Course',    // Reference to the Course

}],
// CourseProgress field should be an array because student can have multiple Courses and different Course have different progress status.
courseProgress:[{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the CourseProgress ID from Course Collection
    ref:'CourseProgress',  // Reference to the Course
}],
image:{
    type:String,  
    required:true,
}


});
// exporting the model User
module.exports=mongoose.model('User',userSchema);