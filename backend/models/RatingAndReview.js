const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of RatingAndReview
const ratingAndReviewSchema=new mongoose.Schema({
    // defining the Fields in the Schema
   user:{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the User ID from User Collection 
    ref:'User', // Reference to the User
    required:true,
   },
   rating:{
    Type:Number,
    required:true,
    min:1,
    max:5,
   },
   review:{
    type:String,
    required:true,
   }
    });
    // exporting the model ratingAndReview
module.exports=mongoose.model('RatingAndReview',ratingAndReviewSchema);