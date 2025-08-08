import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import axios from "axios";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import toast from "react-hot-toast";
 
import Hero from "./Hero";
import CoursesPage from "./CoursesPage";
import Footer from "./Footer";
import AboutPage from "./About";
import Faq from "./Faq";
import Testimonials from "./Testimonials";
import ContactPage from "./ContactPage";
// import { BACKEND_URL } from "../utils/utils";

function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const response = await axios.get(`${BACKEND_URL}/course/courses`, {
  //         withCredentials: true,
  //       });
  //       setCourses(response.data.courses);
  //     } catch (error) {
  //       console.log("Error in fetchCourses ", error);
  //     }
  //   };
  //   fetchCourses();
  // }, []);

 

  
  
  // export default function FAQSection() {
  //   const [openIndex, setOpenIndex] = useState(null);
  //   const [showAll, setShowAll] = useState(false);
  


  

  // const toggleFaq = () => {
  //   setIsFaqOpen((prev) => !prev); // Toggle the state
  // };

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className="frame relative bg-red text-white  h-screen  mt-20 overflow-x-hidden">

    {/* Hero section */}
    <Hero/>
    <CoursesPage/>

     <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-10">
           {Array.isArray(courses) && courses.map((course) => (
      <CourseItem key={course._id} course={course} />
    ))}
          </div>
      <AboutPage/>
      <Faq/>
      <Testimonials/>
      <ContactPage/>

      <Footer/>

      </div>
    
  );
}

export default Home;