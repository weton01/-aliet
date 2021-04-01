import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { UserTypes } from "@aliet/types";

export const adminAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.currentUser?.type !== UserTypes.Admin) {
    throw new NotAuthorizedError();
  }

  next();
};
