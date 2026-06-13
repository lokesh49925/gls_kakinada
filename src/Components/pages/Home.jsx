import React from 'react';
import Logo from '../assets/images/Gl-Sports-Green-Logo.png'
import Logob from '../assets/images/Logob.png'
import '../styles/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section id='Home'>
      
    <section className="home-section">
        
        <img src={Logo} alt="GL Logo" className="home-logo" />
        <br></br>
      <h1> 
        Welcome to  GL Sports Centrum
      </h1>
      <p>Your ultimate destination for premium cricket bats, stylish jerseys, and all essential sports
       gear. Quality you can trust, passion we share.</p>
      <div className="button-group">
       <Link to="/Products" ><button className="explore-btn">Explore products →</button> </Link>
       <a href="https://maps.app.goo.gl/EWMLQ8KUcdr185j56?g_st=com.google.maps.preview.copy "> <button className="visit-btn">Visit Our Store </button></a>
      </div>
    </section>
    </section>
  );
};

export default Home;