import express from "express";
const associationRouter = express.Router();
import {
  allAssociations,
  createClass,
  createStaffRoom,
  deleteAssociation,
  editAssociation,
  findAssociation,
} from "../controllers/associationController";

import { isAuthenticatedUser, isSchool } from "../middlewares/auth";

associationRouter.route("/allAssociations").get(allAssociations);
associationRouter
  .route("/createClass")
  .post(isAuthenticatedUser, isSchool, createClass);
associationRouter
  .route("/createStaffRoom")
  .post(isAuthenticatedUser, isSchool, createStaffRoom);
associationRouter.route("/findAssociation").post(findAssociation);
associationRouter
  .route("/editAssociation")
  .put(isAuthenticatedUser, isSchool, editAssociation);
associationRouter
  .route("/deleteAssociation")
  .post(isAuthenticatedUser, isSchool, deleteAssociation);

export default associationRouter;
