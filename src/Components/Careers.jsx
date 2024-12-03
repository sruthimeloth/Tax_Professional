import React, { useState } from "react";
import CareersImage from "./CareersImage";
import { jobCategories, jobsData } from "./JobsData";
import { Link } from "react-router-dom";

const Careers = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const resetCategory = () => {
    setSelectedCategory(null);
  };

  const allJobs = Object.values(jobsData).flat();
  const filteredJobs = selectedCategory
    ? jobsData[selectedCategory] || []
    : allJobs;

  return (
    <div className="font-sans text-gray-800 bg-gradient-to-l from-gray-200 to-violet-100">
      <div className="relative">
        <CareersImage />
      </div>

      <div className="font-sans text-gray-800 bg-gradient-to-l from-gray-200 to-violet-100 min-h-screen p-6 flex gap-12">
        {/* Left Side: Job Categories */}
        <div className="w-1/3 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold uppercase mb-4 text-purple-600">
            Job Category
          </h2>
          <ul className="space-y-3">
            {jobCategories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`cursor-pointer p-3 rounded-lg text-lg text-[#707070] mt-2 hover:bg-purple-100 ${
                  selectedCategory === category.id
                    ? "bg-purple-200 font-bold"
                    : ""
                }`}
              >
                {category.name}
              </li>
            ))}
          </ul>
          {/* Reset Button */}
          <button
            onClick={resetCategory}
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 w-full"
          >
            Show All Jobs
          </button>
        </div>

        {/* Right Side: Job Details */}
        <div className="flex-grow">
          <h2 className="text-3xl font-semibold uppercase text-purple-600 mb-6">
            {selectedCategory
              ? jobCategories.find((cat) => cat.id === selectedCategory)?.name
              : "All Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#707070] mt-2 mb-2">
                  {job.title}
                </h3>
                <p className="text-[#707070] mt-2 text-sm mb-2">{job.location}</p>
                <p className="text-[#707070] mt-2 mb-4">
                  {job.description.length > 50
                    ? `${job.description.substring(0, 50)}...`
                    : job.description}
                </p>
                <p className="text-[#707070] mt-2 mb-2">
                  <strong>Qualification:</strong> {job.qualification}
                </p>
                <p className="text-purple-600 font-bold mb-4">{job.salary}</p>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600">
                <Link to="/cvform">Read More</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
