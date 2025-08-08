import React from 'react'
import { useEffect, useState } from "react";
import CourseItem from "./CourseItem";
import SectionHeader from "./SectionHeader";
import axios from "axios";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

 useEffect(() => {
  const fetchCourses = async (req,res) => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses", {
        withCredentials: true,
      });

      console.log("Courses fetched successfully:", res.data);

      // ✅ Fix here
      // const data = Array.isArray(res.data) ? res.data : res.data.data;
      setCourses(res.data.courses );

    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  fetchCourses();
}, []);


  return (
    <div className="wrapper py-10 mt-20">
      <SectionHeader
        span="Courses"
        h2="Discover Diverse Courses for Growth"
        p="Online learning is revolutionizing education, opening doors to new opportunities and advancements."
      />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 gap-10">
        {/* <p>{console.log(courses)}</p> */}
       {Array.isArray(courses) && courses.map((course) => (
  <CourseItem key={course._id} course={course} />
))}
      </div>
    </div>
  );
};

export default CoursesPage;
