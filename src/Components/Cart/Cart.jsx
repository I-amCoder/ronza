import { useContext, useRef, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CartContext } from "../../Contexts/CartContext";
import { BsTrash } from "react-icons/bs";
import "./cart.css";

function Cart() {
  const [selectedItems, setSelectedItems] = useState([]);

  const { show, handleClose, cartItems, removeFromCart, changeQuantity } =
    useContext(CartContext);
  const removeProduct = (product) => {
    removeFromCart([product.id]);
  };

  const updateQuantity = (product, qty) => {
    if (qty > 0) {
      changeQuantity(product, qty);
    }
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      const allItemIds = cartItems.map((product) => product.id);
      setSelectedItems(allItemIds);
    } else {
      setSelectedItems([]);
    }
  };

  const updateSelectedItems = (e, id) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setSelectedItems([...selectedItems, id]);
    }
    if (!isChecked) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
  };

  const deleteItems = () => {
    removeFromCart(selectedItems);
    setSelectedItems([]);
  };

  return (
    <>
      <Offcanvas placement={"end"} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="row">
            {cartItems.length > 1 && (
              <div className="col-12">
                <div className="form-check">
                  <input
                    checked={cartItems.length === selectedItems.length}
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleSelectAll}
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Select All
                  </label>
                </div>
              </div>
            )}
            {cartItems.length > 0 ? (
              cartItems.map((product, index) => {
                return (
                  <div key={index} className="col-12">
                    <div className="card cart-card w-100 shadow mb-3">
                      <div className="cart-box card-body">
                        <div className="checkbox-wrapper ">
                          <input
                            checked={selectedItems.includes(product.id)}
                            type="checkbox"
                            onChange={(e) => updateSelectedItems(e, product.id)}
                          />
                        </div>
                        <div className="image-wrapper">
                          <img src={product.imagePath} alt={product.title} />
                        </div>
                        <div className="details-wrapper">
                          <h5 className="product-item_title text-truncate">
                            {product.title}
                          </h5>
                          <span className="d-flex justify-content-between cart-qty">
                            {`${product.qty} x $${product.discounted_price}`}
                            <div className="edit-qty">
                              <span
                                className={`${
                                  product.qty <= 1 ? "disabled" : ""
                                }`}
                                onClick={() =>
                                  updateQuantity(
                                    product,
                                    parseInt(product.qty) - 1
                                  )
                                }
                              >
                                -
                              </span>
                              <span className="qty-figure">{product.qty}</span>
                              <span
                                onClick={() =>
                                  updateQuantity(
                                    product,
                                    parseInt(product.qty) + 1
                                  )
                                }
                              >
                                +
                              </span>
                            </div>
                          </span>
                          <h5 className="fw-bold">
                            $
                            {parseFloat(product.discounted_price) * product.qty}
                          </h5>
                        </div>
                        <div className="delete-container ">
                          <BsTrash
                            style={{ cursor: "pointer" }}
                            onClick={() => removeProduct(product)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div>Your Cart is empty</div>
            )}
          </div>
          {selectedItems.length > 0 && (
            <div className="row mt-4">
              <div className="col-6">
                <button className="btn w-100 btn-danger" onClick={deleteItems}>
                  Delete
                </button>
              </div>
              <div className="col-6">
                <button className="btn w-100 btn-dark">Checkout</button>
              </div>
            </div>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Cart;
