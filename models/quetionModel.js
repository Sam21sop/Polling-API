import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    options:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Option'
        }
    ]
});

const questionModel = mongoose.Model('Question', questionSchema);
export default questionModel;