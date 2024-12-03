import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterContact from "../Pages/FooterContact";
import oollpregistration from "../assets/00llpregistration.png";
import { useNavigate } from "react-router-dom";

const LLPRegistrationPage = () => {
  const navigate = useNavigate();


  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const llpCardData = [
    {
      id: 1,
      title: "LLP Registration Service",
      description:
        "Register your Limited Liability Partnership (LLP) with ease, ensuring compliance with all legal requirements.",
        paragraph: ` LLP Registration  is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: oollpregistration,
      link: "/abouttaxpayer", 
    },
    {
      id: 2,
      title: "LLP Agreement Drafting",
      description:
        "Draft a comprehensive LLP agreement tailored to your business needs to define rights and responsibilities.",
        paragraph: ` LLP Registration  is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: oollpregistration,
      link: "/abouttaxpayer", 
    },
    {
      id: 3,
      title: "Annual Compliance for LLP",
      description:
        "Stay on top of annual compliance requirements for your LLP, including filing and reporting.",
        paragraph: ` LLP Registration  is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: oollpregistration,
      link: "/abouttaxpayer", 
    },
    {
      id: 4,
      title: "LLP Amendment Services",
      description:
        "Update your LLP's registration details, such as name, address, or partners, with our amendment services.",
        paragraph: `LLP Registration  is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image:oollpregistration,
      link: "/abouttaxpayer", 
    },
    {
      id: 5,
      title: "LLP Closure Service",
      description:
        "Close your LLP legally and smoothly with expert guidance to avoid any future liabilities.",
        paragraph: ` LLP Registration  is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: oollpregistration,
      link: "/abouttaxpayer", 
    },
  ];

  const handleNavigate = (card) => {
    navigate(`${card.link}`, { state:{cardDetails:card }});
  };

  return (
    <div className="bg-gradient-to-l from-gray-200 to-violet-100 py-12 px-4">
      {/* Heading */}
      <h2
        className="text-4xl font-extrabold text-center text-gray-800 mb-12"
        data-aos="fade-up"
      >
        <strong className="text-3xl font-semibold">LLP Registration</strong>
      </h2>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {llpCardData.map((card) => (
          <a
            key={card.id}
            // href={card.link}
            onClick={() => handleNavigate(card)}
            className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:bg-blue-100"
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

export default LLPRegistrationPage;
