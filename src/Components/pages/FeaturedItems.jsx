import React from "react";
import "../styles/FeaturedItems.css";
import { Link } from "react-router-dom";

import BATS from "../assets/images/BATS.jpg";
import Br from "../assets/images/Br.jpg";
import shoe from "../assets/images/shoe.jpg";
import ck from "../assets/images/ck.jpg";


const FeaturedItems = () => {
  return (
    <section id="FeaturedItems">

      <section className = "featured-section">
      <h2>Feautured Items</h2>
      <div className="cards-column">
  <div className="cards">
  <Link to = "/Products"> <img src={BATS} alt="SS Bat" className="background-img" /></Link> 
    <div className="cards-contents">
      <p>PREMIUM CRICKET KIT</p>
    </div>
  </div>

  <div className="cards">
   <Link to = "/Products"> <img src={Br} alt="MRF Bat" className="background-img" /></Link> 
    <div className="cards-contents">
      <p>PREMIUM BADMINTON RAQUETS</p>
    </div>
  </div>

  <div className="cards">
    <Link to = "/Products"><img src={ck} alt="Kookaburra Bat" className="background-img" /></Link> 
    <div className="cards-contents">
      <p>PREMIUM CRICKET BATS</p>
    </div>
  </div>

  <div className="cards">
   <Link to = "/Products"><img src={shoe} alt="GM Bat" className="background-img" /> </Link>
    <div className="cards-contents">
      <p>PREMIUM SPORTS SHOES</p>
    </div>
  </div>
</div>
</section>
</section>
  );
};

export default FeaturedItems;
