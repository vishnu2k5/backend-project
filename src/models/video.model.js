import mongoose  from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {
        videoFile:{
            type: String,
            required: true
        },
        tumbnail:{
            type: String,
            required: true,
        },
        title:{
            type: String, //cloudianry url
            required: true,
        },
        duration:{
            type: Number,
            required: true,
        },
        views:{
            type: Number,
            default: 0,

        },
        isPublished:{
            type: Boolean,
            default: true,
        },
        owner:{
            type: Schema.Types.ObjectId,
            ref: "User"

        }
    },
    {
        timestamps:true
    }
)


videoSchema.plugin(mongooseAggregatePaginate)



export const video = mongoose.model("video",videoSchema);


