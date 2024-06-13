const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of Tag
const tagSchema=new mongoose.Schema({
    // defining the Fields in the Schema
   name:{
   type:String, 
   required:true,
   },
   description:{
    type:String ,
    required:true,
   },
   courses:{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Course ID from Course Collection 
    ref:'Course',    // Reference to the Course

},
    });
    // exporting the model Tag
module.exports=mongoose.model('Tag',tagSchema);