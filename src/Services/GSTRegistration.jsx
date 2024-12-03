import React from "react";
import taxpayerImage from "../assets/taxpayer.png";
import tdsImage from "../assets/tds.png";
import tcsImage from "../assets/tcs.png";
import gstPractitionerImage from "../assets/gst.png";
import nonResidentImage from "../assets/nrtp.png";
import otherServiceImage from "../assets/uin.png";
import { useNavigate } from "react-router-dom";
import FooterContact from "../Pages/FooterContact";

const GSTRegistration = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: "Taxpayer Services",
      description:
        "Comprehensive services for taxpayers to ensure smooth GST compliance and operations.",
      paragraph: ` GST registration is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: taxpayerImage,
      link: "/abouttaxpayer",
    },
    {
      id: 2,
      title: "TDS Services",
      description:
        "Simplified solutions for managing Tax Deducted at Source (TDS) under GST.",
        paragraph: ` GST registration is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: tdsImage,
      link: "/abouttaxpayer", 
    },
    {
      id: 3,
      title: "TCS Services",
      description:
        "Efficient management of Tax Collected at Source (TCS) processes for your business.",
        paragraph: ` GST registration is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: tcsImage,
      link: "/abouttaxpayer", 
    },
    {
      id: 4,
      title: "GST Practitioner Services",
      description:
        "Professional services for GST practitioners to manage their compliance and registrations effectively.",
        paragraph: ` GST registration is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: gstPractitionerImage,
      link: "/abouttaxpayer", 
    },
    {
      id: 5,
      title: "Non-Resident Taxable Person Services",
      description:
        "Expert solutions for non-resident taxable persons under GST to comply with Indian tax regulations.",
        paragraph: ` GST registration is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: nonResidentImage,
      link: "/abouttaxpayer", 
    },
    {
      id: 6,
      title: "UIN-Unique Identification Number",
      description: "Make payments for credit into the electronic cash ledger.",
      paragraph: ` GST registration is a process by which a taxpayer gets himself registered under GST. Once a business is successfully registered,
            a unique registration number is assigned to them known as the Goods and Services Tax Identification Number. 
            This is a 15-digit number that consists of a 15-digit identification number. The allocation of the number to the taxpayer
            is based on the PAN and State of the applicant. In a GST registration number, the first two digits represent the State Code.
            The following next 10 digits represent the PAN of the applicant. In addition, one digit represents the entity code,
            one digit is left blank, and the last digit is a check digit assigned by the central government after the taxpayers obtain
            registration.`,
      image: otherServiceImage,
      link: "/abouttaxpayer", 
    },
  ];

  const handleNavigate = (card) => {
    navigate(`${card.link}`, { state:{cardDetails:card }});
  };

  return (
    <div className="bg-gradient-to-l from-gray-200 to-violet-100 py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        <strong className="text-3xl font-semibold">GST Registration Services</strong>
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
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
              <p className="text-lg text-[#707070] mt-2 text-center  mb-4">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
      <FooterContact />
    </div>
  );
};

export default GSTRegistration;
