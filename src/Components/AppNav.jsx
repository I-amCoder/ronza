import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Skeleton from "react-loading-skeleton";
import { SiteContext } from "../Contexts/SiteContext";
import { Link } from "react-router-dom";

const AppNav = () => {
  // Get Context Data For Navbar
  const contextData = useContext(SiteContext);
  const data = contextData.data?? {
    site_name:"Ronza"
  }
  const loading  = contextData.loading;
  

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

  return (
    <>
      <Navbar
        fixed={"top"}
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#white" : "white",
        }}
        expand="lg"
        className={`navbar-light ${navBackground ? "shadow" : ""}`}
      >
        <Container>
          <Link className="nav-link" to={'/'}>

            <div className="nav-logo ">
              {loading ? (
                <Skeleton width={100} height={30} baseColor="#ddd" />
              ) : (
                // data.logo_path ?? "Ronza"
                <img src={data.logo_path} alt={data.site_name} className="logo-img" />
              )}
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto nav-container">
              <Link className="nav-link nav-link-item " to={'/'}>
                Home
              </Link>
              <Nav.Link className="nav-link-item" href="#link">
                Another LInk
              </Nav.Link>
              <Nav.Link className="nav-link-item" href="#link">
                Our Store
              </Nav.Link>
              <Nav.Link className="nav-link-item" href="#link">
                New Products
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNav;
