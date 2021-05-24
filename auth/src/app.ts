import express from "express";
import cors from 'cors';
import cookieSession from "cookie-session";
import "express-async-errors";

import { signupRouter } from "./routes/signup";
import { signupAdminRouter } from "./routes/signup-admin";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { currentUserRouter } from "./routes/current-user";

import { errorHandler } from "@aliet/common";

const app = express();

app.use(express.json());

app.set("trust proxy", true);

app.use(
  cookieSession({
    name: "auth",
    signed: false,
    secure: true
  })
);

app.use(
  cors({
    origin: ["https://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    credentials: true,
  })
);

app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(currentUserRouter);
app.use(signupAdminRouter);

app.all("*", async (req, res) => {
  return res.status(404).send({ msg: "users route not found!" });
});

app.use(errorHandler);

export { app };
