import { useState } from 'react';
import './Contact.css';
import {
  FaMapPin,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin
} from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="contact-container">
      <section className="contact-cards">
        <div className="section-header">
          <h2>Let's Connect</h2>
          <p className="subtitle">Choose your preferred way to reach us. We're committed to responding promptly to all inquiries.</p>
        </div>

        <div className="cards-wrapper">
          <div className="card email-card">
            <div className="card-icon">
              <FaEnvelope />
            </div>
            <div className="card-content">
              <h3>Email Us</h3>
              <a href="mailto:info@irpaknairobike.org">info@irpaknairobike.org</a>
              <p>We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="card phone-card">
            <div className="card-icon">
              <FaPhone />
            </div>
            <div className="card-content">
              <h3>Call Us</h3>
              <a href="tel:0704298017">0704 298 017</a>
              <a href="tel:+254722277211">+254 722 277 211</a>
              <p>Mon - Fri: 8AM - 6PM</p>
            </div>
          </div>

          <div className="card location-card">
            <div className="card-icon">
              <FaMapPin />
            </div>
            <div className="card-content">
              <h3>Visit Us</h3>
              <p>Mbotela Social Hall</p>
              <p>Jogoo Road, Nairobi</p>
              <p>Open for appointments</p>
            </div>
          </div>
        </div>
      </section>

      <section className="social-media">
        <h3>Follow Our Journey</h3>
        <div className="social-buttons">
          {[
            { icon: <FaFacebookF />, label: 'Facebook', href: 'https://www.facebook.com/fopack.fopack.2025' },
            { icon: <FaInstagram />, label: 'Instagram', href: 'https://www.instagram.com/irpakofficial' },
            { icon: <FaYoutube />, label: 'YouTube', href: 'https://www.youtube.com/channel/IRPAKOfficial' },
            { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/company/irpak' }
          ].map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={`Follow on ${s.label}`}>
              <span className="social-icon">{s.icon}</span>
              <span className="social-text">{s.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-form-map">
        <div className="form-section">
          <h3>Send us a Message</h3>
          {submitted && (
            <div className="success-msg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </svg>
              <div>
                <strong>Thank you!</strong> Your message has been sent.
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange}
                required 
                placeholder=" "
              />
              <label>Full Name *</label>
            </div>
            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange}
                required 
                placeholder=" "
              />
              <label>Email Address *</label>
            </div>
            <div className="input-group">
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleInputChange}
                required 
                placeholder=" "
              />
              <label>Subject *</label>
            </div>
            <div className="input-group">
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange}
                rows="5" 
                required 
                placeholder=" "
              />
              <label>Message *</label>
            </div>
            <button type="submit" disabled={isSubmitting} className="send-btn">
              {isSubmitting ? (
                <span className="spinner"></span>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="map-section">
          <iframe
            title="IRPAK Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.276677123456!2d36.831234567!3d-1.292345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c1234567%3A0xabcdef1234567890!2sMbotela%20Social%20Hall!5e0!3m2!1sen!2ske!4v1610000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;