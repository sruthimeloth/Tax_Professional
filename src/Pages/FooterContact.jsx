// FooterContact.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import contactUsGif from '../assets/Contact-us.gif'; // Ensure the path is correct

const FooterContact = () => {
  return (
    <div className="mt-12 bg-gradient-to-r from-blue-200 to-blue-100 p-8 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-1 mb-6 md:mb-0 md:pr-8">
          <img
            src={contactUsGif}
            alt="Contact Us"
            className="w-full h-auto max-w-sm mx-auto md:mx-0 rounded-lg shadow-md"
          />
        </div>

        {/* Text and Button Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-3xl font-extrabold text-gray-800 mb-4">
            Have Questions? <span className="text-blue-600">Contact Us</span>
          </h3>
          <p className="text-gray-600 text-lg italic mb-6">
            We are here to help you. Reach out to us for any assistance, and we’ll
            respond promptly to address your concerns.
          </p>

          <Link
            to="/contacts"
            className="inline-flex items-center bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold transform transition duration-300 hover:scale-105 px-6 py-3 rounded-full shadow-md"
          >
            <span>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
