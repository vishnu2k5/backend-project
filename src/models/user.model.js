import { Schema } from "mongoose";
import mongoose from "mongoose";
import bcrytp from "bcrypt";



const userSchama = new Schema(
    {
        userName:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        emial:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname:{
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true
        },
        avatar:{
            type: String,
            required: true,
        },
        coverImage:{
            type: String,
        },
        watchHistory:[
            {
                type: Schema.Types.ObjectId,
                ref: "video"
            }
        ],
        password:{
            type: String,
            required: [true,"password is required"]
        },
        refreshToken:{
            type: String
        }
    },
    {
        timestamps: true,
    }
)


userSchama.pre("save", async function (next) {
    if(!this.isModified("password"))
        return next();
    this.password = bcrytp.hash(this.password,10)
    next()
})

userSchama.methods.isPasswordCorrect = async function (password){
   return await bcrytp.compare(password,this.password)
}


export const User = mongoose.model("User",userSchama)