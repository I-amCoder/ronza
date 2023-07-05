import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import Skeleton from "react-loading-skeleton";
import { SiteContext } from "../../Contexts/SiteContext";
import { Link } from "react-router-dom";
import {
  BsCart,
  BsFacebook,
  BsInstagram,
  BsSearch,
  BsStar,
  BsWhatsapp,
} from "react-icons/bs";
import Cart from "../Cart/Cart";
import { CartContext } from "../../Contexts/CartContext";
import SearchCanvas from "../Search/SearchCanvas";

const AppNav = () => {
  // Get Context Data For Navbar
  const contextData = useContext(SiteContext);
  const cartContext = useContext(CartContext);

  const data = contextData.data ?? {
    site_name: "Ronza",
  };
  const loading = contextData.loading;

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search Canvas
  const [showSearch, setShowSearch] = useState(false);
  const handleCloseSearch = () => {
    setShowSearch(false);
  };
  const handleShowSearch = () => {
    setShowSearch(true);
  }

  return (
    <>
      <Navbar
        fixed={"top"}
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#white" : "white",
        }}
        expand="lg"
        className={`d-flex flex-column navbar-light ${
          navBackground ? "shadow" : ""
        }`}
      >
        <div
          style={{ display: "none" }}
          className={`container social-nav ${navBackground ? "hide" : "show"}`}
        >
          <div className="left">
            <a href="helo">
              <BsInstagram />
            </a>
            <a href="helo">
              <BsFacebook />
            </a>
            <a href="helo">
              <BsWhatsapp />
            </a>
          </div>
        </div>
        <Container>
          <Link className="nav-link" to={"/"}>
            <div className="nav-logo ">
              {loading ? (
                <Skeleton width={100} height={30} baseColor="#ddd" />
              ) : (
                // data.logo_path ?? "Ronza"
                <img
                  src={data.logo_path}
                  alt={data.site_name}
                  className="logo-img"
                />
              )}
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav  "
          >
            <Nav className="nav-container">
              <Link className="nav-link nav-link-item " to={"/"}>
                Home
              </Link>
              <Nav.Link className="nav-link-item" href="#link">
                Another LInk
              </Nav.Link>
              <Nav.Link className="nav-link-item" href="#link">
                Our Store
              </Nav.Link>
            </Nav>
            <div className="social-section justify-self-end">
              <span className="cart-icon nav-icon">
              <BsCart onClick={cartContext.handleShow}  />
                {cartContext.count>0 &&
                  <span className="cart-count">{cartContext.count}</span>
                }
              </span>
              <BsStar className="nav-icon" />
              <BsSearch onClick={handleShowSearch} className="nav-icon" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Cart />
      <SearchCanvas show={showSearch} setShow={setShowSearch} handleClose={handleCloseSearch} />
    </>
  );
};

export default AppNav;
