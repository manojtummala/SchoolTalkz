import { z } from "zod";

export const createAssociationParams = z.object({
  name: z.string(),
  isClass: z.boolean(),
});

export const editAssociationParams = z.object({
  associationId: z.string(),
  name: z.string(),
  mapped_to: z
    .enum([
      "Nursery",
      "LKG",
      "UKG",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
    ])
    .optional(),
  sub_association: z.string().optional(),
});

export const deleteAssociationParams = z.object({
  associationId: z.string(),
  schoolId: z.string(),
});
