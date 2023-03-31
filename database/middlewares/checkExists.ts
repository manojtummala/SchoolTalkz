import prisma from "../lib/prisma";
import { Request, Response, NextFunction } from "express";

export async function checkSchoolExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { schoolId } = req.body;
  const school = await prisma.school.findFirst({
    where: {
      id: schoolId,
    },
  });
  if (school === null) {
    res.status(200).send({
      message: "No school with this id",
    });
    return;
  }
  next();
}

export async function checkAssociationExists(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { associationId } = req.body;
  const association = await prisma.association.findFirst({
    where: {
      id: associationId,
    },
  });
  if (association === null) {
    res.status(200).send({
      message: "No association with this id",
    });
    return;
  }
  next();
}
