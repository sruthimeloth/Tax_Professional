import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gstLoginImage from "../assets/gstlogin.gif"; // Import the image

const AboutTaxpayer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardDetails } = location.state || {};

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="px-16 mx-auto grid md:grid-cols-3 items-center md:items-start">
        {/* Left Section - Image */}
        {/* <div className="flex-1 md:pr-8 flex justify-center md:justify-start"> */}
          <img
            src={gstLoginImage}
            alt="GST Login"
            className=" rounded-lg shadow-lg"
          />
        {/* </div> */}

        {/* Center Section - Content */}
        <div className="flex-1 text-center md:text-left md:px-8">
          <h1 className="text-4xl font-extrabold text-teal-700 mb-6">
            {cardDetails?.title || "Taxpayer Details"}
          </h1>
          <p className="text-lg  text-[#707070] leading-relaxed text-justify">
            {cardDetails?.paragraph ||
              "This section provides details about the selected taxpayer service."}
          </p>
        </div>

        {/* Right Section - Buttons */}
        <div className="flex-1 md:pl-8 mt-8 md:mt-0 flex justify-center md:justify-end">
          <div className="space-y-4  max-w-xs">
            <button
              onClick={() => navigate("/register")}
              className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold text-lg rounded-lg shadow-md hover:from-teal-600 hover:to-teal-800 transition"
            >
               Register
            </button>
            <button
              onClick={() => navigate("/contacts")}
              className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-bold text-lg rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 transition"
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/llp-registration" )}
              className="w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-white font-bold text-lg rounded-lg shadow-md hover:from-teal-600 hover:to-teal-800 transition"
            >
               Back
            </button>
            <button
              onClick={() => navigate("/" )}
              className="w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-bold text-lg rounded-lg shadow-md hover:from-indigo-600 hover:to-indigo-800 transition"
            >
               Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTaxpayer;
