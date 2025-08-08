import {Course} from "../models/Course.js";
import dotenv from "dotenv"
import { purchase } from "../models/purchase.js";

dotenv.config()
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
     res.status(201).json({ courses });
  } catch (err) {
    
    res.status(500).json({ error: "Failed to fetch courses" });
  }
};



export const createCourse = async (data) => {
  const course = new Course(data);
  await course.save();
  return course;
};

export const getCourse = async (id) => {
  const course = await Course.findById(id);
  return course;
};

import Stripe from "stripe"
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log(process.env.STRIPE_SECRET_KEY)


export const buyCourses = async (req, res) => {
  const { userId } = req;
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ errors: "Course not found" });
    }
    const existingPurchase = await purchase.findOne({ userId, courseId });
    if (existingPurchase) {
      return res
        .status(400)
        .json({ errors: "User has already purchased this course" });
    }

    // stripe payment code goes here!!
    const amount = course.price *100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });

    console.log(paymentIntent.client_secret);
    res.status(201).json({
      message: "Course purchased successfully",
      course,
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    res.status(500).json({ errors: "Error in course buying" });
    console.log("error in course buying ", error);
  }
};