import { Link } from "react-router-dom";
import image from "../assets/homePageImage.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background gradient layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 -z-10 h-full w-full" />

      {/* Content container */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen px-6 md:px-16 py-12 md:py-24">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            Every child deserves protection.
          </h1>
          <p className="text-md sm:text-lg md:text-2xl text-blue-800">
            Get access to affordable vaccines provided by the government —
            because a healthy start builds a stronger future.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link to="/vaccination">
              <button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
          <img
            src={image}
            alt="child"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
