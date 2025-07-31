import React from "react";
import { Linkedin, Github, Twitter, Heart } from "lucide-react";
import ankit from "../assets/Ankit.png"; // Assuming you have an image for Ankit
import shreya from "../assets/image2.jpg"
import sayak from "../assets/image1.jpg"; // Placeholder for Sayak's image
import somhrita from "../assets/image3.jpg";
const AboutUs = () => {
  const teamMembers = [
    {
      name: "Ankit",
      role: "Backend Developer",
      image: ankit,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      line: "Builds worlds behind screens"
    },
    {
      name: "Sayak",
      role: "Frontend Developer",
      image: sayak,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      line: "Paints pixels with purpose"
    },
    {
      name: "Somhrita",
      role: "Design Lead",
      image: somhrita,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      line: "Designs with fierce grace"
    },
    {
      name: "Shreya",
      role: "Frontend Developer",
      image: shreya,
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      },
      line: "Paints pixels with purpose"
    },
  ];

  return (
    <div className="w-[100%] px-6 py-20 bg-white rounded">
      {/* Header Section */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-light text-gray-900 mb-3">
          Meet Our Team
        </h2>
        <div className="w-12 h-px bg-gray-300 mx-auto mb-8"></div>
        <p className="text-gray-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          A passionate team dedicated to improving child healthcare accessibility through thoughtful technology solutions.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {teamMembers.map((member, index) => (
          <div key={index} className="relative group cursor-pointer">
            {/* Card */}
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300">
              {/* Social Links - Top Right Corner */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <div className="flex flex-col space-y-2">
                  <a 
                    href={member.social.linkedin} 
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.github} 
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 hover:scale-110 hover:-rotate-12 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={member.social.twitter} 
                    className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Profile Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Position Overlay - Fades in below image */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4">
                  <p className="text-white text-xs font-light opacity-75">{member.line}</p>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-sm font-light">{member.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

     

      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-gray-900 mb-6">Our Mission</h3>
           <div className="w-12 h-px bg-gray-300 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - Accessibility */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-300 transition-all duration-300">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Accessibility First
            </h4>
            <p className="text-gray-600 text-sm">
              Making healthcare technology available to every community, everywhere.
            </p>
          </div>

          {/* Card 2 - Innovation */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-purple-300 transition-all duration-300">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Innovation Hub
            </h4>
            <p className="text-gray-600 text-sm">
              Bridging gaps between healthcare providers and families through technology.
            </p>
          </div>

          {/* Card 3 - Impact */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:border-green-300 transition-all duration-300">
            <h4 className="text-lg font-medium text-gray-900 mb-3">
              Real Impact
            </h4>
            <p className="text-gray-600 text-sm">
              Ensuring no child misses vital immunizations that protect their future.
            </p>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default AboutUs;