import React from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Button } from "@material-tailwind/react";

import careers1 from "../assets/Careers/careers1.jpg";
import careers2 from "../assets/Careers/careers2.jpg";
import careers3 from "../assets/Careers/careers3.jpg";
const images = [
  {
    id: 1,
    src: careers1,
    alt: "Careers1",
    title: "EXPLORE FOR OPPORTUNITIES HERE",
    description: "Welcome to BRQ, Your Potential Maximized",
  },
  {
    id: 2,
    src: careers2,
    alt: "Careers2",
    title: "EXPLORE FOR OPPORTUNITIES HERE",
    description: "Welcome to BRQ,Your Ideas Maximized",
  },
  {
    id: 3,
    src: careers3,
    alt: "Careers3",
    title: "EXPLORE FOR OPPORTUNITIES HERE",
    description: "Welcome to BRQ,Your Well being Maximized",
  },
];

const responsiveOptions = [
  { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
  { breakpoint: "1024px", numVisible: 1, numScroll: 1 },
  { breakpoint: "768px", numVisible: 1, numScroll: 1 },
];
const CareersImage = () => {
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
              onClick={() => handleCareerClick()}
            >
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  const navigate = useNavigate();

  const handleCareerClick = () => {
    navigate("/"); 
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


export default CareersImage;
