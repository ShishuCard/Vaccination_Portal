import React, { useState } from 'react';
import vaccine from "../../vaccine.json"
const VaccineModal = ({ isOpen, onClose, onSubmit }) => {
  const [selectedVaccines, setSelectedVaccines] = useState(
    vaccine.map(v => ({ ...v }))
  );

  const handleCheckboxChange = (index) => {
    const updated = [...selectedVaccines];
    updated[index].done = !updated[index].done;
    setSelectedVaccines(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedVaccines);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-3xl shadow-xl relative">
        <h2 className="text-2xl font-semibold mb-4">Update Vaccination Records</h2>

        <form onSubmit={handleSubmit}>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Vaccine Name</th>
                  <th className="border px-4 py-2">Done</th>
                </tr>
              </thead>
              <tbody>
                {selectedVaccines.map((vaccine, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{vaccine.name}</td>
                    <td className="border px-4 py-2">
                      <input
                        type="checkbox"
                        checked={vaccine.done}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VaccineModal;
