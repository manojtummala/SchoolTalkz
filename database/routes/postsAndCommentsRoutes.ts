import express from "express";
const postAndCommentRouter = express.Router();
import {
  allPosts,
  allComments,
  createPostOrComment,
  editPostOrComment,
  findPostOrComment,
  changePostOrCommentStatus,
  allTopics,
  findTopic,
  handleLikes,
  schoolFeed
} from "../controllers/postAndCommentsController";

postAndCommentRouter.route("/allPosts").get(allPosts);
postAndCommentRouter.route("/schoolFeed").post(schoolFeed);
postAndCommentRouter.route("/allComments").post(allComments);
postAndCommentRouter.route("/createPostOrComment").post(createPostOrComment);
postAndCommentRouter.route("/editPostOrComment").put(editPostOrComment);
postAndCommentRouter.route("/findPostOrComment").post(findPostOrComment);
postAndCommentRouter.route("/changePostOrCommentStatus").put(changePostOrCommentStatus);
postAndCommentRouter.route("/allTopics").get(allTopics);
postAndCommentRouter.route("/findTopic").post(findTopic);
postAndCommentRouter.route("/handleLikes").put(handleLikes);

export default postAndCommentRouter;
