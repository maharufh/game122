import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./CartContext";  
import ANavbar from "./ANavbar";
import Home from "./Home";
import AProduct from "./AProduct";
import ProductDetails from "./ProductDetails";
import ACart from "./ACart";
import DashBoard from "./DashBoard";
import AProfile from "./AProfile";
import Setting from "./Setting";

export default function AApp() {
  return (
    <CartProvider> {/* ✅ Wrap the app with CartProvider */}
      <BrowserRouter>
        <ANavbar /> {/* Navbar will get cart context */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<AProduct />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ACart />} />
          <Route path="/dashboard" element={<DashBoard />}>
            <Route path="profile" element={<AProfile />} />
            <Route path="settings" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
