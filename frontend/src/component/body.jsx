import React from 'react';
import './body.css';
import saman from '../assets/saman.png';

const Body = () => {
  const handleShopNow = () => {
    alert('Shop Now clicked!');
  };

  const handleBrowseCategories = () => {
    alert('Browse Categories clicked!');
  };

  return (
    <section className="body-section">
      <div className="body-left">
        <h1>
          Premium Safety <br />
          <span className="highlight">Equipment</span>
        </h1>
        <p>
          Protect yourself with our professional-grade helmets, gear, and accessories. Trusted by professionals worldwide for ultimate safety and performance.
        </p>
        <div className="body-buttons">
          <button className="btn shop-now" onClick={handleShopNow}>Shop Now &rarr;</button>
          <button className="btn browse-categories" onClick={handleBrowseCategories}>Browse Categories</button>
        </div>
        <div className="body-icons">
          <div className="icon-item">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shield">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>Certified Safety</span>
          </div>
          <div className="icon-item">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-truck">
              <rect x="1" y="3" width="15" height="13"></rect>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
              <circle cx="5.5" cy="18.5" r="2.5"></circle>
              <circle cx="18.5" cy="18.5" r="2.5"></circle>
            </svg>
            <span>Free Shipping</span>
          </div>
          <div className="icon-item">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-award">
              <circle cx="12" cy="8" r="7"></circle>
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
            </svg>
            <span>Premium Quality</span>
          </div>
        </div>
      </div>
      <div className="body-right">
        <div className="image-card">
          <img src={saman} alt="Happy Customer" />
          <br />
          <div className="customer-badge">
            <span>50,000+</span>
            <br />
            Happy Customers
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
