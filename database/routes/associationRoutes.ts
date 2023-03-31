import express from "express";
const associationRouter = express.Router();
import {
  allAssociations,
  createAssociation,
  deleteAssociation,
  editAssociation,
  findAssociation,
} from "../controllers/associationController";

associationRouter.route("/allAssociations").get(allAssociations);
associationRouter.route("/createAssociation").post(createAssociation);
associationRouter.route("/findAssociation").post(findAssociation);
associationRouter.route("/editAssociation").put(editAssociation);
associationRouter.route("/deleteAssociation").post(deleteAssociation);

export default associationRouter;
