import { currencyConverter } from "../utils/currencyConverter.js";
import React from "react";
import { motion } from "framer-motion";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";
import { getTransition, shutterUp } from "../utils/motion.js";

const CourseItem = ({ course }) => {
  return (
    <motion.div
      variants={shutterUp()}
      initial="from"
      whileInView="to"
      transition={getTransition()}
      className="w-full lg:w-[30rem] lg:gap-8 xl:gap-5 xl:w-[25rem] shadow-md rounded-md overflow-hidden"
    >
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <img
          src={course.cover}
          alt={course.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-3xl font-medium text-black">{course.title}</h3>

        <p className="flex justify-between text-gray-500">
          <span>
            by{" "}
            <span className="text-black font-semibold">
              {course.instructor}
            </span>
          </span>
          <span>
            Duration:{" "}
            <span className="text-black font-semibold">{course.duration}</span>
          </span>
        </p>

        <p className="flex justify-between text-gray-500">
          <span>
            Enrolled students:{" "}
            <span className="text-black font-semibold">{course.students}</span>
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineStar className="text-black" />
            <span className="text-black font-semibold">{course.rating}</span>
          </span>
        </p>

        <p className="text-gray-500">
          {course.description.substring(0, 1000)}...
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-black">
            {currencyConverter(course.price, "en-US", "EUR")}
          </p>

          <Button
            to={`/courses/${course._id}`} // Use `to` for internal routing
            placeholder="View Details"
            color="primary"
            size="default"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
