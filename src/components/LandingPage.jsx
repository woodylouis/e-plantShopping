import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-background">
        <div className="landing-content">
          <h1>Welcome to Paradise Nursery</h1>
          <p className="landing-description">
            Welcome to Paradise Nursery, your one-stop shop for beautiful houseplants.
            We offer a wide variety of healthy and vibrant plants to bring life to your home or office.
            Our mission is to make plant ownership accessible and enjoyable for everyone.
          </p>
          <Link to="/products" className="get-started-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;