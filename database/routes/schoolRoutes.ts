import express from "express";
const schoolRouter = express.Router();
import {
  createSchool,
  allSchools,
  editSchool,
  findSchools,
  findSchool,
} from "../controllers/schoolController";

schoolRouter.route("/allSchools").get(allSchools);
schoolRouter.route("/createSchool").post(createSchool);
schoolRouter.route("/findSchools").post(findSchools);
schoolRouter.route("/editSchool").put(editSchool);

// // all code below is not tested
schoolRouter.route("/findSchool").post(findSchool)

export default schoolRouter;
