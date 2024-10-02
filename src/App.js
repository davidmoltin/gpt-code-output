import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import PopularProducts from './components/PopularProducts';
import Footer from './components/Footer';

function App() {
  return (
      <div>
        {/* Navigation Bar */}
        <NavBar />

        {/* Hero Section */}
        <Hero />

        {/* Featured Products Section */}
        <FeaturedProducts />

        {/* Popular Products Section */}
        <PopularProducts />

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default App;
