import React from 'react';
import { FaShieldAlt, FaMoneyBillWave, FaHospital, FaMapMarkerAlt, FaCalendarAlt, FaInfoCircle, FaUserShield, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AffordableImmunization = () => {
    // Sample data for vaccines
    const vaccines = [
        {
            name: 'BCG (Tuberculosis)',
            price: 'Free',
            eligibility: 'All newborns',
            schedule: 'At birth',
            description: 'Protects against severe forms of tuberculosis'
        },
        {
            name: 'Pentavalent (DTP-HepB-Hib)',
            price: '₹50',
            eligibility: 'Children below 1 year',
            schedule: '6, 10 & 14 weeks',
            description: 'Combination vaccine for diphtheria, tetanus, pertussis, hepatitis B and Hib'
        },
        {
            name: 'Polio (OPV & IPV)',
            price: 'Free',
            eligibility: 'Children below 5 years',
            schedule: 'Birth, 6, 10, 14 weeks & booster doses',
            description: 'Protects against poliomyelitis'
        },
        {
            name: 'MMR (Measles, Mumps, Rubella)',
            price: '₹100',
            eligibility: 'Children 9-12 months',
            schedule: 'First dose at 9-12 months, second at 16-24 months',
            description: 'Protects against three serious diseases'
        },
        {
            name: 'Rotavirus',
            price: '₹200',
            eligibility: 'Infants 6 weeks to 8 months',
            schedule: '3 doses at 6, 10 & 14 weeks',
            description: 'Prevents severe diarrhea caused by rotavirus'
        }
    ];

    

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center py-12 bg-green-50 rounded-xl mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Affordable Immunization</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Government-supported pricing to ensure all children receive vital vaccinations regardless of income
                </p>
            </div>

            {/* Pricing Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-2">Vaccine Pricing</h2>
                <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
                    Our tiered pricing system ensures every family can access life-saving vaccines
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-green-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vaccine</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Eligibility</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {vaccines.map((vaccine, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{vaccine.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 py-1 rounded-full text-sm ${vaccine.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                                            {vaccine.price}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{vaccine.eligibility}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">{vaccine.schedule}</td>
                                    <td className="px-6 py-4 text-gray-500">{vaccine.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Government Schemes */}
            <div className="mb-16 bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Government Immunization Schemes</h2>
                <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                    Comprehensive government initiatives ensuring free and affordable vaccination for all children and families across India
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Mission Indradhanush */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-blue-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                            <FaShieldAlt className="text-3xl mb-3" />
                            <h3 className="text-xl font-bold">Mission Indradhanush</h3>
                            <p className="text-blue-100 text-sm mt-2">Flagship immunization program launched in 2014</p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaUsers className="text-blue-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Target Beneficiaries</p>
                                        <p className="text-gray-600 text-sm">All children and pregnant women</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-full mr-3">
                                        <FaShieldAlt className="text-green-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Coverage</p>
                                        <p className="text-gray-600 text-sm">12 vaccine-preventable diseases</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                                        <FaMapMarkerAlt className="text-purple-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Reach</p>
                                        <p className="text-gray-600 text-sm">All districts nationwide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <Link to="/schemes/mission-indradhanush" className="flex items-center justify-between text-blue-600 hover:text-blue-800 font-medium transition-colors">
                                    <span>Learn more about this scheme</span>
                                    <FaInfoCircle />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Universal Immunization Programme */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                            <FaHospital className="text-3xl mb-3" />
                            <h3 className="text-xl font-bold">Universal Immunization Programme</h3>
                            <p className="text-green-100 text-sm mt-2">India's cornerstone immunization initiative since 1985</p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-full mr-3">
                                        <FaUsers className="text-green-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Target Group</p>
                                        <p className="text-gray-600 text-sm">All children below 5 years</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaMoneyBillWave className="text-blue-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Cost</p>
                                        <p className="text-gray-600 text-sm">Completely free at all centers</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-orange-100 p-2 rounded-full mr-3">
                                        <FaCalendarAlt className="text-orange-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Availability</p>
                                        <p className="text-gray-600 text-sm">Daily at fixed sites</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <Link to="/schemes/universal-immunization" className="flex items-center justify-between text-green-600 hover:text-green-800 font-medium transition-colors">
                                    <span>Learn more about this scheme</span>
                                    <FaInfoCircle />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* PMJAY Health Protection Scheme */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                            <FaUserShield className="text-3xl mb-3" />
                            <h3 className="text-xl font-bold">PMJAY Health Protection</h3>
                            <p className="text-purple-100 text-sm mt-2">World's largest health insurance scheme</p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                                        <FaUsers className="text-purple-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Eligible Families</p>
                                        <p className="text-gray-600 text-sm">Families below poverty line</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-green-100 p-2 rounded-full mr-3">
                                        <FaMoneyBillWave className="text-green-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Coverage Amount</p>
                                        <p className="text-gray-600 text-sm">₹5 lakh per family per year</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                                        <FaShieldAlt className="text-blue-600 text-sm" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm">Benefits</p>
                                        <p className="text-gray-600 text-sm">Includes vaccination support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 pt-4 border-t border-gray-200">
                                <Link to="/schemes/pmjay" className="flex items-center justify-between text-purple-600 hover:text-purple-800 font-medium transition-colors">
                                    <span>Learn more about this scheme</span>
                                    <FaInfoCircle />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-12 bg-white p-6 rounded-xl shadow-md">
                    <h3 className="text-xl font-bold text-center mb-6">Combined Impact of Government Schemes</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600">90%+</div>
                            <div className="text-sm text-gray-600">Immunization Coverage</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600">50Cr+</div>
                            <div className="text-sm text-gray-600">Beneficiaries Covered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600">₹5L</div>
                            <div className="text-sm text-gray-600">Max Health Coverage</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600">24K+</div>
                            <div className="text-sm text-gray-600">Health Facilities</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8">How To Access Affordable Vaccines</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaHospital className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">1. Find a Center</h3>
                        <p className="text-gray-600">Locate your nearest government health center or participating private clinic</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaMoneyBillWave className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">2. Check Eligibility</h3>
                        <p className="text-gray-600">Bring required documents to verify eligibility for subsidized pricing</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCalendarAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">3. Get Vaccinated</h3>
                        <p className="text-gray-600">Receive vaccines according to the recommended immunization schedule</p>
                    </div>
                </div>
            </div>

            {/* Location Finder */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-green-100">
                <h2 className="text-3xl font-bold text-center mb-6">Find Affordable Vaccination Centers Near You</h2>
                <div className="max-w-md mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Enter your location or PIN code"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <FaMapMarkerAlt className="absolute left-3 top-3.5 text-gray-400" />
                    </div>
                    <button className="w-full mt-4 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                        Search Centers
                    </button>
                </div>
            </div>

            {/* Financial Assistance */}
            <div className="mt-16 bg-yellow-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-6">Need Further Financial Assistance?</h2>
                <div className="max-w-3xl mx-auto">
                    <p className="text-center text-gray-600 mb-6">
                        If the subsidized prices are still beyond your means, these organizations may be able to help:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-yellow-200">
                            <h3 className="font-bold text-lg mb-2">Vaccine Assistance Program</h3>
                            <p className="text-gray-600 mb-3">Complete waiver for families below poverty line</p>
                            <a href="#" className="text-yellow-700 font-medium">Apply for assistance →</a>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-sm border border-yellow-200">
                            <h3 className="font-bold text-lg mb-2">NGO Partnerships</h3>
                            <p className="text-gray-600 mb-3">Local organizations providing vaccine support</p>
                            <a href="#" className="text-yellow-700 font-medium">Find NGO partners →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AffordableImmunization;
