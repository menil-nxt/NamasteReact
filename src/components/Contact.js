import React from "react";

const Contact = () => {
  return (
    <div className="about-wrapper">
      <div className="about-card">
        <h1>Connect with Us</h1>
        <p className="subtitle">
          Feel free to reach out on any of these platforms
        </p>

        <div className="contact-container">
          {/* Direct Contact (Email & Phone) */}
          <div className="contact-methods">
            <div className="feature">
              <a href="mailto:team@namastereact.com" className="icon-link">
                <i className="fa-solid fa-envelope"></i>
              </a>
              <h3>Email</h3>
            </div>
            <div className="feature">
              <a href="tel:+1234567890" className="icon-link">
                <i className="fa-solid fa-phone"></i>
              </a>
              <h3>Call</h3>
            </div>
          </div>

          <hr className="divider" />

          {/* Social Media Symbols Only */}
          <div className="social-icon-grid">
            <a href="#" target="_blank" className="social-icon whatsapp">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href="#" target="_blank" className="social-icon instagram">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" target="_blank" className="social-icon linkedin">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" target="_blank" className="social-icon facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" className="social-icon x-twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
