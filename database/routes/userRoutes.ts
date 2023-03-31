import express from "express";
const userRouter = express.Router();
import {
  allUsers,
  createCreator,
  createSchoolTalkzStaff,
  createSchoolUser,
  deleteUser,
  editCreator,
  editSchoolTalkzStaff,
  editSchoolUser,
  findUser,
  findUserByRole,
  verifyUser,
  changeUserStatus, // not used till now
  sendOTP,
  verifyOTP
} from "../controllers/userContoller";

userRouter.route("/allUsers").get(allUsers);
userRouter.route("/findUserByRole").post(findUserByRole);
userRouter.route("/findUser").post(findUser);
userRouter.route("/deleteUser").post(deleteUser);
// any user can edit him/herself

userRouter.route("/createSchoolUser").post(createSchoolUser);
userRouter.route("/editSchoolUser").put(editSchoolUser);

userRouter.route("/createCreator").post(createCreator);
userRouter.route("/editCreator").put(editCreator);

userRouter.route("/createSchoolTalkzStaff").post(createSchoolTalkzStaff);
userRouter.route("/editSchoolTalkzStaff").put(editSchoolTalkzStaff);

userRouter.route("/verifyUser").post(verifyUser);
userRouter.route("/sendOTP").put(sendOTP);
userRouter.route("/verifyOTP").put(verifyOTP);

export default userRouter;
