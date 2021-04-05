import express, { Request, Response } from "express";
import { requireAuth, adminAuth } from "@aliet/common";

import { Product } from "../models/product";

const router = express.Router();

router.get(
  "/api/products",
  requireAuth,
  adminAuth,
  async (req: Request, res: Response) => {
    
    const products = await Product.find({});

    res.send(products || []);
  }
);

export { router as indexProductRouter };
