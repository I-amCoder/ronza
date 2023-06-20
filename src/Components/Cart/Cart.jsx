import { useContext } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartContext } from "../../Contexts/CartContext";

function Cart() {
  const { show, handleClose } = useContext(CartContext);

  return (
    <>
      <Offcanvas placement={"end"} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
