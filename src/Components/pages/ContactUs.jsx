import React from "react";
import "../styles/ContactUs.css";
import logo from "../assets/images/logo-green.png";

import Address from "../assets/images/Address.png";
import Call from "../assets/images/Phone.png";
import mail from "../assets/images/Email.png";
import BHours from "../assets/images/Business Time.png";

import telegram from "../assets/images/Telegram.png";

const ContactUs = () => {
  return (
    <section id="ContactUs">
    <div>
      {/* Get In Touch Section */}
      <div className="contact-wrapper">
        <div className="contact-card">
          <img src={logo} alt="GL Sport Logo" className="contact-logo" />
          <h2>Get In Touch</h2>
          <p>
            We'd love to hear from you! Whether you have questions about our
            products or
            <br /> need directions to our store, find all the information you
            need below.
          </p>
        </div>
      </div>

      {/* Contact Details & Map Section */}
      <div className="contact-details-section">
        {/* Contact Info */}
        <div className="contact-info-card">
          <h2>Contact Information</h2>

          <div className="info-block">
            <span className="icon">
              <img src={Address} />
            </span>
            <div>
              <h4>Our Address</h4>
              <p>
                SHOP NO.1, Krishibhavan complex,<br/>
                 Opp Boat club Main gate, <br />
                 Beside Ashram School, <br/>
                 Kakinada,Andhra Pradesh,533003.
          
              </p>
            </div>
          </div>

          <div className="info-block">
            <span className="icon">
              <img src={Call} />
            </span>
            <div>
              <h4>Phone Number</h4>
              <p>+91 90109 91900</p>
            </div>
          </div>

          <div className="info-block">
            <img src={mail} />
            <div>
              <h4>Email Address</h4>
              <p>glsportscentrum@gmail.com</p>
            </div>
          </div>

          <div className="info-block">
            <span className="icon">
              <img src={BHours} />
            </span>
            <div>
              <h4>Business Hours</h4>
              <p>
                Every Day: 10:00 AM – 10:00 PM <br />
                <p></p>
              </p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="find-us">
          <h3>Find US Here</h3>

          <div className="map-card">
            <iframe
              title="GL Sport Location"
              src="https://www.google.com/maps?q=Kakinada&output=embed"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="inquiry-section">
        <h2>Send Us an Inquiry</h2>
        <form className="inquiry-form">
          <h4>Full Name</h4>
          <input type="text" placeholder="Enter You Name" required />
          <h4>Email Address</h4>
          <input type="email" placeholder="Name@example.com" required />
          <h4>Subject</h4>
          <input type="text" placeholder="Question about cricket bats" />
          <h4>Your Message</h4>
          <textarea
            placeholder="Please type your inquiry here..."
            rows="5"
            required
          ></textarea>
          <button type="submit">
            <span className="icon">
              <img src={telegram} />
              </span> Send Inquiry
          </button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default ContactUs;
