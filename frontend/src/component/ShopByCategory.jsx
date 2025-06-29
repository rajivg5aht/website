import React from 'react';
import './ShopByCategory.css';
import helmetImg from '../assets/saman.png';
import gearImg from '../assets/shark.png';
import accessoriesImg from '../assets/bag.png';

const categories = [
  {
    id: 1,
    title: 'Helmets',
    description: 'Premium safety helmets for all activities',
    image: helmetImg,
  },
  {
    id: 2,
    title: 'Protective Gear',
    description: 'Complete protection equipment',
    image: gearImg,
  },
  {
    id: 3,
    title: 'Accessories',
    description: 'Essential safety accessories',
    image: accessoriesImg,
  },
];

const ShopByCategory = () => {
  const handleShopNow = (category) => {
    alert(`Shop Now clicked for ${category}`);
  };

  return (
    <section className="shop-by-category">
      <div className="header">
        <h2>Shop by Category</h2>
        <p>Find the perfect equipment for your needs</p>
      </div>
      <div className="category-cards">
        {categories.map(({ id, title, description, image }) => (
          <div key={id} className="category-card">
            <div className="category-image">
              <img src={image} alt={title} />
            </div>
            <div className="category-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <button className="shop-now-btn" onClick={() => handleShopNow(title)}>
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopByCategory;
