import React from "react";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Father of 2-Year-Old",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    text: "Shishu Card made it extremely easy to track my child’s vaccinations. The downloadable PDF and QR scan features are incredibly useful.",
  },
  {
    name: "Sneha Kapoor",
    role: "Community Health Worker",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The government-provided vaccine cost information is a blessing. It’s helping so many underprivileged families in our area stay protected.",
  },
  {
    name: "Rohan Sharma",
    role: "Tech Enthusiast & Father",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    text: "The platform is very user-friendly. The awareness articles helped us understand which vaccines are necessary and when to take them.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-blue-900 py-12 px-4 text-white">
      <div className="max-w-6xl text-center">
        <p className="text-xs uppercase tracking-widest text-white/70">
          Join the families already benefitting from Shishu Card
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          What Our Users Are Saying
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 p-5 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 h-full"
          >
            <div className="flex items-center mb-2">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed">
              “{testimonial.text}”
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-11 h-11 rounded-full border-2 border-blue-100"
              />
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
