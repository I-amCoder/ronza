import React, { useRef } from "react";
import { Modal } from "react-bootstrap";

const ImageModal = ({ closeModal, showModal, data }) => {
  const imageRef = useRef(null);
  const { imagePath = "", images = [] } = data;

  return (
    <>
      <Modal show={showModal} onHide={closeModal} size="xl" centered>
        <Modal.Header closeButton>
          <Modal.Title>{data.title}</Modal.Title>
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
            {images.map((image, index) => {
              return (
                <div key={index} className="col-2 my-1 col-md-1">
                  <img
                    src={image.path}
                    className="grid-img shadow"
                    alt={data.title}
                    onClick={()=>imageRef.current.src=image.path} 
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

export default ImageModal;
