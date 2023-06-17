import React from "react";
import AppNav from "./Components/AppNav";

import Footer from "./Components/Footer";

import { Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import Home from "./pages/Home";
import Catalog from "./pages/catalog";
import ShowProduct from "./pages/ShowProduct";

const App = () => {
  return (
    <>
      <AppNav></AppNav>
      <Routes>
        <Route path="/">
          <Route path="/" index element={<Home />} />
          <Route path="/search" index element={<Catalog />} />
          <Route path="/product/:id" index element={<ShowProduct />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
