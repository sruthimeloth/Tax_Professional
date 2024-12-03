import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterContact from "../Pages/FooterContact";
import oomca from "../assets/00mca.png";

import { useNavigate } from "react-router-dom";

const MCAService = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const mcaCardData = [
    {
      id: 1,
      title: "Company Incorporation Service",
      description:
        "Get expert assistance for incorporating your company with the Ministry of Corporate Affairs (MCA).",
      paragraph: `Company Incorporation under MCA involves registering a new company in India as per the Companies Act. This process includes obtaining a unique Company Identification Number (CIN) and ensuring legal compliance.`,
      image: oomca,
      link: "/abouttaxpayer", 
    },
    {
      id: 2,
      title: "Annual Compliance Service",
      description:
        "Ensure timely filing of annual returns and financial statements to stay compliant with MCA regulations.",
      paragraph: `Annual compliance ensures that your company meets all the regulatory requirements set by MCA, including submitting necessary filings like financial statements and returns.`,
      image: oomca,
      link: "/abouttaxpayer", 
    },
    {
      id: 3,
      title: "MCA Amendment Services",
      description:
        "Update company details such as address, directors, or authorized capital with MCA amendments.",
      paragraph: `Amendment services help companies update their records with MCA, ensuring accuracy in details like company address, directors, or business activities.`,
      image: oomca,
      link: "/abouttaxpayer", 
    },
    {
      id: 4,
      title: "Company Closure Service",
      description:
        "Close your company in a hassle-free manner with legal compliance and guidance.",
      paragraph: `Closing a company involves legal procedures like striking off the company's name from MCA records or initiating a liquidation process to settle liabilities.`,
      image: oomca,
      link: "/abouttaxpayer", 
    },
    {
      id: 5,
      title: "Other MCA Registrations",
      description:
        "Explore additional registrations like DIN, DSC, and other MCA compliance-related services.",
      paragraph: `MCA provides various registrations such as Director Identification Number (DIN), Digital Signature Certificate (DSC), and other compliance certifications for businesses.`,
      image: oomca,
      link: "/abouttaxpayer", 
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
        <strong className="text-3xl font-semibold">MCA Services</strong>
      </h2>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {mcaCardData.map((card) => (
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

export default MCAService;
