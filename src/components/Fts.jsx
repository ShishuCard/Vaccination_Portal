// import { FaSyringe, FaComments, FaMoneyBillWave, FaQrcode, FaBullhorn } from "react-icons/fa";

// const Fts = ()=>{
//   {
//     icon: <FaQrcode size={30} />;
//     title: "QR-Based Vaccine Records";
//     desc: "Generate and download vaccination history via a scannable QR code."
//   };
//   {
//     icon: <FaMoneyBillWave size={30} />;
//     title: "Affordable Vaccines";
//     desc: "Low-cost, government-supported vaccines accessible to all families."
//   };
//   {
//     icon: <FaBullhorn size={30} />;
//     title: "Vaccine Awareness";
//     desc: "Informational resources on vaccine schedules, importance, and benefits."
//   };
//   {
//     icon: <FaComments size={30} />;
//     title: "AI Chatbot Support";
//     desc: "Chatbase-powered assistant for vaccine symptom queries and FAQs."
//   };
//   {
//     icon: <FaSyringe size={30} />;
//     title: "Immunization Tracking";
//     desc: "Track doses, reminders, and ensure complete immunization coverage."
//   }
// ]
//     return(
//        <section className="bg-white py-16 px-6 lg:px-20">
//       <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">✨ Features</h2>
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="bg-white border border-blue-100 shadow-md p-6 rounded-xl hover:shadow-lg transition"
//           >
//             <div className="text-blue-600 mb-4">{feature.icon}</div>
//             <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//             <p className="text-gray-600">{feature.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//     );
// }

// export default Fts; 

import { FaSyringe, FaComments, FaMoneyBillWave, FaQrcode, FaBullhorn } from "react-icons/fa";

const Fts = () => {
  const features = [
    {
      icon: <FaQrcode size={30} />,
      title: "QR-Based Vaccine Records",
      desc: "Generate and download vaccination history via a scannable QR code.",
    },
    {
      icon: <FaMoneyBillWave size={30} />,
      title: "Affordable Vaccines",
      desc: "Low-cost, government-supported vaccines accessible to all families.",
    },
    {
      icon: <FaBullhorn size={30} />,
      title: "Vaccine Awareness",
      desc: "Informational resources on vaccine schedules, importance, and benefits.",
    },
    {
      icon: <FaComments size={30} />,
      title: "AI Chatbot Support",
      desc: "Chatbase-powered assistant for vaccine symptom queries and FAQs.",
    },
    {
      icon: <FaSyringe size={30} />,
      title: "Immunization Tracking",
      desc: "Track doses, reminders, and ensure complete immunization coverage.",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">✨ Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 shadow-md p-6 rounded-xl hover:shadow-lg transition"
          >
            <div className="text-blue-600 mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Fts;

