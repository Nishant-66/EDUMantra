const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
 exports.connect=()=>{
  mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
  }).then(()=>{
    console.log('connected to db');
  }).catch((err)=>{
    console.log('error connecting to db');
    console.error(err);
    process.exit(1);
  })
 };