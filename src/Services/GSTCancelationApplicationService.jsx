import taxpayerImage from "../assets/taxpayer.png";
import tdsImage from "../assets/tds.png";
import tcsImage from "../assets/tcs.png";
import gstPractitionerImage from "../assets/gst.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const GSTCancelationApplicationService = () => {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: "Cancellation of GST Registration",
      description:
        "Assist businesses with the application process for cancelling their GST registration.",
      paragraph: `Cancellation of GST registration is essential when a business ceases operations or is no longer liable to pay GST. This process involves submitting an application and providing required documentation to ensure proper closure of GST compliance.`,
      image: taxpayerImage,
      link: "/abouttaxpayer",
    },
    {
      id: 2,
      title: "Voluntary Cancellation",
      description:
        "Guidance for taxpayers opting for voluntary cancellation of GST registration.",
      paragraph: `Taxpayers who are not mandated to register under GST can apply for voluntary cancellation. This process requires filing a cancellation request along with necessary proofs of exemption from GST liability.`,
      image: tdsImage,
      link:  "/abouttaxpayer",
    },
    {
      id: 3,
      title: "Cancellation Due to Non-Compliance",
      description:
        "Support for handling GST registration cancellation initiated due to non-compliance.",
      paragraph: `GST authorities may initiate cancellation due to non-filing of returns or other compliance issues. This process involves resolving compliance errors and responding to notices effectively.`,
      image: tcsImage,
      link:  "/abouttaxpayer",
    },
    {
      id: 4,
      title: "Revocation of Cancelled GST Registration",
      description:
        "Expert assistance for revoking cancelled GST registration in specific scenarios.",
      paragraph: `If GST registration is cancelled erroneously or due to unintentional non-compliance, taxpayers can apply for revocation within a stipulated time by providing proper justifications and completing pending filings.`,
      image: gstPractitionerImage,
      link:  "/abouttaxpayer",
    },
  ];

  const handleNavigate = (card) => {
    navigate(`${card.link}`, { state: { cardDetails: card } });
  };

  return (
    <div className="bg-gray-50 py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        <strong className="text-blue-600">GST Cancellation Application Services</strong>
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

export default GSTCancelationApplicationService;
