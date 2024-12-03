import React from "react";
import registerImage from "../assets/registration.png";
import returnFilingImage from "../assets/taxreturn.png";
import complianceImage from "../assets/extension.png";
import paymentImage from "../assets/gstpayment.png";
import amendmentImage from "../assets/amendment.png";
import cancellationImage from "../assets/gstcancel.png";
import { Link } from "react-router-dom";
import FooterContact from "../Pages/FooterContact";

const GSTPage = () => {
  const cardData = [
    {
      id: 1,
      title: "GST Registration Application Service",
      description:
        "GST registration is a process by which a taxpayer gets himself registered under GST. After successful registration, you will get a unique GSTIN.",
      image: registerImage,
      link: "/gstregistration",
    },
    {
      id: 2,
      title: "GST Return Filing Service",
      description:
        "Ensure timely GST return filing to avoid penalties and maintain compliance with GST laws for your business.",
      image: returnFilingImage,
      link: "/gstreturnfiling",
    },
    {
      id: 3,
      title: "GST Compliance & Advisory",
      description:
        "Get expert advice on GST compliance, amendments, and updates to keep your business on track.",
      image: complianceImage,
      link: "/gstpaymentservice",
    },
    {
      id: 4,
      title: "GST Payment Services",
      description:
        "Simplify your GST payment process with our expert assistance to ensure timely and accurate tax payments.",
      image: paymentImage,
      link: "/gstpaymentservice",
    },
    {
      id: 5,
      title: "GST Amendment Application Services",
      description:
        "Handle changes in GST registration details with ease using our GST amendment services.",
      image: amendmentImage,
      link: "/gstamendmentservice",
    },
    {
      id: 6,
      title: "GST Cancellation Application Services",
      description:
        "Get guidance on GST cancellation processes for businesses that no longer require GST registration.",
      image: cancellationImage,
      link: "/gstcancellationapplicationservice",
    },
  ];

  return (
    <div className="bg-gradient-to-l from-gray-200 to-violet-100 py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        <strong className="text-3xl font-semibold uppercase">GST – GOODS AND SERVICE TAX</strong>
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card) => (
          <a
            key={card.id}
            href={card.link}
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
      <FooterContact />
    </div>
  );
};

export default GSTPage;
