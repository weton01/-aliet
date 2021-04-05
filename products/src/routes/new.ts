import express, { Request, Response } from "express";
import { body } from "express-validator";
import { requireAuth, validateRequest, adminAuth } from "@aliet/common";
import { ProductsTypes } from "@aliet/types";

import { Product } from "../models/product";

const router = express.Router();
const productTypes : string[] = Object["values"](ProductsTypes)

const validators = [
  body("name").not().isEmpty().withMessage("name is required"),
  body("value").isFloat({ gt: 0 }).withMessage("value must be greater than 0"),
  body("images").isArray().notEmpty(),
  body("quantity")
    .isFloat({ gt: 0 })
    .withMessage("quantity must be greater than 0"),
  body("type")
    .isString().isIn(productTypes),
];

router.post(
  "/api/products",
  requireAuth,
  adminAuth,
  validators,
  validateRequest,
  async (req: Request, res: Response) => {
    const { name, value, quantity, type, images } = req.body;

    const product = Product.build({
      name,
      value,
      quantity,
      type,
      active: true,
      images: images,
    });

    await product.save();

    res.status(201).send(product);
  }
);

export { router as newProductRouter };
