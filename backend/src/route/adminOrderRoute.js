import express from "express";
import { getAllOrders, updateOrderStatus } from "../controller/adminOrderController.js";
import { authenticateToken } from "../middleware/token-middleware.js";

const router = express.Router();

router.use(authenticateToken);

// Get all orders for admin
router.get("/", getAllOrders);

// Update order status for admin
router.put("/:orderId/status", updateOrderStatus);

export default router;
