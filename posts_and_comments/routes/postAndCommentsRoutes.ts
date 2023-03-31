import express from "express";
import {
  allPosts,
  allTopics,
  changePostOrCommentStatus,
  createPostOrComment,
  editPostOrComment,
  findTopic,
  handleLikes,
  schoolFeed,
} from "../controllers/postAndCommentController";
import { isAuthenticatedUser, isGlobalUser } from "../middlewares/auth";
import { upload } from "../uploadFiles";
const postAndCommentRouter = express.Router();

postAndCommentRouter.route("/allPosts").get(allPosts);
postAndCommentRouter.route("/schoolFeed").get(isAuthenticatedUser, schoolFeed);
postAndCommentRouter.route("/createPostOrComment").post(
  isAuthenticatedUser,
  // isGlobalUser,
  upload.single("file"),
  createPostOrComment
);
postAndCommentRouter
  .route("/editPostOrComment")
  .put(isAuthenticatedUser, editPostOrComment);
postAndCommentRouter
  .route("/changePostOrCommentStatus")
  .put(isAuthenticatedUser, changePostOrCommentStatus);

postAndCommentRouter.route("/allTopics").get(allTopics);
postAndCommentRouter.route("/findTopic").post(findTopic);
postAndCommentRouter
  .route("/handleLikes")
  .put(isAuthenticatedUser, handleLikes);

export default postAndCommentRouter;
