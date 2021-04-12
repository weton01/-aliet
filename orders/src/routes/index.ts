import express, { Request, Response } from "express";
import { requireAuth, adminAuth } from "@aliet/common";

const router = express.Router();

router.get(
  "/api/products",
  requireAuth,
  adminAuth,
  async (req: Request, res: Response) => {
 
  }
);

export { router as indexProductRouter };
