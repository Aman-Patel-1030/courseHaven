import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { BACKEND_URL } from "../utils/utils"; // Make sure this file exports your API base URL

export default function SlidingAuth() {
  const [isLogin, setIsLogin] = useState(true);

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Signup form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/users/login`,
        { email, password },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      toast.success(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response?.data?.errors || "Login failed!!!");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/users/signup`,
        { firstName, lastName, email: signupEmail, password: signupPassword },
        { withCredentials: true, headers: { "Content-Type": "application/json" } }
      );

      toast.success(response.data.message);
      setIsLogin(true);
    } catch (error) {
      setErrorMessage(error.response?.data?.errors || "Signup failed!!!");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrorMessage("");
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setSignupEmail("");
    setSignupPassword("");
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-950 h-[calc(100vh-0px)] pt-20 flex items-center justify-center p-0">
      <div className="relative w-full  bg-gray-900  shadow-2xl text-white overflow-hidden h-full">

        {/* Sliding Background Panel */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-500 to-blue-700 transition-transform duration-700 ease-in-out z-10 flex flex-col justify-center items-center p-8 text-center ${
            isLogin ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {isLogin ? (
            <>
              <h2 className="text-3xl font-bold">New to CourseHaven?</h2>
              <p className="mt-4 text-lg opacity-90">
                Join us today and start your learning journey with premium courses.
              </p>
              <button
                onClick={toggleForm}
                className="mt-6 px-8 py-3 border-2 border-white rounded-md hover:bg-white hover:text-blue-700 transition font-semibold"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold">Already have an account?</h2>
              <p className="mt-4 text-lg opacity-90">
                Sign in to access your courses and continue learning.
              </p>
              <button
                onClick={toggleForm}
                className="mt-6 px-8 py-3 border-2 border-white rounded-md hover:bg-white hover:text-blue-700 transition font-semibold"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Login Form */}
        <div
          className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center items-center p-8 transition-all duration-700 ease-in-out ${
            isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Course
              </span>
              Haven
            </h1>
            <p className="text-center text-gray-400 mb-6">
              Log in to access paid content!
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="name@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
                    placeholder="********"
                    required
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>

              {errorMessage && (
                <div className="text-blue-500 text-center">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-white hover:text-blue-700 text-white py-3 px-6 rounded-md transition font-semibold"
              >
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Signup Form */}
        <div
          className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center items-center p-8 transition-all duration-700 ease-in-out ${
            !isLogin ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Course
              </span>
              Haven
            </h1>
            <p className="text-center text-gray-400 mb-6">
              Just Signup To Join Us!
            </p>

            <form onSubmit={handleSignupSubmit} className="space-y-4">
              <div>
                <label htmlFor="firstname" className="block text-gray-400 mb-2">
                  Firstname
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your firstname"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastname" className="block text-gray-400 mb-2">
                  Lastname
                </label>
                <input
                  type="text"
                  id="lastname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your lastname"
                  required
                />
              </div>

              <div>
                <label htmlFor="signupEmail" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="signupEmail"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
                  placeholder="name@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="signupPassword" className="block text-gray-400 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showSignupPassword ? "text" : "password"}
                    id="signupPassword"
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500"
                    placeholder="********"
                    required
                  />
                  <span
                    className="absolute right-3 top-3 cursor-pointer"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                  >
                    {showSignupPassword ? "🙈" : "👁️"}
                  </span>
                </div>
              </div>

              {errorMessage && (
                <div className="text-blue-500 text-center">{errorMessage}</div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-white hover:text-blue-700 text-white py-3 px-6 rounded-md transition font-semibold"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
