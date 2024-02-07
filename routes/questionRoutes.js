import { Router } from "express";
import {
  addOptionController,
  createQuetionController,
  deleteQuetionController,
  viewsQuestionsController,
} from "../controllers/questionControllers.js";

// create question router
const questionRoutes = Router();

// define all routes and methods
questionRoutes.route("/create").post(createQuetionController);
questionRoutes.route("/:id/option/create").post(addOptionController);
questionRoutes.route("/:id/delete").delete(deleteQuetionController);
questionRoutes.route("/:id").get(viewsQuestionsController);


export default questionRoutes;