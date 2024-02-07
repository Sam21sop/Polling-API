import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
    {
        id: {
            type:Number,
            required: true
        },
        title:{
            type:String,
            required:true
        },
        options:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Option'
            }
        ],
    
    },
    {
        timestamps:true
    }
);

const questionModel = mongoose.model('Question', questionSchema);
export default questionModel;