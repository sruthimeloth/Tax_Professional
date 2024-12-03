import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "primereact/carousel"; // Only using PrimeReact Carousel
import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.min.css";
// import "primeicons/primeicons.css";

import banner1 from "../assets/Banner/banner1.jpg";
import banner2 from "../assets/Banner/banner2.jpg";
import banner3 from "../assets/Banner/banner3.jpg";
import banner4 from "../assets/Banner/banner4.jpg";
import banner5 from "../assets/Banner/banner5.jpg";
import banner6 from "../assets/Banner/banner6.jpg";
import { Button } from "@material-tailwind/react";

const HomeImage = () => {
  const images = [
    { id: 1, src: banner1, alt: "Banner 1", title: "Expert Tax Services", description: "Welcome to BRQ, the premier tax service provider. Our team is dedicated to helping you navigate tax complexities." },
    { id: 2, src: banner2, alt: "Banner 2", title: "Tax Consultation Made Easy", description: "Book an appointment with our experts online and get assistance with all your tax-related needs." },
    { id: 3, src: banner3, alt: "Banner 3", title: "Comprehensive Financial Support", description: "Let us help you with tax planning and filing, making sure your finances are in good shape." },
    { id: 4, src: banner4, alt: "Banner 4", title: "Book Your Appointment Today", description: "Easily book a consultation at your convenience with our user-friendly online platform." },
    { id: 5, src: banner5, alt: "Banner 5", title: "Maximize Your Tax Benefits", description: "Our experts ensure that you make the most of available tax-saving options." },
    { id: 6, src: banner6, alt: "Banner 6", title: "Tailored Tax Solutions", description: "We provide personalized services to suit your unique tax and financial situation." },
  ];

  const responsiveOptions = [
    { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
    { breakpoint: "1024px", numVisible: 1, numScroll: 1 },
    { breakpoint: "768px", numVisible: 1, numScroll: 1 },
  ];

  // Template for each carousel item
  const imageTemplate = (image) => (
    <div key={image.id} className="relative h-[80vh] w-full flex items-center m-0 p-0 justify-center">
      <img
        src={image.src}
        alt={image.alt}
         loading="lazy"
        className="object-cover w-full h-full rounded-md"
      />
      <div className="absolute inset-0 bg-black/50 text-white flex justify-center items-center text-center">
        <div className="w-3/4 px-3 flex flex-col gap-6">
          <div className="text-xl font-bold uppercase lg:text-4xl">{image.title}</div>
          <div className="opacity-80 text-xs leading-5 lg:text-2xl">{image.description}</div>
          <div className="flex justify-center gap-2">
            <Button
              className="bg-blue-500 text-white px-6 py-2 text-lg"
              size="lg"
              onClick={() => handleAppointmentClick()}
            >
              Make Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const navigate = useNavigate();

  const handleAppointmentClick = () => {
    navigate("/Findconsultant"); // Navigate to the booking page
  };

  return (
    <>
      <div className="relative">
        <Carousel
          value={images}
          itemTemplate={imageTemplate}
          responsiveOptions={responsiveOptions}
          autoplayInterval={3000}
          numVisible={1}
          numScroll={1}
          showNavigators={true}
          showIndicators={true}
        />
      </div>
    </>
  );
};

export default HomeImage;
