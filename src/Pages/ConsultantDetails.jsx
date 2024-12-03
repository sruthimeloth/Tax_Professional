import React from 'react'
import { useNavigate } from 'react-router-dom'


const ConsultantDetails = ({selectedDepartment,departmentOptions,filteredConsultants, handleViewProfile}) => {
    const navigate = useNavigate()
  return (
    <div>
            <div className="w-full p-6">
        <h2 className="text-4xl font-bold text-cyan-600 mb-6">
          Consultants{" "}
          {selectedDepartment &&
            `in ${
              departmentOptions.find((dept) => dept.id === selectedDepartment)
                ?.name
            }`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredConsultants.map((consultant) => (
            <div
              key={consultant.id}
              className="bg-gradient-to-tr from-gray-100 via-blue-50 to-red-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105 duration-300"
              style={{ minHeight: "320px" }}
            >
              <div className="flex flex-col items-center">
                {/* Consultant Image */}
                <img
                  src={consultant.image}
                  alt={consultant.name}
                  className="w-28 h-28 rounded-full object-cover mb-4"
                />

                {/* Consultant Details */}
                <h3 className="text-lg font-bold text-gray-900">
                  {consultant.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  {consultant.department}
                </p>
                <p className="text-sm text-gray-600">{consultant.expertise}</p>
                <p className="text-sm text-gray-500 mt-1">
                  {consultant.contact}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-4 flex flex-col items-center gap-2">
                <button
                  className="px-3 py-2 bg-gradient-to-r from-blue-600 to-green-400 text-white rounded-md hover:bg-blue-700 transition-all text-sm w-full"
                  onClick={() => handleViewProfile(consultant)}
                >
                  View Profile
                </button>
                <button
                  className="px-3 py-2 border-2 border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-all text-sm w-full"
                  onClick={() =>
                    navigate("/book-appointment", {
                      state: {
                        consultantName: consultant.name,
                        departmentName: consultant.department,
                        expertise:consultant.expertise

                      },
                    })
                  }
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ConsultantDetails
