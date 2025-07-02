import React from 'react';
import { ArrowRight, Heart, Building2, Users, Calendar, Award, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom'; 

// images
import hero1 from '../assets/hero1.png';
import hero2 from '../assets/hero2.png';
import hero3 from '../assets/hero3.png';

const HomePage = () => {
  const slides = [
    {
      title: "INTEGRITY RAYS OF PERFORMING ARTS KENYA",
      subtitle: "Empowering individuals through arts, culture, and community-driven programs across Kenya",
      image: hero1
    },
    {
      title: "CULTURE IN ACTION",
      subtitle: "Celebrate cultural heritage, creativity, and community growth",
      image: hero2
    },
    {
      title: "ARTS FOR A BRIGHT FUTURE",
      subtitle: "Unleashing potential through artistic expression and collaboration",
      image: hero3
    }
  ];

  const coreValues = [
    { title: "Cultural Preservation", description: "Upholding and promoting Kenyan traditions to preserve our rich heritage for future generations." },
    { title: "Creativity & Innovation", description: "Encouraging artistic expression and community-led solutions for positive societal transformation." },
    { title: "Community Empowerment", description: "Building stronger communities through inclusive arts programs and collaborative initiatives." },
    { title: "Cultural Exchange", description: "Fostering national and international connections through arts and cultural diplomacy." }
  ];

  const stats = [
    { number: "8", label: "Regional Offices", icon: Building2 },
    { number: "1000+", label: "Community Members", icon: Users },
    { number: "50+", label: "Annual Events", icon: Calendar },
    { number: "15+", label: "Years of Impact", icon: Award }
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="font-sans bg-white">
      {/* Hero Section with Auto-Playing Slider */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 overflow-hidden">
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-60' : 'opacity-0'}`}
            >
              <img 
                src={slide.image} 
                alt={`Hero ${index + 1}`} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-delay">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 sm:mt-12 animate-fade-in-delay-2">
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donate">
                  <button className="group bg-red-600 hover:bg-red-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:scale-105 transform flex items-center justify-center font-semibold text-base sm:text-lg cursor-pointer">
                    <Heart className="mr-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-pulse" />
                    Donate Now
                  </button>
                </Link>
                <Link to="/about">
                  <button className="group bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 hover:shadow-lg flex items-center justify-center cursor-pointer">
                    <ArrowRight className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    Our Story
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-sm sm:text-base text-white/80 font-medium tracking-wide">
                IRPAK - Integrity Rays of Performing Arts Kenya
              </p>
              <p className="text-xs sm:text-sm text-white/60 mt-2">
                Governance & Strategic Framework | Headquartered in Nairobi
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Mission, Vision, Core Values Section */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-orange-600 to-amber-900 rounded-full mb-4 sm:mb-6">
              <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-amber-900 mb-3 sm:mb-4 md:mb-6">Our Foundation</h2>
            <div className="w-20 h-1 sm:w-24 bg-gradient-to-r from-orange-600 to-amber-900 mx-auto mb-4 sm:mb-6 md:mb-8"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Built on strong values and clear vision, we drive meaningful change through arts and culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <Eye className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                <Eye className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Our Vision
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Value Core of Life, Love, and Social Development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute top-4 right-4 opacity-20">
                <Target className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                Our Mission
              </h3>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                Empowering individuals of all genders and backgrounds by promoting the tangible and intangible cultural heritage of Kenya/Africa through arts, education, innovation, and community-driven programs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="group bg-gradient-to-br from-amber-900 to-amber-800 rounded-2xl p-5 sm:p-6 md:p-8 text-white hover:from-amber-800 hover:to-orange-600 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105">
                <div className="text-center">
                  <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{value.title}</h4>
                  <p className="text-white/90 leading-relaxed text-sm sm:text-base">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">Our Impact at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/10 rounded-full mb-3 sm:mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-105 sm:group-hover:scale-110">
                    <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-white">{stat.number}</div>
                  <div className="text-xs sm:text-sm md:text-base text-white/80 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;