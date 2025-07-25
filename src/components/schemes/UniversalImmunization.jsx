import React from 'react';
import { FaArrowLeft, FaShieldAlt, FaUsers, FaCalendarAlt, FaHospital, FaGlobe, FaChartLine } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UniversalImmunization = () => {
    const vaccineSchedule = [
        { age: 'At Birth', vaccines: ['BCG', 'OPV-0', 'Hepatitis B'], location: 'All health facilities' },
        { age: '6 weeks', vaccines: ['DPT-1', 'OPV-1', 'Hepatitis B-1', 'Hib-1', 'PCV-1', 'Rotavirus-1'], location: 'All health facilities' },
        { age: '10 weeks', vaccines: ['DPT-2', 'OPV-2', 'Hepatitis B-2', 'Hib-2', 'PCV-2', 'Rotavirus-2'], location: 'All health facilities' },
        { age: '14 weeks', vaccines: ['DPT-3', 'OPV-3', 'Hepatitis B-3', 'Hib-3', 'PCV-3', 'Rotavirus-3'], location: 'All health facilities' },
        { age: '9 months', vaccines: ['Measles-1', 'Vitamin A-1'], location: 'All health facilities' },
        { age: '16-24 months', vaccines: ['DPT Booster', 'OPV Booster', 'Measles-2', 'JE-1'], location: 'All health facilities' },
        { age: '5-6 years', vaccines: ['DPT Booster-2', 'TT', 'JE-2'], location: 'Schools & health facilities' }
    ];

    const achievements = [
        { year: '1985', milestone: 'Programme Launch', description: 'UIP launched with 6 vaccines against 6 diseases' },
        { year: '1992', milestone: 'Polio Eradication', description: 'India achieves polio-free status' },
        { year: '2014', milestone: 'Expanded Coverage', description: 'Introduction of new vaccines (Rotavirus, PCV)' },
        { year: '2020', milestone: '90% Coverage', description: 'Full immunization coverage reaches 90%' }
    ];

    const serviceDelivery = [
        {
            type: 'Fixed Sites',
            description: 'Sub-centers, PHCs, CHCs, District Hospitals',
            frequency: 'Daily',
            coverage: 'Urban and accessible rural areas'
        },
        {
            type: 'Outreach Sessions',
            description: 'Mobile teams visiting villages',
            frequency: 'Weekly/Monthly',
            coverage: 'Remote and difficult-to-reach areas'
        },
        {
            type: 'Mobile Vaccination',
            description: 'Special campaigns and drives',
            frequency: 'As needed',
            coverage: 'Emergency situations and catch-up'
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
            <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-xl mb-8">
                <h1 className="text-4xl font-bold mb-4">Universal Immunization Programme (UIP)</h1>
                <p className="text-xl mb-4">India's Flagship Public Health Initiative Since 1985</p>
                <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-green-500 px-3 py-1 rounded-full">Launched: 1985</span>
                    <span className="bg-green-500 px-3 py-1 rounded-full">Free for All Children</span>
                    <span className="bg-green-500 px-3 py-1 rounded-full">12+ Vaccines Available</span>
                </div>
            </div>

            {/* Programme Overview */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaGlobe className="text-green-500 mr-3" />
                        Programme Objective
                    </h2>
                    <p className="text-gray-600 mb-4">
                        The Universal Immunization Programme aims to prevent mortality and morbidity in children 
                        and pregnant women against 12 vaccine-preventable diseases through provision of free 
                        vaccines to all eligible beneficiaries.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Reduce infant and under-5 mortality</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Achieve and maintain high immunization coverage</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span>Strengthen immunization systems</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaUsers className="text-blue-500 mr-3" />
                        Coverage Statistics
                    </h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span>Full Immunization Coverage</span>
                            <span className="font-bold text-green-600">90.4%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: '90.4%' }}></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-blue-50 p-3 rounded">
                                <div className="text-2xl font-bold text-blue-600">2.67 Cr</div>
                                <div className="text-sm text-gray-600">Children vaccinated annually</div>
                            </div>
                            <div className="bg-green-50 p-3 rounded">
                                <div className="text-2xl font-bold text-green-600">2.9 Cr</div>
                                <div className="text-sm text-gray-600">Pregnant women vaccinated</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vaccine Schedule */}
            <div className="mb-12 bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">UIP Vaccination Schedule</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold">Age</th>
                                <th className="px-6 py-3 text-left font-semibold">Vaccines</th>
                                <th className="px-6 py-3 text-left font-semibold">Service Delivery Point</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {vaccineSchedule.map((item, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 font-medium">{item.age}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex flex-wrap gap-2">
                                            {item.vaccines.map((vaccine, i) => (
                                                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                                                    {vaccine}
                                                </span>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-600">{item.location}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Service Delivery */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8">Service Delivery Mechanisms</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {serviceDelivery.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                            <h3 className="text-xl font-bold mb-3 text-green-800">{service.type}</h3>
                            <div className="space-y-2 text-sm">
                                <p><strong>Description:</strong> {service.description}</p>
                                <p><strong>Frequency:</strong> {service.frequency}</p>
                                <p><strong>Coverage:</strong> {service.coverage}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Achievements */}
            <div className="mb-12 bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
                    <FaChartLine className="text-blue-500 mr-3" />
                    Key Achievements Timeline
                </h2>
                <div className="space-y-6">
                    {achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start">
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold mr-4 mt-1">
                                {achievement.year}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg text-blue-800">{achievement.milestone}</h3>
                                <p className="text-gray-600">{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* How to Access */}
            <div className="mb-12 bg-green-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-center mb-8">How to Access UIP Services</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaHospital className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Visit Health Facility</h3>
                        <p className="text-gray-600 text-sm">Go to nearest Sub-center, PHC, CHC, or District Hospital</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCalendarAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Check Schedule</h3>
                        <p className="text-gray-600 text-sm">Fixed day sessions or outreach sessions in your area</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaUsers className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Bring Documents</h3>
                        <p className="text-gray-600 text-sm">Carry immunization card and mother's ID proof</p>
                    </div>
                    <div className="text-center">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-green-600 text-2xl" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Get Free Vaccines</h3>
                        <p className="text-gray-600 text-sm">Receive all vaccines absolutely free of cost</p>
                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Get Support</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                            <p><strong>UIP Helpline:</strong> 1075 (Toll-free)</p>
                            <p><strong>Ministry Email:</strong> immunization.mohfw@gov.in</p>
                            <p><strong>State Immunization Officer:</strong> Contact your state health department</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Digital Resources</h3>
                        <div className="space-y-2">
                            <a href="#" className="block text-blue-600 hover:underline">
                                • Co-WIN Portal for Digital Certificates
                            </a>
                            <a href="#" className="block text-blue-600 hover:underline">
                                • Mother and Child Protection Card App
                            </a>
                            <a href="#" className="block text-blue-600 hover:underline">
                                • UIP Monitoring Dashboard
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UniversalImmunization;
