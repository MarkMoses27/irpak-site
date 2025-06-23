import React, { useState } from 'react';
import { FileText, Search, MessageCircle, PartyPopper, Clipboard, Gift, Mail, Lightbulb, ArrowRight } from 'lucide-react';

const MembershipPage = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Complete our comprehensive application form with your background, goals, and motivation.",
      icon: FileText,
      details: ["Personal information", "Educational background", "Career objectives", "Motivation statement"]
    },
    {
      number: "02", 
      title: "Initial Review",
      description: "Our team reviews your application and assesses your fit with our community values.",
      icon: Search,
      details: ["Application screening", "Background verification", "Alignment assessment", "Preliminary evaluation"]
    },
    {
      number: "03",
      title: "Interview Process",
      description: "Participate in a structured interview to discuss your goals and our program offerings.",
      icon: MessageCircle,
      details: ["One-on-one interview", "Goal alignment discussion", "Program overview", "Q&A session"]
    },
    {
      number: "04",
      title: "Welcome & Onboarding",
      description: "Upon acceptance, receive your welcome package and begin your journey with us.",
      icon: PartyPopper,
      details: ["Welcome package", "Mentor assignment", "Program orientation", "Community access"]
    }
  ];

  const requirements = [
    "Must be 18 years or older",
    "Demonstrated commitment to professional growth",
    "Ability to participate in program activities",
    "Positive attitude and willingness to learn",
    "Respect for community guidelines"
  ];

  const benefits = [
    "1-on-1 mentorship with industry experts",
    "Access to exclusive workshops and events",
    "Professional networking opportunities", 
    "Career guidance and portfolio reviews",
    "Certificate of program completion",
    "Alumni network access"
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-6 py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-red-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 space-y-20">
        
        {/* Hero Section */}
        <div className="text-center space-y-8">
          <div className="inline-flex items-center bg-gradient-to-r from-[#42210B] to-[#5a2d15] text-white px-6 py-3 rounded-full text-sm font-semibold tracking-wide shadow-lg">
            MEMBERSHIP JOURNEY
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-[#42210B] via-[#5a2d15] to-[#42210B] bg-clip-text leading-tight">
            Become a Member
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
            Join our exclusive community of 
            <span className="text-[#FF5C00] font-semibold"> growth-focused professionals</span> and unlock your potential through our comprehensive mentorship program.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-[#42210B] via-[#5a2d15] to-[#42210B] bg-clip-text">
              Membership Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to join our community and start your professional growth journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#42210B]/10 shadow-xl hover:shadow-2xl transition-all duration-500 transform ${hoveredStep === index ? 'scale-105 -translate-y-2' : ''}`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#FF5C00] to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="space-y-4">
                  <step.icon className="w-12 h-12 text-[#FF5C00] mx-auto" />
                  <h3 className="text-xl font-bold text-[#42210B]">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-[#FF5C00] rounded-full"></div>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements & Benefits */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Requirements */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-[#42210B]/10 shadow-xl">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Clipboard className="w-12 h-12 text-[#FF5C00] mx-auto" />
                <h3 className="text-3xl font-black text-[#42210B]">Requirements</h3>
                <p className="text-gray-600">What we look for in our members</p>
              </div>
              
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[#FF5C00]/5 transition-colors duration-200">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#FF5C00] to-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 border-2 border-[#42210B]/10 shadow-xl">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <Gift className="w-12 h-12 text-[#FF5C00] mx-auto" />
                <h3 className="text-3xl font-black text-[#42210B]">Member Benefits</h3>
                <p className="text-gray-600">What you'll gain as a member</p>
              </div>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-xl hover:bg-[#FF5C00]/5 transition-colors duration-200">
                    <div className="w-6 h-6 bg-gradient-to-r from-[#42210B] to-[#5a2d15] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-2 border-r-2 border-b-2 border-white transform rotate-45 -translate-y-0.5"></div>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8 bg-gradient-to-r from-[#42210B]/5 to-[#FF5C00]/5 rounded-3xl p-12">
          <div className="space-y-4">
            <h3 className="text-4xl font-black text-[#42210B]">Ready to Get Started?</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards your professional growth journey. Apply now and join our community of ambitious professionals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#FF5C00] to-red-500 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <Mail className="w-5 h-5 mr-2" />
              Start Your Application
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            
            <a href="/about" className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-[#42210B] bg-white border-2 border-[#42210B] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Lightbulb className="w-5 h-5 mr-2" />
              Learn More About Us
            </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200">
            <div className="w-2 h-2 bg-[#FF5C00] rounded-full animate-pulse"></div>
            <span>Applications are reviewed within 3-5 business days</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPage;