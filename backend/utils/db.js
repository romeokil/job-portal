import mongoose from "mongoose";
// username-> rahulkumarjha58978
// password-> ovuiGE3WAcHQyG3S
export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connected Succesfully!!")
    }
    catch(error){
        console.log("Error while connecting database ",error)
    }
}