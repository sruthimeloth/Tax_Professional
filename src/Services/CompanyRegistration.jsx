import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterContact from "../Pages/FooterContact";
import oocompanyreg from "../assets/00companyreg.png";
import registrationImage from "../assets/registration.png";
import { useNavigate } from "react-router-dom";

const CompanyRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const companyCardData = [
    {
      id: 1,
      title: "Company Incorporation",
      description:
        "Register your company with ease under the Companies Act and get all legal compliance handled.",
      paragraph: `Company incorporation involves registering a business with the Ministry of Corporate Affairs (MCA) as a legal entity under the Companies Act. This ensures compliance with laws and provides a unique Corporate Identity Number (CIN).`,
      image: oocompanyreg,
      link:  "/abouttaxpayer", 
    },
    {
      id: 2,
      title: "Annual Compliance Service",
      description:
        "Stay compliant with the Ministry of Corporate Affairs by filing annual returns and documents.",
      paragraph: `Ensure that your company complies with annual filing requirements as per the Companies Act, including filing annual returns and financial statements with the MCA.`,
      image: oocompanyreg,
      link:  "/abouttaxpayer", 
    },
    {
      id: 3,
      title: "Amendment Services",
      description:
        "Update company details such as directors, address, or authorized capital with MCA amendment services.",
      paragraph: `Amendment services allow you to update your company's records, including changes to the address, director, or authorized capital, with the Ministry of Corporate Affairs.`,
      image: oocompanyreg,
      link:  "/abouttaxpayer", 
    },
    {
      id: 4,
      title: "Company Closure Service",
      description:
        "Close your company legally through a smooth and compliant process.",
      paragraph: `When you decide to close your business, we assist you in legally dissolving your company, ensuring all necessary filings with MCA are done to avoid liabilities.`,
      image: oocompanyreg,
      link:  "/abouttaxpayer", 
    },
    {
      id: 5,
      title: "Other Company Services",
      description:
        "Explore other essential services like obtaining Director Identification Number (DIN) and Digital Signature Certificate (DSC).",
      paragraph: `Our additional services include obtaining DIN, DSC, and other necessary certificates for your business operations under the Companies Act.`,
      image: oocompanyreg,
      link:  "/abouttaxpayer", 
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
        <strong className="text-3xl font-semibold">Company Registration & Incorporation</strong>
      </h2>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {companyCardData.map((card) => (
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
              <p className="text-lg text-[#707070] mt-2 text-center mb-4">
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

export default CompanyRegistration;
