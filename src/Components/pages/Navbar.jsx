import React, { useState } from 'react';
import logo from '../assets/images/Gl-Sports-Logo.png';
import '../styles/Navbar.css';
 import { Link } from 'react-router-dom';


const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" >
      <div className="logo">
       <a href='/' ><img src={logo} alt="GL Centrium Logo" /> </a>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="/#Home"  className={activeLink === 'home' ? 'active' : ''} onClick={() => { handleLinkClick('Home'); toggleMenu(); }}>Home</a></li>
        <li><a href="/#About"  className={activeLink === 'about' ? 'active' : ''} onClick={() => { handleLinkClick('About'); toggleMenu(); }}>About</a></li>
        <li><Link to="/Products" className={activeLink === 'products' ? 'active' : ''} onClick={() => { handleLinkClick('Products'); toggleMenu(); }}>Products</Link></li>
        <li><a href="/#ShopBySport" className={activeLink === 'sports' ? 'active' : ''} onClick={() => { handleLinkClick('ShopBySport'); toggleMenu(); }}>Sports</a></li>
        <li><a href="/#FeauturedBrands" className={activeLink === 'brands' ? 'active' : ''} onClick={() => { handleLinkClick('FeauturedBrands'); toggleMenu(); }}>Brands</a></li>
        <li><Link to="/ContactUs" className={activeLink === 'contact' ? 'active' : ''} onClick={() => { handleLinkClick('ContactUs'); toggleMenu(); }}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;