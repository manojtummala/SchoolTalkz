import { Request, Response } from "express";
import { instance } from "../lib/axios";
import errorMessage from "../utils/errorMessage";
import {
  changePostOrCommentStatusParams,
  createPostOrCommentParams,
  editPostOrCommentParams,
  findTopicParams,
  handleLikesParams,
} from "../schemas/postAndCommentSchema";
import { uploadFile } from "../uploadFiles";

export async function allPosts(_: Request, res: Response) {
  instance
    .get("/allPosts")
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function schoolFeed(req: Request, res: Response) {
  if (req.user.data.school_user === null && req.user.data.isSchool === false) {
    res.status(400).send("Please login as school user");
    return;
  }
  const data = { schoolId: req.user.data.school_user.schoolId ?? req.user.data.id };
  console.log(data)
  instance
    .post("/schoolFeed", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function createPostOrComment(req: Request, res: Response) {
  const files: string[] = [""];
  const topics: string[] = JSON.parse(req.body.topics);
  console.log(req.body.topics);
  console.log(topics);
  try {
    if (req.file) {
      const response = await uploadFile(req.file.path);
      if (response.error === "") {
        files.push(response.message);
      } else {
        res.status(500).send(errorMessage(response.error));
        return;
      }
    }
  } catch (err) {
    res.status(500).send(errorMessage(err));
    return;
  }
  const data = {
    ...req.body,
    topics: topics,
    userId: req.user.data.id,
    files: files,
  };
  const checkParam = createPostOrCommentParams.safeParse(data);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }

  instance
    .post("/createPostOrComment", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function editPostOrComment(req: Request, res: Response) {
  const data = { ...req.body, userId: req.user.data.id };
  const checkParam = editPostOrCommentParams.safeParse(data);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }

  instance
    .put("/editPostOrComment", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function changePostOrCommentStatus(req: Request, res: Response) {
  const data = { ...req.body, userId: req.user.data.id };
  const checkParam = changePostOrCommentStatusParams.safeParse(data);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }

  instance
    .put("/changePostOrCommentStatus", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function allTopics(req: Request, res: Response) {
  instance
    .get("/allTopics")
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function findTopic(req: Request, res: Response) {
  const checkParam = findTopicParams.safeParse(req.body);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .post("/findTopic", req.body)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
export async function handleLikes(req: Request, res: Response) {
  const data = { ...req.body, userId: req.user.data.id };
  const checkParam = handleLikesParams.safeParse(data);
  if (checkParam.success !== true) {
    res.status(206).send(checkParam.error);
    return;
  }
  instance
    .put("/handleLikes", data)
    .then(function (response) {
      res.status(200).send({ message: response.data });
    })
    .catch(function (error) {
      res.status(500).send(errorMessage(error));
    });
}
