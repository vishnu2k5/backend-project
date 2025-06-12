import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();


































//this is ine apprroch to connect to db
/*
import express from "express";
const app = express();
(async () => {try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",()=>{
        console.log("error:",error);
        throw error
    })

    app.listen(process.env.PORT,()=>{
        console.log(`server is listing at ${process.env.PORT} `);
    })
    
} catch (error) {
    console.error("Erroor:",error);
    throw err

    
}})()
*/