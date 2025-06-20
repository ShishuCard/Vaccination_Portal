import { FaQrcode, FaRupeeSign, FaBullhorn, FaSyringe } from "react-icons/fa";

const services = [
  {
    title: "Online Vaccine List via QR",
    icon: <FaQrcode size={28} className="text-blue-900" />,
    description:
      "We provide an easily accessible digital PDF of the complete vaccine list through a QR code, ensuring instant access for parents and health workers.",
  },
  {
    title: "Affordable Vaccines",
    icon: <FaRupeeSign size={28} className="text-blue-900" />,
    description:
      "We offer vaccines at a very low cost, supported by government health programs to ensure every child is protected without financial burden.",
  },
  {
    title: "Vaccine Awareness",
    icon: <FaBullhorn size={28} className="text-blue-900" />,
    description:
      "We spread awareness about the importance of vaccines, their schedules, and benefits to promote a healthier community through education.",
  },
  {
    title: "Complete Immunization Support",
    icon: <FaSyringe size={28} className="text-blue-900" />,
    description:
      "We provide complete immunization tracking and updates to ensure no dose is missed, guiding you throughout your vaccination journey.",
  },
];

const Services = () => {
  return (
    <div className="relative py-20 px-4 md:px-16 overflow-hidden bg-white">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10 blur-sm" />

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-950">What We Offer</h2>
        <p className="text-gray-700 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          We bring accessible, affordable, and informative vaccine services to your fingertips. Empowering families with health tools backed by technology and awareness.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 p-6"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold text-blue-950 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            <button className="mt-4 text-blue-900 text-sm font-medium hover:underline flex items-center gap-1">
              Learn More →
            </button>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-2 text-sm rounded-full bg-blue-900 text-white font-medium hover:bg-blue-950 shadow transition duration-300">
          View All →
        </button>
      </div>
    </div>
  );
};

export default Services;
