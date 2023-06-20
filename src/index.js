import React from "react";
import ReactDOM from "react-dom/client";
import "../src/theme.scss";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SiteContextProvider } from "./Contexts/SiteContext";
import { BrowserRouter } from "react-router-dom";

import { config } from "./utils/config";
import CartContextProvider from "./Contexts/CartContext";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SiteContextProvider>
      <CartContextProvider>
        <BrowserRouter basename={config.url.base_url}>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </CartContextProvider>
    </SiteContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
