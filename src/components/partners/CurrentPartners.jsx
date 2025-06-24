import React from 'react';
import { FiClock } from 'react-icons/fi'; // Icon for "coming soon" style

const CurrentPartners = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2a1607] to-[#42210B] text-white py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-amber-500 mb-4">Our Current Partners</h1>
        <p className="text-lg sm:text-xl text-gray-300">
          We are thrilled to collaborate with these amazing organizations. Stay tuned for updates!
        </p>
      </header>

      {/* Coming Soon Section */}
      <div className="max-w-6xl mx-auto text-center bg-black/30 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <div className="flex justify-center items-center mb-6">
          <FiClock className="w-14 h-14 text-orange-500" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-400 mb-4">This section will be available soon!</h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-6">
          We're working on adding our incredible partners to this page. Stay tuned as we bring you the latest collaborations!
        </p>

        {/* Placeholder for partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
          <div className="h-24 bg-gray-500 rounded-md animate-pulse"></div>
          <div className="h-24 bg-gray-500 rounded-md animate-pulse"></div>
          <div className="h-24 bg-gray-500 rounded-md animate-pulse"></div>
          <div className="h-24 bg-gray-500 rounded-md animate-pulse"></div>
        </div>
        
        <div className="mt-8">
          <a
            href="#"
            className="bg-orange-600 text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-orange-700 hover:shadow-lg"
          >
            Get Involved
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentPartners;
