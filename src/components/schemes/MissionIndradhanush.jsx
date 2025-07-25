import React from 'react';
import { FaArrowLeft, FaShieldAlt, FaUsers, FaCalendarAlt, FaMapMarkerAlt, FaPhone, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MissionIndradhanush = () => {
    const coverageData = [
        { disease: 'Diphtheria', vaccine: 'DPT', ageGroup: '6 weeks onwards' },
        { disease: 'Pertussis (Whooping Cough)', vaccine: 'DPT', ageGroup: '6 weeks onwards' },
        { disease: 'Tetanus', vaccine: 'DPT', ageGroup: '6 weeks onwards' },
        { disease: 'Poliomyelitis', vaccine: 'OPV/IPV', ageGroup: 'Birth onwards' },
        { disease: 'Measles', vaccine: 'MR/MMR', ageGroup: '9 months onwards' },
        { disease: 'Rubella', vaccine: 'MR/MMR', ageGroup: '9 months onwards' },
        { disease: 'Tuberculosis', vaccine: 'BCG', ageGroup: 'At birth' },
        { disease: 'Hepatitis B', vaccine: 'Hepatitis B', ageGroup: 'At birth' },
        { disease: 'Haemophilus influenzae type b', vaccine: 'Hib', ageGroup: '6 weeks onwards' },
        { disease: 'Pneumococcal Disease', vaccine: 'PCV', ageGroup: '6 weeks onwards' },
        { disease: 'Rotavirus Diarrhea', vaccine: 'Rotavirus', ageGroup: '6 weeks onwards' },
        { disease: 'Japanese Encephalitis', vaccine: 'JE', ageGroup: '9 months (endemic areas)' }
    ];

    const phases = [
        {
            phase: 'Phase 1 (2014-2015)',
            target: '201 districts',
            achievement: '85% coverage increase',
            focus: 'High priority districts with low immunization coverage'
        },
        {
            phase: 'Phase 2 (2015-2017)',
            target: '279 districts',
            achievement: '90% full immunization coverage',
            focus: 'Expansion to medium priority districts'
        },
        {
            phase: 'Phase 3 (2017-2018)',
            target: '272 districts',
            achievement: '92% coverage',
            focus: 'Urban areas and remaining districts'
        },
        {
            phase: 'Intensified Mission (2019-2022)',
            target: 'All districts',
            achievement: '95% target coverage',
            focus: 'Universal coverage and sustainability'
        }
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
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl mb-8">
                <h1 className="text-4xl font-bold mb-4">Mission Indradhanush</h1>
                <p className="text-xl mb-4">Ensuring Complete Immunization Coverage Across India</p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-blue-500 px-3 py-1 rounded-full">Launched: December 2014</span>
                    <span className="bg-blue-500 px-3 py-1 rounded-full">Ministry of Health & Family Welfare</span>
                    <span className="bg-blue-500 px-3 py-1 rounded-full">12 Vaccine-Preventable Diseases</span>
                </div>
            </div>

            {/* Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaShieldAlt className="text-blue-500 mr-3" />
                        Mission Overview
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Mission Indradhanush is a flagship immunization program launched by the Government of India 
                        to accelerate routine immunization coverage and achieve full immunization of all children 
                        under 2 years and pregnant women.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Free vaccination for all eligible beneficiaries</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Focus on districts with low immunization coverage</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Strengthening of routine immunization systems</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaUsers className="text-green-500 mr-3" />
                        Target Beneficiaries
                    </h2>
                    <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-4">
                            <h3 className="font-semibold">Children (0-2 years)</h3>
                            <p className="text-gray-600">All children from birth to 2 years of age</p>
                        </div>
                        <div className="border-l-4 border-green-500 pl-4">
                            <h3 className="font-semibold">Pregnant Women</h3>
                            <p className="text-gray-600">All pregnant women for Tetanus Toxoid vaccination</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <h3 className="font-semibold">Dropout Children</h3>
                            <p className="text-gray-600">Children who missed scheduled vaccinations</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disease Coverage */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Diseases Covered Under Mission Indradhanush</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold">Disease</th>
                                <th className="px-6 py-3 text-left font-semibold">Vaccine</th>
                                <th className="px-6 py-3 text-left font-semibold">Age Group</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {coverageData.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{item.disease}</td>
                                    <td className="px-6 py-4">
                                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                                            {item.vaccine}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{item.ageGroup}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Implementation Phases */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Implementation Phases</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {phases.map((phase, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                            <h3 className="text-xl font-bold mb-2 text-blue-800">{phase.phase}</h3>
                            <div className="space-y-2">
                                <p><strong>Target:</strong> {phase.target}</p>
                                <p><strong>Achievement:</strong> {phase.achievement}</p>
                                <p><strong>Focus:</strong> {phase.focus}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How to Access */}
            <div className="mb-12 bg-green-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">How to Access Mission Indradhanush Services</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaMapMarkerAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Find Vaccination Site</h3>
                        <p className="text-gray-600">Locate nearest sub-center, PHC, CHC, or district hospital</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCalendarAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Check Schedule</h3>
                        <p className="text-gray-600">Sessions held weekly at fixed sites and monthly at outreach sites</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Get Vaccinated</h3>
                        <p className="text-gray-600">Bring child's immunization card and receive free vaccines</p>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Need More Information?</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <FaPhone className="text-blue-500 mr-2" />
                            Contact Details
                        </h3>
                        <div className="space-y-3">
                            <p><strong>National Helpline:</strong> 1075 (Toll-free)</p>
                            <p><strong>Email:</strong> immunization.mohfw@gov.in</p>
                            <p><strong>Website:</strong> mohfw.gov.in</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                            <FaInfoCircle className="text-green-500 mr-2" />
                            Additional Resources
                        </h3>
                        <div className="space-y-2">
                            <a href="#" className="block text-blue-600 hover:underline">
                                • Download Mission Indradhanush Guidelines
                            </a>
                            <a href="#" className="block text-blue-600 hover:underline">
                                • Find Vaccination Centers Near You
                            </a>
                            <a href="#" className="block text-blue-600 hover:underline">
                                • Track Your District's Progress
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionIndradhanush;
