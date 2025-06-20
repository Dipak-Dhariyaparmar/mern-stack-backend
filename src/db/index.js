import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n MongoDB Connected Successfully!! DB HOST:${connectionInstance.connection.host}`)
    }catch(error){
        console.log("mongodb connection failed:-",error)
        process.exit(1)
    }
}

export default connectDB

// This component is a database connetion file with mongodb aur any database to connect
