import React, { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; // Import AOS styles
import sruthiImage from "../assets/sruthi.jpg";
import shahamaImage from "../assets/shashama.jpg";
import gokulImage from "../assets/gokul.jpg";
import vijithImage from "../assets/vijith.jpg";

const teamMembers = [
  {
    name: 'Gokul Nadh',
    position: 'Chief Executive Officer',
    image: gokulImage,
    description: 'Leading the company with over 20 years of experience in the industry.',
  },
  {
    name: 'Sruthi M',
    position: 'Project Manager',
    image: sruthiImage,
    description: 'Ensuring the timely and efficient delivery of our projects.',
  },
  {
    name: 'Vijith K V',
    position: 'Lead Developer',
    image: vijithImage,
    description: 'Specialist in creating innovative solutions for complex problems.',
  },
  {
    name: 'Shahama S',
    position: 'UI/UX Designer',
    image: shahamaImage,
    description: 'Crafting user-friendly and visually appealing designs.',
  },
];

const OurTeam = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mx-auto py-16 bg-gradient-to-b from-violet-200 via-blue-100 to-violet-200 bg-opacity-15">
      {/* Title Section */}
      <div className="text-center mb-12 text-gray-800">
        <h2
          className="text-3xl font-semibold uppercase"
          data-aos="fade-up"
        >
          Our Team
        </h2>
        <p
          className="text-gray-600 mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Developed by professionals for the professionals!
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-12 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-all duration-500 hover:scale-105 hover:bg-gray-100"
            data-aos="fade-up"
            data-aos-delay={`${index * 200}`}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 mx-auto rounded-full object-cover mb-4 shadow-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <h4 className="text-sm text-gray-500">{member.position}</h4>
            <p className="mt-3 text-gray-700">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
