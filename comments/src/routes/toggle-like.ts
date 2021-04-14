import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { param } from "express-validator";
import {
  adminAuth,
  requireAuth,
  NotFoundError,
  BadRequestError,
  validateRequest,
} from "@aliet/common";

import { Comment } from "../models/comment";

const router = express.Router();
const objectId = mongoose.Types.ObjectId;

const validators = [
  param("id")
    .notEmpty()
    .custom((value) => objectId.isValid(value))
    .withMessage("id is required param"),
];

router.put(
  "/api/comments/toggle-like/:id",
  requireAuth,
  adminAuth,
  validators,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const user_id = req.currentUser!.id;

    const comment = await Comment.findById(id);

    if (!comment) {
      throw new NotFoundError();
    }

    if (comment.like.find((i) => i === user_id)) {
      const likes = comment.like.filter((i) => i !== user_id);

      comment.set({
        ...comment,
        like: likes,
      });
    } else {
      const likes = comment.like;

      likes.push(user_id);

      comment.set({
        ...comment,
        like: likes,
      });
    }

    comment.save();
    res.status(201).send(comment);
  }
);

export { router as toggleLikeCommentRouter };
