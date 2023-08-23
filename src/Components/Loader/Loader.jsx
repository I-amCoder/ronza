import React from "react";
import "./loader.css";
import { BallTriangle, ThreeDots } from "react-loader-spinner";
import { Modal } from "react-bootstrap";

const Loader = ({ show = true }) => {
  return (
    <Modal show={show} centered size="lg">
      <Modal.Body className="loader-modal py-5">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
        <h4 className="mt-4 d-flex">
          Please Wait Your Order is Being Placed
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            // color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </h4>
      </Modal.Body>
    </Modal>
  );
};

export default Loader;
