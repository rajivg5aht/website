import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import { userRouter } from "./route/index.js";
import { authRouter } from "./route/index.js";
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";
import router from "./route/uploadRoutes.js";
import { createUploadsFolder } from "./security/helper.js";
import cors from 'cors';

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());
app.use(authenticateToken);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/file", router);
createUploadsFolder();
app.listen(3000, function () {
  console.log("project running in port ");
  db();
});
