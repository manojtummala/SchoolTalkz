import jwt from "jsonwebtoken";
import { Response } from "express";

export function sendLoginToken(user:any, statusCode: number, res: Response) {
  const token = jwt.sign(
    {
      data: user,
    },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRE }
  );
  const options = {
    expire: new Date(
      Number(Date.now) + Number(process.env.COOKIE_EXPIRE!) * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  res.status(statusCode).cookie("token", token, options).json({
    success : true,
    user,
    token
})
}