import express from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import "express-async-errors";
import { errorHandler, currentUser } from "@aliet/common";

import { deleteCommentRouter } from './routes/delete';
import { toggleLikeCommentRouter } from './routes/toggle-like';
import { indexCommentRouter } from './routes/index';
import { newCommentRouter } from './routes/new';

const app = express();

app.set("trust proxy", true);
app.use(json());

app.use(
  cookieSession({
    name: "auth-cookie",
    signed: false,
    secure: false,
  })
);

app.use(currentUser);
app.use(deleteCommentRouter);
app.use(indexCommentRouter);
app.use(toggleLikeCommentRouter);
app.use(newCommentRouter);

app.all("*", async (req, res) => {
  return res.status(404).send({ msg: "comments route not found" });
});

app.use(errorHandler);

export { app };
