import express from "express";
import bodyParser from "body-parser";
import { db } from "./database/index.js";
import { userRouter } from "./route/index.js";
import { authRouter } from "./route/index.js";
import { productRouter } from "./route/product/productRoute.js";
import dotenv from "dotenv";
import { authenticateToken } from "./middleware/token-middleware.js";
import router from "./route/uploadRoutes.js";
import { createUploadsFolder } from "./security/helper.js";
import cors from 'cors';
import path from 'path';
import { User } from "./models/user/User.js";
import { Product } from "./models/product/product.js";
import { Op } from "sequelize";

dotenv.config();

const app = express();

const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(cors());
app.use(authenticateToken);
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productRouter);
app.use("/api/file", router);
createUploadsFolder();

// Serve uploads statically
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// Create an admin user if none exists and delete dummy data
async function ensureAdminUserAndClean() {
  // Delete all products
  await Product.destroy({ where: {} });
  // Delete all users except admin
  await User.destroy({ where: { role: { [Op.ne]: 'admin' } } });

  // Ensure admin user exists
  const admin = await User.findOne({ where: { role: 'admin' } });
  if (!admin) {
    await User.create({
      name: 'Admin',
      email: 'admin@gmail.com',
      password: 'admin123',
      role: 'admin',
    });
    console.log('Default admin user created: admin@gmail.com / admin123');
  }
}

app.listen(3000, function () {
  console.log("project running in port ");
  db();
  ensureAdminUserAndClean();
});
