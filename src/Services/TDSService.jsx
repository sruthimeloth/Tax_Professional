import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import FooterContact from '../Pages/FooterContact';

const TDSService = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: 'ease-in-out', once: true }); 
      }, []);
  return (
    <div className="bg-gradient-to-l from-gray-200 to-violet-100 py-12 px-4">
     
    <h2
      className="text-4xl font-extrabold text-center text-gray-800 mb-12"
      data-aos="fade-up" 
    >
      <strong className="text-3xl font-semibold">TDS-Deducted Source</strong>
    </h2>


    <div data-aos="fade-up"> 
      <FooterContact />
    </div>
  </div>
  )
}

export default TDSService