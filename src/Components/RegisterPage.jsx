import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
import AOS from "aos";
import FooterContact from "../Pages/FooterContact";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    password: "",
    confirmPassword: "",
  });

  const genderOptions = ["Male", "Female", "Transgender"];

  const countryOptions = {
    USA: ["California", "Texas", "New York"],
    India: ["Karnataka", "Maharashtra", "Tamil Nadu", "Kerala"],
    Australia: ["New South Wales", "Victoria", "Queensland"],
  };

  const cityOptions = {
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    NewYork: ["New York City", "Buffalo", "Albany"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    Kerala: ["Kasaragod", "Kannur", "Wayanad", "Trivandram"],
    NewSouthWales: ["Sydney", "Newcastle", "Wollongong"],
    Victoria: ["Melbourne", "Geelong", "Ballarat"],
    Queensland: ["Brisbane", "Gold Coast", "Cairns"],
  };

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "country") {
      setFormData({ ...formData, country: value, state: "", city: "" });
    } else if (name === "state") {
      setFormData({ ...formData, state: value, city: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    Swal.fire({
      title: "Registration Successful!",
      text: "You have registered successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      gender: "",
      country: "",
      state: "",
      city: "",
      zip: "",
      password: "",
      confirmPassword: "",
    });

    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-400 text-white flex flex-col">
      {/* Main Content Section */}
      <div className="flex-grow flex items-center justify-center w-full">
        <div className="max-w-4xl w-full p-8 space-y-8" data-aos="fade-up">
          <div className="text-center">
            <h3 className="text-4xl font-bold">
              Register on <span className="text-black">Customer</span>
            </h3>
            <p className="mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-600">
                Login
              </Link>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Gender</option>
                  {genderOptions.map((gender) => (
                    <option key={gender} value={gender}>
                      {gender}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select Country</option>
                  {Object.keys(countryOptions).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium">
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="">Select State</option>
                  {(countryOptions[formData.country] || []).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="mb-6">
                <label htmlFor="city" className="block text-sm font-medium">
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                >
                  <option value="" disabled>
                    Select City
                  </option>
                  {(cityOptions[formData.state] || []).map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="zip" className="block text-sm font-medium">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-800 border border-gray-700 rounded focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 w-full text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              Register
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-400 py-8">
        <FooterContact />
      </div>
    </div>
  );
};

export default RegisterPage;
