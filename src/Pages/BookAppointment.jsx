import React, { useState } from 'react';
import appointment from '../assets/appointment.jpg'; // Add your image here

// JSON Data
const departmentOptions = [
  { id: "GST", name: "GST Department" },
  { id: "marketing", name: "Marketing Department" },
  { id: "hr", name: "HR Department" },
  { id: "sales", name: "Sales Department" },
  { id: "product", name: "Product Department" },
];

const consultantOptions = [
  { id: "sru", name: "Sruthi" },
  { id: "sharon", name: "Sharon" },
  { id: "shahama", name: "Shahama" },
  { id: "aparna", name: "Aparna" },
  { id: "vijith", name: "Vijith" },
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    date: "",
    time: "",
    reason: "",
    department: "",
    consultant: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSuccessMessage("Successfully booked an appointment!"); // Set success message
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
    });
    setSuccessMessage(""); // Clear success message when form is reset
  };


  return (
    <div
    className="bg-cover bg-center min-h-screen flex flex-col items-center py-10 px-4"
    style={{ backgroundImage: `url(${appointment})` }}
  >
    <h1 className="text-4xl font-bold text-white mb-8 bg-blue-600 bg-opacity-75 px-6 py-2 rounded-lg shadow-lg">
      Book an Appointment
    </h1>

    {successMessage && ( // Display success message if it exists
      <div className="bg-green-100 text-green-700 p-4 rounded-md shadow-md mb-6">
        {successMessage}
      </div>
    )}

    <form
      onSubmit={handleSubmit}
      className="bg-opacity-80 bg-gray-200 shadow-2xl rounded-lg p-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            placeholder="Enter your phone number"
            required
          />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Appointment Schedule
        </h2>
        <div className="mb-4">
          <label htmlFor="department" className="block text-gray-700 font-bold mb-2">
            Select Department
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            required
          >
            <option value="" disabled>
              Choose a department
            </option>
            {departmentOptions.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="consultant" className="block text-gray-700 font-bold mb-2">
            Select Consultant
          </label>
          <select
            id="consultant"
            name="consultant"
            value={formData.consultant}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            required
          >
            <option value="" disabled>
              Choose a consultant
            </option>
            {consultantOptions.map((consultant) => (
              <option key={consultant.id} value={consultant.id}>
                {consultant.name}
              </option>
            ))}
          </select>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
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
    </form>

    <div className="flex justify-end space-x-4 mt-6">
      <button
        type="button"
        onClick={handleClear}
        className="px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-semibold rounded-lg shadow-md hover:from-gray-500 hover:to-gray-700 transition duration-300 ease-in-out"
      >
        Clear
      </button>
      <button
        type="submit"
        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
      >
        Submit
      </button>
    </div>
  </div>
);
};

export default BookAppointment;
