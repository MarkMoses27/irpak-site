import React, { useState } from 'react';
import './GetInvolved.css';

const VolunteerWithUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Volunteer application submitted:', formData);
    alert('Thank you for your application! We will contact you soon.');
  };

  return (
    <div className="get-involved-container">
      {/* Hero Section */}
      <section className="get-involved-hero">
        <img src="" alt="Volunteers at IRPAK event" className="hero-image" />
        <div className="hero-overlay">
          <h1>Volunteer With Us</h1>
          <p>Join our passionate community of volunteers and help preserve Kenyan cultural heritage while making a lasting impact in communities across Kenya.</p>
          <a href="#volunteer-form" className="btn-primary">Start Volunteering</a>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="get-involved-why">
        <div className="container">
          <h2>Why Volunteer with IRPAK?</h2>
          <p>
            Volunteering with IRPAK means being part of a movement that celebrates and preserves our rich cultural heritage. You'll work alongside like-minded individuals who are passionate about arts, culture, and community development while gaining valuable experience and making meaningful connections.
          </p>
          
          <div className="benefits-grid">
            <div className="benefit-card">
              <h3>Cultural Impact</h3>
              <p>Directly contribute to preserving and promoting Kenyan traditions, music, dance, and storytelling for future generations.</p>
            </div>
            <div className="benefit-card">
              <h3>Skill Development</h3>
              <p>Gain hands-on experience in event management, cultural programming, community outreach, and arts administration.</p>
            </div>
            <div className="benefit-card">
              <h3>Network Building</h3>
              <p>Connect with artists, cultural practitioners, community leaders, and fellow volunteers across Kenya.</p>
            </div>
            <div className="benefit-card">
              <h3>Personal Growth</h3>
              <p>Develop leadership skills, cultural awareness, and make a meaningful difference in your community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="get-involved-opportunities">
        <div className="container">
          <h2>Volunteer Opportunities</h2>
          
          <div className="opportunities-list">
            <div className="opportunity-item">
              <h3>Event Coordination</h3>
              <p>Help organize cultural festivals, workshops, and community events. Support with logistics, registration, and participant engagement.</p>
              <div className="opportunity-details">
                <span className="time-commitment">Time: 10-20 hours/month</span>
                <span className="skills-needed">Skills: Organization, Communication</span>
              </div>
            </div>
            
            <div className="opportunity-item">
              <h3>Cultural Documentation</h3>
              <p>Assist in recording and preserving traditional stories, songs, and practices. Help with video production, photography, and archival work.</p>
              <div className="opportunity-details">
                <span className="time-commitment">Time: 5-15 hours/month</span>
                <span className="skills-needed">Skills: Photography, Writing, Research</span>
              </div>
            </div>
            
            <div className="opportunity-item">
              <h3>Community Outreach</h3>
              <p>Engage with local communities to promote IRPAK programs and identify cultural preservation needs.</p>
              <div className="opportunity-details">
                <span className="time-commitment">Time: 8-16 hours/month</span>
                <span className="skills-needed">Skills: Communication, Cultural Sensitivity</span>
              </div>
            </div>
            
            <div className="opportunity-item">
              <h3>Youth Mentorship</h3>
              <p>Guide young artists and cultural enthusiasts through workshops, training sessions, and skill development programs.</p>
              <div className="opportunity-details">
                <span className="time-commitment">Time: 6-12 hours/month</span>
                <span className="skills-needed">Skills: Teaching, Mentoring, Arts Background</span>
              </div>
            </div>
            
            <div className="opportunity-item">
              <h3>Digital Marketing</h3>
              <p>Help promote IRPAK's mission through social media, content creation, and online community engagement.</p>
              <div className="opportunity-details">
                <span className="time-commitment">Time: 5-10 hours/month</span>
                <span className="skills-needed">Skills: Social Media, Content Creation, Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="get-involved-requirements">
        <div className="container">
          <h2>Volunteer Requirements</h2>
          <div className="requirements-content">
            <div className="requirements-list">
              <h3>Basic Requirements</h3>
              <ul>
                <li>Passion for Kenyan culture and heritage</li>
                <li>Commitment to IRPAK's mission and values</li>
                <li>Reliable and punctual</li>
                <li>Good communication skills in English and/or Kiswahili</li>
                <li>Minimum age of 16 years</li>
              </ul>
            </div>
            <div className="requirements-process">
              <h3>Application Process</h3>
              <ol>
                <li>Complete the volunteer application below</li>
                <li>Attend a brief orientation session</li>
                <li>Choose your preferred volunteer area</li>
                <li>Start making a difference!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application */}
      <section id="volunteer-form" className="get-involved-form">
        <div className="container">
          <h2>Volunteer Application</h2>
          <div className="application-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  required 
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Location/County *</label>
              <input 
                type="text" 
                id="location" 
                name="location" 
                value={formData.location}
                onChange={handleInputChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label>Areas of Interest (Select all that apply)</label>
              <div className="checkbox-group">
                <label>
                  <input 
                    type="checkbox" 
                    name="interests" 
                    value="events" 
                    onChange={handleInputChange}
                  /> Event Coordination
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="interests" 
                    value="documentation" 
                    onChange={handleInputChange}
                  /> Cultural Documentation
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="interests" 
                    value="outreach" 
                    onChange={handleInputChange}
                  /> Community Outreach
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="interests" 
                    value="mentorship" 
                    onChange={handleInputChange}
                  /> Youth Mentorship
                </label>
                <label>
                  <input 
                    type="checkbox" 
                    name="interests" 
                    value="marketing" 
                    onChange={handleInputChange}
                  /> Digital Marketing
                </label>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="availability">Availability</label>
              <select 
                id="availability" 
                name="availability"
                value={formData.availability}
                onChange={handleInputChange}
              >
                <option value="">Select your availability</option>
                <option value="weekends">Weekends only</option>
                <option value="weekdays">Weekdays only</option>
                <option value="flexible">Flexible schedule</option>
                <option value="events">Events only</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="experience">Relevant Experience/Skills</label>
              <textarea 
                id="experience" 
                name="experience" 
                rows="4" 
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Tell us about any relevant experience or skills you have..."
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="motivation">Why do you want to volunteer with IRPAK?</label>
              <textarea 
                id="motivation" 
                name="motivation" 
                rows="4" 
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Share your motivation for joining our volunteer team..."
              ></textarea>
            </div>
            
            <button type="button" onClick={handleSubmit} className="btn-submit">
              Submit Application
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="get-involved-contact">
        <div className="container">
          <h2>Questions About Volunteering?</h2>
          <p>Contact our Volunteer Coordinator for more information:</p>
          <div className="contact-info">
            <p><strong>Email:</strong> volunteer@irpak.org</p>
            <p><strong>Phone:</strong> +254 XXX XXX XXX</p>
            <p><strong>WhatsApp:</strong> +254 XXX XXX XXX</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerWithUs;