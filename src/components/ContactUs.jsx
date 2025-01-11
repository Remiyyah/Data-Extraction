import React from "react";


const ContactUs = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Have questions or feedback? We'd love to hear from you!
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              type="text"
              id="contact-name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              type="email"
              id="contact-email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;