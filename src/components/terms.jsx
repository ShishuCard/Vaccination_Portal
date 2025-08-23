import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TermsOfUse = () => {
  const { theme } = useTheme();
  return (
  <div className={`max-w-4xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 shadow-md rounded-2xl text-gray-800 dark:text-gray-100 ${theme === 'dark' ? 'dark' : ''}`}>
      <h1 className="text-5xl font-extrabold text-indigo-700 mb-8 text-center">
        Terms of Use
      </h1>

      <p className="text-lg mb-6">
        By using the 🛡️ <strong>Child Vaccination Portal</strong>, you agree to the following terms. Please read them carefully.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">1. Usage</h2>
        <p className="text-base">
          This platform is intended for lawful use by parents, guardians, and healthcare professionals managing child vaccination records.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">2. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1 text-base">
          <li>Keep login credentials confidential</li>
          <li>Provide accurate information for vaccination tracking</li>
          <li>Use the system ethically and respectfully</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">3. Intellectual Property</h2>
        <p className="text-base">
          All content and features are the property of the development team and protected under the MIT license.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">4. Limitation of Liability</h2>
        <p className="text-base">
          While we strive for accuracy, the portal does not replace professional medical advice. Always consult a certified healthcare provider.
        </p>
      </section>

      <p className="mt-10 text-sm text-gray-500 text-right">Last updated: July 27, 2025</p>
    </div>
  )
}

export default TermsOfUse
