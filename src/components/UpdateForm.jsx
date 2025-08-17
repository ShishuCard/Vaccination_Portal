import React, { useState } from 'react';
import { FaTimes, FaCheck, FaSave, FaCheckSquare, FaSquare, FaFilePdf, FaUserEdit } from 'react-icons/fa';
import vaccine from "../../vaccine.json";

const VaccineModal = ({ isOpen, onClose, onSubmit, childData }) => {
  const [selectedVaccines, setSelectedVaccines] = useState(
    childData.vaccinations.map(v => ({
      ...v,
      done: v.done,
      recommendedAge: v.recommendedAge || "Not specified" // Added recommended age field
    }))
  );

  const handleCheckboxChange = (index) => {
    const updated = [...selectedVaccines];
    updated[index].done = !updated[index].done;
    setSelectedVaccines(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedVaccines);
  };

  const handleDownloadPDF = () => {
    // PDF generation logic would go here
    console.log("Generating PDF for:", { childData, vaccines: selectedVaccines });
    alert("PDF download functionality would be implemented here");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-blue-50 dark:bg-gray-800 rounded-t-xl">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Vaccination Management</h2>
            {childData && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                For: {childData.childName} (ID: {childData.childId})
              </p>
            )}
          </div>
          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition p-2"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <form onSubmit={handleSubmit}>
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Vaccine
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Recommended Age
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {selectedVaccines.map((vaccine, index) => (
                    <tr key={index} className="hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{vaccine.name}</div>
                        <div className="text-xs text-gray-500">{vaccine.description || "Essential immunization"}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {vaccine.recommendedAge}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${vaccine.done
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                          }`}>
                          {vaccine.done ? 'Completed' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          type="button"
                          onClick={() => handleCheckboxChange(index)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          {vaccine.done ? (
                            <FaCheckSquare className="w-5 h-5 text-green-500" />
                          ) : (
                            <FaSquare className="w-5 h-5 text-gray-300 hover:text-blue-300" />
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 flex justify-between items-center">
              <div className="text-sm text-gray-500">
                {selectedVaccines.filter(v => v.done).length} of {selectedVaccines.length} vaccines completed
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
                >
                  <FaSave className="mr-2" /> Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VaccineModal;

// import { FaTimes, FaCheck, FaSave, FaCheckSquare, FaSquare, FaFilePdf, FaUserEdit } from 'react-icons/fa';
// import vaccine from "../../vaccine.json";

// // Vaccine schedule with specific ages
// const vaccineSchedule = {
//   'BCG': 'At birth',
//   'Hepatitis B (1st dose)': 'At birth',
//   'OPV (1st dose)': 'At birth',
//   'Pentavalent (1st dose)': '6 weeks',
//   'OPV (2nd dose)': '10 weeks',
//   'Pentavalent (2nd dose)': '10 weeks',
//   'OPV (3rd dose)': '14 weeks',
//   'Pentavalent (3rd dose)': '14 weeks',
//   'IPV': '14 weeks',
//   'PCV (1st dose)': '6 weeks',
//   'PCV (2nd dose)': '10 weeks',
//   'PCV (3rd dose)': '14 weeks',
//   'Rotavirus (1st dose)': '6 weeks',
//   'Rotavirus (2nd dose)': '10 weeks',
//   'Measles (1st dose)': '9 months',
//   'Vitamin A (1st dose)': '9 months',
//   'DPT booster (1st dose)': '16-24 months',
//   'OPV booster': '16-24 months',
//   'Measles (2nd dose)': '16-24 months',
//   'Vitamin A (2nd dose)': '16 months',
//   'Vitamin A (3rd to 9th dose)': 'Every 6 months until 5 years',
//   'TT (Tetanus Toxoid)': '10 years & 16 years',
//   'MMR': '15 months',
//   'Typhoid': '2 years',
//   'Chickenpox': '15 months',
//   'Hepatitis A': '1 year',
//   'Influenza': 'Yearly after 6 months'
// };

// const VaccineModal = ({ isOpen, onClose, onSubmit, childData }) => {
//   const [selectedVaccines, setSelectedVaccines] = useState(
//     vaccine.map(v => ({
//       ...v,
//       done: v.done || false,
//       recommendedAge: vaccineSchedule[v.name] || "Not specified" // Added recommended age from our schedule
//     }))
//   );

//   const handleCheckboxChange = (index) => {
//     const updated = [...selectedVaccines];
//     updated[index].done = !updated[index].done;
//     setSelectedVaccines(updated);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(selectedVaccines);
//   };

//   const handleDownloadPDF = () => {
//     // PDF generation logic would go here
//     console.log("Generating PDF for:", { childData, vaccines: selectedVaccines });
//     alert("PDF download functionality would be implemented here");
//   };

//   // Function to determine if vaccine is overdue
//   const isOverdue = (vaccineName, vaccineDone) => {
//     if (vaccineDone) return false;

//     const vaccineAge = vaccineSchedule[vaccineName];
//     if (!vaccineAge) return false;

//     // Simple check for "months" or "years" in the age string
//     if (vaccineAge.includes('months') || vaccineAge.includes('years')) {
//       const ageNum = parseInt(vaccineAge);
//       // This is a simplified check - in a real app you'd compare with the child's actual age
//       return ageNum < 2; // Example condition
//     }
//     return false;
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//       <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
//         {/* Modal Header */}
//         <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-blue-50 rounded-t-xl">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Vaccination Management</h2>
//             {childData && (
//               <p className="text-sm text-gray-600 mt-1">
//                 For: {childData.childName} (ID: {childData.childId})
//               </p>
//             )}
//           </div>
//           <div className="flex space-x-3">
//             <button
//               onClick={handleDownloadPDF}
//               className="flex items-center px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700 transition"
//             >
//               <FaFilePdf className="mr-2" /> Export
//             </button>
//             <button
//               onClick={onClose}
//               className="text-gray-500 hover:text-gray-700 transition p-2"
//             >
//               <FaTimes size={20} />
//             </button>
//           </div>
//         </div>

//         {/* Modal Body */}
//         <div className="flex-1 overflow-y-auto p-6">
//           <form onSubmit={handleSubmit}>
//             <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-100">
//                   <tr>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Vaccine
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Recommended Age
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Status
//                     </th>
//                     <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   {selectedVaccines.map((vaccine, index) => (
//                     <tr key={index} className={`hover:bg-blue-50 transition ${isOverdue(vaccine.name, vaccine.done) ? 'bg-red-50' : ''}`}>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm font-medium text-gray-900">{vaccine.name}</div>
//                         <div className="text-xs text-gray-500">{vaccine.description || "Essential immunization"}</div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <div className="text-sm text-gray-700">
//                           {vaccine.recommendedAge}
//                           {isOverdue(vaccine.name, vaccine.done) && (
//                             <span className="ml-2 text-xs text-red-600">(Overdue)</span>
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap">
//                         <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${vaccine.done
//                             ? 'bg-green-100 text-green-800'
//                             : isOverdue(vaccine.name, vaccine.done)
//                               ? 'bg-red-100 text-red-800'
//                               : 'bg-yellow-100 text-yellow-800'
//                           }`}>
//                           {vaccine.done ? 'Completed' : isOverdue(vaccine.name, vaccine.done) ? 'Overdue' : 'Pending'}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                         <button
//                           type="button"
//                           onClick={() => handleCheckboxChange(index)}
//                           className="text-blue-600 hover:text-blue-900 mr-4"
//                           aria-label={vaccine.done ? 'Mark as pending' : 'Mark as completed'}
//                         >
//                           {vaccine.done ? (
//                             <FaCheckSquare className="w-5 h-5 text-green-500" />
//                           ) : (
//                             <FaSquare className={`w-5 h-5 ${isOverdue(vaccine.name, vaccine.done) ? 'text-red-300' : 'text-gray-300 hover:text-blue-300'}`} />
//                           )}
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Modal Footer */}
//             <div className="mt-6 flex justify-between items-center">
//               <div className="text-sm text-gray-500">
//                 {selectedVaccines.filter(v => v.done).length} of {selectedVaccines.length} vaccines completed
//                 {selectedVaccines.filter(v => isOverdue(v.name, v.done)).length > 0 && (
//                   <span className="ml-3 text-red-600">
//                     ({selectedVaccines.filter(v => isOverdue(v.name, v.done)).length} overdue)
//                   </span>
//                 )}
//               </div>
//               <div className="flex space-x-3">
//                 <button
//                   type="button"
//                   onClick={onClose}
//                   className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center"
//                 >
//                   <FaSave className="mr-2" /> Save Changes
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VaccineModal;