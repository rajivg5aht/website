import React from "react";
import Navbar from "../component/navbar";
import HeroSection from "../component/Herosection";
import ProductCategory from "../component/productcategory";
import FeaturedProducts from "../component/Featuredproduct";
import Footer from "../component/footer";


export default function Landing() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProductCategory />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
