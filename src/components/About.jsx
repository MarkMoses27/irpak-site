import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <img src="your-image.jpg" alt="IRPAK Banner" className="hero-image" />
        <div className="hero-overlay">
          <h1>About IRPAK</h1>
          <p>Integrity Rays of Performing Arts Kenya (IRPAK) is a community-rooted nonprofit organization dedicated to promoting culture, arts, and heritage as powerful tools for empowerment, unity, and social transformation.</p>
          <a href="#donate" className="btn-donate">Donate Now</a>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-who">
        <h2>Who We Are</h2>
        <p>
          Founded on the belief that our traditions, stories, and artistic expressions are vital to our national identity and collective future, IRPAK exists to nurture talent, preserve indigenous knowledge, and elevate the role of arts in community development. We bring together youth, cultural practitioners, performers, and change-makers across Kenya to celebrate and showcase the richness of our cultural heritage through music, dance, theatre, storytelling, visual arts, and community dialogue.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="about-mv">
        <div className="mv-block">
          <h2>Our Mission</h2>
          <p>
            To restore and amplify the value of Kenyan and African cultural arts while providing a bridge for artists and communities to thrive socially and economically. We organize community festivals, cultural days, capacity-building workshops, and advocacy programs that highlight the importance of cultural preservation.
          </p>
        </div>
        <div className="mv-block">
          <h2>Our Vision</h2>
          <p>
            A vibrant cultural ecosystem in Kenya and Africa where every individual has the opportunity to express, preserve, and benefit from our shared heritage.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <ul>
          <li>Integrity – Upholding transparency, accountability, and honesty in all we do.</li>
          <li>Cultural Pride – Championing the preservation and celebration of our roots.</li>
          <li>Empowerment – Creating platforms for youth, women, and artists to lead and thrive.</li>
          <li>Inclusivity – Ensuring all voices are heard, represented, and respected.</li>
          <li>Innovation – Embracing creativity as a driver of growth and transformation.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section id="donate" className="about-cta">
        <h2>Support Our Work</h2>
        <p>Your donation helps us reach more communities and create lasting impact.</p>
        <a href="/donate" className="btn-donate-large">Donate Today</a>
      </section>
    </div>
  );
};

export default AboutUs;
