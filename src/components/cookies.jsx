import React from 'react'
import { ShieldCheck, Cookie, Settings2 } from 'lucide-react'

const CookiePolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 bg-white shadow-lg rounded-2xl mt-8">
      <div className="text-center mb-10">
        <ShieldCheck className="w-12 h-12 text-indigo-600 mx-auto mb-2" />
        <h1 className="text-4xl font-extrabold text-indigo-700">Cookie Policy</h1>
        <p className="text-gray-600 mt-2">
          How we use cookies to improve and secure your experience on the 🛡️ Child Vaccination Portal.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">1. What Are Cookies?</h2>
        <p className="text-gray-700">
          Cookies are small text files stored on your device to remember your preferences and enhance portal
          functionality. They help us deliver a smoother and more personalized experience.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">2. Types of Cookies We Use</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Essential Cookies:</strong> Required for login, authentication, and secure access.
          </li>
          <li>
            <strong>Performance Cookies:</strong> Help us analyze usage patterns to improve speed and reliability.
          </li>
          <li>
            <strong>Functional Cookies:</strong> Remember your preferences such as theme or language.
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">3. Managing Cookies</h2>
        <p className="text-gray-700">
          You can disable cookies through your browser settings at any time. However, doing so may limit your access to certain features of the portal.
        </p>
      </section>

      <div className="text-sm text-gray-500 text-center border-t pt-6">
        <p>Last updated: July 27, 2025</p>
      </div>
    </div>
  )
}

export default CookiePolicy
