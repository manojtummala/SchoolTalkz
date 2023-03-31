import prisma from "../lib/prisma";
import { Request, Response } from "express";
import errorMessage from "../utils/errorMessage";
import { encryptPassword } from "../utils/hashPassword";
import { exclude } from "../utils/exclude";
export async function allSchools(_: Request, res: Response) {
  try {
    const schools = await prisma.school.findMany();
    const safeSchools = schools.map((school) => {
      return exclude(school, ["password"]);
    });
    res.status(200).send(safeSchools);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function createSchool(req: Request, res: Response) {
  const {
    email,
    location,
    name,
    password,
    subdomain_requested,
    contact_name,
    phone,
  } = req.body;

  const hashedPassword = encryptPassword(password);

  try {
    const schoolCreated = await prisma.school.create({
      data: {
        email: email,
        location: location,
        name: name,
        password: hashedPassword,
        subdomain_alloted: subdomain_requested,
        isActive: false,
        contact_name: contact_name,
        phone: phone,
      },
    });
    const safeSchool = exclude(schoolCreated, ["password"]);
    res.status(201).send(safeSchool);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function findSchools(req: Request, res: Response) {
  const { id, email, location, name, subdomain_alloted, isActive } = req.body;
  try {
    const schools = await prisma.school.findMany({
      where: {
        email: email,
        name: name,
        id: id,
        location: location,
        isActive: isActive,
        subdomain_alloted: subdomain_alloted,
      },
    });
    const safeSchools = schools.map((school) => {
      return exclude(school, ["password"]);
    });
    res.status(200).send(safeSchools);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}

export async function findSchool(req: Request, res: Response) {
  const { schoolId, email } = req.body;
  if (schoolId && email) {
    res
      .status(200)
      .send(errorMessage("provide either email or schoolId not both"));
    return;
  }
  if (schoolId === undefined && email === undefined) {
    res.status(206).send(errorMessage("please provide schoolId or email"));
    return;
  }
  try {
    const school = await prisma.school.findFirst({
      where: {
        OR: [{ email: email }, { id: schoolId }],
      },
    });
    if (!school) {
      res.status(206).send(errorMessage("No school found"));
      return;
    }
    const safeSchool = exclude(school, ["password"]);
    res.status(200).send(safeSchool);
    return;
  } catch (err) {
    res.status(206).send(errorMessage(err));
    return;
  }
}

export async function editSchool(req: Request, res: Response) {
  const {
    schoolId,
    email,
    location,
    name,
    password,
    subdomain_alloted,
    isActive,
  } = req.body;

  let hashedPassword = undefined;
  if (password !== undefined) hashedPassword = encryptPassword(password);

  try {
    const school = await prisma.school.update({
      data: {
        email: email,
        location: location,
        name: name,
        subdomain_alloted: subdomain_alloted,
        isActive: isActive,
        password: hashedPassword,
      },
      where: {
        id: schoolId,
      },
    });
    const safeSchool = exclude(school, ["password"]);
    res.status(201).send(safeSchool);
  } catch (err) {
    res.status(206).send(errorMessage(err));
  }
}
