import React, { useState } from 'react';
import './FeaturedProducts.css';
import bagImg from '../assets/bag.png';
import ktmImg from '../assets/ktm.png';
import samanImg from '../assets/saman.png';
import sharkImg from '../assets/shark.png';

const products = [
  {
    id: 1,
    name: 'Pro Racing Helmet',
    image: samanImg,
    rating: 4,
    reviews: 124,
    price: 299.99,
  },
  {
    id: 2,
    name: 'Mountain Bike Helmet',
    image: sharkImg,
    rating: 4,
    reviews: 89,
    price: 159.99,
  },
  {
    id: 3,
    name: 'Protective Knee Pads',
    image: bagImg,
    rating: 4,
    reviews: 67,
    price: 49.99,
  },
  {
    id: 4,
    name: 'Racing Gloves',
    image: ktmImg,
    rating: 4,
    reviews: 156,
    price: 79.99,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <svg key={i} width="16" height="16" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z"/>
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} width="16" height="16" fill="#ccc" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.168L12 18.896l-7.334 3.864 1.4-8.168L.132 9.21l8.2-1.192z"/>
        </svg>
      );
    }
  }
  return <div className="star-rating">{stars}</div>;
};

const FeaturedProducts = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} added to cart!`);
  };

  const viewAllProducts = () => {
    alert('View All Products clicked!');
  };

  return (
    <section className="featured-products-section">
      <div className="header">
        <br />
        <br />
        <h2>Featured Products</h2>
        <p>Discover our most popular safety equipment</p>
      </div>
      <div className="products-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <div className="rating-reviews">
                <StarRating rating={product.rating} />
                <span className="reviews">({product.reviews} reviews)</span>
              </div>
              <div className="price-addcart">
                <span className="price">${product.price.toFixed(2)}</span>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    className="cart-icon"
                  >
                    <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm-12.83-2.25l1.25-5h11.16l1.25 5H4.17zM6 6h12v2H6V6z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <button className="view-all-btn" onClick={viewAllProducts}>View All Products</button>
      </div>
    </section>
  );
};

export default FeaturedProducts;

