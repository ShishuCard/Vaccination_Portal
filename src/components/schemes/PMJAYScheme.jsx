import React from 'react';
import { FaArrowLeft, FaShieldAlt, FaUsers, FaRupeeSign, FaHospital, FaIdCard, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PMJAYScheme = () => {
    const eligibilityData = [
        { category: 'Rural Areas', criteria: 'SECC 2011 deprivation criteria', families: '8.03 crore' },
        { category: 'Urban Areas', criteria: '11 defined occupational categories', families: '2.33 crore' },
        { category: 'Total Coverage', criteria: 'Bottom 40% of population', families: '10.74 crore' }
    ];

    const vaccinationBenefits = [
        {
            service: 'Routine Immunization',
            coverage: 'All UIP vaccines covered',
            ageGroup: '0-5 years',
            cost: 'Free'
        },
        {
            service: 'Vaccine-related complications',
            coverage: 'Treatment for adverse events',
            ageGroup: 'All ages',
            cost: 'Up to ₹5 lakhs'
        },
        {
            service: 'Preventive care',
            coverage: 'Health check-ups and screening',
            ageGroup: 'All family members',
            cost: 'Covered under package'
        }
    ];

    const hospitalPackages = [
        { category: 'General Medicine', procedures: '394', avgCost: '₹3,000' },
        { category: 'General Surgery', procedures: '236', avgCost: '₹8,000' },
        { category: 'Pediatrics', procedures: '76', avgCost: '₹4,500' },
        { category: 'Cardiology', procedures: '55', avgCost: '₹45,000' },
        { category: 'Emergency Care', procedures: '32', avgCost: '₹12,000' }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Back Navigation */}
            <div className="mb-6">
                <Link to="/affordable" className="flex items-center text-blue-600 hover:text-blue-800 transition">
                    <FaArrowLeft className="mr-2" />
                    Back to Affordable Immunization
                </Link>
            </div>

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-xl mb-8">
                <h1 className="text-4xl font-bold mb-4">Pradhan Mantri Jan Arogya Yojana (PM-JAY)</h1>
                <p className="text-xl mb-4">World's Largest Health Insurance Scheme</p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-purple-500 px-3 py-1 rounded-full">Launched: September 2018</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full">Coverage: ₹5 Lakh per family</span>
                    <span className="bg-purple-500 px-3 py-1 rounded-full">50+ Crore Beneficiaries</span>
                </div>
            </div>

            {/* Scheme Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaShieldAlt className="text-purple-500 mr-3" />
                        About PM-JAY
                    </h2>
                    <p className="text-gray-600 mb-4">
                        PM-JAY provides health cover of ₹5 lakh per family per year for secondary and tertiary 
                        care hospitalization to over 50 crore beneficiaries from identified poor and vulnerable families.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Cashless treatment at empaneled hospitals</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Covers pre and post-hospitalization expenses</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>No cap on family size and age</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaRupeeSign className="text-green-500 mr-3" />
                        Financial Protection
                    </h2>
                    <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <h3 className="font-bold text-2xl text-green-600">₹5,00,000</h3>
                            <p className="text-gray-600">Annual health cover per family</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                                <div className="text-xl font-bold text-purple-600">1,393</div>
                                <div className="text-sm text-gray-600">Medical procedures covered</div>
                            </div>
                            <div className="text-center">
                                <div className="text-xl font-bold text-purple-600">24,000+</div>
                                <div className="text-sm text-gray-600">Empaneled hospitals</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eligibility Criteria */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Eligibility Criteria</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-purple-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold">Area</th>
                                <th className="px-6 py-3 text-left font-semibold">Criteria</th>
                                <th className="px-6 py-3 text-left font-semibold">Eligible Families</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {eligibilityData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{item.category}</td>
                                    <td className="px-6 py-4 text-gray-600">{item.criteria}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold">
                                            {item.families}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Vaccination and Child Health Coverage */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Vaccination & Child Health Coverage</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {vaccinationBenefits.map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                            <h3 className="text-xl font-bold mb-3 text-purple-800">{benefit.service}</h3>
                            <div className="space-y-2 text-sm">
                                <p><strong>Coverage:</strong> {benefit.coverage}</p>
                                <p><strong>Age Group:</strong> {benefit.ageGroup}</p>
                                <p><strong>Cost:</strong> 
                                    <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded">
                                        {benefit.cost}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Medical Packages */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Medical Packages Available</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-gray-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold">Medical Specialty</th>
                                <th className="px-6 py-3 text-left font-semibold">Procedures Covered</th>
                                <th className="px-6 py-3 text-left font-semibold">Average Package Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {hospitalPackages.map((pkg, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{pkg.category}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                                            {pkg.procedures}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-green-600">{pkg.avgCost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* How to Apply */}
            <div className="mb-12 bg-purple-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">How to Get PM-JAY Benefits</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaIdCard className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Check Eligibility</h3>
                        <p className="text-gray-600 text-sm">Verify your family's eligibility on pmjay.gov.in</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUsers className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Get e-Card</h3>
                        <p className="text-gray-600 text-sm">Download digital card or visit Common Service Center</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaHospital className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Find Hospital</h3>
                        <p className="text-gray-600 text-sm">Locate nearest empaneled hospital using hospital locator</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-purple-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">4. Get Treatment</h3>
                        <p className="text-gray-600 text-sm">Receive cashless treatment up to ₹5 lakh coverage</p>
                    </div>
                </div>
            </div>

            {/* Important Information */}
            <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-lg font-semibold mb-2 text-yellow-800">Important Information for Vaccination</h3>
                <p className="text-yellow-700 mb-3">
                    While PM-JAY covers treatment for vaccine-related complications and some preventive care, 
                    routine childhood immunizations are provided free through the Universal Immunization Programme (UIP).
                </p>
                <ul className="list-disc list-inside text-yellow-700 space-y-1">
                    <li>All UIP vaccines remain free at government health facilities</li>
                    <li>PM-JAY covers hospitalization if vaccination complications occur</li>
                    <li>Preventive health check-ups may be covered under select packages</li>
                </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Need Help?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <FaPhoneAlt className="text-purple-500 mr-2" />
                            Contact Support
                        </h3>
                        <div className="space-y-3">
                            <p><strong>Toll-Free Helpline:</strong> 14555 or 1800-111-565</p>
                            <p><strong>Email:</strong> support@pmjay.gov.in</p>
                            <p><strong>Website:</strong> pmjay.gov.in</p>
                            <p><strong>Beneficiary Helpdesk:</strong> Available 24/7</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Digital Services</h3>
                        <div className="space-y-2">
                            <a href="#" className="block text-purple-600 hover:underline">
                                • Check Eligibility Online
                            </a>
                            <a href="#" className="block text-purple-600 hover:underline">
                                • Download e-Card
                            </a>
                            <a href="#" className="block text-purple-600 hover:underline">
                                • Find Empaneled Hospitals
                            </a>
                            <a href="#" className="block text-purple-600 hover:underline">
                                • Track Treatment Status
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PMJAYScheme;
