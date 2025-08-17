import React from 'react'
import { Lock, ShieldCheck, Info } from 'lucide-react'

const PrivacyPolicy = () => {
  return (
  <div className={`max-w-5xl mx-auto px-6 py-16 bg-white dark:bg-gray-900 shadow-lg rounded-2xl mt-8 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="text-center mb-10">
        <Lock className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
        <h1 className="text-4xl font-extrabold text-indigo-700 dark:text-indigo-300">Privacy Policy</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          At 🛡️ Child Vaccination Portal, your privacy matters. Here's how we handle your personal data with care.
        </p>
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Parent and child name, age, and contact details</li>
          <li>Vaccination dates, types, and medical history</li>
          <li>Device information (e.g., IP address, browser type)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Track vaccinations and send reminders</li>
          <li>Generate vaccine records via QR codes</li>
          <li>Improve user support through the chatbot</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-300 mb-2">3. Data Security</h2>
        <p className="text-gray-700 dark:text-gray-200">
          Your data is securely stored using Firebase. We adhere to strict industry standards to protect your personal information from unauthorized access or breaches.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">4. Your Rights</h2>
        <p className="text-gray-700">
          You have the right to view, update, or delete your information at any time. Please reach out to our support team for assistance.
        </p>
      </section>

      <div className="text-sm text-gray-500 text-center border-t pt-6">
        <p>Last updated: July 27, 2025</p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
