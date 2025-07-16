import React from "react";

import HeroSection from "../component/Herosection";
import ProductCategory from "../component/Productcategory";
import FeaturedProducts from "../component/Featuredproduct";
import Footer from "../component/Footer";


export default function Landing() {
  return (
    <div>
      
      <HeroSection />
      <ProductCategory />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
