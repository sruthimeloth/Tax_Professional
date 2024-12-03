import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeImage from "./HomeImage";
import "aos/dist/aos.css";
import AOS from "aos";
// import registerImage from "../assets/registration.png";
import oogst from "../assets/00gst.png";
import oocompanyreg from "../assets/00companyreg.png";
import ooincometax from "../assets/00incometax.png";
import oollpregistration from "../assets/00llpregistration.png";
import oomca from "../assets/00mca.png";
import oopan from "../assets/00pan.png";
import {
  FaArrowRight,
  FaHandHoldingUsd,
  FaShippingFast,
  FaUserClock,
} from "react-icons/fa";
import FooterContact from "../Pages/FooterContact";
import { consultantsData2 } from "../Pages/ConsultantData";
import { Carousel } from "primereact/carousel";

import shahamaImage from "../assets/shashama.jpg";
import gokulImage from "../assets/gokul.jpg";
import vijithImage from "../assets/vijith.jpg";

import johnImage from "../assets/john.jpg";
import emilyImage from "../assets/emily.jpg";
import michaelImage from "../assets/mich.jpg";
import janeImage from "../assets/jani.jpg";
import davidImage from "../assets/david.jpg";
import sophiaImage from "../assets/sophia.jpg";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
    { breakpoint: "768px", numVisible: 1, numScroll: 1 },
  ];

  const managementTeam = [
    {
      id: 1,
      name: "John Doe",
      position: "Chief Executive Officer",
      image: johnImage,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Chief Operating Officer",
      image: janeImage,
    },
    {
      id: 3,
      name: "Michael Brown",
      position: "Chief Technology Officer",
      image: michaelImage,
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "Chief Financial Officer",
      image: emilyImage,
    },
    {
      id: 5,
      name: "David Wilson",
      position: "Head of Marketing",
      image: davidImage,
    },
    {
      id: 6,
      name: "Sophia Johnson",
      position: "Head of HR",
      image: sophiaImage,
    },
  ];

  const features = [
    {
      title: "Online Booking System",
      description:
        "Remove friction from your booking process by minimizing the communication gap with your customers. Your Appointy’s online booking page will allow them to view real-time availability for services so that they can pick a time of their own convenience easily.",
      icon: <FaUserClock />,
      aos: "zoom-in-down",
    },
    {
      title: "Appointment Alerts",
      description:
        "Receive instant notifications via sms, email, or straight in the app when an appointment is booked, rescheduled, or canceled. Your customers also receive automated appointment alerts so that they stay on top of their bookings without having to dial-in.",
      icon: <FaUserClock />,
      aos: "zoom-in-down",
    },
    {
      title: "No Show Protection",
      description:
        "Send automated email and text reminders to customers at preset times before each appointment to reduce no shows. With our Square, Stripe, and Paypal integrations, you have the option to charge a full, part or a fixed amount as prepayment to avoid any casual bookings.",
      icon: <FaUserClock />,
      aos: "zoom-in-down",
    },
  ];

  const managementTemplate = (member) => (
    <div
      key={member.id}
      className=" rounded-lg  overflow-hidden p-8 flex flex-col items-center hover:shadow-xl transition transform hover:scale-105"
    >
      {/* Image */}
      <div className="flex-shrink-0">
        <img
          src={member.image}
          alt={`${member.name}'s Photo`}
          className="w-40 h-40 rounded-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 text-center mt-4">
        <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
        <h4 className="text-md text-blue-500 mt-2">{member.position}</h4>
      </div>
    </div>
  );

  const navigate = useNavigate();

  const handleViewProfile = (consultant) => {
    navigate(`/view-profile/${consultant.id}`, { state: { consultant } });
    console.log("View profile for:", consultant);
  };
  const consultantTemplate = (consultant) => (
    <div
      key={consultant.id}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105"
      style={{ minHeight: "320px" }}
    >
      <div className="flex flex-col items-center">
        <img
          src={consultant.image}
          alt={consultant.name}
          className="w-28 h-28 rounded-full object-cover mb-4"
        />
        <h3 className="text-lg font-bold text-gray-900">{consultant.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{consultant.department}</p>
        <p className="text-sm text-gray-600">{consultant.expertise}</p>
        <p className="text-sm text-gray-500 mt-1">{consultant.contact}</p>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          className="px-3 py-2 bg-gradient-to-r from-blue-600 to-green-400 text-white rounded-md hover:bg-blue-700 transition-all text-sm w-full"
          onClick={() => handleViewProfile(consultant)}
        >
          View Profile
        </button>
        <button
          className="px-3 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all text-sm w-full"
          onClick={() =>
            navigate("/book-appointment", {
              state: {
                consultantName: consultant.name,
                departmentName: consultant.department,
              },
            })
          }
        >
          Book Appointment
        </button>
      </div>
    </div>
  );

  const additionalSections = [
    {
      id: 1,
      description: "Learn more about who we are and what we do.",
      extraInfo: `About BRQ Associates, we are committed to providing exceptional service and innovative solutions. Our team of experts is dedicated to helping our clients achieve their goals through tailored strategies and high-quality execution.`,
      path: "/aboutus",
    },
    {
      id: 2,
      description: "Join our team and grow your career with us.",
      extraInfo: `We make it our mission to find people who make a difference in everyday life. Explore exciting opportunities in a dynamic work environment. Good luck!`,
      path: "/careers",
    },
    {
      id: 3,
      description: "Reach out to us for inquiries and support.",
      extraInfo: "Our support team is available 24/7 to assist you.",
      path: "/contacts",
    },
  ];

  const services = [
    { id: 1, name: "GST - Goods and Services Tax", path: "/gst" },
    { id: 2, name: "LLP Registration", path: "/llp-registration" },
    { id: 3, name: "MCA Services", path: "/mca-services" },
    {
      id: 4,
      name: "Company Registration & Incorporation",
      path: "/company-registration",
    },
    { id: 5, name: "PAN - Permanent Account Number", path: "/pan" },
    { id: 6, name: "TAN - Tax Collection Account Number", path: "/tan" },
    { id: 7, name: "TDS - Tax Deducted Source", path: "/tds" },
  ];

  const ourServices = [
    {
      id: 1,
      name: "GST - Goods and Services Tax",
      description:
        "Comprehensive GST services including registration, filing, and compliance support.",
      image: oogst,
      link: "/gst",
    },
    {
      id: 2,
      name: "Income Tax",
      description:
        "Expert guidance on income tax planning, filing, and compliance for individuals and businesses.",
      image: ooincometax,
      link: "/icome-tax",
    },
    {
      id: 3,
      name: "Company Registration",
      description:
        "Seamless company registration and incorporation services for new businesses.",
      image: oocompanyreg,
      link: "/company-registration",
    },
    {
      id: 4,
      name: "LLP Registration",
      description:
        "Effortless LLP registration with expert assistance at every step.",
      image: oollpregistration,
      link: "/llp-registration",
    },
    {
      id: 5,
      name: "MCA Services",
      description:
        "Comprehensive MCA services to assist with compliance, filings, and more.",
      image: oomca,
      link: "/mca-services",
    },
    {
      id: 6,
      name: "PAN - Permanent Account Number",
      description:
        "Quick and efficient PAN card application and updates for individuals and entities.",
      image: oopan,
      link: "/pan",
    },
  ];

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-l from-gray-200 to-violet-100">
      <div className="relative">
        <HomeImage />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 justify-center gap-36 py-16 flex flex-col lg:flex-row">
        <div className="flex-1 space-y-8 text-justify max-w-2xl">
          {additionalSections.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg text-[#707070]">{section.extraInfo}</h3>
              <p className="text-xl text-red-500">{section.description}</p>
              <Link
                to={section.path}
                className="mt-4 inline-flex items-center bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-blue-600 transition font-medium"
              >

                
                Read More
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Right Side: Professional Services */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-end space-y-6 mt-8 lg:mt-0 w-full">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className="block bg-gradient-to-r from-blue-200 to-blue-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition transform hover:scale-105 text-center w-full"
              data-aos="fade-left"
            >
              <h3 className="text-lg font-bold text-blue-800">
                {service.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Our Services Section */}
      <div className="container mx-auto px-6 py-16">
        {/* Our Management Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="section_title text-center mb-8">
            <h2 className="text-3xl font-semibold uppercase">Our Management</h2>
            <p className="text-lg text-[#707070] mt-2">
              Meet the leaders driving our success and commitment to excellence.
            </p>
            <div className="brand_border flex justify-center items-center gap-2 mt-4">
              <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
              <i className="fas fa-users text-blue-500 text-lg"></i>
              <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
            </div>
          </div>

          {/* Carousel */}
          <Carousel
            value={managementTeam}
            itemTemplate={managementTemplate}
            responsiveOptions={responsiveOptions}
            autoplayInterval={3000}
            numVisible={4}
            numScroll={1}
            showNavigators={true}
            showIndicators={true}
          />
        </div>
        <div className="section_title text-center mb-8">
          <h2 className="text-3xl font-semibold uppercase">Our Services</h2>
          <p className="text-lg text-[#707070] mt-2">
            Meet our Services and Sub services
          </p>
          <div className="brand_border flex justify-center items-center gap-2 mt-4">
            <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
            <i className="fas fa-users text-blue-500 text-lg"></i>
            <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition transform hover:scale-105 hover:bg-blue-50 flex flex-col items-center"
              data-aos="fade-up"
            >
              {/* Service Image */}
              <div className="flex justify-center items-center w-full p-4">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              {/* Service Content */}
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="text-lg font-bold text-blue-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-lg text-[#707070] mt-2">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-block bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full shadow hover:bg-blue-600 transition mt-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Our Professionals Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="font-sans text-gray-800 ">
            {/* Our Professionals Section */}
            <div className="container mx-auto px-6 py-16">
              <div className="section_title text-center mb-8">
                <h2 className="text-3xl font-semibold uppercase">
                  Our Professionals
                </h2>
                <p className="text-lg text-[#707070] mt-2">
                  Meet our team of dedicated professionals who are here to
                  assist you.
                </p>
                <div className="brand_border flex justify-center items-center gap-2 mt-4">
                  <i
                    className="fa fa-minus text-gray-400"
                    aria-hidden="true"
                  ></i>
                  <i className="fas fa-users text-blue-500 text-xl"></i>
                  <i
                    className="fa fa-minus text-gray-400"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              <Carousel
                value={consultantsData2}
                itemTemplate={consultantTemplate}
                responsiveOptions={responsiveOptions}
                autoplayInterval={2000}
                numVisible={3}
                numScroll={1}
              />
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="container mx-auto px-6 py-16">
          <div className="section_title text-center mb-8">
            <h2 className="text-3xl font-semibold uppercase">
              What Our Clients Say
            </h2>
            <p className="text-lg text-[#707070] mt-2">
              Hear from our satisfied clients about our GST and services.
            </p>
            <div className="brand_border flex justify-center items-center gap-2 mt-4">
              <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
              <i className="fas fa-comments text-blue-500 text-xl"></i>
              <i className="fa fa-minus text-gray-400" aria-hidden="true"></i>
            </div>
          </div>

          {/* Feedback Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                name: "Gokul Nadh",
                role: "CEO",
                image: gokulImage,
                rating: 4,
                feedback:
                  "Our range of services is tailored to cater to the diverse needs of individuals and businesses. From GST registration and compliance to seamless company and LLP registration, we ensure a hassle-free experience at every step.",
              },
              {
                id: 2,
                name: "Anjali Sharma",
                role: "Entrepreneur",
                image: shahamaImage,
                rating: 5,
                feedback:
                  "Their PAN and GST services have been a game changer for our business. The team is extremely professional and ensures all filings are handled efficiently. Highly recommended!",
              },
              {
                id: 3,
                name: "Rajesh Kumar",
                role: "Freelancer",
                image: vijithImage,
                rating: 5,
                feedback:
                  "The MCA and Income Tax services provided were exceptional. The process was seamless, and the team was always available for support. Couldn't have asked for a better experience.",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden p-8 flex flex-col items-center hover:shadow-xl transition transform hover:scale-105 hover:bg-blue-50"
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} Testimonial`}
                    className="w-40 h-40 rounded-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center">
                  <h3 className="text-xl font-bold text-gray-900">
                    {testimonial.name}
                  </h3>
                  <h4 className="text-md text-blue-500 mb-4">
                    {testimonial.role}
                  </h4>

                  {/* Rating */}
                  <div
                    className="rateit"
                    data-rateit-value={testimonial.rating}
                    data-rateit-readonly="true"
                  >
                    <span className="text-yellow-500 text-lg">
                      {"⭐".repeat(testimonial.rating)}
                      {testimonial.rating < 5 && "☆"}
                    </span>
                  </div>

                  {/* Feedback */}
                  <p className="text-lg text-[#707070] mt-2 text-justify">
                    {testimonial.feedback}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-transparent p-6 rounded-lg transition duration-300"
              data-aos={feature.aos}
            >
              <div className="text-center">
                <div className="mb-4 text-4xl text-blue-500 flex justify-center items-center">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-lg text-[#707070] mt-2 text-justify">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterContact />
    </div>
  );
};

export default Home;
