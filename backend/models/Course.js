import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    cover: String,
    title: String,
    instructor: String,
    duration: String,
    rating: Number,
    description: String,
    price: Number,
    students: Number,
  },
  { timestamps: true }
);

export const Course =  mongoose.model("course", courseSchema);
