import express, { Request, Response } from "express";
import { adminAuth, requireAuth } from "@aliet/common";

import { Comment } from "../models/comment";

const router = express.Router();

router.get(
  "/api/comments",
  requireAuth,
  adminAuth,
  async (req: Request, res: Response) => {

    const comments =  await Comment.find({}).populate('user')

    res.status(201).send(comments);
  }
);

export { router as indexCommentRouter };
