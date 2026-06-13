import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, tag, title, description, features, featured, tagIcon }) => {
  return (
    <div className="product-card">
      {/* <div className="img1">  */}
        <img src={image} alt={title}  className='img'/>
        {/* {featured && <span className="featured-tag">Featured</span>} */}
      {/* </div> */}

      <div className="card-content">
        
          
        <div className="tag">
          <img src={tagIcon} alt="icon" className="tag-icon" />
         {tag}
        </div>

        <h3 className="title1">{title}</h3>
        <p className="description">{description}</p>

        <div className="features">
          <h4>Key Features:</h4>
          <ul>
            {features.map((feat, index) => (
              <li key={index}>{feat}</li>
            ))}
          </ul>
        </div>
      <div className='contact'>
        <a className="contact-link" href="tel: +91 9010991900">Contact For Price</a>
      </div>
      </div>
    </div>
  );
};

export default ProductCard;
