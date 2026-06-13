import React from 'react';
import '../styles/ReadyToGear.css';
import playerImage from '../assets/images/Player.png'; 
import { FaMapMarkerAlt } from 'react-icons/fa'; 

const ReadyToGearUp = () => {
  const handleFindStoreClick = () => {
    window.location.href = '/store-locator'; // Replace with actual store locator URL
  };

  return (
    <section id='ReadyToGear'>
    <section className="ready-to-gear-up">
      <div className="content">
        <h2>Ready to Gear Up?</h2>
        <p>Visit GL Sport today for a personalized shopping experience. Our experts are ready to help you find the perfect gear.</p>
       <a href="https://maps.app.goo.gl/EWMLQ8KUcdr185j56?g_st=com.google.maps.preview.copy "> <button onClick={handleFindStoreClick}>
          Find Our Store <FaMapMarkerAlt />
        </button></a>
      </div>
      <div className="image-container">
        <img src={playerImage} alt="Basketball player dunking" />
      </div>
    </section>
    </section>
  );
};

export default ReadyToGearUp;