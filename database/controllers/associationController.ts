import prisma from "../lib/prisma";
import { Request, Response } from "express";
import errorMessage from "../utils/errorMessage";

export async function allAssociations(req: Request, res: Response) {
  try {
    const associations = await prisma.association.findMany();
    res.status(200).send(associations);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function createAssociation(req: Request, res: Response) {
  const { schoolId, name, isClass, sub_association, mapped_to } = req.body;
  try {
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
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
  try {
    const association = await prisma.association.findFirst({
      where: {
        AND: [
          { schoolId: schoolId },
          { name: name },
          { is_class: isClass },
          { sub_association: sub_association },
        ],
      },
    });
    if (association !== null) {
      res.status(200).send({
        message: "Association already exists",
      });
      return;
    }
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
  try {
    const createdAssociation = await prisma.association.create({
      data: {
        is_class: isClass,
        name: name,
        mapped_to: mapped_to,
        sub_association: sub_association,
        school: {
          connect: {
            id: schoolId,
          },
        },
      },
    });

    res.status(201).send(createdAssociation);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function findAssociation(req: Request, res: Response) {
  const { associationId, schoolId, isClass, name, sub_association, mapped_to } =
    req.body;
  try {
    const associations = await prisma.association.findMany({
      where: {
        name: name,
        id: associationId,
        is_class: isClass,
        schoolId: schoolId,
        sub_association: sub_association,
        mapped_to: mapped_to,
      },
      include: {
        _count: true
      }
    });
    res.status(200).send(associations);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function editAssociation(req: Request, res: Response) {
  const { associationId, name, mapped_to, sub_association } = req.body;
  let isClass = false;
  try {
    const oldAssociation = await prisma.association.findFirst({
      where: {
        id: associationId,
      },
    });
    if (oldAssociation === null) {
      res.status(206).send(errorMessage("no association with this id"));
      return;
    }
    isClass = oldAssociation.is_class;
  } catch (err) {
    res.status(206).send(errorMessage(err));
    return;
  }
  try {
    const association = await prisma.association.update({
      data: {
        name: name,
        mapped_to: isClass ? mapped_to : null,
        sub_association: sub_association,
      },
      where: {
        id: associationId,
      },
    });
    res.status(200).send(association);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function deleteAssociation(req: Request, res: Response) {
  const { associationId, schoolId } = req.body;
  try {
    const associationToBeDeleted = await prisma.association.findFirst({
      where: {
        schoolId: schoolId,
      },
    });
    if (associationToBeDeleted === null) {
      res.status(206).send(errorMessage("Please login"));
      return;
    }
  } catch (err) {
    res.status(206).send(errorMessage(err));
    return;
  }
  try {
    const deletedAssociation = await prisma.association.delete({
      where: {
        id: associationId,
      },
    });
    res.status(200).send(deletedAssociation);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}
