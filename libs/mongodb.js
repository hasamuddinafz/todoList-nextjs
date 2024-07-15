import mongoose from "mongoose";
const connectMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to mongodb ");
    }catch(error){
        console.log(error);
    }
}
export default connectMongoDb;