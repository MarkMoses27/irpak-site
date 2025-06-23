import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 40px',
    fontFamily: 'monospace',
    fontSize: '14px',
    backgroundColor: 'white',
    position: 'relative',
    flexWrap: 'wrap',
    overflow: 'visible'
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111',
    flex: '1 1 auto'
  };

  const centerNavStyle = {
    display: isMobile ? (mobileOpen ? 'flex' : 'none') : 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '16px' : '30px',
    alignItems: isMobile ? 'flex-start' : 'center',
    justifyContent: 'center',
    flex: '2 1 auto',
    position: isMobile ? 'absolute' : 'relative',
    top: isMobile ? '100%' : 'auto',
    left: isMobile ? 0 : 'auto',
    width: isMobile ? '100%' : 'auto',
    backgroundColor: isMobile ? 'white' : 'transparent',
    borderTop: isMobile ? '1px solid #ddd' : 'none',
    padding: isMobile ? '16px' : '0',
    zIndex: 999,
    overflow: 'visible'
  };

  const navItemStyle = {
    position: 'relative',
    color: '#111',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '4px',
    minWidth: 'max-content',
    overflow: 'visible'
  };

  const dropdownStyle = (index) => ({
    backgroundColor: '#fff',
    border: isMobile ? 'none' : '1px solid #ddd',
    borderRadius: isMobile ? '0' : '4px',
    boxShadow: isMobile ? 'none' : '0 2px 8px rgba(0,0,0,0.1)',
    marginTop: '8px',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    minWidth: '220px',
    pointerEvents: 'auto',
    overflow: 'visible',
    position: isMobile ? 'relative' : 'absolute',
    top: isMobile ? 'auto' : '70%',
    left: isMobile ? 'auto' : index > 7 ? 'auto' : 0,
    right: isMobile ? 'auto' : index > 7 ? 0 : 'auto'
  });

  const dropdownItemStyle = {
    padding: '10px 15px',
    textDecoration: 'none',
    color: '#333',
    whiteSpace: 'nowrap',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const arrowStyle = {
    fontSize: '0.8rem',
    transition: 'transform 0.2s ease',
    display: 'inline-block',
    transform: 'rotate(-90deg)'
  };

  const arrowRotatedStyle = {
    ...arrowStyle,
    transform: 'rotate(90deg)'
  };

  const hamburgerStyle = {
    display: isMobile ? 'block' : 'none',
    cursor: 'pointer',
    fontSize: '24px',
    padding: '8px 12px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    backgroundColor: '#f3f3f3',
    marginLeft: 'auto'
  };

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about' },
    {
      title: 'Programs',
      submenu: [
        { title: 'Community Arts Development', href: '/programs/community-arts' },
        { title: 'Youth Talent Nurturing', href: '/programs/youth-talent' },
        { title: 'IRPAK World Culture Day', href: '/programs/world-culture-day' },
        { title: 'Performing Arts for economic development', href: '/programs/performing-arts' },
        { title: 'Arts tours', href: '/programs/arts-tours' }
      ]
    },
    {
      title: 'Events',
      submenu: [
        { title: 'Upcoming Events', href: '/events/upcoming' },
        { title: 'Past Events', href: '/events/past' },
        { title: 'Annual Festival Highlights', href: '/events/highlights' },
        { title: 'How to Participate or Volunteer', href: '/events/participate' }
      ]
    },
    {
      title: 'Get Involved',
      submenu: [
        { title: 'Volunteer With Us', href: '/get-involved/volunteer' },
        { title: 'Become a Member', href: '/get-involved/member' },
        { title: 'Internship & Mentorship Opportunities', href: '/get-involved/opportunities' }
      ]
    },
    {
      title: 'Media',
      submenu: [
        { title: 'Photo Gallery', href: '/media/gallery' },
        { title: 'Videos', href: '/media/videos' },
        { title: 'Testimonials', href: '/media/testimonials' },
        { title: 'Event Highlights', href: '/media/highlights' },
        { title: 'Press Mentions & Articles', href: '/media/press' }
      ]
    },
    {
      title: 'Resources',
      submenu: [
        { title: 'Reports & Publications', href: '/resources/reports' },
        { title: 'Policy Documents', href: '/resources/policies' },
        { title: 'Downloadable Forms', href: '/resources/forms' }
      ]
    },
    {
      title: 'Blog',
      submenu: [
        { title: 'Latest Announcements', href: '/blog/announcements' },
        { title: 'Stories from the Community', href: '/blog/stories' },
        { title: 'Feature Articles', href: '/blog/features' }
      ]
    },
    {
      title: 'Partners & Sponsors',
      submenu: [
        { title: 'Our Current Partners', href: '/partners/current' },
        { title: 'Partnership Opportunities', href: '/partners/opportunities' }
      ]
    },
    {
      title: 'Contact Us',
      submenu: [
        { title: 'Contact Information', href: '/contact/info' },
        { title: 'Online Inquiry Form', href: '/contact/inquiry' },
        { title: 'Map/Directions to IRPAK Office', href: '/contact/map' },
        { title: 'Social Media Links', href: '/contact/social' }
      ]
    }
  ];

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>IRPAK</div>

      <div style={hamburgerStyle} onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? '✕' : '☰'}
      </div>

      <div style={centerNavStyle}>
        {menuItems.map((item, index) => (
          <div
            key={index}
            style={navItemStyle}
            onMouseEnter={() => !isMobile && setActiveMenu(index)}
            onMouseLeave={() => !isMobile && setActiveMenu(null)}
            onClick={() => isMobile && setActiveMenu(activeMenu === index ? null : index)}
          >
            {!item.submenu ? (
              <Link to={item.href || '#'} style={{ textDecoration: 'none', color: '#111', }}>
                {item.title}
              </Link>
            ) : (
              <span style={{ color: '#111' }}>
                {item.title} <span style={activeMenu === index ? arrowRotatedStyle : arrowStyle}>&rarr;</span>
              </span>
            )}
            {activeMenu === index && item.submenu && (
              <div style={dropdownStyle(index)}>
                {item.submenu.map((subItem, subIdx) => (
                  <Link key={subIdx} to={subItem.href || '#'} style={dropdownItemStyle}>
                    {subItem.title} <span style={{ fontSize: '10px' }}>&rarr;</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
