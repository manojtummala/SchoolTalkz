import { z } from "zod";

export const escalatePriviledgeParams = z.object({
  userId: z.string(),
  priviledge: z.enum(["r", "rw", "rwd"]),
});

export const loginParams = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const sendOTPParams = z
  .object({
    email: z.string().email().optional(),
    phone: z.string().length(14).optional(),
    subdomain: z.string()
  })

export const verifyOTPParams = z
  .object({
    email: z.string().email().optional(),
    phone: z.string().max(14).optional(),
    otp: z.string().length(6),
  })

export const findUserByRoleParams = z.object({
  role: z.enum(["student", "school staff", "creator", "school talkz staffs"]),
  schoolId: z.string().optional(),
});

export const findUserParams = z
  .object({
    userId: z.string(),
    email: z.string().email(),
  })
  .partial()
  .refine(
    (data) => data.userId || data.email,
    "Provide either userId or Email"
  );

export const deleteUserParams = z.object({
  userId: z.string(),
});
export const createSchoolTalkzStaffsParams = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string().datetime(),
  email: z.string().email(),
  gender: z.enum(["male", "female", "other"]),
  password: z.string().max(8),
  phone: z.string().max(16),
  profile_pic: z.string().optional()
});

export const createOneSchoolUserParams = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string().datetime(),
  email: z.string().email(),
  gender: z.enum(["male", "female", "other"]),
  password: z.string().min(8),
  phone: z.string().max(16),
  id_by_school: z.string(),
  associationId: z.string(),
  schoolId: z.string(),
  profile_pic: z.string().optional()
});

export const createCreatorParams = z.object({
  firstName: z.string(),
  lastName: z.string(),
  dob: z.string().datetime(),
  email: z.string().email(),
  gender: z.enum(["male", "female", "other"]),
  password: z.string().min(8),
  phone: z.string().max(16),
  profile_pic: z.string().optional()
});
export const editSchoolTalkzStaffsParams = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dob: z.string().datetime().optional(),
  email: z.string().email().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  phone: z.string().max(16).optional(),
});

export const editSchoolUserParams = z.object({
  userId: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dob: z.string().datetime().optional(),
  email: z.string().email().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  phone: z.string().max(16).optional(),
  id_by_school: z.string().optional(),
  associationId: z.string().optional(),
  isStudent: z.boolean().optional(),
});

export const escalateStaffPriviledges = z.object({
  userId: z.string(),
  privilege: z.enum(["r", "rw", "rwd"]),
});

export const editMeParams = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dob: z.string().datetime().optional(),
  email: z.string().email().optional(),
  gender: z.enum(["male", "female", "other"]).optional(),
  phone: z.string().max(16).optional(),
  userId: z.string(),
});

export const changePasswordParams = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
  confirmPassword: z.string(),
});
