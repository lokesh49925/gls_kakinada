// src/Components/pages/ShopBySport.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ShopBySport.css';
import cricket from '../assets/images/cricket.png';
import vb from '../assets/images/volleyball.png';
import bm from '../assets/images/badminton.png';
import gym from '../assets/images/gym.png';
import swim from '../assets/images/swimming.png';
import bg from '../assets/images/boxing.png';
import tn from '../assets/images/tennis.png';
import ct from '../assets/images/clothing.png';
import bb from '../assets/images/basketball.png';
import tt from '../assets/images/tabletennis.png';
import rs from '../assets/images/running.png';
import sk from '../assets/images/skating.png';

const ShopBySport = () => {
  const navigate = useNavigate();
  const [showMoreSports, setShowMoreSports] = useState(false);

  const initialSports = [
    { name: 'Cricket', image: cricket },
    { name: 'Volleyball', image: vb },
    { name: 'Badminton', image: bm },
    { name: 'Gym Dumbbells', image: gym },
    { name: 'Swimming', image: swim },
    { name: 'Boxing Gloves', image: bg },
    { name: 'Tennis', image: tn },
    { name: 'Clothing', image: ct },
    { name: 'Basketball', image: bb },
    { name: 'Table Tennis', image: tt },
    { name: 'Running Shoes', image: rs },
    { name: 'Skating', image: sk },
  ];

  const handleSportClick = (sportName) => {
    navigate(`/products?sport=${encodeURIComponent(sportName.toLowerCase())}`);
  };

  const handleExploreMoreClick = (e) => {
    e.preventDefault();
    setShowMoreSports(!showMoreSports);
  };

  return (
    <section id='ShopBySport' className="shop-by-sport">
      <div className="header">
        <h2>Shop by Sport</h2>
        <p>Find gear specific to your passion.</p>
      </div>
      <div className="sport-images">
        {initialSports.map((sport, index) => (
          <div
            key={index}
            className="sport-image"
            onClick={() => handleSportClick(sport.name)}
          >
            <img src={sport.image} alt={`${sport.name} gear`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopBySport;