import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import errorMessage from "../utils/errorMessage";

export async function isAuthenticatedUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token = null;
  if (req?.cookies?.token) token = req?.cookies?.token;
  // console.log(req)
  if (!token) {
    res.status(401).send(errorMessage("Please login to access this resource"));
    return;
  }
  try {
    const decodedData = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decodedData;
    next();
  } catch (e) {
    res
      .status(401)
      .send(errorMessage("Your session expired, please login again"));
  }
}

export function authorizeRoles(...roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!roles.includes(req.user.data.schooltalkz_staff?.priviledge)) {
      res
        .status(403)
        .send(errorMessage("You are not allowed to accesss this resource"));
      return;
    }
    next();
  };
}

export function isSchoolAdmin(req: Request, res: Response, next: NextFunction) {
  if (
    req?.user.data?.isSchool === true ||
    (req?.user.data?.schoolUser.isStudent === false &&
      ["rw", "rwd"].includes(req?.user.data?.schoolUser.priviledges))
  ) {
    next();
    return;
  }
  res
    .status(403)
    .send(errorMessage("You are not allowed to accesss this resource"));
  return;
}

export async function isSchool(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.user.data.isSchool === true) {
    next();
  } else {
    res.status(401).send(errorMessage("Please login"));
    return;
  }
}
