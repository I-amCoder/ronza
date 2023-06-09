import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Skeleton from "react-loading-skeleton";

const AppNav = ({ loading, data }) => {
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
        fixed="top"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#white" : "white",
        }}
        expand="lg"
        className={`navbar-light ${navBackground ? "shadow" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <div className="nav-logo ">
              {loading ? (
                <Skeleton width={100} height={30} baseColor="#ddd" />
              ) : (
                data.site_name
              )}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mx-auto nav-container">
              <Nav.Link className="nav-link-item " href="#home">
                Home
              </Nav.Link>
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
