import React, { useContext } from "react";
import AppNav from "./Components/AppNav";

import Footer from "./Components/Footer";
import Hero from "./Components/Hero";

import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { SiteContext } from "./Contexts/SiteContext";

const App = () => {
  const context = useContext(SiteContext)
  // console.log(context);
  return (
    <>
      <div className="header">
        <AppNav  ></AppNav>
        {!context.loading && <Hero hero={context.hero} />}
      </div>
      <Routes >
        <Route path="/" >
          <Route path="/" index element={<Home />} />
        </Route>
      </Routes>

      <Footer />
    </>
  );
};

export default App;
