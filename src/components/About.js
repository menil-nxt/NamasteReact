import React from "react";
import { href, Route } from "react-router";
import Body from "./Body.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <header className="about-header">
          <h1>About Namaste React</h1>
          <p className="subtitle">Crafting Experiences, One Meal at a Time.</p>
        </header>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            "Our journey began with a simple craving for authentic flavors and a
            frustration with long delivery wait times. We realized that a great
            meal isn't just about the ingredients; it's about the warmth and
            connection it creates at your dining table. Namaste React was
            founded to bridge the gap between world-class local chefs and your
            doorstep. Today, we are proud to serve a community of food lovers
            who refuse to compromise on quality or speed. We’re not just
            delivering food; we’re bringing the heart of the kitchen to your
            home."
          </p>
        </section>

        <div className="features-grid">
          <div className="feature">
            <div className="icon">📍</div>
            <h3>Local First</h3>
            <p>
              We partner with neighborhood kitchens to support local businesses.
            </p>
          </div>
          <div className="feature">
            <div className="icon">⚡</div>
            <h3>Real-time Tracking</h3>
            <p>
              Know exactly where your food is, from the wok to your front door.
            </p>
          </div>
          <div className="feature">
            <div className="icon">🌿</div>
            <h3>Fresh Quality</h3>
            <p>
              Only the highest rated restaurants make it onto our curated list.
            </p>
          </div>
        </div>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">50+ </span>
            <span className="stat-label">Restaurants</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10k+ </span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20 min</span>
            <span className="stat-label">Avg - Delivery</span>
          </div>
        </div>

        <li className="cta-button">
          <Link to="/" className="nav-link">
            Explore Restaurants
          </Link>
        </li>
      </div>
    </div>
  );
};

export default About;
