import React from "react";

import Footer from "./Components/Footer";

import { Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Home from "./pages/Home";
import Catalog from "./pages/catalog";
import ShowProduct from "./pages/ShowProduct";
import Collection from "./pages/Collection";
import AppNav from "./Components/Navbar/AppNav";
import ContactUs from "./pages/ContactUs";
import Checkout from "./pages/checkout";

const App = () => {
  return (
    <>
      <AppNav />
      <div style={{ marginTop: "60px", minHeight:"60vh" }}>
        <Routes>
          <Route path="/">
            <Route path="/" index element={<Home />} />
            <Route path="/search" element={<Catalog />} />
            <Route path="/product/:slug" element={<ShowProduct />} />
            <Route path="/collection/:slug" element={<Collection />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
