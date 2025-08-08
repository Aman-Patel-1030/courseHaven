import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from './components/Home'
import Login from './components/Login'
import CourseDetail from './components/CourseDetail'
import CoursesPage from './components/CoursesPage'
import Navbar from './components/Navbar';
import Buy from './components/Buy';
import { Order } from './components/Order';
import SlidingAuth from './components/Login';
import AboutPage from './components/About';
import Faq from './components/Faq';
import Testimonials from './components/Testimonials';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
 
      <Navbar  /> 
       <div>
     <Routes>
      <Route path="/" element={<Home />} />

       <Route path="/courses" element={<CoursesPage />} />
       <Route path="/about" element={<AboutPage/> } />
      
      {/* <Route path="/" element={<CoursesPage />} /> */}
      <Route path="/courses/:courseId" element={<CourseDetail />} />
      <Route path="/checkout/:courseId" element={<Buy />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="//:courseId" element={<CourseDetail />} />
      <Route path="/users/login" element={<SlidingAuth/>} />
     </Routes>

    </div>
  
   
  )
}

export default App
