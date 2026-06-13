import React from "react";
import "../styles/AboutUs.css";
import Navbar from "./Navbar";

//image for logo
import logo from "../assets/images/logo-green.png";

//image for our story
import ourImage from "../assets/images/ourstory.png";

//image for store
import storeImg from "../assets/images/shop.png";

//icons
import missionIcon from "../assets/icons/aim.png";
import qualityIcon from "../assets/icons/n1.png";
import communityIcon from "../assets/icons/hs.png";

const AboutUs = () => {
  return (
    <section id="AboutUs">
    <div>
      
      <div className="about-wrapper">
        <div className="about-card">
          <img src={logo} alt="GL Sport Logo" className="about-logo" />
          <h2>About GL Sport</h2>
          <p>
            Learn about our journey, commitment to quality, and deep connection
            with the local sports community.
          </p>
        </div>
      </div>

      <div className="our-story-section">
        <div className="image-box">
          <img src={ourImage} alt="Our Story Visual" />
        </div>
        <div className="text-box">
          <h2>Our Story</h2>
          <p>
            GL Sport was born from a shared passion for cricket and a vision to
            provide athletes with the finest sporting gear. Established in{" "}
            <strong>2024</strong>, we started as a small specialty
            shop focusing on high-quality cricket bats and equipment. Over the
            years, our dedication to quality and customer satisfaction has
            allowed us to grow, expanding our offerings to cater to a wide range
            of sports.
          </p>
          <br></br>
          <p>
            We are more than just a store; we are an integral part of the local
            sports community. We believe in fostering talent, encouraging
            sportsmanship, and making sports accessible to everyone.
          </p>
        </div>
      </div>

      <div className="values-section">
        <div className="value-card">
          <img src={missionIcon} alt="Mission" />
          <h3>Our Mission</h3>
          <p>
            To equip every athlete with high-quality sports gear that enhances
            performance and fuels their passion for the game, while fostering a
            strong local sports culture.
          </p>
        </div>

        <div className="value-card">
          <img src={qualityIcon} alt="Quality" />
          <h3>Commitment to Quality</h3>
          <p>
            We meticulously select each product, ensuring it meets our high
            standards for performance, durability, and craftsmanship. From
            professional-grade cricket bats to everyday training gear, quality
            is our promise.
          </p>
        </div>

        <div className="value-card">
          <img src={communityIcon} alt="Community" />
          <h3>Community Connection</h3>
          <p>
            GL Sport is proud to support local teams, events, and aspiring
            athletes. We strive to be a hub for sports enthusiasts, offering
            expert advice and a welcoming environment.
          </p>
        </div>
      </div>

      <div className="visit-section">
        <h2>Visit Us Today!</h2>
        <p>
          Experience the GL Sport difference. Our knowledgeable staff are always
          ready to assist you in finding the perfect equipment for your needs.
        </p>
        <img src={storeImg} alt="Store" className="store-image" />
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
