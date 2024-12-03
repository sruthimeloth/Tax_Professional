import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FooterContact from "../Pages/FooterContact";
import oopan from "../assets/00pan.png";
import { useNavigate } from "react-router-dom";

const PANCardRegistration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const panCardData = [
    {
      id: 1,
      title: "PAN Registration",
      description:
        "Register for your Permanent Account Number (PAN) with ease and get your unique identity for tax purposes.",
      paragraph: `PAN registration involves applying for a Permanent Account Number under the Income Tax Act to establish your identity for all tax-related activities. It is required for financial transactions like opening bank accounts, filing tax returns, and more.`,
      image: oopan, 
      link: "/abouttaxpayer", 
    },
    {
      id: 2,
      title: "PAN Correction Services",
      description:
        "Correct your PAN details with ease, whether it’s a change in name, address, or date of birth.",
      paragraph: `If you have any incorrect or outdated information on your PAN card, we assist in correcting it with the authorities to ensure your records are accurate.`,
      image: oopan,
      link: "/abouttaxpayer", 
    },
    {
      id: 3,
      title: "PAN Reprint Services",
      description:
        "Get a reprint of your PAN card if you've lost it or if it’s damaged.",
      paragraph: `If your PAN card is lost or damaged, you can apply for a reprint with updated details. Our service makes the process quick and hassle-free.`,
      image: oopan, // Updated image for PAN reprint
      link:"/abouttaxpayer", 
    },
    {
      id: 4,
      title: "Apply for Duplicate PAN Card",
      description:
        "Apply for a duplicate PAN card in case of theft or loss and get a fresh card.",
      paragraph: `In case your PAN card is lost or stolen, apply for a duplicate PAN card to maintain your tax records. This ensures you have a valid proof for all future transactions.`,
      image: oopan, // Updated image for duplicate PAN card
      link: "/abouttaxpayer", 
    },
    {
      id: 5,
      title: "Other PAN Services",
      description:
        "Explore additional PAN-related services like linking PAN with Aadhaar and more.",
      paragraph: `Our services also include linking your PAN with Aadhaar, applying for a new PAN, or making updates to your existing details.`,
      image: oopan, // Updated image for other PAN services
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
        <strong className="text-3xl font-semibold">PAN Registration Services</strong>
      </h2>

      {/* Cards Section */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        data-aos="fade-up"
      >
        {panCardData.map((card) => (
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

export default PANCardRegistration;
