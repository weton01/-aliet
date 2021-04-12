import express, { Request, Response } from "express";
import { param, body } from "express-validator";
import mongoose from "mongoose";
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  adminAuth,
} from "@aliet/common";

import { Product } from "../models/product";

const router = express.Router();
const objectId = mongoose.Types.ObjectId;

const validators = [
  param("id").notEmpty()
  .custom((value) => objectId.isValid(value))
  .withMessage("id is required param"),
  body("images").isArray().notEmpty().withMessage("images are required"),
  body("active").isBoolean().notEmpty().withMessage("active is required param"),
  body("value").isFloat({ gt: 0 }).withMessage("value must be greater than 0"),
  body("quantity")
    .isFloat({ gt: 0 })
    .withMessage("quantity must be greater than 0"),
];

router.put(
  "/api/products/:id",
  requireAuth,
  adminAuth,
  validators,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { value, images, quantity, active } = req.body;

    const product = await Product.findById(id);

    if (!product) {
      throw new NotFoundError();
    }

    product.set({ value, images, quantity, active });

    await product.save();

    res.status(200).send(product);
  }
);

export { router as updateProductRouter };
