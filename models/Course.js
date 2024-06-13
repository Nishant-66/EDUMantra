const mongoose=require('mongoose');  // Taking an instance of mongoose
// Creating a Schema of Course
const courseSchema=new mongoose.Schema({
    // defining the Fields in the Schema
   courseName:{
   type:String, 
   },
   courseDescription:{
    type:String,
   },
   // instructor is basically who is going to take the course
   instructor:{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the User ID from User Collection 
    ref:'User', // Reference to the User
   },
   // what we will learn contains the topic that we will learn throughout this course
   WhatWeWillLearn:{
   type:String,
   },
   // courseContent should be array beacuse we have multiple topics in this course
   courseContent:[{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Topic ID from theTopic Collections
    ref:'Topic'
   }],
   // StudentEnrolled should be array beacuse we have multiple students in this course
   StudentEnrolled:[{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the User ID from User Collection 
    ref:'User', // Reference to the User
    required:true,
   }

   ],
   price:{
    type:String,
   },
   thumbnail:{
    type:String,
   },
   tag:{
    type:mongoose.Schema.Types.ObjectId, // Here basically we have set the Tag ID from Tag Collection 
    ref:'Tag'  // Reference to the Tag
   },
   // ratingandReview should be array beacuse we have multiple students in this course and rating and review of each should be stored.
   ratingandReview:[
    {
        type:mongoose.Schema.Types.ObjectId, // Here basically we have set the RatingAndReview ID from RatingAndReview Collection 
        ref:'RatingAndReview'  // Reference to the RatingAndReview
    }
   ]
    });
    // exporting the model Topic
module.exports=mongoose.model('Course',courseSchema);