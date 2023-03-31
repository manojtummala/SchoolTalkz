import { z } from "zod";

export const createPostOrCommentParams = z.object({
  description: z.string().optional(),
  topics: z.array(z.string()).optional(),
  communityId: z.string().optional(),
  parentId: z.string().optional(),
  userId: z.string(),
  files: z.array(z.string()).optional()
});

export const editPostOrCommentParams = z.object({
  description: z.string().optional(),
  topics: z.array(z.string()).optional(),
  communityId: z.string().optional(),
  userId: z.string(),
});
export const changePostOrCommentStatusParams = z.object({
  id: z.string(),
  status: z.enum(["active", "inactive"]),
  userId: z.string(),
});
export const findTopicParams = z.object({
  name: z.string(),
});
export const handleLikesParams = z.object({
  postId: z.string(),
  userId: z.string(),
});
