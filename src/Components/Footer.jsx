import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="logo-text underline ">RONZA</h2>
            <div>
              <a
                className="icon facebook"
                target={"_blank"}
                href="//facebook.com/hacker.jhalla"
              >
                <FaFacebook />
              </a>
              <a className="icon youtube" target={"_blank"} href="#">
                <FaYoutube />
              </a>
              <a className="icon instagram" target={"_blank"} href="#">
                <FaInstagram />
              </a>
              <a className="icon twitter" target={"_blank"} href="#">
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <a className="nav-link text-white" href="">
              Privacy Policy
            </a>
            <a className="nav-link text-white" href="">
              Terms & Conditions
            </a>
            <a className="nav-link text-white" href="">
              Other Link
            </a>
            <a className="nav-link text-white" href="">
              Whatfoodsmenu
            </a>
            <a className="nav-link text-white" href="">
              More Stores
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
