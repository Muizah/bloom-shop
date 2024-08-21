import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Checkout from './pages/Checkout/Checkout';
import Cart from './pages/Cart/Cart';
import Wishlist from './pages/Wishlist/Wishlist';
import Kids from './pages/Kids/Kids';
import Women from './pages/Women/Women';
import Men from './pages/Men/Men';
import SplashScreen from './pages/SplashScreen/SplashScreen';
import ProductListing from './pages/ProductListing/ProductListing';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/splash-screen" element={<SplashScreen />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/women" element={<Women />} />
        <Route path="/men" element={<Men />} />
        <Route path="/product-listing" element={<ProductListing />} />
      </Routes>
    </Router>
  );
};

export default App;
