import { Router } from "express";
import { addVotesController, deleteOptionController } from "../controllers/optionController.js";

const optionRouter = Router();

// define option routes
optionRouter.route('/:id/delete').delete(deleteOptionController);
optionRouter.route('/:id/add-vote').post(addVotesController);

export default optionRouter;