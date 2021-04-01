import express, { Request, Response } from "express";
import { param, body } from "express-validator";
import { UserTypes } from "@aliet/types";
import {
  requireAuth,
  validateRequest,
  NotFoundError,
  adminAuth,
} from "@aliet/common";

import { Product } from "../models/product";

const router = express.Router();

const validators = [
  param("id").notEmpty().withMessage("id is required param"),
  body("images").isArray().notEmpty(),
  body("active").isBoolean().notEmpty(),
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
