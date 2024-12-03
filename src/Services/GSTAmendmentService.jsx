import taxpayerImage from "../assets/taxpayer.png";
import tdsImage from "../assets/tds.png";
import tcsImage from "../assets/tcs.png";
import gstPractitionerImage from "../assets/gst.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const GSTAmendmentService = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: "Amendment in Core Fields",
      description:
        "Support for making amendments to core fields in GST registration details.",
      paragraph: `Amendments in core fields allow taxpayers to update critical information such as business name, principal address, or addition of new premises. Accurate amendments ensure compliance with GST laws and maintain the validity of the GST registration.`,
      image: taxpayerImage,
      link: "/abouttaxpayer",
    },
    {
      id: 2,
      title: "Amendment in Non-Core Fields",
      description:
        "Guidance for updating non-core details in GST registration effortlessly.",
      paragraph: `Non-core fields include minor details like contact information, email IDs, or authorized signatory details. These amendments are simpler and do not require approval from GST authorities in most cases.`,
      image: tdsImage,
      link: "/abouttaxpayer",
    },
    {
      id: 3,
      title: "Change in Business Structure",
      description:
        "Expert assistance for making amendments due to changes in the business structure.",
      paragraph: `Changes in business structure, such as conversion from proprietorship to partnership, require careful amendments in GST registration to reflect the new entity type and updated details.`,
      image: tcsImage,
      link: "/abouttaxpayer",
    },
    {
      id: 4,
      title: "Amendment Due to Errors",
      description:
        "Support for correcting errors in GST registration or filing details.",
      paragraph: `Mistakes made during GST registration or previous amendments can be rectified through the amendment process, ensuring that records are accurate and compliant.`,
      image: gstPractitionerImage,
      link: "/abouttaxpayer",
    },
  ];

  const handleNavigate = (card) => {
    navigate(`${card.link}`, { state: { cardDetails: card } });
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        <strong className="text-blue-600">GST Amendment Services</strong>
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <a
            key={card.id}
            onClick={() => handleNavigate(card)}
            className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
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
              <p className="text-gray-600 text-center text-sm mb-4">
                {card.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GSTAmendmentService;
