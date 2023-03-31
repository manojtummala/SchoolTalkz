import prisma from "../lib/prisma";
import { Request, Response } from "express";
import errorMessage from "../utils/errorMessage";

export async function allPosts(_: Request, res: Response) {
  try {
    const posts = await prisma.posts_comments.findMany({
      where: {
        parent: null,
      },
      include: {
        children: true,
        topics: true,
        posted_by: {
          select: {
            first_name: true,
            last_name: true,
            email: true,
            id: true,
            gender: true,
          },
        },
        liked_by: true,
      },
    });
    res.status(200).send(posts);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function schoolFeed(req: Request, res: Response) {
  const { schoolId } = req.body;
  if (schoolId===undefined) {
    res.status(206).send(errorMessage("Please provide school id", 401))
    return
  }
  try {
    const posts = await prisma.posts_comments.findMany({
      where: {
        AND: [
          { parent: null },
          {
            posted_by: {
              school_user: {
                schoolId: schoolId,
              },
            },
          },
        ],
      },
      include: {
        children: true,
        topics: true,
        posted_by: {
          select: {
            first_name: true,
            last_name: true,
            email: true,
            id: true,
            gender: true,
          },
        },
        liked_by: true,
      },
    });
    res.status(200).send(posts);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function allComments(req: Request, res: Response) {
  try {
    const { parentId } = req.body;
    const posts = await prisma.posts_comments.findMany({
      where: {
        parent: {
          id: parentId,
        },
      },
      include: {
        children: true,
        topics: true,
        posted_by: {
          select: {
            first_name: true,
            last_name: true,
            id: true,
            email: true,
          },
        },
        liked_by: true,
      },
    });
    res.status(200).send(posts);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function findPostOrComment(req: Request, res: Response) {
  const { id, topic } = req.body;

  try {
    const post = await prisma.posts_comments.findFirst({
      where: {
        id: id,
        topics: topic,
      },
      include: {
        children: true,
        topics: true,
        posted_by: true,
        liked_by: true,
      },
    });
    res.status(201).send(post);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function createPostOrComment(req: Request, res: Response) {
  const { description, userId, topics, communityId, parentId, files } =
    req.body;
  try {
    // handling comments
    if (parentId !== undefined) {
      const post = await prisma.posts_comments.create({
        data: {
          communityId: communityId,
          description: description,
          parent: {
            connect: {
              id: parentId,
            },
          },
          posted_by: {
            connect: {
              id: userId,
            },
          },
          topics: {
            connectOrCreate: topics?.map((topic: string) => ({
              create: {
                name: topic,
              },
              where: {
                name: topic,
              },
            })),
          },
        },
        include: {
          topics: true,
        },
      });
      res.status(201).send(post);
      return;
    } else {
      const post = await prisma.posts_comments.create({
        data: {
          communityId: communityId,
          description: description,
          posted_by: {
            connect: {
              id: userId,
            },
          },
          assets: files,
          topics: {
            connectOrCreate: topics?.map((topic: string) => ({
              create: {
                name: topic,
              },
              where: {
                name: topic,
              },
            })),
          },
        },
        include: {
          topics: true,
        },
      });
      res.status(201).send(post);
      return;
    }
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function editPostOrComment(req: Request, res: Response) {
  const { description, topics, id, communityId, userId } = req.body;

  try {
    await prisma.posts_comments.findFirstOrThrow({
      where: {
        AND: [{ id: id }, { authorId: userId }],
      },
    });
    const post = await prisma.posts_comments.update({
      data: {
        description: description,
        communityId: communityId,
        topics: {
          connectOrCreate: topics?.map((topic: string) => ({
            create: {
              name: topic,
            },
            where: {
              name: topic,
            },
          })),
        },
      },
      where: {
        id: id,
      },
    });
    res.status(201).send(post);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function changePostOrCommentStatus(req: Request, res: Response) {
  try {
    const { id, status, userId } = req.body;
    await prisma.posts_comments.findFirstOrThrow({
      where: {
        AND: [{ id: id }, { authorId: userId }],
      },
    });
    const post = await prisma.posts_comments.update({
      data: {
        status: status,
      },
      where: {
        id: id,
      },
    });
    res.status(201).send(post);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function allTopics(req: Request, res: Response) {
  try {
    const topics = await prisma.topic.findMany({
      select: {
        id: true,
        name: true,
        _count: true,
      },
    });
    res.status(200).send(topics);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function findTopic(req: Request, res: Response) {
  const { name } = req.body;
  try {
    const topics = await prisma.topic.findFirst({
      where: {
        name: name,
      },
      include: {
        related_posts: true,
      },
    });
    res.status(200).send(topics);
  } catch (err) {
    console.log(`here2`);
    res.status(206).send(errorMessage(err));
  }
}

// handling likes
export async function handleLikes(req: Request, res: Response) {
  const { postId, userId } = req.body;
  try {
    const post = await prisma.posts_comments.findFirst({
      where: {
        AND: [{ id: postId }, { liked_by: { some: { id: userId } } }],
      },
    });
    if (post === null) {
      const disLikedPost = await prisma.posts_comments.update({
        where: {
          id: postId,
        },
        data: {
          liked_by: {
            disconnect: {
              id: userId,
            },
          },
        },
        include: { _count: true, liked_by: { select: { _count: true } } },
      });
      res.status(200).send({ post: disLikedPost, message: "Post disliked" });
      return;
    } else {
      const likedPost = await prisma.posts_comments.update({
        where: {
          id: postId,
        },
        data: {
          liked_by: {
            connect: {
              id: userId,
            },
          },
        },
        include: { _count: true, liked_by: { select: { _count: true } } },
      });
      res.status(200).send({ post: likedPost, message: "Post Liked" });
      return;
    }
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}
