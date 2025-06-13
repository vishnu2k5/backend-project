import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";



const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,

}))
//to set how the data they sending to manage data exple from json

app.use(express.json({limit: "16kb"}))
//same with usrl like when chesk chrom u can sea + in middle 

app.use(express.urlencoded({extended: true,limit: "16kb"}))

app.use(express.static("public"))
app.use(cookieParser())







export {app}