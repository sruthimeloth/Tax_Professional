import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2"; 
import appointment from '../assets/appointment.jpg';  

const BookAnAppointment = () => {
  const location = useLocation();
  const { consultantName, departmentName, expertise } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    reason: "",
    department: departmentName || "",
    consultant: consultantName || "",
    expertise: expertise || ""
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // SweetAlert success message
    Swal.fire({
      icon: 'success',
      title: 'Appointment Booked!',
      text: 'Your appointment has been successfully booked. Thank you!',
      confirmButtonText: 'OK',
    });
  };

  const handleClear = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      date: "",
      time: "",
      reason: "",
      department: "",
      consultant: "",
      expertise: ""
    });
    setSuccessMessage("");
  };

  return (
    <div className="min-h-screen">
      {/* Navbar goes here */}

      {/* Full Background Image Section */}
      <div
        className="relative w-full h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${appointment})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Description on top of the image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white px-4">
          <h1 className="text-4xl font-extrabold mb-4" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}>
            Book an Appointment
          </h1>
          <p className="text-xl text-center max-w-xl mb-6" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}>
            Schedule your consultation with our experts. Select your preferred time and service, and we'll confirm your appointment.
          </p>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-4xl mx-auto mt-8 py-6 mb-6">
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded-md shadow-md w-full max-w-2xl text-center mb-6">
            {successMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="bg-blue-50 p-6 rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Personal Information
            </h2>
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">
              Appointment Schedule
            </h2>
            <div className="mb-4">
              <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
                Department
              </label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="consultant" className="block text-gray-700 font-bold mb-2">
                Consultant Name
              </label>
              <input
                type="text"
                id="consultant"
                name="consultant"
                value={formData.consultant}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="consultant" className="block text-gray-700 font-bold mb-2">
                Service
              </label>
              <input
                type="text"
                id="consultant"
                name="consultant"
                value={formData.expertise}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="time" className="block text-gray-700 font-bold mb-2">
                Appointment Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                required
              />
            </div>
          </div>

          <div className="md:col-span-2 flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={handleClear}
              className="px-6 py-2 bg-blue-300 text-white rounded-full shadow-md"
            >
              Clear
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-green-300 text-white rounded-full shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookAnAppointment;
