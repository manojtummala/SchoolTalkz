import express from "express";
const schoolRouter = express.Router();
import {
  allSchools,
  changeSchoolStatus,
  createSchool,
  editSchool,
  findSchools,
} from "../controllers/schoolController";
import { authorizeRoles, isAuthenticatedUser } from "../middlewares/auth";

schoolRouter
  .route("/allSchools")
  .get(isAuthenticatedUser, authorizeRoles("r", "rw", "rwd"), allSchools);
schoolRouter
  .route("/createSchool")
  .post(isAuthenticatedUser, authorizeRoles("rw", "rwd"), createSchool);
schoolRouter
  .route("/findSchools")
  .post(isAuthenticatedUser, authorizeRoles("r", "rw", "rwd"), findSchools);
schoolRouter
  .route("/editSchool")
  .put(isAuthenticatedUser, authorizeRoles("rw", "rwd"), editSchool);
schoolRouter
  .route("/changeSchoolStatus")
  .put(isAuthenticatedUser, authorizeRoles("rw", "rwd"), changeSchoolStatus);

export default schoolRouter;
