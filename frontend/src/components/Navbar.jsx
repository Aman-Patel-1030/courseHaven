import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const userData = JSON.parse(storedUser);

  const handleLogout = async () => {
    try {
      toast.success("Logout Success");
      localStorage.removeItem("user");
      navigate("/users/login");
    } catch (error) {
      toast.error(error.response?.data?.errors || "Error in logging out");
    }
  };

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[99] bg-primary-900 text-gray-300 h-20 flex items-center">
      <div className="wrapper w-full px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo" data-aos="fade-right" data-aos-duration="1000">
          <Link
            to="/"
            className="text-4xl font-semibold font-[Poppins] tracking-tight leading-none group"
          >
   <h1 className="bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent group-hover:opacity-90 transition">
  Course<span className="text-white font-medium">Haven</span>
</h1>




          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div
            className="flex gap-5 justify-between"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
            {userData?.user?.firstName && (
              <Link to="/orders" className="hover:text-white transition-colors">Orders</Link>
            )}
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
            <Link to="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>

        {/* Desktop Auth Section */}
        <div
          className="hidden md:flex items-center gap-4"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {userData ? (
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">{userData.user.firstName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-700 text-white px-4 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/users/login"
                className="border border-white text-white rounded px-4 py-1 hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border border-white text-white rounded px-4 py-1 hover:bg-white hover:text-black transition"
              >
                Signup
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={handleToggle}
            className="text-xl text-white focus:outline-none z-[99]"
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
