import React, { useState } from "react";
import "./checkout.css";
import TextInput from "../Inputs/TextInput";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";

const CheckoutCard = ({ products = [] }) => {
  const initialOrderDetails = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    address: "",
  };

  const [orderDetails, setOrderDetails] = useState(initialOrderDetails);
  const [errors, setErrors] = useState({ ...initialOrderDetails });

  const handleChange = (field, value) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));

    validateError(field, value);
  };

  const handleBlur = (field) => {
    const value = orderDetails[field].trim();
    validateError(field, value);
  };

  const validateError = (field, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]:
        value.trim() === "" ? `${field.replace("_", " ")} is required` : "",
    }));
  };

  const handlePlaceOrder = () => {
    const fields = Object.keys(orderDetails);

    fields.forEach((field) => {
      validateError(field, orderDetails[field]);
    });

    const hasErrors = Object.values(orderDetails).some((error) => error === "");

    if (hasErrors) {
      console.log("There are validation errors. Order not placed.");
    } else {
      Swal.fire({
        title: "Order is being placed"
      });
      console.log("Order placed successfully!");
    }
  };
  return (
    <>
      <Loader />
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 ">
          <div className="card checkout-card shadow">
            <div className="card-body p-5">
              <div className="my-3">
                <h3>Contact Information</h3>
              </div>
              <div className="form-group row ">
                <div className="col-md-6">
                  <TextInput
                    value={orderDetails.first_name}
                    label={"First Name"}
                    placeholder={"Enter First Name"}
                    validator={errors.first_name}
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    onBlur={() => handleBlur("first_name")}
                  />
                </div>
                <div className="col-md-6">
                  <TextInput
                    value={orderDetails.last_name}
                    label={"Last Name"}
                    placeholder={"Enter Last Name"}
                    validator={errors.last_name}
                    onChange={(e) => handleChange("last_name", e.target.value)}
                    onBlur={() => handleBlur("last_name")}
                  />
                </div>
              </div>
              <div className="form-group row ">
                <div className="col-12">
                  <TextInput
                    value={orderDetails.phone}
                    label={"Phone"}
                    placeholder={"Enter Phone"}
                    validator={errors.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                  />
                </div>
              </div>
              <div className="form-group row ">
                <div className="col-12">
                  <TextInput
                    value={orderDetails.email}
                    label={"Email"}
                    placeholder={"Enter Email"}
                    validator={errors.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                  />
                </div>
              </div>
              <div className="my-4">
                <h3>Address Information</h3>
              </div>
              <div className="form-group row ">
                <div className="col-md-6 ">
                  <TextInput
                    value={orderDetails.city}
                    label={"City"}
                    placeholder={"Enter City Name"}
                    validator={errors.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    onBlur={() => handleBlur("city")}
                  />
                </div>
                <div className="col-md-6 ">
                  <TextInput
                    value={orderDetails.state}
                    label={"State"}
                    placeholder={"Enter State Name"}
                    validator={errors.state}
                    onChange={(e) => handleChange("state", e.target.value)}
                    onBlur={() => handleBlur("state")}
                  />
                </div>
                <div className="col-md-12">
                  <TextInput
                    value={orderDetails.address}
                    label={"Address"}
                    placeholder={"Enter Address"}
                    validator={errors.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    onBlur={() => handleBlur("address")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mt-lg-0 mt-4">
          <div className="card checkout-card shadow">
            <div className="card-body p-5">
              <div className="cart-details">
                <div className="checkout-items ">
                  {products.map((product,index) => {
                    return (
                      <div key={index} className="checkout-item row">
                        <div className="col-8">
                          <span className=" text-truncate">
                            {product.qty} x {product.title}{" "}
                          </span>
                        </div>
                        <div className="col-4">
                          <span>${product.discounted_price}</span>
                        </div>
                        <div></div>
                      </div>
                    );
                  })}
                </div>
                <hr />
                <div className="h5">Total: $443</div>
                <div className="d-flex justify-content-center mt-4">
                  <button
                    className="btn btn-outline-dark py-2 fw-bold"
                    style={{ borderRadius: 2 }}
                    onClick={handlePlaceOrder}
                  >
                    Proceed Social Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CheckoutCard;
