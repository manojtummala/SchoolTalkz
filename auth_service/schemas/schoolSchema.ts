import { z } from "zod";

export const createSchoolParams = z.object({
  email: z.string().email(),
  location: z.string(),
  name: z.string(),
  password: z.string(),
  subdomain_requested: z.string(),
  contact_name: z.string(),
  phone: z.string(),
});

export const editSchoolParams = z.object({
  email: z.string().email().optional(),
  location: z.string().optional(),
  name: z.string().optional(),
  subdomain_requested: z.string().optional(),
  contact_name: z.string().optional(),
  phone: z.string().optional(),
});

export const changeSchoolStatusParams = z.object({
  schoolId: z.string(),
  isActive: z.boolean(),
});
