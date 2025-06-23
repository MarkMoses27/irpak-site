import React, { useState, useEffect } from 'react';
import { Calendar, Music, Users, Palette, Award } from 'lucide-react';

const EventsCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      id: 1,
      title: "World Music Day Kenya",
      date: "2025-06-21",
      type: "music",
      status: "upcoming",
      description: "Celebrating the universal language of music across Kenya",
      icon: Music,
      gradient: "from-orange-500 to-orange-600"
    },
    {
      id: 2,
      title: "Youth Festival Kenya",
      date: "2025-08-14",
      endDate: "2025-08-15",
      type: "youth",
      status: "upcoming",
      description: "Empowering the next generation through arts and culture",
      icon: Users,
      gradient: "from-orange-600 to-red-500"
    },
    {
      id: 3,
      title: "Pan-African Arts Symposium Kenya",
      date: "2025-09-23",
      endDate: "2025-09-25",
      type: "arts",
      status: "upcoming",
      description: "Uniting African artistic traditions and contemporary expressions",
      icon: Palette,
      gradient: "from-red-500 to-orange-500"
    },
    {
      id: 4,
      title: "The Legends Festival Kenya",
      date: "2025-11-30",
      endDate: "2025-12-03",
      type: "legends",
      status: "upcoming",
      description: "Honoring Kenya's cultural legends and heritage",
      icon: Award,
      gradient: "from-orange-500 to-yellow-500"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const formatDateRange = (startDate, endDate) => {
    if (!endDate) return formatDate(startDate);
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (start.getMonth() === end.getMonth()) {
      return `${start.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })} - ${end.getDate()}, ${end.getFullYear()}`;
    }
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const getDaysUntil = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const getCountdownText = (days) => {
    if (days < 0) return "Event passed";
    if (days === 0) return "Today!";
    if (days === 1) return "Tomorrow";
    if (days < 7) return `${days} days`;
    if (days < 30) return `${Math.floor(days / 7)} weeks`;
    return `${Math.floor(days / 30)} months`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#42210B' }}>
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
        <div className="relative px-6 py-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/25">
              <Calendar className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Kenya Cultural Events
          </h1>
          <p className="text-xl text-orange-200 max-w-2xl mx-auto">
            Celebrating Kenya's rich cultural heritage through arts, music, and community
          </p>
          <div className="mt-8 text-orange-300">
            <p className="text-lg">2025 Event Calendar</p>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {events.map((event, index) => {
              const IconComponent = event.icon;
              const daysUntil = getDaysUntil(event.date);
              
              return (
                <div
                  key={event.id}
                  className="group relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-transparent"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon and Status */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${event.gradient} shadow-lg`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium border border-orange-500/30">
                          {getCountdownText(daysUntil)}
                        </div>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-white leading-tight group-hover:text-orange-300 transition-colors">
                        {event.title}
                      </h3>
                      
                      <div className="flex items-center text-orange-300 text-lg font-medium">
                        <Calendar className="w-5 h-5 mr-3" />
                        {formatDateRange(event.date, event.endDate)}
                      </div>

                      <p className="text-gray-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Expanded Details */}
                    {selectedEvent === event.id && (
                      <div className="mt-6 pt-6 border-t border-orange-500/20 animate-in slide-in-from-top duration-300">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-orange-400 font-medium">Status:</span>
                            <p className="text-white capitalize">{event.status}</p>
                          </div>
                          <div>
                            <span className="text-orange-400 font-medium">Type:</span>
                            <p className="text-white capitalize">{event.type}</p>
                          </div>
                        </div>
                        
                        {daysUntil > 0 && (
                          <div className="mt-4 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20">
                            <p className="text-orange-300 text-center">
                              <span className="font-bold text-2xl text-orange-400">{daysUntil}</span> days to go!
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-black/40 border border-orange-500/30 backdrop-blur-sm">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-3 animate-pulse"></div>
              <span className="text-orange-300 font-medium">
                Stay tuned for more cultural celebrations
              </span>
            </div>
            
            <p className="mt-6 text-gray-400 text-sm">
              Experience the vibrant culture of Kenya through these exceptional events
            </p>
          </div>
        </div>
      </div>

      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-500/30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-orange-400/20 rounded-full animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-orange-300/40 rounded-full animate-ping" style={{ animationDelay: '6s' }}></div>
      </div>
    </div>
  );
};

export default EventsCalendar;