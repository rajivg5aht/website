import React from 'react';
import './StayUpdated.css';

const StayUpdated = () => {
  return (
    <section className="stay-updated-section">
      <h2>Stay Updated</h2>
      <p>Get the latest news about new products and exclusive offers</p>
      <form className="subscribe-form" onSubmit={e => e.preventDefault()}>
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
          required
        />
        <button type="submit" className="subscribe-button">Subscribe</button>
      </form>
    </section>
  );
};

export default StayUpdated;
