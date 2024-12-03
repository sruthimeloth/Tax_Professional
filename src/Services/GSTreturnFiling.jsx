import taxpayerImage from "../assets/taxpayer.png";
import tdsImage from "../assets/tds.png";
import tcsImage from "../assets/tcs.png";
import gstPractitionerImage from "../assets/gst.png";
import nonResidentImage from "../assets/nrtp.png";
import otherServiceImage from "../assets/uin.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const GSTreturnFiling = () => {

    const navigate = useNavigate();

    const cardData = [
      {
        id: 1,
        title: "Annual Returns",
        description:
          "Detailed filing solutions for annual GST returns to ensure accurate compliance.",
        paragraph: `Filing annual GST returns involves submitting detailed information about a business's inward and outward supplies, tax paid, and credits availed during a financial year. These returns consolidate all monthly or quarterly filings and must be filed accurately to avoid penalties.`,
        image: taxpayerImage,
        link: "/abouttaxpayer",
      },
      {
        id: 2,
        title: "Monthly Returns",
        description:
          "Efficient solutions for filing monthly GST returns in a timely manner.",
        paragraph: `Monthly GST returns require businesses to report sales, purchases, and the amount of GST collected or paid for the month. Timely filing helps maintain compliance and avoid penalties while providing a clear financial snapshot.`,
        image: tdsImage,
        link: "/abouttaxpayer",
      },
      {
        id: 3,
        title: "One-Time Returns",
        description:
          "Comprehensive support for one-time GST return filing to meet specific requirements.",
        paragraph: `One-time GST returns are often filed for specific events, such as final tax liability declarations or amendments. These returns ensure that all unique situations are handled accurately and within legal guidelines.`,
        image: tcsImage,
        link: "/abouttaxpayer",
      },
      {
        id: 4,
        title: "Quarterly Returns",
        description:
          "Streamlined solutions for filing GST returns on a quarterly basis for eligible taxpayers.",
        paragraph: `Quarterly GST returns allow small and medium-sized businesses to report their tax obligations every three months, simplifying compliance for those with limited transactions.`,
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
      <strong className="text-blue-600">GST Return Filing Services</strong>
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

export default GSTreturnFiling
