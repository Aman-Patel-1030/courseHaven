import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { currencyConverter } from "../utils/currencyConverter";

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/courses/${courseId}`);
        setCourse(res.data);
      } catch (err) {
        console.error("Failed to load course:", err);
      }
    };

    fetchCourse();
  }, [courseId]);

  const handleEnroll = () => {
    const isAuthenticated = localStorage.getItem("userToken"); // or use context
    if (isAuthenticated) {
      navigate(`/checkout/${courseId}`);
    } else {
      // navigate(`/login?destination=/checkout/${courseId}`);
         navigate(`/checkout/${courseId}`);
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="wrapper my-20  min-h-screen">
      <div
        style={{ backgroundImage: `url(${course.cover})` }}
        className="w-full h-[32rem] bg-no-repeat bg-cover bg-center"
      />

      <div className="mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">{course.title}</h2>
          <p><span className="font-semibold">Instructor:</span> {course.instructor}</p>
          <p><span className="font-semibold">Course Description:</span> {course.description}</p>
          <p><span className="font-semibold">Enrolled Students:</span> {course.students}</p>
        </div>

        <div className="space-y-2">
          <p><span className="font-semibold">Course Duration:</span> {course.duration}</p>
          <p><span className="font-semibold">Rating:</span> {course.rating}</p>
          <p className="text-3xl font-semibold">
            Price: {currencyConverter(course.price)}
          </p>
          <button
           to={`/checkout/${course._id}`}
            onClick={handleEnroll}
            className="bg-primary-900 text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
