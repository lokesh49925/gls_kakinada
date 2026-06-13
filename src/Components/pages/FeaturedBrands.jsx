import React from 'react';
import '../styles/FeaturedBrands.css';


//brand logos

import ss from '../assets/icons/ss.png';
import sg from '../assets/icons/sg.png';
import ceat from '../assets/icons/ceat.png';
import mrf from '../assets/icons/mrf.png';
import kb from '../assets/icons/kb.png';
import dsc from '../assets/icons/dsc.png';
import sf from '../assets/icons/sf.png';
import zx from '../assets/icons/zx.png';
import zs from '../assets/icons/zs.png';
import shrey from '../assets/icons/shrey.png';
import adidas from '../assets/icons/adidas.png';
import puma from '../assets/icons/puma.png';
import nike from '../assets/icons/nike.png';
import tyka from '../assets/icons/Tyka.png';
import em from '../assets/icons/em.png';
import virat from '../assets/icons/virat.png';
import techno from '../assets/icons/techno.png';
import yonex from '../assets/icons/yy.png';
import kamachi from '../assets/icons/kamachi.png';
import lining from '../assets/icons/lining.png';
import moonwalkr from '../assets/icons/Mw.png';
import nivia from '../assets/icons/nivia.png';
import fastup from '../assets/icons/fastup.png';
import vectorx from '../assets/icons/vector.png';


const brands = [
  { name: "SS", img: ss },
  { name: "SG", img: sg },
  { name: "CEAT", img: ceat },
  { name: "MRF", img: mrf },
  { name: "Kookaburra", img: kb },
  { name: "DSC", img: dsc },
  { name: "SF", img: sf },
  { name: "ZX", img: zx },
  { name: "ZS", img: zs},
  { name: "Shrey", img: shrey },
  { name: "Adidas", img: adidas },
  { name: "Puma", img: puma },
  { name: "Nike", img: nike },
  { name: "TYKA", img: tyka },
  { name: "EM", img: em },
  { name: "Virat", img: virat },
  { name: "Technosport", img: techno },
  { name: "Yonex", img: yonex },
  { name: "Kamachi", img: kamachi },
  { name: "Li-Ning", img: lining },
  { name: "Moonwalkr", img: moonwalkr },
  { name: "Nivia", img: nivia },
  { name: "Fast&Up", img: fastup },
  { name: "VectorX", img: vectorx },
];

const FeaturedBrands = () => {
  return (
    <section id='FeauturedBrands'>
    <div className="featured-container">
      <h2>Featured Brands</h2>
      <p>Discover products from top sports brands.</p>
      <div className="brands-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.img} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default FeaturedBrands;
