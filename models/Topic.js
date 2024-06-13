const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of topic
const topicSchema=new mongoose.Schema({
    // defining the Fields in the Schema
   topicName:{
   type:String, 
   },
   //videos should be an array because each topic can have multiple videos
   videos:[{
     type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Video ID from Video Collection 
     ref:'Video' // Reference to the Video
   }],
   
   
    });
    // exporting the model Topic
module.exports=mongoose.model('Topic',topicSchema);