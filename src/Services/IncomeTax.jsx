import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterContact from "../Pages/FooterContact";
import ooincometax from "../assets/00incometax.png";
import { useNavigate } from "react-router-dom";

const IncomeTaxServices = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const incomeTaxCardData = [
    {
      id: 1,
      title: "Income Tax Filing",
      description:
        "File your Income Tax Returns accurately and on time with expert guidance.",
      paragraph: `Income Tax Filing involves submitting your income details to the Income Tax Department for a financial year. We assist you in filing accurate returns while maximizing your eligible deductions.`,
      image: ooincometax,
      link:"/abouttaxpayer", 
    },
    {
      id: 2,
      title: "Tax Planning Services",
      description:
        "Plan your taxes efficiently to save money and comply with tax regulations.",
      paragraph: `Tax planning helps you reduce your tax liability by making use of various exemptions and deductions available under the Income Tax Act. Get personalized tax-saving strategies from our experts.`,
      image: ooincometax,
      link:"/abouttaxpayer", 
    },
    {
      id: 3,
      title: "TDS Filing Services",
      description:
        "Ensure timely and accurate filing of Tax Deducted at Source (TDS) returns.",
      paragraph: `TDS filing is mandatory for entities deducting tax at source on specified payments. We provide hassle-free TDS return filing services, ensuring compliance with government regulations.`,
      image: ooincometax,
      link:"/abouttaxpayer", 
    },
    {
      id: 4,
      title: "Tax Notice Assistance",
      description:
        "Get expert help to respond to Income Tax notices effectively.",
      paragraph: `Have you received a tax notice? Don’t worry. Our team will analyze the notice and provide a detailed response to help resolve the issue with the Income Tax Department.`,
      image: ooincometax,
      link:"/abouttaxpayer", 
    },
    {
      id: 5,
      title: "Other Income Tax Services",
      description:
        "Explore additional services like applying for refunds, rectifications, and more.",
      paragraph: `We also assist with Income Tax refunds, rectifications of filed returns, and other tax-related requirements to ensure smooth compliance.`,
      image: ooincometax,
      link:"/abouttaxpayer", 
    },
  ];

  const handleNavigate = (card) => {
    navigate(`${card.link}`, { state: { cardDetails: card } });
  };

  return (
    <div className="bg-gradient-to-l from-gray-200 to-violet-100 py-12 px-4">
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        <strong className="text-3xl font-semibold">Income Tax Services</strong>
      </h2>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {incomeTaxCardData.map((card) => (
          <a
            key={card.id}
            onClick={() => handleNavigate(card)}
            className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-blue-100 cursor-pointer"
          >
            <div className="p-6 flex flex-col items-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-24 h-24 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h4 className="text-xl font-bold text-gray-700 mb-2 group-hover:text-blue-600">
                {card.title}
              </h4>
              <p className="text-lg text-[#707070] mt-2 text-center  mb-4">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Footer Contact */}
      <div data-aos="fade-up">
        <FooterContact />
      </div>
    </div>
  );
};

export default IncomeTaxServices;
