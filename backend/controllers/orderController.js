import {Order} from "../models/Order.js";

// GET ALL ORDERS
export const getAllOrders = async () => {
  const orders = await Order.find({}).populate("userId", "email");
  return orders;
};

// GET A SINGLE ORDER
export const getOrder = async (id) => {
  const order = await Order.findById(id).populate("userId", "email");
  return order;
};

// CREATE A NEW ORDER
export const createOrder = async (orderData) => {
  const order = new Order(orderData);
  await order.save();
  return order;
};
