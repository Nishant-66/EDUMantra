const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of video
const videoSchema=new mongoose.Schema({
    // defining the Fields in the Schema
    // Here title denotes the title of Video 
   title:{
   type:String, 
   },
   //description basically contain what do we learn in this video
   description:{
    type:String ,
   },
   // timeduration is basically the duration of video 
   timeduration:{
    type:String,
   },
   // videoURL is basically the URL of video
   videoURL:{
    type:String,
   }
    });
    // exporting the model Video
module.exports=mongoose.model('Video',videoSchema);