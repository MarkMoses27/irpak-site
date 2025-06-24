import React from 'react';

const YouthTalent = () => {
  // Mock data for youth talent (you can adjust this based on the actual content)
  const talentData = [
    {
      name: 'Laura de Magalhães',
      description: 'An emerging musician dedicated to preserving cultural heritage through music.',
      area: 'Music',
      link: '#', // Link to more information or portfolio
    },
    {
      name: 'Jamal Wanjiru',
      description: 'A talented dancer using traditional dance forms to inspire youth across Kenya.',
      area: 'Dance',
      link: '#', // Link to more information or portfolio
    },
    {
      name: 'Tom Kiprotich',
      description: 'A gifted visual artist using paintings to tell stories of Kenyan history and culture.',
      area: 'Visual Arts',
      link: '#', // Link to more information or portfolio
    },
    {
      name: 'Miriam Nyambura',
      description: 'A theatre artist who uses performance arts to advocate for social change.',
      area: 'Theatre',
      link: '#', // Link to more information or portfolio
    }
  ];

  return (
    <div className="font-sans bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-amber-800 to-orange-600 flex items-center justify-center overflow-hidden">
        {/* Background Image from Unsplash */}
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1604438012164-e80e9b5c466e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY3JlfDk3fHx5b3V0aHxlbnwwfHx8fDE2NTgzODg5NzM&ixlib=rb-1.2.1&q=80&w=1080')`
        }}></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight text-shadow-lg">
              Youth Talent Empowerment Program
            </h1>
            <p className="text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
              Empowering the youth through arts, culture, and creative expression to unlock their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Talent Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-900 mb-6">Our Youth Talent Showcase</h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Discover the incredible talents that are driving change and making an impact in their communities.
        </p>

        {/* Talent Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {talentData.map((talent, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4">{talent.name}</h3>
              <p className="text-gray-300 mb-6">{talent.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-medium text-gray-200">{talent.area}</span>
                <a href={talent.link} className="text-orange-600 hover:text-orange-700">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center text-white">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Get Involved in Youth Talent Development</h2>
        <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-8">
          Join our movement in supporting and empowering the next generation of young leaders through arts and culture.
        </p>
        <a href="#volunteer" className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105">
          Become a Mentor
        </a>
      </section>
    </div>
  );
};

export default YouthTalent;
