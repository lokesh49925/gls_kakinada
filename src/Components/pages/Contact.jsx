import React from "react";
import "../styles/ContactUs.css";
import logo from "../assets/images/logo-green.png";

import Address from "../assets/images/Address.png";
import Call from "../assets/images/Phone.png";
import mail from "../assets/images/Email.png";
import BHours from "../assets/images/Business Time.png";

import telegram from "../assets/images/Telegram.png";

const Contact = () => {
  return (
   
    <section id="Contact">
     <div>
      <div className="inquiry-section">
        <h2>Send Us an Inquiry</h2>
        <form className="inquiry-form">
          <h4>Full Name</h4>
          <input type="text" placeholder="Enter You Name" required name="fullname"/>
          <h4>Email Address</h4>
          <input type="email" placeholder="Name@example.com" required name="email"/>
          <h4>Subject</h4>
          <input type="text" placeholder="Question about cricket bats" name="subject"/>
          <h4>Your Message</h4>
          <textarea
            placeholder="Please type your inquiry here..."
            rows="5"
            required
          name="message"></textarea>
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

export default Contact;
