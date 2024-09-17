import {NextFunction, Request, Response} from "express";

export async function middlewareCheckOrigin(req: Request, res: Response, next: NextFunction) {
  if (req.headers.host === "localhost:8010") {
    next();
    return;
  }
  return res.status(403).send("you are not allowed access");
}
