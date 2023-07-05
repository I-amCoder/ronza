import React, { useContext, useRef } from "react";
import "./ProductPreview.css";
import { BiHeart } from "react-icons/bi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CartContext } from "../../Contexts/CartContext";

const ProductPreview = ({ product }) => {
  const mainImageRef = useRef(null);
  const changeImage = (img) => {
    mainImageRef.current.src = img.path;
  };
  const { addToCart, removeFromCart,productInCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart =()=>{
    removeFromCart([product.id]);
  }

  return (
    <>
      <div className="container  product-preview  mb-5">
        <div className="card shadow">
          <div className="row g-0">
            <div className="col-md-6 border-end">
              <div className="d-flex flex-column justify-content-center">
                <div className="main_image">
                  <img
                    ref={mainImageRef}
                    alt={product.title}
                    src={product.nonBgImg}
                    id="main_product_image"
                    width="350"
                  />
                </div>
                <div className="thumbnail_images">
                  <ul id="thumbnail">
                    <li>
                      <img
                        alt={product.title}
                        onClick={() =>
                          (mainImageRef.current.src = product.nonBgImg)
                        }
                        src={product.nonBgImg}
                        width="70"
                        height={"45"}
                        style={{ objectFit: "contain" }}
                      />
                    </li>
                    <li>
                      <img
                        alt={product.title}
                        onClick={() =>
                          (mainImageRef.current.src = product.imagePath)
                        }
                        src={product.imagePath}
                        width="70"
                        height={"45"}
                        style={{ objectFit: "contain" }}
                      />
                    </li>
                    {product.images.map((img, index) => {
                      return (
                        <li key={index}>
                          <img
                            alt={product.title}
                            onClick={() => changeImage(img)}
                            src={img.path}
                            width="70"
                            height={"45"}
                            style={{ objectFit: "contain" }}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-3 right-side">
                <div className="d-flex justify-content-between align-items-center">
                  <h3>{product.title}</h3>
                  <span className="heart">
                    <BiHeart />
                  </span>
                </div>
                <div className="mt-2 pr-3 content">
                  <p>{product.small_description}</p>
                </div>
                <h5 className="strike-price text-danger">${product.price}</h5>
                <h3>${product.discounted_price}</h3>
                <div className="ratings d-flex flex-row align-items-center">
                  <div className="d-flex flex-row">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>
                  <span>441 reviews</span>
                </div>
                <div className="mt-5">
                  <span className="fw-bold">Color</span>
                  <div className="colors">
                    <ul id="marker">
                      <li id="marker-1"></li>
                      <li id="marker-2"></li>
                      <li id="marker-3"></li>
                      <li id="marker-4"></li>
                      <li id="marker-5"></li>
                    </ul>
                  </div>
                </div>
                <div className="buttons d-flex flex-row mt-5 gap-3">
                  <button className="btn btn-outline-dark">Buy Now</button>
                  {!productInCart(product) ? (
                    <button onClick={handleAddToCart} className="btn btn-dark">
                      Add to Cart
                    </button>
                  ) : (
                    <button onClick={handleRemoveFromCart} className="btn btn-dark">
                      Remove From Cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
