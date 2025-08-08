import express from "express";
import { getAllCourses, getCourse,createCourse,buyCourses } from "../controllers/courseController.js";

import {Course} from "../models/Course.js";

const router = express.Router();

// GET /api/courses
router.get("/", getAllCourses);
  // try {
  //   const courses = await getAllCourses();
  //   res.json(courses);
  // } catch (err) {
  //   res.status(500).json({ error: "Error fetching courses" });
  // }


  router.post("/", async (req, res) => {
    const course = new Course(data);
    await course.save();
    return course;
  });

// GET /api/courses/:id
router.get("/:id", async (req, res) => {
  try {
    const course = await getCourse(req.params.id);
    if (!course) return res.status(404).json({ error: "Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: "Error fetching course" });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     const course = await createCourse(req.body);
//     res.status(201).json(course);
//   } catch (err) {
//     res.status(400).json({ error: "Failed to create course" });
//   }
// });

router.post("/checkout/:courseId", buyCourses);

export default router;
