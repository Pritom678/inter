import React from "react";

const LeftSide = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-primary text-5xl text-left font-bold">
        Land Your Dream Job with AI
      </h1>
      <p className="text-gray-400 text-xl font-semibold text-left">
        Get personalized job recommendations and interview prep with our
        AI-powered platform.
      </p>
      <div className="flex gap-5 mt-15">
        <button className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
        <button className="border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
