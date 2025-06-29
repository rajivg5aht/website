import React from 'react';
import Navbar from '../component/Navbar';
import Body from '../component/body';
import FeaturedProducts from '../component/FeaturedProducts';
import ShopByCategory from '../component/ShopByCategory';
import StayUpdated from '../component/StayUpdated';
import Footer from '../component/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Body />
      <FeaturedProducts />
      <ShopByCategory />
      <StayUpdated />
      <Footer />
    </>
  );
}

export default HomePage;
