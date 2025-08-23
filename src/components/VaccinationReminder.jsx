// src/components/VaccineReminder.jsx
import React from "react";
import { useTheme } from '../context/ThemeContext';

const dummyReminders = [
  { name: "MMR", dueDate: "2025-08-02" },
  { name: "Typhoid", dueDate: "2025-08-10" },
  { name: "Influenza", dueDate: "2025-07-25" },
];

const VaccineReminder = () => {
  const { theme } = useTheme();
  const today = new Date();

  const getStatus = (dueDate) => {
    const due = new Date(dueDate);
    return due < today ? "overdue" : "upcoming";
  };

  return (
  <div className={`bg-yellow-50 rounded-lg p-4 mb-6 shadow-sm ${theme === 'dark' ? 'dark' : ''}`}>
      <h3 className="text-lg font-semibold mb-3 text-yellow-900">
        🕒 Upcoming Vaccine Reminders
      </h3>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-700 border-b">
            <th className="py-2">Vaccine</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyReminders.map((vaccine, index) => {
            const status = getStatus(vaccine.dueDate);
            return (
              <tr key={index} className="border-b">
                <td className="py-2">{vaccine.name}</td>
                <td>{vaccine.dueDate}</td>
                <td className={status === "overdue" ? "text-red-600" : "text-green-600"}>
                  {status === "overdue" ? "Overdue" : "Upcoming"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default VaccineReminder;
