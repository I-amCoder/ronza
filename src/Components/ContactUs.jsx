import React from "react";
import mailImage from "../assets/contact-mail.png";
import image from "../assets/contact-bg.jpg";
import { BsEnvelope } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Skeleton from "react-loading-skeleton";

const ContactUs = () => {
  return (
    <>
      <div className="contact-section">
        <div className="container ">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-6 image-col">
              <img className="contact-image" src={image} alt="Contact-image" />
              <div className="overley-text">
                <div className="row">
                  <div className="col-auto">
                    <GoLocation className="fs-5" />
                  </div>
                  <div className="col-auto">
                    <h5>Address:</h5>
                    <p>Lorem, ipsum dolor. helo</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <BsEnvelope className="fs-5" />
                  </div>
                  <div className="col">
                    <h5>Lets Talk:</h5>
                    <p className="text-success">+1234564841</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-auto">
                    <BsEnvelope className="fs-5" />
                  </div>
                  <div className="col">
                    <h5>Email:</h5>
                    <p className="text-success">some@some.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-4 mt-4">
              <div className="row">
                <span className="contact100-form-title">Send Us A Message</span>
                <label className="label-input100" htmlFor="first_name">
                  Tell us your name *
                </label>
                <div
                  className="wrap-input100 rs1-wrap-input100 validate-input"
                  data-validate="Type first name"
                >
                  <input
                    id="first_name"
                    className="input100"
                    type="text"
                    name="first_name"
                    placeholder="First name"
                  />
                  <span className="focus-input100"></span>
                </div>
                <div
                  className="wrap-input100 rs2-wrap-input100 validate-input"
                  data-validate="Type last name"
                >
                  <input
                    className="input100"
                    type="text"
                    name="last_name"
                    placeholder="Last name"
                  />
                  <span className="focus-input100"></span>
                </div>
                <label className="label-input100" htmlFor="email">
                  Enter your email *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input
                    id="email"
                    className="input100"
                    type="text"
                    name="email"
                    placeholder="Eg. example@email.com"
                  />
                  <span className="focus-input100"></span>
                </div>
                <label className="label-input100" htmlFor="phone">
                  Enter phone number
                </label>
                <div className="wrap-input100">
                  <input
                    id="phone"
                    className="input100"
                    type="text"
                    name="phone"
                    placeholder="Eg. +1 800 000000"
                  />
                  <span className="focus-input100"></span>
                </div>
                <label className="label-input100" htmlFor="message">
                  Message *
                </label>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Message is required"
                >
                  <textarea
                    id="message"
                    className="input100"
                    name="message"
                    placeholder="Write us a message"
                  ></textarea>
                  <span className="focus-input100"></span>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <button className="btn btn-success message-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
