import React from "react";
import { FaPhoneVolume } from "react-icons/fa";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import {
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineSafetyCertificate,
} from "react-icons/ai";
import company_logo from "../assets/company_logo.png";

const footerData = {
  company_info: {
    startup_recognition:
      "An ISO 2001 - 2015 Certified Company. A Startup Recognized By Govt of India Reg No: DIPP32663",
    description:
      "The all-in-one multi-specialty software, developed by professionals for professionals. Use the software to believe it.",
    logo: {
      src: company_logo,
      alt: "Company Logo",
    },
  },
  address: {
    title: "Our Corporate Address",
    details: [
      {
        icon: "fa fa-home",
        text: "First Floor City Complex, Karandakkad, Kasaragod, Kerala, India 671121",
      },
      {
        icon: "fa fa-volume-control-phone",
        text: "04994-225-895, 896, 897, 898",
      },
      {
        icon: "fa fa-mobile",
        text: "96 33 18 18 98",
      },
      {
        icon: "fa fa-whatsapp",
        text: "96 33 18 18 98",
      },
      {
        icon: "fa fa-envelope",
        text: "info@taxtower.in, support@taxtower.in, sales@taxtower.in",
        link: "mailto:info@precon.com",
      },
    ],
  },
  useful_links: {
    title: "Useful Links",
    links: [
      { name: "About Us", url: "/aboutus" },
      { name: "Careers", url: "/careers" },
      { name: "Privacy Policy", url: "#" },
      { name: "Teams", url: "/aboutus" },
      { name: "Find a Consultant", url: "/Findconsultant" },
    ],
  },
  stay_connected: {
    title: "Stay Connected",
    social_links: [
      {
        platform: "Email",
        icon: FaEnvelope,
        url: "mailto:sruthimeloth19@gmail.com",
        aria_label: "Email",
      },
      {
        platform: "GitHub",
        icon: FaGithub,
        url: "https://github.com/sruthimeloth",
        aria_label: "GitHub",
      },
      {
        platform: "LinkedIn",
        icon: FaLinkedin,
        url: "https://www.linkedin.com/in/sruthi-m-653701332/",
        aria_label: "LinkedIn",
      },
      {
        platform: "WhatsApp",
        icon: FaWhatsapp,
        url: "https://wa.me/+918089846675/",
        aria_label: "WhatsApp",
      },
      {
        platform: "Phone",
        icon: FaPhone,
        url: "tel:8089846675",
        aria_label: "Phone",
      },
    ],
  },
  footer_bottom: {
    text: "Ⓒ Copyright 2024 BRQ. Designed & Developed By BRQ Glob Tech Pvt Ltd.",
  },
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info Section */}
          <div>
            <img
              src={footerData.company_info.logo.src}
              alt={footerData.company_info.logo.alt}
              className="h-16 mb-4"
            />
            <p className="text-sm font-medium">
              {footerData.company_info.startup_recognition}
            </p>
            <p className="mt-4 text-gray-400 text-sm">
              {footerData.company_info.description}
            </p>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-4">
              {footerData.address.title}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {footerData.address.details.map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className={`${item.icon} text-xl mr-3`}></i>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="hover:text-blue-400 transition"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-4">
              {footerData.useful_links.title}
            </h3>
            <ul className="space-y-3 text-gray-400">
              {footerData.useful_links.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="hover:text-blue-400 transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay Connected Section */}
          <div>
            <h3 className="text-lg font-semibold text-blue-500 mb-4">
              {footerData.stay_connected.title}
            </h3>
            <div className="flex space-x-4">
              {footerData.stay_connected.social_links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.aria_label}
                  className="text-white hover:text-blue-400 text-2xl transition"
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

     
        {/* Footer Bottom Text */}
        <div className="mt-8 bg-blue-400 py-4">
          <p className="text-center text-black text-sm">
            {footerData.footer_bottom.text}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
