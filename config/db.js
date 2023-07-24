const mongoose=require('mongoose');
mongoose.set('strictQuery',false);
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Database Connected:${connect.connection.host}`);

    }catch(err){
        console.log('error in DB connection',err);
    }
}
module.exports=connectDB;