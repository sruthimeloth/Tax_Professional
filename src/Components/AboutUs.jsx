import React from "react";
import About from "../assets/About_x.jpg";
import AboutusPage from "../assets/About-us-page.gif";
import Company from "../assets/company.gif";
import OurTeam from "../Pages/OurTeam";
import { FaUserClock, FaShippingFast, FaHandHoldingUsd } from "react-icons/fa";
import CountUp from "react-countup";
import { Carousel } from "primereact/carousel";

const AboutUs = () => {

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 3, numScroll: 1 },
    { breakpoint: "1024px", numVisible: 2, numScroll: 1 },
    { breakpoint: "768px", numVisible: 1, numScroll: 1 },
  ];

  return (
    <div className="mx-auto bg-gradient-to-l from-gray-200 to-violet-100">
      {/* Top Section with Background Image */}
      <div className="mb-8 relative flex justify-center items-center">
        <img src={About} alt="About Us" className="w-full h-64 object-cover" />
        <h2 className="text-5xl font-semibold mb-4 text-center absolute text-black">
          About Us
        </h2>
      </div>

      {/* Content and Image Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-36 justify-center mb-8">
        {/* Left: Content */}
        <div className="md:w-1/2 p-4 text-justify">
          <p className="text-lg text-[#707070] leading-relaxed">
            At BRQ Associates, we are committed to providing exceptional service
            and innovative solutions. Our team of experts is dedicated to
            helping our clients achieve their goals through tailored strategies
            and high-quality execution.
          </p>
          <p className="mt-4 text-lg text-[#707070] leading-relaxed">
            Founded in 2014, our company has grown to become a leader in the
            industry, known for its integrity, transparency, and commitment to
            excellence. We take pride in our ability to adapt to changing market
            conditions and deliver results that matter.
          </p>
          <p className="mt-4 text-lg  text-[#707070] leading-relaxed">
            Our approach combines deep industry knowledge with cutting-edge
            technology and best practices to create value for our clients. We
            believe that collaboration and continuous improvement are key to our
            success, and we work closely with our clients to understand their
            unique needs and challenges.
          </p>
        </div>

        {/* Right: Image */}
        <div className="md:w-5/12 p-4 flex justify-center">
          <img
            src={AboutusPage}
            alt="About Us Page Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-36 justify-center mb-8">
        <div className="md:w-5/12 p-4 flex justify-center">
          <img
            src={Company}
            alt="About Us Page Illustration"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 p-4 text-justify">
          <p className="text-lg text-[#707070] leading-relaxed">
          An in-depth survey of the market, conducted by us, revealed that
                most of the professionals in the field like Chartered
                Accountants (CA), Company Secretaries (CS), Tax Practitioners,
                Advocates (dealing in Tax matters), do not have a single
                software which contains all the modules for running and managing
                the administration of the establishment and the functions
                required to be undertaken by the tax professional / firm of tax
                professional’s for their clients. Because of this, these Tax
                professional / firm of tax professionals are forced to depend on
                multiple software’s for affecting various required functions
                relating to clients' business.
           
          </p>
        </div>

        {/* Right: Image */}

      </div>
      <div className="container mx-auto px-4 py-8">
       

        {/* Counter Section */}
        <div className="row mt-8 space-y-6 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
          {/* Professionals */}
          <div
            className="counter-card text-center text-secondary"
            data-aos="zoom-in-left"
          >
            <i className="fa fa-user text-5xl text-blue-600 mb-4"></i>
            <div className="title">
              <h3 className="counter text-3xl font-bold text-gray-800">
                <CountUp end={3834} duration={15} />
              </h3>
            </div>
            <div className="text">
              <span className="text-lg text-gray-600">Professionals</span>
            </div>
          </div>

          {/* Customers */}
          <div
            className="counter-card text-center text-secondary"
            data-aos="zoom-in-left"
          >
            <i className="fa fa-users text-8xl text-blue-600 mb-4"></i>
            <div className="title">
              <h3 className="counter text-3xl font-bold text-gray-800">
                <CountUp end={13360} duration={15} />
              </h3>
            </div>
            <div className="text">
              <span className="text-lg text-gray-600">Customers</span>
            </div>
          </div>

          {/* Business */}
          <div
            className="counter-card text-center text-secondary"
            data-aos="zoom-in-left"
          >
            <i className="fas fa-users text-5xl text-blue-600 mb-4"></i>
            <div className="title">
              <h3 className="counter text-3xl font-bold text-gray-800">
                <CountUp end={44924} duration={15} />
              </h3>
            </div>
            <div className="text">
              <span className="text-lg text-gray-600">Business</span>
            </div>
          </div>
        </div>
      </div>

      <OurTeam />
      {/* First Row */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="col-lg-4 col-md-4 col-sm-6" data-aos="zoom-in-left">
          <div className="about_item bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-2">
              Who <span className="text-blue-500">We Are?</span>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Contextual advertising programs sometimes have strict policies
              that need to be adhered to. Let’s take Google as an example.
            </p>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-lg-4 col-md-4 col-sm-6" data-aos="zoom-in-right">
          <div className="about_item bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-2">
              What <span className="text-blue-500">We Do?</span>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              We provide innovative tax solutions and financial strategies
              tailored to our client's unique needs, ensuring optimal results
              and compliance.
            </p>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-lg-4 col-md-4 col-sm-6" data-aos="zoom-in-left">
          <div className="about_item bg-gray-100 p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-bold mb-2">
              Why <span className="text-blue-500">Choose Us?</span>
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Our team is dedicated to delivering exceptional service,
              leveraging technology, and industry expertise to meet and exceed
              your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Column 1 */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in-left">
          <div className="media features bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="icon mb-4 text-4xl text-blue-500">
              <FaUserClock />
            </div>
            <div className="media-body">
              <h3 className="heading text-2xl font-bold mb-3">24 x 7</h3>
              <p className="text-gray-600 leading-relaxed">
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in-right">
          <div className="media features bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="icon mb-4 text-4xl text-blue-500">
              <FaShippingFast />
            </div>
            <div className="media-body">
              <h3 className="heading text-2xl font-bold mb-3">Quick Access</h3>
              <p className="text-gray-600 leading-relaxed">
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="col-md-6 col-lg-4" data-aos="zoom-in-left">
          <div className="media features bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="icon mb-4 text-4xl text-blue-500">
              <FaHandHoldingUsd />
            </div>
            <div className="media-body">
              <h3 className="heading text-2xl font-bold mb-3">
                Affordable Price
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
