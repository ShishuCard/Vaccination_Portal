import React, { useRef } from 'react';
import printJS from 'print-js';
import logo from '../assets/Logo.png';
import defaultProfile from '../assets/3.jpg';

export default function ChildProfile({ data }) {
  const printRef = useRef();

  const child = data ? Object.values(data)[0] : null;
  if (!child) return null;

  const {
    childName,
    childId,
    dob,
    gender,
    birthplace,
    hospitalName,
    doctorName,
    motherName,
    motherPhone,
    fatherName,
    fatherPhone,
    vaccinations = [],
  } = child;

  const handlePrint = () => {
    printJS({
      printable: 'printable-area',
      type: 'html',
      targetStyles: ['*'],
      documentTitle: `${childName || 'Vaccination'}-Profile`,
    });
  };

  return (
    <div>
      {/* Content to print */}
      <div
        id="printable-area"
        ref={printRef}
        className="max-w-5xl mx-auto bg-white p-10 text-black font-sans"
      >
        {/* Header */}
        <header className="flex items-center justify-between border-b-2 border-gray-800 pb-4 mb-8">
          <img src={logo} alt="Logo" className="h-16" />
          <div className="text-center flex-1">
            <h1 className="text-2xl font-semibold">{childName}'s Vaccination Profile</h1>
            <p className="text-sm text-gray-600">ID: {childId}</p>
          </div>
          <div className="text-right">
            <img
              src={defaultProfile}
              alt="Profile"
              className="w-16 h-16 rounded-full mt-2 object-cover"
            />
          </div>
        </header>

        {/* Child Info */}
        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">
            Child Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-base">
            <div><strong>Child ID:</strong> {childId}</div>
            <div><strong>Date of Birth:</strong> {dob}</div>
            <div><strong>Gender:</strong> {gender}</div>
            <div><strong>Birthplace:</strong> {birthplace}</div>
            <div><strong>Hospital:</strong> {hospitalName}</div>
            <div><strong>Doctor:</strong> {doctorName}</div>
            <div><strong>Mother's Name:</strong> {motherName}</div>
            <div><strong>Mother's Phone:</strong> {motherPhone}</div>
            <div><strong>Father's Name:</strong> {fatherName}</div>
            <div><strong>Father's Phone:</strong> {fatherPhone}</div>
          </div>
        </section>

        {/* Vaccination Table */}
        <section>
          <h3 className="text-xl font-semibold mb-2 border-b border-gray-300 pb-1">
            Vaccination Records
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border border-black mt-3">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-black px-4 py-2 text-left">Vaccine</th>
                  <th className="border border-black px-4 py-2 text-left">Age</th>
                  <th className="border border-black px-4 py-2 text-left">Done</th>
                </tr>
              </thead>
              <tbody>
                {vaccinations.map((vaccine, index) => (
                  <tr key={index}>
                    <td className="border border-black px-4 py-2">{vaccine.name}</td>
                    <td className="border border-black px-4 py-2">{vaccine.age}</td>
                    <td className="border border-black px-4 py-2">
                      <input type="checkbox" checked={vaccine.done} readOnly />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Print Button */}
      <div className="text-center mt-6">
        <button
          onClick={handlePrint}
          className="bg-black text-white px-6 py-2 rounded-md text-lg hover:bg-gray-800 transition"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
}
