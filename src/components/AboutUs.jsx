import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h2 className="page-title">About Paradise Nursery</h2>

      <div className="about-container">
        <section className="about-section">
          <h3>Our Mission</h3>
          <p>
            At Paradise Nursery, our mission is to bring the beauty and benefits of nature into every home and office.
            We believe that plants not only enhance the aesthetic appeal of any space but also improve air quality,
            reduce stress, and promote overall well-being. Our goal is to make plant ownership accessible and enjoyable
            for everyone, from seasoned plant enthusiasts to first-time buyers.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Story</h3>
          <p>
            Founded in 2018, Paradise Nursery started as a small local nursery with a passion for growing healthy and
            vibrant plants. Over the years, we've expanded our collection to include a wide variety of houseplants,
            from tropical beauties to low-maintenance succulents. Today, we're proud to serve plant lovers across the
            country through our online store, delivering quality plants directly to your doorstep.
          </p>
        </section>

        <section className="about-section">
          <h3>Our Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Quality</h4>
              <p>We carefully select and nurture each plant to ensure it arrives at your home healthy and ready to thrive.</p>
            </div>
            <div className="value-item">
              <h4>Sustainability</h4>
              <p>We prioritize eco-friendly practices in our nursery and packaging to minimize our environmental impact.</p>
            </div>
            <div className="value-item">
              <h4>Customer Satisfaction</h4>
              <p>We're committed to providing exceptional service and support to help you succeed in your plant journey.</p>
            </div>
            <div className="value-item">
              <h4>Education</h4>
              <p>We share our knowledge and expertise to help you care for your plants and create a thriving indoor garden.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h3>Our Team</h3>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
                alt="Sarah Johnson"
                className="team-image"
              />
              <h4>Sarah Johnson</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop"
                alt="Michael Chen"
                className="team-image"
              />
              <h4>Michael Chen</h4>
              <p>Head Horticulturist</p>
            </div>
            <div className="team-member">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop"
                alt="Emma Rodriguez"
                className="team-image"
              />
              <h4>Emma Rodriguez</h4>
              <p>Customer Experience Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;