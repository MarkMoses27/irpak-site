import  { useState } from 'react';
import { FaHandshake, FaUserFriends, FaGraduationCap, FaChevronDown, FaTimes } from 'react-icons/fa';


import '../GetInvolved.css'; // Import your CSS styles

const GetInvolvedDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const submenuItems = [
    { 
      title: 'Volunteer With Us', 
      href: '/get-involved/volunteer',
      icon: <FaHandshake />,
      description: 'Join our team of passionate volunteers and make a difference in the community.',
      image: '/volunteer-illustration.svg',
      color: 'bg-[#FF5C00]'
    },
    { 
      title: 'Become a Member', 
      href: '/get-involved/member',
      icon: <FaUserFriends />,
      description: 'Support our mission by becoming an official member and enjoy exclusive benefits.',
      image: '/membership-illustration.svg',
      color: 'bg-[#42210B]'
    },
    { 
      title: 'Internship & Mentorship Opportunities', 
      href: '/get-involved/opportunities',
      icon: <FaGraduationCap />,
      description: 'Gain valuable experience through our professional development programs.',
      image: '/mentorship-illustration.svg',
      color: 'bg-[#FF5C00]'
    }
  ];

  return (
    <div className="get-involved-container">
      <div className="relative">
        {/* Desktop Dropdown */}
        <div 
          className="hidden md:block"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <button className="nav-button">
            Get Involved <FaChevronDown className="ml-1 text-xs transition-transform" />
          </button>
          
          {isOpen && (
            <div className="dropdown-menu">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                {submenuItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    className="dropdown-card group"
                  >
                    <div className={`icon-container ${item.color}`}>
                      {item.icon}
                    </div>
                    <h3 className="dropdown-title">{item.title}</h3>
                    <p className="dropdown-description">{item.description}</p>
                    <div className="mt-4 flex justify-center">
                      <div className="dropdown-image-placeholder">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <button 
            className="nav-button w-full flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>Get Involved</span>
            <FaChevronDown className={`ml-1 text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="mobile-dropdown-menu">
              <div className="px-4 py-3 flex justify-between items-center border-b">
                <h3 className="text-lg font-bold">Get Involved</h3>
                <button onClick={() => setIsOpen(false)}>
                  <FaTimes className="text-gray-500" />
                </button>
              </div>
              <div className="p-4 space-y-4">
                {submenuItems.map((item, index) => (
                  <a 
                    key={index} 
                    href={item.href}
                    className="mobile-dropdown-card"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="flex items-start">
                      <div className={`icon-container ${item.color}`}>
                        {item.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedDropdown;