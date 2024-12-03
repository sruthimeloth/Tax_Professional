import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import company_logo from '../assets/company_logo.png';
import services from './Services';

const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (serviceId) => {
    setSelectedService(serviceId); // Update the selected service
  };

  return (
    <div className='pb-[6rem]'>
    <div className="bg-gray-100 text-gray-800 w-full fixed top-0 px-8 md:px-16 z-50 lg:px-24 shadow">
      <div className="container py-4 flex justify-center md:justify-between items-center">
        {/* Company Logo */}
        <div className="flex items-center">
          <img src={company_logo} alt="Company Logo" className="h-16 object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 flex items-center">
          <Link to="/" className="hover:text-blue-500 transition">HOME</Link>
          <Link to="/aboutus" className="hover:text-blue-500 transition">ABOUT US</Link>

          {/* Services Dropdown */}
          <div
            className="relative p-4"
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
          >
             <button className="hover:text-blue-500 transition">SERVICES</button>
      {dropdownVisible && (
        <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10 border border-gray-200 animate-fade-in">
          {services.map((service) => (
            <Link
            key={service.id}
            to={service.path}
            onClick={() => handleServiceClick(service.id)} // Handle click
            className={`block px-4 py-2 text-gray-700 hover:bg-gray-100 transition ${
              selectedService === service.id
                ? "font-bold text-red-500" // Highlight selected service with red color
                : ""
            }`}
          >
            {service.name}
          </Link>
          
          ))}
        </div>
      )}
    </div>

          <Link to="/careers" className="hover:text-blue-500 transition">CAREERS</Link>

          <Link to="/contacts" className="hover:text-blue-500 transition">CONTACT US</Link>
        </div>

        {/* Buttons Section */}
        <div className="flex space-x-2">
          {!isLoggedIn ? (
            <>
              <Link
                to="/register"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={() => setIsLoggedIn(true)} // Update login state on click
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
              >
                Login
              </Link>
              </>
          ) : (
            <button
              onClick={() => setIsLoggedIn(false)} // Logout functionality
              className="bg-gradient-to-r from-red-400 to-orange-500 text-white transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
              Logout
            </button>
          )}

          <Link
            to="/Findconsultant"
            className="flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full space-x-2"
          >
            <FontAwesomeIcon icon={faCalendarDays} className="w-4 h-4" />
            <span>Book an Appointment</span>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
