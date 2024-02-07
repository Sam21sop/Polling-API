import questionModel from "../models/quetionModel.js";
import optionsModel from "../models/optionModel.js";

// function to handle create quetions routes
export const createQuetionController = async (req, res) => {
    try {
        const question = await questionModel.create(req.body);
        
        // if question
        if(!question){
            return res.status(500).json({message:"Internal Server Error!"});
        }
        
        // return response
        return res.status(200).json({
            createdQuestion: question,
            message:"Question Created..!"
        });
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error!"});
    }
};


// function handle add option to question routes
export const addOptionController = async (req, res) => {
    try {
        // Find question by id
        const question = await questionModel.findById(req.params.id);

        // Check if question exist
        if(question){
            // create option
            const id = question.options.length + 1;
            let option = await optionsModel.create({
                id : id,
                question: req.params.id,
                text:req.body.text,
                votes:0
            });
            option.link_to_vote = "http://localhost:8000/api/v1/options/" + option.id + "/addVote";
            option.save();

            question.options.push(option);
            question.save();

            return res.status(200).json({option, message:"Option Created Successfully"});
        };
        
        return res.status(200).json({question});
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error!"});
    }
};


// function to handle delete question route
export const deleteQuetionController = async (req, res) => {
    try {
        // find questions by id and populate them
        let showQuestion = await questionModel.findById(req.params.id).populate('options');
        
        // if question not find
        if(!showQuestion){
            return res.status(404).json({message:"Question not Found!"})
        };

        // return appropriate question
        return res.status(200).json({showQuestion})
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error!"});
    }
};


// function to handle view a questions routes
export const viewsQuestionsController = async (req , res) => {
    try {
        let question = await questionModel.find();
        if(question){
            return res.status(200).json({question});
        } else {
            return res.status(404).json({message: "Question not found!"});
        }
    } catch (error) {
        return res.status(500).json({message:"Internal Server Error!"});
    }
};