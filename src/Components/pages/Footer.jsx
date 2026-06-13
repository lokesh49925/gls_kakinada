import React from "react";
import "../styles/Footer.css";
import logo from "../assets/images/GL-Sports-Logo.png"; // Update with your logo path
import CricketBatIcon from '../assets/images/bat_foot.png';
import JerseyIcon from '../assets/images/jersey_foot.png';
import AllSportsIcon from '../assets/images/sport_foot.png';
import Insta from '../assets/images/insta.png';
import Whats from '../assets/images/whatsap.png';
import Utube from '../assets/images/utube.png';
import Face from '../assets/images/face.png';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section footer-logo">
          <img src={logo} alt="GL Sports Centrum" className="footer-logo-img" />
          <p className="para">
            Your trusted partner for quality sports gear. Visit us for an extensive range of cricket bats, jerseys, and all your sporting needs.
          </p>
        </div>
        <div className="footer-section">
          <h4 className="quick pad">Quick links</h4>
          <ul>
            <li><a href="/#Home">Home</a></li>
            <li><a href="/#About">About</a></li>
            <li><a href="/#FeauturedBrands">Brands</a></li>
            <li><Link to="/Products">Products</Link></li>
            <li><a href="/#ShopBySport">Sports</a></li>
            <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
        <div className="footer-section">
        <h3 className="quick mar">Our Specialties</h3>
        <ul className="specialties pad">
          <li>
            <img src={CricketBatIcon} alt="Quality Cricket Bats" className="specialty-icon" />
            Quality Cricket Bats
          </li>
          <li>
            <img src={JerseyIcon} alt="Sports Jerseys" className="specialty-icon" />
            Sports Jerseys
          </li>
          <li>
            <img src={AllSportsIcon} alt="All Sports Items" className="specialty-icon" />
            All Sports Items
          </li>
        </ul>
      </div>
          <h4 className="quick pad">Inquiries</h4>
          <p className="inquiries">
           <a href="tel: +91 9010991900">+91 9010991900</a> <br />
           <a href="mailto: glsportcentrum@gmail.com">glsportcentrum@gmail.com</a>
          </p>
        </div>
        <div className="footer-section">
          <h4 className="quick pad">Address</h4>
          <p>
            SHOP NO.1, Krishibhavan complex,<br/>
            Opp Boat club Main gate, <br />
            Beside Ashram School, <br/>
            Kakinada, Andhra Pradesh, 533003<br />
            <a href="https://maps.app.goo.gl/EWMLQ8KUcdr185j56?g_st=com.google.maps.preview.copy " target="_blank" rel="noopener noreferrer"  ><span >View on Maps</span></a>
          </p>
          <h4 className="quick pad">Follow Us</h4>
          <div className="footer-social">
            <a href="https://www.instagram.com/gl_sportscentrum?igsh=dHYzMmlxODdncmo4" className="social-icon"><img src={Insta} className="social" /></a>
            <a href="#" className="social-icon"><img src={Whats} className="social" /></a>
            <a href="#" className="social-icon"><img src={Utube} className="social" /></a>
            <a href="#" className="social-icon"><img src={Face} className="social" /></a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        © 2025 GL Sports Centrum. All rights reserved. || Design & Development by <a href= 'https://trulyaimtechnologies.com/'  >Trulyaim Technologies</a>
      </div>
    </footer>
  );
}

export default Footer;
