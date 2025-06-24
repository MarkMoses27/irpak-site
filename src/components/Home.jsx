import React from 'react';
import { Calendar, Users, Heart, ArrowRight, Play, Award, Globe, Palette, Star, Sparkles } from 'lucide-react';

const HomePage = () => {
  const upcomingEvents = [
    {
      title: "Cultural Heritage Festival",
      date: "July 15, 2025",
      location: "Nairobi National Theatre",
      image: "🎭",
      description: "Celebrating Kenya's rich cultural diversity through traditional performances and exhibitions"
    },
    {
      title: "Youth Empowerment Workshop",
      date: "July 22, 2025", 
      location: "IRPAK Community Center",
      image: "🌟",
      description: "Inspiring young minds through arts education and leadership development programs"
    },
    {
      title: "Traditional Music Concert",
      date: "August 5, 2025",
      location: "Uhuru Gardens",
      image: "🎵",
      description: "An evening of soulful traditional music celebrating our musical heritage"
    }
  ];

  const coreValues = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Cultural Preservation",
      description: "Upholding and promoting Kenyan traditions to preserve our rich heritage for future generations"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Creativity & Innovation", 
      description: "Encouraging artistic expression and community-led solutions for positive societal transformation"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Empowerment", 
      description: "Building stronger communities through inclusive arts programs and collaborative initiatives"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cultural Exchange", 
      description: "Fostering national and international connections through arts and cultural diplomacy"
    }
  ];

  const stats = [
    { number: "8", label: "Regional Offices", icon: "🏢" },
    { number: "1000+", label: "Community Members", icon: "👥" },
    { number: "50+", label: "Annual Events", icon: "🎉" },
    { number: "15+", label: "Years of Impact", icon: "⭐" }
  ];

  return (
    <div className="font-sans bg-white">
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url('your-image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'blur(8px)'}}>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            {/* Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              <span className="block text-white">INTEGRITY RAYS OF</span>
              <span className="block text-yellow-400">PERFORMING ARTS</span>
              <span className="block text-xl sm:text-2xl">KENYA</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Empowering individuals through arts, culture, and community-driven programs across Kenya
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{stat.icon}</div>
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-6 justify-center mt-8 sm:mt-12">
              <button className="group bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg">
                Discover Our Story <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="group border-2 border-white hover:bg-white hover:text-orange-600 text-white px-6 py-3 rounded-full transition-all duration-300">
                <Play className="mr-2 w-5 h-5" /> Watch Our Impact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Core Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-600 to-amber-900 rounded-full mb-6">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-4 sm:mb-6">Our Foundation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-amber-900 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and clear vision, we drive meaningful change through arts and culture
            </p>
          </div>

          {/* Mission, Vision, Impact Cards */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Vision */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-600">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">👁️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 sm:mb-4 text-center">Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                Value Core of Life, Love, and Social Development
              </p>
            </div>
            
            {/* Mission */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-900">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 sm:mb-4 text-center">Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                Empowering individuals of all genders and backgrounds by promoting the tangible and intangible cultural heritage of Kenya/Africa through arts, education, innovation, and community-driven programs.
              </p>
            </div>
            
            {/* Impact */}
            <div className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-yellow-500">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 text-center">⚡</div>
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-3 sm:mb-4 text-center">Impact</h3>
              <p className="text-gray-600 text-center leading-relaxed text-sm sm:text-base">
                Facilitating socioeconomic transformation through artistic expression, sustainable livelihood programs, and fostering national and international networking opportunities.
              </p>
            </div>
          </div>
          
          {/* Core Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-6 sm:p-8 text-white hover:from-amber-800 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                <div className="flex flex-col items-center text-center">
                  <div className="text-orange-400 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Banner */}
      <section className="py-12 sm:py-16 lg:py-20 bg-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 via-amber-800 to-orange-600 opacity-90"></div>
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M40 40c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24zm-4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Calendar className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Upcoming Events</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Join us in celebrating Kenya's rich cultural heritage through our exciting upcoming events and programs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{event.image}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{event.title}</h3>
                  <div className="flex items-center justify-center mb-2 text-yellow-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm sm:text-base font-medium">{event.date}</span>
                  </div>
                  <p className="text-white/80 text-sm sm:text-base mb-4">{event.location}</p>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">{event.description}</p>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 transform group-hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <button className="bg-white/20 hover:bg-white/30 border border-white/30 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center mx-auto">
              <Sparkles className="mr-2 w-5 h-5" />
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-pulse">💫</div>
        <div className="absolute bottom-10 right-10 text-8xl opacity-20 animate-bounce">🚀</div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6">Be Part of the Movement</h2>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Join IRPAK in preserving Kenya's cultural heritage and empowering communities through the transformative power of arts and culture
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">🤝</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Join Our Community</h3>
              <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Become a member and participate in programs, networking opportunities, and access to training that will transform your community.
              </p>
              <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center mx-auto">
                <Users className="mr-2 w-5 h-5" />
                Join Us Today
              </button>
            </div>
            
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">❤️</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Support Our Mission</h3>
              <p className="text-white/90 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                Your donation helps us preserve cultural heritage, empower youth, and create sustainable programs that transform communities across Kenya.
              </p>
              <button className="bg-amber-900 hover:bg-amber-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center mx-auto">
                <Heart className="mr-2 w-5 h-5" />
                Donate Now
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto">
            <h4 className="text-lg sm:text-xl font-bold mb-4">Ready to Make a Difference?</h4>
            <p className="text-white/90 mb-6 text-sm sm:text-base">
              Whether you're anartist, educator, community leader, or simply passionate about culture, there's a place for you in our mission.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-yellow-500 hover:bg-yellow-400 text-amber-900 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
Get Involved
</button>
<button className="border-2 border-white hover:bg-white hover:text-orange-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300">
Contact Us
</button>
</div>
</div>
</div>
</section>
</div>
);
};

export default HomePage;
