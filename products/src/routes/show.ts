import express, { Request, Response } from "express";
import { param } from "express-validator";
import { requireAuth, validateRequest, NotFoundError } from "@aliet/common";
import mongoose from "mongoose";

import { Product } from "../models/product";

const router = express.Router();
const objectId = mongoose.Types.ObjectId;

const validators = [
  param("id")
    .notEmpty()
    .custom((value) => objectId.isValid(value))
    .withMessage("id is required param"),
];

router.get(
  "/api/products/:id",
  requireAuth,
  validators,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) throw new NotFoundError();

    res.status(200).send(product);
  }
);

export { router as showProductRouter };
