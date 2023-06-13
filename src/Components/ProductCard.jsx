import React from 'react'
import { FaEye } from 'react-icons/fa'

const ProductCard = ({product,showImageModal}) => {

   
  return (
    <div className="product shadow">
    <div className="image-container">
      <img src={product.imagePath} alt="" className="p-img " />
      <div className="overlay">
        <button
          onClick={() => showImageModal(product)}
          className="view-btn"
        >
          <FaEye className="eye-icon" />
        </button>
      </div>
    </div>

    <div className="details">
      <h5 className="">{product.title}</h5>
      <div className="d-flex mt-3 flex-row justify-content-between">
        <span>
          <s>${product.price}</s>
        </span>

        <span className="price text-right">
          ${product.discounted_price}
        </span>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto text-center">
          <button className="btn my-2 btn-grad">Details</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard