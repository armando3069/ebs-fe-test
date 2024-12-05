import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Navbar from "./components/navbar/navbar";
import { CartProvider } from "./context/shopContext";
import Footer from "./components/footer/footer";
const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
