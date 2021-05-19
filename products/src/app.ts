import express, {Request, Response, NextFunction} from "express";
import { json } from "body-parser";
import cors from 'cors';
import cookieSession from "cookie-session";
import "express-async-errors";

import { errorHandler, currentUser } from "@aliet/common";

import { indexProductRouter } from "./routes/index";
import { newProductRouter } from "./routes/new";
import { showProductRouter } from "./routes/show";
import { updateProductRouter } from "./routes/update";

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

app.use(currentUser);

app.use((req: Request, res: Response, next: NextFunction) =>  {
  next();
})

app.use(indexProductRouter);
app.use(newProductRouter);
app.use(showProductRouter);
app.use(updateProductRouter);

app.all("*", async (req, res) => {
  return res.status(404).send({ msg: "products route not found" });
});

app.use(errorHandler);

export { app };
