import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Productcard from "../component/Productcard";
import ls2Image from "../assets/ls2.png";
import sharkImage from "../assets/shark.png";
import TBGImage from "../assets/TBG.png";
import iconImage from "../assets/icon.png";
import kytImage from "../assets/kyt.png";
import alpinstarSuitsImage from "../assets/Alpinstarsuits.png";
import ktmSuitsImage from "../assets/KTM suits.png";
import ddImage from "../assets/DD.png";
import saddleImage from "../assets/saddle.png";
import dominoImage from "../assets/domino.png";

const products = [
  {
    id: 1,
    image: ls2Image,
    title: "Ls2 carbon Fiber Helmet",
    category: "Helmets",
    rating: 3.5,
    price: 70000,
    oldPrice: null,
    discount: null,
  },
  {
    id: 2,
    image: sharkImage,
    title: "Shark Helmet",
    category: "Helmets",
    rating: 3.5,
    price: 60000,
    oldPrice: null,
    discount: null,
  },
  {
    id: 3,
    image: kytImage,
    title: "Kyt Helmet",
    category: "Helmets",
    rating: 4.0,
    price: 65000,
    oldPrice: null,
    discount: null,
  },
  {
    id: 4,
    image: iconImage,
    title: "Icon Gloves",
    category: "Gloves",
    rating: 4.5,
    price: 180,
    oldPrice: null,
    discount: null,
  },
  {
    id: 5,
    image: TBGImage,
    title: "TBG Gloves",
    category: "Gloves",
    rating: 5.0,
    price: 120,
    oldPrice: 150,
    discount: 30,
  },
  {
    id: 6,
    image: alpinstarSuitsImage,
    title: "Alpinstar Riding Suit",
    category: "Riding Suits",
    rating: 4.2,
    price: 400,
    oldPrice: 450,
    discount: 50,
  },
  {
    id: 7,
    image: ktmSuitsImage,
    title: "KTM Riding Suit",
    category: "Riding Suits",
    rating: 4.3,
    price: 420,
    oldPrice: 470,
    discount: 50,
  },
  {
    id: 8,
    image: ddImage,
    title: "Riding Suit Classic",
    category: "Riding Suits",
    rating: 4.0,
    price: 350,
    oldPrice: 400,
    discount: 50,
  },
  {
    id: 9,
    image: dominoImage,
    title: "Domino",
    category: "Accessories",
    rating: 4.0,
    price: 60,
    oldPrice: 70,
    discount: 10,
  },
  {
    id: 10,
    image: saddleImage,
    title: "Saddle Bag",
    category: "Accessories",
    rating: 4.1,
    price: 90,
    oldPrice: 100,
    discount: 10,
  },
];

const categories = ["Helmets", "Riding Suits", "Gloves", "Accessories"];
const colors = [];
const sizes = ["Small", "Medium", "Large", "X-Large", "XX-Large", "3X-Large"];

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedColors, setSelectedColors] = useState(["blue"]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("Most Popular");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    const query = params.get("q");
    if (category) {
      setSelectedCategory(category);
    }
    if (query) {
      setSearchQuery(query);
    } else {
      setSearchQuery("");
    }
  }, [location.search]);

  const toggleColor = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter(c => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  let filteredProducts = products;

  if (searchQuery.trim() !== "") {
    const lowerQuery = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(lowerQuery) ||
      product.category.toLowerCase().includes(lowerQuery)
    );
  } else if (selectedCategory) {
    filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
  }

  if (sortOption === "Price: Low to High") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "Price: High to Low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-sm text-gray-500">
          <span className="hover:text-red-600 cursor-pointer transition-colors">Home</span>
          <span className="mx-2">/</span>
          <span className="text-black">product</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Casual</h1>
        <div className="text-sm text-gray-500">
          Showing {filteredProducts.length} of {products.length} Products
        </div>
        <div className="text-sm text-gray-500">
          Sort by: <select className="border border-gray-300 rounded px-2 py-1" value={sortOption} onChange={handleSortChange}>
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className="w-64 space-y-6">
          {/* Filters Header */}
          <div className="flex justify-between items-center text-gray-900 font-semibold text-lg">
            <span>Filters</span>
            <button className="text-gray-500 hover:text-gray-900" onClick={() => setSelectedCategory(null)}>Clear All</button>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-1 text-gray-700">
              {categories.map(category => (
                <li
                  key={category}
                  className={`flex justify-between cursor-pointer hover:text-gray-900 ${
                    selectedCategory === category ? "font-bold text-black" : ""
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  <span>{category}</span>
                  {'>'}
                </li>
              ))}
            </ul>
          </div>

          {/* Size */}
          <div>
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-full border ${selectedSize === size ? "bg-black text-white" : "bg-gray-200 text-gray-700"} text-xs`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Apply Filter Button */}
          <button className="w-full bg-black text-white py-3 rounded mt-4 hover:bg-gray-900 transition">
            Apply Filter
          </button>
        </aside>

        {/* Products Grid */}
        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <Productcard
                key={product.id}
                name={product.title}
                price={product.price}
                originalPrice={product.oldPrice}
                discount={product.discount}
                image={product.image}
                imageHeight={product.image === ls2Image ? "h-15" : "h-40"}
                onClick={() => navigate(`/productdetails/${product.id}`)}
                onAddToCart={() => navigate(`/cart`)}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8 text-gray-700">
            <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
              &larr; Previous
            </button>
            <div className="flex items-center gap-2">
              {[1,2,3,4,5,6,7,8,9,10].map(page => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${page === 1 ? "bg-black text-white" : "hover:bg-gray-100"}`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1 px-3 py-2 border border-gray-300 rounded hover:bg-gray-100">
              Next &rarr;
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
