const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of courseProgress
const courseProgressSchema=new mongoose.Schema({
    // defining the Fields in the Schema
   courseID:{
   type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Course ID from Course Collection 
   ref:'Course', // Reference to the Course
   },
   // completed videos should be an array because students may have different courses and in different course they have different status of completed videos
   completedVideos:[{
    types:mongoose.Schema.Types.ObjectId,  // Here basically we have set the Video ID from Video Collection 
    ref:'Video', // Reference to the Video

   }]
    });
    // exporting the model CourseProgress
module.exports=mongoose.model('CourseProgress',courseProgressSchema);