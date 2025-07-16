import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./Productcard";

import halfImage from "../assets/half.png";
import saddleImage from "../assets/saddle.png";
import apHelmetImage from "../assets/Aphelmet.webp";
import ls2Image from "../assets/ls2.png";

const featuredProducts = [
  {
    id: "1",
    name: "Alpinstar racing Helmet",
    price: 299,
    originalPrice: 399,
    image: apHelmetImage,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "ls2 Carbon Fiber Helmet",
    price: 249,
    image: ls2Image,
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Saddle bag",
    price: 799,
    originalPrice: 999,
    image: saddleImage,
    rating: 4.7,
    reviews: 67,
  },
  {
    id: "4",
    name: "Half finger Gloves",
    price: 159,
    image: halfImage,
    rating: 4.6,
    reviews: 156,
  },
  {
    id: "5",
    name: "Motorcycle Gloves with Reinforced Knuckles",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.5,
    reviews: 45,
  },
  {
    id: "6",
    name: "High-Visibility Reflective Vest",
    price: 49,
    image:
      "https://images.unsplash.com/photo-1520975695911-0a7a7a7a7a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    rating: 4.4,
    reviews: 32,
  },
];

export default function FeaturedProducts() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const productsToShow = showAll ? featuredProducts : featuredProducts.slice(0, 4);

  const handleAddToCart = (id) => {
    navigate(`/productdetails/${id}`);
  };

  const handleProductClick = (id) => {
    navigate(`/productdetails/${id}`);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular safety equipment
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {productsToShow.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onAddToCart={() => handleAddToCart(product.id)}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {showAll ? "Show Less" : "View All Products"}
          </button>
        </div>
      </div>
    </section>
  );
}
