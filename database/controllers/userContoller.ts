import prisma from "../lib/prisma";
import { Request, Response } from "express";
import errorMessage from "../utils/errorMessage";
import { decryptPassword, encryptPassword } from "../utils/hashPassword";
import { exclude } from "../utils/exclude";
import { sendEmail, sendPhoneMessage } from "../utils/sendMessage";
import { generateOTP } from "../utils/generateOTP";

export async function allUsers(_req: Request, res: Response) {
  try {
    const users = await prisma.user.findMany();
    const safeUsers = users.map((user) => {
      return exclude(user, [
        "password",
        "otp",
        "otp_gen_at",
        "email_ver_otp_gen_at",
        "email_verification_otp",
        "phone_verification_otp",
        "phone_ver_otp_gen_at",
      ]);
    });
    res.status(200).send(safeUsers);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function findUserByRole(req: Request, res: Response) {
  const { role, schoolId } = req.body;
  if (role === "student") {
    try {
      const students = await prisma.user.findMany({
        where: {
          user_type: "school_user",
          AND: [
            { school_user: { is_student: true } },
            { school_user: { schoolId: schoolId } },
          ],
        },
        include: {
          school_user: true,
        },
      });
      const safeStudents = students.map((student) => {
        return exclude(student, [
          "password",
          "otp",
          "otp_gen_at",
          "email_ver_otp_gen_at",
          "email_verification_otp",
          "phone_verification_otp",
          "phone_ver_otp_gen_at",
        ]);
      });
      res.status(200).send(safeStudents);
      return;
    } catch (err) {
      res.status(206).send(errorMessage(err));
      return;
    }
  }
  if (role === "school staff") {
    try {
      const schoolStaffs = await prisma.user.findMany({
        where: {
          user_type: "school_user",
          AND: {
            school_user: {
              is_student: false,
              AND: {
                schoolId: schoolId,
              },
            },
          },
        },
        include: {
          school_user: true,
        },
      });
      const safeSchoolStaffs = schoolStaffs.map((schoolStaff) => {
        return exclude(schoolStaff, [
          "password",
          "otp",
          "otp_gen_at",
          "email_ver_otp_gen_at",
          "email_verification_otp",
          "phone_verification_otp",
          "phone_ver_otp_gen_at",
        ]);
      });
      res.status(200).send(safeSchoolStaffs);
      return;
    } catch (err) {
      res.status(206).send(errorMessage(err));
      return;
    }
  }
  if (role === "creator") {
    try {
      const creators = await prisma.user.findMany({
        where: {
          user_type: "creator",
        },
      });
      const safeCreators = creators.map((creator) => {
        return exclude(creator, [
          "password",
          "otp",
          "otp_gen_at",
          "email_ver_otp_gen_at",
          "email_verification_otp",
          "phone_verification_otp",
          "phone_ver_otp_gen_at",
        ]);
      });
      res.status(200).send(safeCreators);
      return;
    } catch (err) {
      res.status(206).send(errorMessage(err));
      return;
    }
  }
  if (role === "school talkz staffs") {
    try {
      const schoolTalkzStaffs = await prisma.user.findMany({
        where: {
          user_type: "schooltalkz_staff",
        },
        include: {
          schooltalkz_staff: {
            select: {
              priviledge: true,
            },
          },
        },
      });
      const safeSchoolTalkzStaffs = schoolTalkzStaffs.map(
        (schoolTalkzStaff) => {
          return exclude(schoolTalkzStaff, [
            "password",
            "otp",
            "otp_gen_at",
            "email_ver_otp_gen_at",
            "email_verification_otp",
            "phone_verification_otp",
            "phone_ver_otp_gen_at",
          ]);
        }
      );
      res.status(200).send(safeSchoolTalkzStaffs);
      return;
    } catch (err) {
      res.status(206).send(errorMessage(err));
      return;
    }
  }
  res.status(206).send(errorMessage("No user with this data"));
}

export async function findUser(req: Request, res: Response) {
  const { userId, email } = req.body;
  if (userId && email) {
    res
      .status(200)
      .send(errorMessage("provide either email or userId not both"));
    return;
  }
  if (userId === undefined && email === undefined) {
    res.status(206).send(errorMessage("please provide userId or email"));
    return;
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: email }, { id: userId }],
      },
    });
    if (!user) {
      res.status(206).send(errorMessage("No user found"));
      return;
    }
    const safeUser = exclude(user, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeUser);
    return;
  } catch (err) {
    res.status(206).send(errorMessage(err));
    return;
  }
}

export async function createSchoolUser(req: Request, res: Response) {
  const {
    firstName,
    lastName,
    dob,
    email,
    gender,
    password,
    phone,
    id_by_school,
    associationId,
    schoolId,
    isStudent,
    profile_pic,
  } = req.body;

  const hashedPassword = encryptPassword(password);
  if (isStudent === undefined) {
    res.status(206).send(errorMessage("Please provide isStudent"));
    return;
  }

  try {
    const associaition = await prisma.association.findFirst({
      where: {
        AND: [{ id: associationId }, { schoolId: schoolId }],
      },
    });
    if (associaition?.is_class !== isStudent) {
      res
        .status(200)
        .send(errorMessage("Cannot associate this user with association"));
      return;
    }
  } catch (err) {
    res.status(206).send(errorMessage(err));
    return;
  }
  try {
    const schoolUser = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        dob: new Date(dob),
        email: email,
        gender: gender,
        password: hashedPassword,
        phone: phone,
        user_type: "school_user",
        user_priviledges: isStudent ? "local" : "global",
        profile_pic: profile_pic,
        school_user: {
          create: {
            id_by_school: id_by_school,
            associationId: associationId,
            schoolId: schoolId,
            is_student: true,
          },
        },
      },
    });
    const safeSchoolUser = exclude(schoolUser, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeSchoolUser);
    return;
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function editSchoolUser(req: Request, res: Response) {
  const {
    userId,
    firstName,
    lastName,
    dob,
    email,
    gender,
    password,
    phone,
    id_by_school,
    associationId,
    isPaid,
    last_paid_at,
    status,
    isStudent,
  } = req.body;

  let hashedPassword = undefined;
  if (password !== undefined) hashedPassword = encryptPassword(password);

  if (associationId !== undefined || isStudent !== undefined) {
    let currentStatus = isStudent;
    let currentAssociation = associationId;
    try {
      const schoolUser = await prisma.school_user.findFirstOrThrow({
        where: {
          userId: userId,
        },
      });
      if (currentStatus === undefined) currentStatus = schoolUser.is_student;
      if (currentAssociation === undefined)
        currentAssociation = schoolUser.associationId;
    } catch (err) {
      res.status(206).send(errorMessage(err));
    }
    try {
      const associaition = await prisma.association.findFirst({
        where: {
          id: currentAssociation,
        },
      });
      console.log(associaition);
      if (!associaition) {
        res.status(206).send(errorMessage("Cannot find association"));
        return;
      }
      if (associaition.is_class !== currentStatus) {
        res
          .status(200)
          .send(errorMessage("Cannot associate this user with association"));
        return;
      }
    } catch (err) {
      res.status(206).send(errorMessage(err));
      return;
    }
  }
  try {
    const schoolUser = await prisma.user.update({
      data: {
        first_name: firstName,
        last_name: lastName,
        dob: dob,
        email: email,
        gender: gender,
        password: hashedPassword,
        phone: phone,
        status: status,
        user_priviledges: isStudent ? "local" : "global",
        school_user: {
          update: {
            id_by_school: id_by_school,
            associationId: associationId,
            isPaid: isPaid,
            last_paid_at: last_paid_at,
            is_student: isStudent,
          },
        },
      },
      where: {
        id: userId,
      },
    });
    const safeSchoolUser = exclude(schoolUser, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeSchoolUser);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function createCreator(req: Request, res: Response) {
  const {
    firstName,
    lastName,
    dob,
    email,
    gender,
    password,
    phone,
    profile_pic,
  } = req.body;

  const hashedPassword = encryptPassword(password);

  try {
    const creator = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        dob: dob,
        email: email,
        gender: gender,
        password: hashedPassword,
        phone: phone,
        user_type: "creator",
        profile_pic: profile_pic,
        creator: {
          create: {
            created_at: new Date(),
          },
        },
      },
    });
    const safeCreator = exclude(creator, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeCreator);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function editCreator(req: Request, res: Response) {
  const {
    userId,
    firstName,
    lastName,
    dob,
    email,
    gender,
    password,
    phone,
    status,
  } = req.body;

  let hashedPassword = undefined;
  if (password !== undefined) hashedPassword = encryptPassword(password);

  try {
    const creator = await prisma.user.update({
      data: {
        first_name: firstName,
        last_name: lastName,
        dob: dob,
        email: email,
        gender: gender,
        password: hashedPassword,
        phone: phone,
        status: status,
      },
      where: {
        id: userId,
      },
    });
    const safeCreator = exclude(creator, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeCreator);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { userId } = req.body;
  console.log(userId);
  try {
    const userToBeDeleted = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (userToBeDeleted === null) {
      res.status(200).send("user not found");
      return;
    }
    if (userToBeDeleted.user_type === "schooltalkz_staff") {
      res.status(200).send("cannot delete school talkz staff");
      return;
    }
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
  try {
    const deletedSchoolUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    res.status(202).send(deletedSchoolUser);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function createSchoolTalkzStaff(req: Request, res: Response) {
  const {
    firstName,
    lastName,
    dob,
    email,
    gender,
    password,
    phone,
    profile_pic,
  } = req.body;

  const hashedPassword = encryptPassword(password);

  try {
    const schoolTalkzStaff = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        dob: new Date(dob),
        email: email,
        gender: gender,
        password: hashedPassword,
        phone: phone,
        user_type: "schooltalkz_staff",
        profile_pic: profile_pic,
        schooltalkz_staff: {
          create: {
            created_at: new Date(),
          },
        },
      },
      include: {
        schooltalkz_staff: {
          select: {
            priviledge: true,
          },
        },
      },
    });
    const safeSchoolTalkzStaff = exclude(schoolTalkzStaff, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeSchoolTalkzStaff);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function editSchoolTalkzStaff(req: Request, res: Response) {
  const {
    userId,
    firstName,
    lastName,
    dob,
    email,
    gender,
    password,
    phone,
    priviledge,
  } = req.body;

  let hashedPassword = undefined;
  if (password !== undefined) hashedPassword = encryptPassword(password);

  try {
    const schoolTalkzStaff = await prisma.user.update({
      data: {
        first_name: firstName,
        last_name: lastName,
        dob: dob,
        email: email,
        gender: gender,
        password: hashedPassword,
        phone: phone,
        schooltalkz_staff: {
          update: {
            priviledge: priviledge,
          },
        },
      },
      where: {
        id: userId,
      },
      include: {
        schooltalkz_staff: {
          select: {
            priviledge,
          },
        },
      },
    });
    const safeSchoolTalkzStaff = exclude(schoolTalkzStaff, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeSchoolTalkzStaff);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function verifyUser(req: Request, res: Response) {
  const { email, password, subdomain } = req.body;

  let isSchool = false;

  let user = null;
  try {
    user = await prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        schooltalkz_staff: {
          select: {
            priviledge: true,
          },
        },
        school_user: {
          select: {
            schoolId: true,
          },
        },
      },
    });
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }

  if (user?.user_type === "school_user") {
    try {
      const school = await prisma.school.findFirst({
        where: {
          subdomain_alloted: subdomain,
        },
      });
      if (school === null) {
        res.status(206).send(errorMessage("Subdomain not alloted"));
        return;
      }
      if (school.id !== user.school_user?.schoolId) {
        res.status(206).send(errorMessage("User not enrolled in school"));
        return;
      }
    } catch (err) {
      res.status(206).send(errorMessage(err));
    }
  }

  let safeUser;
  let userEncryptedPassword;
  if (user) {
    userEncryptedPassword = user.password;
    safeUser = exclude(user, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
  }

  if (user === null) {
    try {
      user = await prisma.school.findFirst({
        where: {
          email: email,
        },
      });
      if (user !== null) {
        isSchool = true;
        userEncryptedPassword = user.password;
        safeUser = exclude(user, ["password"]);
      }
    } catch (err) {
      res.status(206).send(errorMessage(err));
    }
    if (user === null) {
      res.status(206).send(errorMessage("User not found"));
      return;
    }
  }
  if (userEncryptedPassword === undefined) {
    res.status(206).send(errorMessage("Something went wrong from our side"));
    return;
  }
  const decryptedPassword = decryptPassword(userEncryptedPassword);

  if (decryptedPassword !== password) {
    res.status(206).send(errorMessage("password does not matches"));
    return;
  }

  res.status(200).send({
    message: "user can login",
    success: true,
    user: { ...safeUser, isSchool: isSchool },
  });
}

export async function sendOTP(req: Request, res: Response) {
  const { email, phone, subdomain } = req.body;
  if (email !== undefined && phone !== undefined) {
    res
      .status(200)
      .send(errorMessage("Provide either phone or email, not both"));
    return;
  }
  const user = await prisma.user.findFirst({
    where: {
      AND: [
        {
          OR: [{ email: email }, { phone: phone }],
        },
        {
          school_user: {
            school: {
              subdomain_alloted: subdomain,
            },
          },
        },
      ],
    },
  });
  if (user === null) {
    res.status(206).send(errorMessage("No user with this credentials"));
    return;
  }
  try {
    const otp = generateOTP();
    await prisma.user.update({
      where: {
        email: email,
        phone: phone,
      },
      data: {
        otp: otp,
        otp_gen_at: new Date(),
      },
    });
    console.log(otp);
    const message = `Dear ${user.first_name}, your SchoolTalkz OTP is ${user.otp}. Valid for only 5 minutes.`;
    sendEmail(user.email, message);
    sendPhoneMessage(user.phone, message);
    res.status(200).send("OTP sent");
  } catch (e) {
    console.log(e);
    res.status(206).send(errorMessage("Something went wrong, cannot send OTP"));
  }
}

export async function verifyOTP(req: Request, res: Response) {
  const { otp, email, phone, subdomain } = req.body;
  if (email !== undefined && phone !== undefined) {
    res
      .status(200)
      .send(errorMessage("Provide either phone or email, not both"));
    return;
  }
  const user = await prisma.user.findFirst({
    where: {
      AND: [
        { OR: [{ email: email }, { phone: phone }] },
        { otp: otp },
        {
          school_user: {
            school: {
              subdomain_alloted: subdomain,
            },
          },
        },
      ],
    },
  });
  if (user === null) {
    res.status(206).send(errorMessage("wrong otp or email"));
    return;
  }
  const now = new Date();
  if (user.otp_gen_at === null) {
    res.status(206).send(errorMessage("OTP not generated yet"));
    return;
  }
  const expiryDate = new Date(
    user.otp_gen_at.getTime() + Number(process.env.OTP_EXPIRE_MINUTES) * 60000
  );
  const isExpired = now > expiryDate;
  // console.log(isExpired);
  // console.log(user.otp_gen_at.getTime() + Number(process.env.OTP_EXPIRE_MINUTES)*60000)
  // console.log(user.otp_gen_at);
  // console.log(expiryDate);

  if (isExpired === true) {
    res.status(206).send(errorMessage("OTP expired"));
    return;
  }
  const safeUser = exclude(user, [
    "password",
    "otp",
    "otp_gen_at",
    "email_ver_otp_gen_at",
    "email_verification_otp",
    "phone_verification_otp",
    "phone_ver_otp_gen_at",
  ]);
  res.status(200).send({
    message: "user can login",
    success: true,
    user: { ...safeUser, isSchool: false },
  });
}

export async function changeUserStatus(req: Request, res: Response) {
  const { userId, status } = req.body;
  try {
    const user = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        status: status,
      },
    });
    const safeUser = exclude(user, [
      "password",
      "otp",
      "otp_gen_at",
      "email_ver_otp_gen_at",
      "email_verification_otp",
      "phone_verification_otp",
      "phone_ver_otp_gen_at",
    ]);
    res.status(200).send(safeUser);
  } catch (err) {
    console.log(err);
  }
}
