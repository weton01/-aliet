import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";

import { BadRequestError, validateRequest } from "@aliet/common";
import { UserTypes } from '@aliet/types';

import { User } from "../models/user";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("E-mail must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
    body("name").trim().isString().notEmpty(),
    body("last_name").trim().isString().notEmpty(),
    body("cpf")
      .trim()
      .isLength({ min: 11, max: 11 })
      .withMessage("Password must be 11 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, name, last_name, cpf } = req.body;
    const type = UserTypes.User;
    const active = true;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError("Email in use");
    }

    const user = User.build({
      email,
      password,
      name,
      last_name,
      cpf,
      type,
      active,
    });
    await user.save();

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
        type
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
