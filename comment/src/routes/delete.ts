import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { param } from "express-validator";
import { adminAuth, requireAuth } from "@aliet/common";

import { Comment } from "../models/comment";
const objectId = mongoose.Types.ObjectId;

const router = express.Router();

const validators = [
  param("id")
    .notEmpty()
    .custom((value) => objectId.isValid(value))
    .withMessage("id is required param"),
];

router.delete(
  "/api/comments/:id",
  requireAuth,
  adminAuth,
  validators,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    await Comment.findByIdAndDelete(id);

    res.status(200).send({});
  }
);

export { router as deleteCommentRouter };
