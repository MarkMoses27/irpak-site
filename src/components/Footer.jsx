import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin, FaHeart, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => (
  <footer className="relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #42210B 0%, #000000 50%, #42210B 100%)' }}>
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF5C00' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
    </div>

    <div className="relative max-w-7xl mx-auto px-6 py-16">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* About Section */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#FF5C00' }}>
              About IRPAK
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Integrity Rays of Performing Arts Kenya (IRPAK) is a community-rooted nonprofit organization dedicated to promoting culture, arts, and heritage as powerful tools for empowerment, unity, and social transformation.
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <FaMapMarkerAlt style={{ color: '#FF5C00' }} className="flex-shrink-0" />
              <div>
                <p>Mbotela Social Hall</p>
                <p>Jogoo Road, Nairobi</p>
                <p className="text-xs text-gray-400">Open for appointments</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <FaPhone style={{ color: '#FF5C00' }} className="flex-shrink-0" />
              <div>
                <p>0704 298 017</p>
                <p>+254 722 277 211</p>
                <p className="text-xs text-gray-400">Mon - Fri: 8AM - 6PM</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 text-sm">
              <FaEnvelope style={{ color: '#FF5C00' }} className="flex-shrink-0" />
              <div>
                <p>info@irpaknairobike.org</p>
                <p className="text-xs text-gray-400">We'll respond within 24 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white pb-2 mb-4" style={{ borderBottom: '2px solid #FF5C00' }}>
            Quick Links
          </h4>
          <ul className="space-y-3">
            {[
              { name: 'Home', href: '/' },
              { name: 'About Us', href: '/about' },
              { name: 'Programs', href: '/programs' },
              { name: 'Events', href: '/events' },
              { name: 'Gallery', href: '/gallery' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className="text-gray-300 transition-colors duration-300 text-sm flex items-center group"
                  style={{ 
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#FF5C00'}
                  onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
                >
                  <span 
                    className="w-1 h-1 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: '#FF5C00' }}
                  ></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect & Donate */}
        <div className="space-y-6">
          <h4 className="text-lg font-semibold text-white pb-2 mb-4" style={{ borderBottom: '2px solid #FF5C00' }}>
            Connect With Us
          </h4>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {[
              { icon: FaFacebookF, href: "https://www.facebook.com/fopack.fopack.2025", label: "Facebook" },
              { icon: FaInstagram, href: "https://www.instagram.com/irpakofficial", label: "Instagram" },
              { icon: FaYoutube, href: "https://www.youtube.com/channel/IRPAKOfficial", label: "YouTube" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/company/irpak", label: "LinkedIn" }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg"
                style={{ 
                  backgroundColor: '#42210B',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#FF5C00';
                  e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#42210B';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Donate Button */}
          <div className="pt-4">
            <a
              href="/donate"
              className="inline-flex items-center space-x-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm"
              style={{ 
                background: 'linear-gradient(135deg, #FF5C00 0%, #42210B 100%)',
                transition: 'all 0.3s ease'
              }}
            >
              <FaHeart className="w-4 h-4" />
              <span>Support Our Mission</span>
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="pt-8 mb-8" style={{ borderTop: '1px solid #42210B' }}>
        <div className="max-w-md mx-auto text-center">
          <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
              style={{ 
                backgroundColor: '#42210B',
                borderColor: '#42210B',
                '--tw-ring-color': '#FF5C00'
              }}
            />
            <button 
              className="px-6 py-2 text-white rounded-lg font-semibold transition-colors duration-300"
              style={{ 
                backgroundColor: '#FF5C00',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#e65100'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF5C00'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" style={{ borderTop: '1px solid #42210B' }}>
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} IRPAK. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <a 
            href="/privacy" 
            className="text-gray-400 transition-colors duration-300"
            onMouseEnter={(e) => e.target.style.color = '#FF5C00'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
          >
            Privacy Policy
          </a>
          <a 
            href="/terms" 
            className="text-gray-400 transition-colors duration-300"
            onMouseEnter={(e) => e.target.style.color = '#FF5C00'}
            onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(255, 92, 0, 0.1) 0%, transparent 70%)' }}></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(66, 33, 11, 0.2) 0%, transparent 70%)' }}></div>
  </footer>
);

export default Footer;