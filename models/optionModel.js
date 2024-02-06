import mongoose from "mongoose";

const optionsSchema = mongoose.Schema({
    text: {
        type:String,
        required:true
    },
    votes: {
        type:Number,
        default:0
    }
});


const optionsModel = mongoose.model("Option", optionsSchema);
export default optionsModel;