import React from "react";

const AboutUs = () => {
  const teamMembers = [
    { name: "Ankit", role: "Backend Developer", image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-1.png" },
    { name: "Sayak", role: "Frontend Developer", image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-2.png" },
    { name: "Somhrita", role: "Design Lead", image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-3.png" },
    { name: "Shreya", role: "Frontend Developer", image: "https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-4.png" },
  ];

  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Meet Our Team</h2>
      <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
        Behind ShishuCard is a passionate team of developers and designers dedicated to improving child healthcare accessibility through technology.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-28 h-28 lg:w-36 lg:h-36 mx-auto rounded-full grayscale hover:grayscale-0 transition"
            />
            <h3 className="mt-4 text-lg font-bold text-blue-900">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <svg
          className="w-auto h-4 mx-auto text-gray-300"
          viewBox="0 0 172 16"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              y1="-0.5"
              x2="18.0278"
              y2="-0.5"
              transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${7 * i + 11} 1)`}
            />
          ))}
        </svg>
      </div>

    </div>
  );
};

export default AboutUs;
