import React, { useRef } from "react";
import { Modal } from "react-bootstrap";
import "./modal.css";

const QuickViewModal = ({ closeModal, showModal, product }) => {
  const imageRef = useRef(null);
  const { imagePath = "", images = [] } = product;

  return (
    <>
      <Modal
        className="custom-modal"
        show={showModal}
        onHide={closeModal}
        size="xl"
        centered
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>{product.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            ref={imageRef}
            src={imagePath}
            alt={"Helo "}
            className="modal-image"
          />
        </Modal.Body>
        <Modal.Footer>
          <div className="row w-100">
            <div className="col-2 my-1 col-md-1">
              <img
                src={product.imagePath}
                className="grid-img shadow"
                alt={product.title}
                onClick={() => (imageRef.current.src = product.imagePath)}
              />
            </div>
            {images.map((image, index) => {
              return (
                <div key={index} className="col-2 my-1 col-md-1">
                  <img
                    src={image.path}
                    className="grid-img shadow"
                    alt={product.title}
                    onClick={() => (imageRef.current.src = image.path)}
                  />
                </div>
              );
            })}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default QuickViewModal;
