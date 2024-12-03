import taxpayerImage from "../assets/taxpayer.png";
import tdsImage from "../assets/tds.png";
import tcsImage from "../assets/tcs.png";
import gstPractitionerImage from "../assets/gst.png";
import nonResidentImage from "../assets/nrtp.png";
import otherServiceImage from "../assets/uin.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const GSTPaymentService = () => {
    const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: "Furnishing Payment DRC-03",
      description:
        "Assist taxpayers in furnishing payments for liabilities using DRC-03.",
      paragraph: `DRC-03 is used to voluntarily pay taxes or resolve any tax liabilities arising from proceedings under GST. It involves furnishing details of the liability and making payments towards taxes, interest, penalties, or any other dues.`,
      image: taxpayerImage,
      link: "/abouttaxpayer",
    },
    {
      id: 2,
      title: "Making GST Payment of Tax, Interest, Late Fee, and Penalty",
      description:
        "Guide businesses to make accurate GST payments, including taxes, interest, late fees, and penalties.",
      paragraph: `Taxpayers can make payments towards GST liabilities such as taxes, interest, late fees, and penalties through various modes, including online banking or challan generation (PMT-06). Ensuring timely payment avoids legal consequences and ensures compliance.`,
      image: tdsImage,
      link: "/abouttaxpayer",
    },
    {
      id: 3,
      title: "Payment Challan PMT-06",
      description:
        "Support for generating and managing GST payment challans using PMT-06.",
      paragraph: `PMT-06 is used to generate GST payment challans for depositing funds into the GST electronic cash ledger. It is essential for accurate and timely payments for tax liabilities under GST.`,
      image: tcsImage,
      link: "/abouttaxpayer",
    },
    {
      id: 4,
      title: "Penalty and Late Fee Payments",
      description:
        "Specialized support for handling penalty and late fee payments efficiently.",
      paragraph: `Penalty and late fee payments under GST arise due to non-compliance or delays in filing returns. Understanding and addressing these liabilities promptly can mitigate further penalties and interest.`,
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
        <strong className="text-blue-600">GST Payment Services</strong>
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
  )
}

export default GSTPaymentService
