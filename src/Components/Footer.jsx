import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="logo-text underline ">RONZA</h2>
            <div>
              <a
                className="icon facebook"
                target={"_blank"}
                href="//facebook.com/hacker.jhalla" rel="noreferrer"
              >
                <FaFacebook />
              </a>
              <a className="icon youtube" target={"_blank"} rel="noreferrer" href="helo">
                <FaYoutube />
              </a>
              <a className="icon instagram" target={"_blank"} rel="noreferrer" href="helo">
                <FaInstagram />
              </a>
              <a className="icon twitter" target={"_blank"} rel="noreferrer" href="helo">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <a className="nav-link text-white" href="l">
              Privacy Policy
            </a>
            <a className="nav-link text-white" href="h">
              Terms & Conditions
            </a>
            <a className="nav-link text-white" href="h">
              Other Link
            </a>
            <a className="nav-link text-white" href="h">
              Whatfoodsmenu
            </a>
            <Link className="nav-link text-white" to={"/contact-us"}>
                Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
