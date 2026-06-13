import React from 'react';
import '../styles/About.css';
import Img from '../assets/images/About.png'
import L_icon from '../assets/images/info.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
<section id="About">
    <div className="card-container">
  <div className="card-image">
    <img src={Img} alt="Hands united"/>
  </div>
  <div className="card-contents">
    <div>
    <h2>About GL Sport</h2>
    </div>
    <p className='para'>At GL Sport, we are passionate about sports and committed to providing athletes of all levels with the highest quality equipment and apparel. Founded with a love for cricket, we've grown to embrace all sports, ensuring every item in our store meets our rigorous standards.
    <br></br>We believe in the power of sport to unite communities and inspire individuals. That's why we focus on quality, durability, and performance in every product we offer.</p>
    <div className='icon'>
    <Link to="/AboutUs" className="learn-more">Learn More About Us</Link>
    <img src={L_icon} alt="icon" className='icon_img'/>
    </div>
  </div>
</div>
</section>
  
  );
};

export default About;