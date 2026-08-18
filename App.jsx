import { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className="landing">
            <h1>🌱 Paradise Nursery</h1>
            <p>Encuentra tu planta perfecta y dale vida a tu hogar.</p>
            <button onClick={() => setShowProducts(true)} className="cta-button">
              Get Started
            </button>
            {showProducts && <ProductList />}
          </div>
        } />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </div>
  );
}