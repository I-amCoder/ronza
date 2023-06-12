import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const ImageModal = ({ imageUrl,closeModal,showModal,title }) => {

  return (
    <>
      <Modal show={showModal} onHide={closeModal} size="xl" centered>
        <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt={"Helo "} style={{ width: "100%" }} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ImageModal;
