import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest } from "@aliet/common";

import { Comment } from "../models/comment";

const router = express.Router();

const validators = [
  body("description")
    .isString()
    .notEmpty()
    .withMessage("description is required"),
];

router.post(
  "/api/comments",
  requireAuth,
  validators,
  validateRequest,
  async (req: Request, res: Response) => {
    const { description } = req.body;
    const user_id  = req.currentUser!.id;

    const comment = Comment.build({
      like: [],
      description: description,
      user_id: user_id,
      created_at: new Date(),
      answears: [],
    });

    await comment.save();

    res.status(201).send(comment);
  }
);

export { router as newCommentRouter };
