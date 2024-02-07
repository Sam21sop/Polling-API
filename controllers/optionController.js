import optionsModel from "../models/optionModel.js";
import questionModel from "../models/quetionModel.js";


// function to handle add option routes
export const deleteOptionController = async (req, res) => {
    try {
        // get id from params
        let id = req.params.id;

        // find option by id
        const option = await optionsModel.findById(id);

        // check if votes greater than zero
        if (option.votes > 0) {
            return res.status(400).json({message:"Unable to delete Option due to vote greater than zero!"})
        };

        // delete option from questions array
        await questionModel.findByIdAndUpdate(option.question, {$pull:{option:id}});

        // delete option 
        await optionsModel.findByIdAndDelete(id)

        // return apropriate response
        return res.status(200).json({message:"Option Deleted Successfully."});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error!"});
    }
};


// function to handle add votes routes
export const addVotesController = async(req, res) => {
    try {
        // get id from the params
        let id = req.params.id;
        
        // increament vote if option exist for questions
        await optionsModel.findByIdAndUpdate(id, {$inc:{votes:1}});

        // return apropriate response
        return res.status(200).json({message:"Vote Added Successfully."});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal server Error!"});
    }
};