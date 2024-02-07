import mongoose from "mongoose";

const optionsSchema = mongoose.Schema(
    {
        id: {
            type:Number,
            required: true
        },
        text: {
            type:String,
            required:true
        },
        votes: {
            type:Number,
            default:0
        },
        link_to_vote:{
            type:String
        },
        question:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Question"
        }
    },
    {
        timestamps:true
    }
);


const optionsModel = mongoose.model("Option", optionsSchema);
export default optionsModel;