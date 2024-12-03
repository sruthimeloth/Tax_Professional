import React, { useRef, useEffect } from "react";

import About from "../assets/About.jpg";
import AOS from "aos"; // AOS for animations
import "aos/dist/aos.css"; // AOS styles
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineCustomerService } from "react-icons/ai";

const contactDetails = [
  {
    title: "Corporate Address",
    icon: <FaMapMarkerAlt className="text-green-500 text-4xl mb-4 mx-auto" />,
    description:
      "BRQ Associates, Second City Complex NH Road, Karandakkad, Kasaragod, Kerala, INDIA",
  },
  {
    title: "Telephone Number",
    icon: <FaPhoneAlt className="text-green-500 text-4xl mb-4 mx-auto" />,
    description: (
      <>
        General Manager: 0091 9495617127 <br />
        Managing Director: 00919946906789 <br />
        (Office Time: 9.00 AM to 9.00 PM)
      </>
    ),
  },
  {
    title: "Official Email",
    icon: <FaEnvelope className="text-green-500 text-4xl mb-4 mx-auto" />,
    description: (
      <>
        <a href="mailto:info@taxtower.com">info@taxtower.com</a> <br />
        <a href="mailto:sales@taxtower.com">sales@taxtower.com</a> <br />
        <a href="mailto:legal@brqsales.com">legal@brqsales.com</a>
      </>
    ),
  },
  {
    title: "24/7 Customer Care Support",
    icon: (
      <AiOutlineCustomerService className="text-green-500 text-4xl mb-4 mx-auto" />
    ),
    description: <a href="tel:+18004256000">+1800 4256 000</a>,
  },

  {
    title: "Mobile Number",
    icon: <FaMobileAlt className="text-green-500 text-4xl mb-4 mx-auto" />,

    description: <a href="tel:+1234567893">+1 234 567 893</a>,
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp className="text-green-500 text-4xl mb-4 mx-auto" />,
    description: <a href="https://wa.me/1234567892">+1 234 567 892</a>,
  },
];

const Contacts = () => {
  const form = useRef();

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mx-auto bg-gradient-to-l from-gray-200 to-violet-100 pb-6 ">
      {/* Hero Image Section */}
      <div className="mb-8 relative flex justify-center items-center">
        <img
          src={About}
          alt="CONTACT US"
          className="w-full h-64 object-cover"
        />
        <h2 className="text-5xl font-semibold text-black absolute">
          Contact Us
        </h2>
      </div>

      {/* Subtitle Section */}
      <div className="text-center mb-8">
        <p className=" font-medium text-lg text-[#707070] mt-2 leading-relaxed max-w-2xl mx-auto">
          We'd love to hear from you. Feel free to reach out to us anytime!{" "}
          <br />
          <span className="text-green-500 mt-2 block text-lg">
            Your feedback is important to us.
          </span>
        </p>
      </div>

      {/* Get in Touch Section */}
      <div
        className="w-full md:w-2/3 lg:w-1/2 mx-auto px-4 mb-12"
        data-aos="fade-left"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h4 className="text-center text-3xl font-semibold ">
            Get in Touch
          </h4>
          <form
            ref={form}
            className="space-y-6"
            method="post"
            id="contactusform"
            autoComplete="off"
            noValidate
          >
            {/* Name Field */}
            <div>
              <label
                htmlFor="conname"
                className="block mb-1 text-gray-700 text-sm"
              >
                Name*
              </label>
              <input
                type="text"
                name="name"
                maxLength="50"
                placeholder="Enter your name"
                className="w-full p-2 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:border-green-400"
                id="conname"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label
                htmlFor="conphone"
                className="block mb-1 text-gray-700 text-sm"
              >
                Phone / Mobile*
              </label>
              <input
                type="text"
                name="contact_no"
                maxLength="13"
                placeholder="Enter your phone number"
                className="w-full p-2 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:border-green-400"
                id="conphone"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="patemail"
                className="block mb-1 text-gray-700 text-sm"
              >
                Email Address*
              </label>
              <input
                type="email"
                name="email_id"
                maxLength="100"
                placeholder="Enter your email address"
                className="w-full p-2 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:border-green-400"
                id="patemail"
                required
              />
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block mb-1 text-gray-700 text-sm"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter the subject"
                className="w-full p-2 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:border-green-400"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="query"
                className="block mb-1 text-gray-700 text-sm"
              >
                Message
              </label>
              <textarea
                name="query"
                rows="5"
                maxLength="250"
                placeholder="Write your message here"
                className="w-full p-2 rounded bg-gray-200 text-black border border-gray-300 focus:outline-none focus:border-green-400"
                id="query"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-blue-500 w-full text-white hidden md:inline transform transition duration-300 hover:scale-105 px-4 py-2 rounded-full"
            >
             Submit
            </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto px-4" data-aos="fade-right">
        <h4 className="text-3xl font-semibold uppercase text-center">
          Contact Information
        </h4>
        <p className="text-lg text-[#707070] mt-2 text-center pb-5">
          We'd love to assist you. Below are the best ways to reach us. Feel
          free to contact us anytime!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 mx-12">
          {contactDetails.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-6 h-56 rounded-lg text-center transition hover:bg-green-50 hover:shadow-xl hover:text-green-600"
              data-aos="zoom-in-left"
            >
              {item.icon}
              <h5 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h5>
              <p className="text-gray-600 hover:text-green-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="my-12 w-full">
        <h4 className="text-3xl font-semibold uppercase text-center">LOCATION</h4>
        <div className="brand_border flex justify-center items-center gap-2 mt-4">
              <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
              <i className="fas fa-users text-blue-500 text-lg"></i>
              <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
            </div>
        <div className="flex justify-center mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3895.1310085547016!2d74.98588137504565!3d12.507474424884037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba483b89a1bf4f5%3A0xa63dbc7dc3b6c2b9!2sBRQ%20GLOB%20TECH%20PVT%20LTD!5e0!3m2!1ses!2sin!4v1732784012662!5m2!1ses!2sin"
            width="1600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
