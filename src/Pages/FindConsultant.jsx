import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import ConsultantDetails from "./consultantDetails";
import { consultantsData } from "./ConsultantData";


// Department options and consultant data
const departmentOptions = [
  { id: "GST", name: "GST Consultants" },
  { id: "marketing", name: "Marketing Consultants" },
  { id: "hr", name: "HR Consultants" },
  { id: "sales", name: "Sales Consultants" },
  { id: "product", name: "Product Consultants" },
];



const FindConsultant = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleDepartmentClick = (departmentId) => {
    setSelectedDepartment(departmentId);
  };

  const allConsultants = Object.values(consultantsData).flat();

  const filteredConsultants = selectedDepartment
    ? consultantsData[selectedDepartment]
    : allConsultants;

  const navigate = useNavigate();

  const handleViewProfile = (consultant) => {
    navigate(`/view-profile/${consultant.id}`, { state: { consultant } });
  };

  return (
    <div className="flex gap-12">
      {/* Left Side: Department List */}
      <div className="w-1/4 bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 mb-6">
          Explore Our Consultants
        </h2>
        <ul className="space-y-4">
          {departmentOptions.map((department) => (
            <li
              key={department.id}
              onClick={() => handleDepartmentClick(department.id)}
              className="cursor-pointer p-3 rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {department.name}
              </h3>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side: Consultant Details */}
      <div className="w-full">
        <ConsultantDetails
          selectedDepartment={selectedDepartment}
          departmentOptions={departmentOptions}
          filteredConsultants={filteredConsultants}
          handleViewProfile={handleViewProfile}
        />
      </div>
    </div>
  );
};
export default FindConsultant;
