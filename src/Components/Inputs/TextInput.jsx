import React from "react";
import "./inputs.css";

const TextInput = ({ value, onChange, label, validator, placeholder, onBlur }) => {
  return (
    <div className="mb-4">
      <label htmlFor="Name" className="form-label">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="form-control"
        onBlur={onBlur}
      />
      {validator && <p className="text-danger text-capitalize">{validator}</p>}
    </div>
  );
};

export default TextInput;
