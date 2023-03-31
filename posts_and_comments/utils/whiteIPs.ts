import { Request, Response, NextFunction } from "express";

export function checkIP(req: Request, res: Response, next: NextFunction) {
  if (process.env.__PROD__ === "false") {
    next();
    return;
  }
  const whiteIPs = process.env.WHITE_IPS!.split(",");
  if (whiteIPs.includes(String(req.socket.remoteAddress))) {
    next();
    return;
  }
  res.status(404);
}
