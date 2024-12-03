import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { SiMessenger } from "react-icons/si";

const ViewProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract consultant data from location state
  const { consultant } = location.state || {};

  // Handle cases where consultant data is missing
  if (!consultant) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold text-red-500">No consultant data available!</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  const handleBookAppointment = () => {
    navigate("/book-appointment", {
      state: {
        consultantName: consultant.name,
        departmentName: consultant.department,
        expertise:consultant.expertise
      },
    });
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {/* Consultant Image */}
        <div className="flex flex-col items-center">
          <img
            src={consultant.image}
            alt={consultant.name}
            className="w-56 h-56 rounded-full object-cover mb-6 border-4 border-gray-200 shadow-lg"
          />
          <h1 className="text-4xl font-extrabold text-blue-700 mb-3">{consultant.name}</h1>
          <p className="text-lg font-medium text-gray-600">{consultant.expertise}</p>
          <p className="text-md text-gray-500 mt-2">{consultant.contact}</p>
        </div>

        {/* Detailed Description */}
        <div className="mt-8 text-gray-700">
          <p className="leading-8 text-lg">
            {consultant.name} is an expert in <b>{consultant.expertise}</b>. With years of experience,
            they have helped numerous clients achieve their goals in this field. If you need
            assistance with {consultant.expertise.toLowerCase()}, {consultant.name} is here to guide you.
          </p>
        </div>

        {/* Social Sharing Section */}
        <div className="mt-8 p-6 rounded-lg shadow-md bg-gradient-to-r from-green-50 to-blue-50">
          <h6 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Recommend to Your Loved Ones
          </h6>
          <div className="flex justify-center gap-8">
            {/* WhatsApp Button */}
            <Link
              to={`https://api.whatsapp.com/send?text=https://www.kimshealth.org/trivandrum/doctors/dr-lekshmon-k-s/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all text-lg font-semibold shadow-md"
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp</span>
            </Link>
            {/* Messenger Button */}
            <Link
              to={`https://www.facebook.com/sharer.php?u=https://www.kimshealth.org/trivandrum/doctors/dr-lekshmon-k-s/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all text-lg font-semibold shadow-md"
            >
              <SiMessenger className="text-2xl" />
              <span>Messenger</span>
            </Link>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-10 flex justify-between">
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
            onClick={handleBookAppointment}
          >
            Book Appointment
          </button>
          <button
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all text-lg font-semibold shadow-md "
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
