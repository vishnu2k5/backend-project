import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    //connectionInstance.connection.host tgis is used to know where it is gonna connect.
    console.log(`\n db is hosted at:${connectionInstance.connection.host}`);   

} catch (error) {
    console.log("Erroor:",error);
    process.exit(1)
}}

export default connectDB;