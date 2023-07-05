import React, { useRef } from "react";
import { Offcanvas } from "react-bootstrap";
import SearchForm from "./SearchForm";

const SearchCanvas = ({ show, handleClose, setShow }) => {
  const canvasRef = useRef(null);

  return (
    <Offcanvas
      ref={canvasRef}
      placement={"top"}
      show={show}
      onHide={handleClose}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title className="text-center w-100">Search</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="container text-center">
          <SearchForm canvasRef={setShow} />
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SearchCanvas;
