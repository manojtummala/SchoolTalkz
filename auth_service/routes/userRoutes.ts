import express from "express";
const userRouter = express.Router();
import {
  allUsers,
  changePassword,
  createCreator,
  createOneStaff,
  createOneStudent,
  createSchoolTalkzStaff,
  deleteUser,
  editMe,
  editSchoolTalkzStaff,
  editSchoolUser,
  escalateSchoolTalkzStaffPriviledge,
  escalteSchoolUserPrivileges,
  findUser,
  findUserByRole,
  login,
  logout,
  me,
  sendOTP,
  verifyOTP,
} from "../controllers/userController";
import {
  authorizeRoles,
  isAuthenticatedUser,
  isSchool,
  isSchoolAdmin,
} from "../middlewares/auth";
import { upload } from "../uploadFiles";

userRouter.route("/allUsers").get(allUsers);
userRouter
  .route("/createSchoolTalkzStaff")
  .post(
    isAuthenticatedUser,
    authorizeRoles("rw", "rwd"),
    upload.single("profile_pic"),
    createSchoolTalkzStaff
  );
userRouter
  .route("/schooltalkz/priviledge")
  .post(
    isAuthenticatedUser,
    authorizeRoles("rwd"),
    escalateSchoolTalkzStaffPriviledge
  );
userRouter.route("/login").post(login);
userRouter.route("/sendOTP").put(sendOTP);
userRouter.route("/verifyOTP").put(verifyOTP);
userRouter.route("/logout").get(logout);

userRouter.route("/findUserByRole").post(findUserByRole);
userRouter.route("/findUser").post(findUser);

userRouter.route("/deleteUser").post(isAuthenticatedUser, deleteUser); // can be done by user itself
userRouter
  .route("/createOneStudent")
  .post(
    isAuthenticatedUser,
    isSchool,
    upload.single("profile_pic"),
    createOneStudent
  );
userRouter
  .route("/createOneStaff")
  .post(
    isAuthenticatedUser,
    isSchool,
    upload.single("profile_pic"),
    createOneStaff
  );
userRouter
  .route("/createCreator")
  .post(
    isAuthenticatedUser,
    authorizeRoles("rw", "rwd"),
    upload.single("profile_pic"),
    createCreator
  );
// all code below is not tested
userRouter
  .route("/editSchoolUser")
  .post(isAuthenticatedUser, isSchool, editSchoolUser);
userRouter
  .route("/escalteSchoolUserPrivileges")
  .post(isSchoolAdmin, escalteSchoolUserPrivileges);
userRouter
  .route("/editSchoolTalkzStaff")
  .post(isAuthenticatedUser, authorizeRoles("rwd"), editSchoolTalkzStaff);
userRouter.route("/changePassword").post(isAuthenticatedUser, changePassword);
userRouter.route("/me").get(isAuthenticatedUser, me);
userRouter.route("/editMe").put(isAuthenticatedUser, editMe); // TODO: any user, currently for school users only

export default userRouter;
