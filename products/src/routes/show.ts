import express, { Request, Response } from "express";
import { param } from "express-validator";
import { requireAuth, validateRequest } from "@aliet/common";

import { Product } from "../models/product";

const router = express.Router();

const validators = [param("id").notEmpty().withMessage("id is required param")];

router.get(
  "/api/products/:id",
  requireAuth,
  validators,
  validateRequest,
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.status(200).send(product || {});
  }
);

export { router as showProductRouter };
