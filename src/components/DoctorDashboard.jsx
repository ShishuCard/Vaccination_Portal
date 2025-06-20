import React from "react";
import { FaUserMd, FaUserPlus, FaCalendarCheck } from "react-icons/fa";
import { PiSyringeBold } from "react-icons/pi";

export default function DoctorDashboard() {
  const stats = [
    { label: 'Total Appointments', value: 150, icon: <FaCalendarCheck className="text-blue-700" /> },
    { label: 'Total Patients', value: 145, icon: <FaUserPlus className="text-green-600" /> },
    { label: 'Avg. Patients Per Doctor', value: 15, icon: <FaUserMd className="text-purple-600" /> },
  ];

  const appointments = [
    { name: 'Aarav Sharma', phone: '+91 9876543210', date: '5 Jun 2025', time: '4:30 PM', doctor: 'Dr. Priya Mehta', specialization: 'Cardiologist', color: 'border-red-400' },
    { name: 'Anaya Singh', phone: '+91 9876501234', date: '5 Jun 2025', time: '1:30 PM', doctor: 'Dr. Rohan Das', specialization: 'Orthopedics', color: 'border-blue-400' },
    { name: 'Vivaan Gupta', phone: '+91 9876512345', date: '4 Jun 2025', time: '2:00 PM', doctor: 'Dr. Sneha Iyer', specialization: 'Immunology', color: 'border-purple-400' },
    { name: 'Diya Patel', phone: '+91 9876523456', date: '4 Jun 2025', time: '10:45 AM', doctor: 'Dr. Karan Malhotra', specialization: 'Endocrinology', color: 'border-green-400' },
    { name: 'Krish Verma', phone: '+91 9876534567', date: '3 Jun 2025', time: '12:00 PM', doctor: 'Dr. Rohan Das', specialization: 'Orthopedics', color: 'border-blue-400' },
  ];

  const vaccines = [
    { child: 'Aarav Sharma', vaccine: 'BCG', date: '1 Jun 2025' },
    { child: 'Anaya Singh', vaccine: 'Hepatitis B', date: '2 Jun 2025' },
    { child: 'Vivaan Gupta', vaccine: 'Polio', date: '3 Jun 2025' },
    { child: 'Diya Patel', vaccine: 'MMR', date: '4 Jun 2025' },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-6 md:p-10">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-950">Doctor Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for patients..."
            className="px-6 py-2 w-64 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div className="h-10 w-10 rounded-full bg-gray-200"></div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-5 flex items-center space-x-4 hover:shadow-xl transition">
            <div className="text-3xl">{stat.icon}</div>
            <div>
              <p className="text-xl font-bold text-blue-900">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Vaccine Records */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-950 flex items-center gap-2">
          <PiSyringeBold className="text-pink-600" /> Vaccine Records
        </h2>
        <div className="grid grid-cols-3 font-semibold text-sm border-b pb-2 mb-2 text-gray-600">
          <div>Child Name</div>
          <div>Vaccine</div>
          <div>Date Given</div>
        </div>
        {vaccines.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-3 text-sm items-center py-3 border-b last:border-none ${index % 2 === 0 ? 'bg-gray-50' : ''}`}
          >
            <div className="font-medium text-blue-950">{item.child}</div>
            <div>{item.vaccine}</div>
            <div>{item.date}</div>
          </div>
        ))}
      </div>

      {/* Appointments Table */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-950">Appointments</h2>
        <div className="grid grid-cols-5 font-semibold text-sm border-b pb-2 mb-2 text-gray-600">
          <div>Patient</div>
          <div>Date</div>
          <div>Time</div>
          <div>Doctor</div>
          <div>Specialist</div>
        </div>
        {appointments.map((appt, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 text-sm items-center py-3 border-b last:border-none ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}
          >
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-10 rounded-l-sm ${appt.color}`}></div>
              <div>
                <p className="font-medium text-blue-950">{appt.name}</p>
                <p className="text-xs text-gray-500">{appt.phone}</p>
              </div>
            </div>
            <div>{appt.date}</div>
            <div>{appt.time}</div>
            <div>{appt.doctor}</div>
            <div>{appt.specialization}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
