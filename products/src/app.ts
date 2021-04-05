import express from "express";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import "express-async-errors";

import { errorHandler, currentUser } from "@aliet/common";

import { indexProductRouter } from "./routes/index";
import { newProductRouter } from "./routes/new";
import { showProductRouter } from "./routes/show";
import { updateProductRouter } from "./routes/update";

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

app.use(indexProductRouter);
app.use(newProductRouter);
app.use(showProductRouter);
app.use(updateProductRouter);

app.all("*", async (req, res) => {
  return res.status(404).send({ msg: "products route not found" });
});

app.use(errorHandler);

export { app };
