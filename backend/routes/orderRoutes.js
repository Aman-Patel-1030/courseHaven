import express from "express";
import { getAllOrders, getOrder, createOrder } from "../controllers/orderController.js";
import { Order } from "../models/Order.js";
import { purchase } from "../models/purchase.js";

const router = express.Router();

// GET /api/orders
// router.get("/", async (req, res) => {
//   try {
//     const orders = await getAllOrders();
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: "Error fetching orders" });
//   }
// });

// GET /api/orders/:id
router.get("/:id", async (req, res) => {
  try {
    const order = await getOrder(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Error fetching order" });
  }
});

// POST /api/orders
router.post("/", async (req, res) => {
  const order = req.body;
  
  console.log("Received order data:", order); // Debugging log

  try {
    const orderInfo = await Order.create(order);
    console.log("Order created successfully:", orderInfo);

    const userId = orderInfo?.userId;
    const courseId = orderInfo?.courseId;

    if (!courseId) {
      console.log("Missing userId or courseId in orderInfo");
      return res.status(400).json({ error: "Invalid order data" });
    }

    await purchase.create({ userId, courseId });
    console.log("Purchase record created successfully.");

    res.status(201).json({ message: "Order created", orderInfo });

  } catch (error) {
    console.log("Error in order creation:", error);
    res.status(500).json({ errors: "Error in order creation" });
  }

});

export default router;
