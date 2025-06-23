import React, { useState } from 'react';

const InternshipOpportunities = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-5xl w-full bg-white/80 backdrop-blur-xl border-2 border-[#42210B]/10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-12 md:p-20 space-y-16 relative z-10">
        
        {/* Internships Section */}
        <div 
          className="text-center space-y-8 transition-all duration-300"
          onMouseEnter={() => setHoveredSection('internships')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center bg-gradient-to-r from-[#42210B] to-[#5a2d15] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              💼 CAREER DEVELOPMENT
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-transparent bg-gradient-to-r from-[#42210B] via-[#5a2d15] to-[#42210B] bg-clip-text leading-tight">
              Internship Opportunities
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
            We are committed to offering internship opportunities to passionate, driven individuals looking to gain 
            <span className="text-[#FF5C00] font-semibold"> valuable, real-world experience</span>.
          </p>
          
          <div className={`relative overflow-hidden bg-gradient-to-r from-red-50 to-orange-50 border-2 border-dashed border-[#FF5C00] rounded-2xl p-8 mx-auto max-w-2xl transform transition-all duration-300 ${hoveredSection === 'internships' ? 'scale-105 shadow-xl' : ''}`}>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF5C00] to-red-500"></div>
            <div className="text-[#FF5C00] space-y-3">
              <div className="text-3xl">🚫</div>
              <div className="font-bold text-xl md:text-2xl">
                Currently No Available Positions
              </div>
              <div className="text-lg font-medium text-gray-600">
                Please check back again soon for updates
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#FF5C00]/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Elegant Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-white px-6 py-2 rounded-full border-2 border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-gradient-to-r from-[#42210B] to-[#FF5C00] rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Mentorship Section */}
        <div 
          className="text-center space-y-8 transition-all duration-300"
          onMouseEnter={() => setHoveredSection('mentorship')}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center bg-gradient-to-r from-[#FF5C00] to-[#e24f00] text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
              🎯 PROFESSIONAL GROWTH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-[#42210B] via-[#5a2d15] to-[#42210B] bg-clip-text leading-tight">
              Mentorship Opportunities
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-medium">
            We proudly offer mentorship programs to individuals seeking 
            <span className="text-[#FF5C00] font-semibold"> professional guidance, skill development, and personal growth</span>.
          </p>
          
          <a href="/contact" className={`relative group cursor-pointer transform transition-all duration-300 ${hoveredSection === 'mentorship' ? 'scale-105' : ''} inline-block`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF5C00] to-red-500 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-[#FF5C00] to-red-500 text-white text-xl md:text-2xl font-bold px-10 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center space-x-3">
              <span className="text-2xl">✅</span>
              <span>Mentorships Available — Contact Us!</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <div className="w-4 h-4 border-r-2 border-t-2 border-white transform rotate-45"></div>
              </div>
            </div>
          </a>
        </div>

        {/* Enhanced Footer */}
        <div className="pt-8 border-t border-gray-200/50">
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-pulse"></div>
            <span>Last Updated:</span>
            <span className="font-bold text-[#42210B] bg-gradient-to-r from-[#42210B] to-[#FF5C00] bg-clip-text text-transparent">
              June 2025
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipOpportunities;