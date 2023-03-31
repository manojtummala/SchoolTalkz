import prisma from "../lib/prisma";
import { Request, Response, NextFunction } from "express";

export async function checkDuplicateSchool(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, subdomain_requested } = req.body;
  const school = await prisma.school.findFirst({
    where: {
      email: email,
      OR: {
        subdomain_alloted: subdomain_requested,
      },
    },
  });

  if (school !== null) {
    res.status(200).send({
      message: "School already exists",
    });
    return;
  }
  next();
}
export async function checkDuplicateAssociaitons(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { schoolId, name, isClass } = req.body;
  const association = await prisma.association.findFirst({
    where: {
      schoolId: schoolId,
      AND: {
        name: name,
        AND: {
          is_class: isClass,
        },
      },
    },
  });

  if (association !== null) {
    res.status(200).send({
      message: "Association already exists",
    });
    return;
  }
  next();
}

export async function checkDuplicateEmail(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email } = req.body;
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });
  const school = await prisma.school.findFirst({
    where: {
      email: email,
    },
  });
  if (user !== null || school !== null) {
    res.status(200).send({
      message: "Email already exists",
    });
    return;
  }
  next();
}

export async function checkDuplicateStudent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id_by_school, associationId, schoolId } = req.body;
  const student = await prisma.school_user.findFirst({
    where: {
      id_by_school: id_by_school,
      AND: {
        associationId: associationId,
        AND: {
          schoolId: schoolId,
        },
      },
    },
  });
  if (student !== null) {
    res.status(200).send({
      message: "Student already exists",
    });
    return;
  }
  next();
}
