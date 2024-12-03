import React from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import login from "../assets/login.jpg";

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Login Successful!",
      text: "You have successfully logged in.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const handleGoogleLogin = () => {
    Swal.fire({
      title: "Google Login",
      text: "Login with Google is not yet implemented.",
      icon: "info",
      confirmButtonText: "OK",
    });
  };

  return (
    <div
      className="h-screen flex justify-center items-center relative"
      style={{
        backgroundImage: `url(${login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for Dark Background */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative w-full max-w-5xl flex bg-transparent">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center w-1/2 p-8 text-white">
          <h1 className="text-5xl font-bold mb-6">Welcome Back</h1>
          <p className="text-lg leading-relaxed">
            Experience seamless service booking and appointment scheduling on
            our platform. Join us to make your life easier.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div
            className="w-full max-w-md bg-opacity-30 border border-gray-500 bg-slate-100 p-10 rounded-lg shadow-lg"
            style={{ backdropFilter: "blur(25px)" }}
          >
            {/* Header */}
            <h1 className="text-3xl font-extrabold text-white mb-4 text-center">
              Login to Your Account
            </h1>
            <p className="text-white text-center mb-8">
              Access your account by signing in with your details or Google.
            </p>

            {/* Google Login Button */}
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center w-full bg-red-600 text-white py-3 rounded-md shadow-lg hover:bg-red-700 transition duration-300 mb-6"
            >
              <FaGoogle className="mr-2" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center mb-6">
              <div className="flex-grow h-px bg-gray-500"></div>
              <span className="px-4 text-gray-300 text-sm">OR</span>
              <div className="flex-grow h-px bg-gray-500"></div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <input
                  type="text"
                  id="username"
                  className="w-full px-4 py-3 border text-white bg-transparent border-white rounded-md shadow-sm placeholder-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border text-white border-white bg-transparent rounded-md shadow-sm placeholder-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Sign In
              </button>
            </form>

            {/* Forgot Password & Register Links */}
            <div className="flex justify-between items-center mt-6">
              <a
                href="/forgot-password"
                className="text-sm text-gray-300 hover:underline"
              >
                Forgot Password?
              </a>
              <a
                href="/register"
                className="text-sm text-gray-300 hover:underline"
              >
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
