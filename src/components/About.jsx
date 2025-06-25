import React from 'react';
import { Heart, Users, Award, Target, Eye, Lightbulb, Shield, Globe, ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';

import ABOUTUS from '../assets/about.png'; 
import ABOUTUS2 from '../assets/about3.png';

const AboutUs = () => {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Upholding transparency, accountability, and honesty in all we do.",
      color: "from-amber-500 to-amber-800"
    },
    {
      icon: Star,
      title: "Cultural Pride",
      description: "Championing the preservation and celebration of our roots.",
      color: "from-amber-500 to-amber-800"
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "Creating platforms for youth, women, and artists to lead and thrive.",
      color: "from-amber-500 to-amber-800"
    },
    {
      icon: Users,
      title: "Inclusivity",
      description: "Ensuring all voices are heard, represented, and respected.",
      color: "from-amber-500 to-amber-800"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing creativity as a driver of growth and transformation.",
      color:"from-amber-500 to-amber-800"
    }
  ];

  const achievements = [
    { number: "15+", label: "Years of Impact", icon: Award },
    { number: "1000+", label: "Lives Transformed", icon: Users },
    { number: "8", label: "Regional Offices", icon: Globe },
    { number: "50+", label: "Cultural Events", icon: Star }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-600 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={ABOUTUS2}
            alt="IRPAK Cultural Performance" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/80 via-orange-800/70 to-red-600/80"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
          <div className="max-w-6xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-200">IRPAK</span>
            </h1>
            
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed mb-8 text-orange-100 animate-fade-in-delay">
              Integrity Rays of Performing Arts Kenya (IRPAK) is a community-rooted nonprofit organization dedicated to promoting culture, arts, and heritage as powerful tools for empowerment, unity, and social transformation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-delay-2">
              <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center justify-center font-semibold text-lg">
                <Heart className="mr-2 w-6 h-6 group-hover:animate-pulse" />
                Support Our Mission
              </button>
              <button className="group bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center border border-white/30">
                <ArrowRight className="mr-2 w-5 h-5" />
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Who We Are</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-900 mb-8"></div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Founded on the belief that our traditions, stories, and artistic expressions are vital to our national identity and collective future, IRPAK exists to nurture talent, preserve indigenous knowledge, and elevate the role of arts in community development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We bring together youth, cultural practitioners, performers, and change-makers across Kenya to celebrate and showcase the richness of our cultural heritage through music, dance, theatre, storytelling, visual arts, and community dialogue.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src={ABOUTUS}
                  alt="Cultural Performance" 
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Our Foundation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by purpose, guided by values, and committed to transformation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-orange-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-500-600 rounded-2xl mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-900-700 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To restore and amplify the value of Kenyan and African cultural arts while providing a bridge for artists and communities to thrive socially and economically. We organize community festivals, cultural days, capacity-building workshops, and advocacy programs that highlight the importance of cultural preservation.
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-orange-100 relative overflow-hidden group hover:shadow-3xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-amber-700 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A vibrant cultural ecosystem in Kenya and Africa where every individual has the opportunity to express, preserve, and benefit from our shared heritage. We envision communities where arts and culture drive sustainable development and social cohesion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-900 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every action we take
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-orange-100">Celebrating the difference we've made together</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110 backdrop-blur-sm">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-lg text-orange-100 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl border border-orange-100">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-8">
              <Heart className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-6">Support Our Work</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Your donation helps us reach more communities, preserve precious cultural heritage, and create lasting impact across Kenya. Every contribution makes a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center justify-center font-bold text-lg">
                <Heart className="mr-3 w-6 h-6 group-hover:animate-pulse" />
                Donate Today
                <ArrowRight className="ml-3 w-6 h-6" />
              </button>
              <button className="group bg-white border-2 border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center font-semibold">
                <Users className="mr-2 w-5 h-5" />
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;