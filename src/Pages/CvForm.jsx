import React, { useState } from "react";
import Swal from "sweetalert2";

const CvForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email_id: "",
    age: "",
    address: "",
    nationality: "",
    state: "",
    city: "",
    contact_no: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Application Submitted!",
      text: "Your CV has been submitted successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const nationalityOptions = ["Indian", "American", "British", "Australian"];
  const stateOptions = ["California", "Texas", "Karnataka", "Kerala"];
  const cityOptions = ["Los Angeles", "Wayanad", "Miami", "Kasaragod"];

  return (
    <div className="flex justify-center flex-wrap lg:flex-nowrap bg-gradient-to-l from-gray-200 to-violet-100 py-10 ">
      {/* Left Section */}
      <div className="w-full lg:w-1/3 p-8">
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact</h2> */}
        <div className="space-y-8 text-gray-700">
          <div>
            <h3 className="text-2xl font-semibold uppercase">About Our Company</h3>
            <p className="text-lg text-[#707070] mt-2 ">
              We are a leading consultancy firm dedicated to helping
              professionals achieve their career goals. Our services include
              career counseling, CV review, and job placement assistance.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold uppercase">Our Consultant</h3>
            <p className="text-lg text-[#707070] mt-2 ">
              Our consultants are industry experts with years of experience
              helping clients excel in their professional journeys.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold uppercase">Management</h3>
            <p className="text-lg text-[#707070] mt-2 ">
              Managed by a team of skilled professionals, we ensure a smooth
              and efficient process for all your career-related needs.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold uppercase">Working Hours</h3>
            <p className="text-lg text-[#707070] mt-2 ">
              Monday to Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 3:00 PM
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold uppercase">Salary Expectations</h3>
            <p className="text-lg text-[#707070] mt-2 ">
              We provide competitive salary opportunities based on the industry
              standards and your expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold  mb-6 text-center">
          Submit Your CV
        </h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Full Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email_id"
                placeholder="Enter your email address"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email_id}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Age and Contact Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                placeholder="Enter your age"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact_no"
                placeholder="Enter your phone number"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.contact_no}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Nationality */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Nationality <span className="text-red-500">*</span>
            </label>
            <select
              name="nationality"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.nationality}
              onChange={handleChange}
              required
            >
              <option value="">Select Nationality</option>
              {nationalityOptions.map((nation, index) => (
                <option key={index} value={nation}>
                  {nation}
                </option>
              ))}
            </select>
          </div>

          {/* State and City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                State <span className="text-red-500">*</span>
              </label>
              <select
                name="state"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.state}
                onChange={handleChange}
                required
              >
                <option value="">Select State</option>
                {stateOptions.map((state, index) => (
                  <option key={index} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                City <span className="text-red-500">*</span>
              </label>
              <select
                name="city"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select City</option>
                {cityOptions.map((city, index) => (
                  <option key={index} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Address */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Address <span className="text-red-500">*</span>
            </label>
            <textarea
              name="address"
              rows="3"
              placeholder="Enter your address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Document Upload */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Upload Document <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              name="document"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white  font-semibold rounded-full hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CvForm;
