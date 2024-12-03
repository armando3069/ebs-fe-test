import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Shop from './pages/shop/shop';
import {CartProvider } from './context/shopContext';
const App: React.FC = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Shop />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;