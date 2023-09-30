import React from "react";
import "./Input.scss";

const BaseInput = ({
  placeholder,
  type,
  className,
  required,
  name,
  maxLength,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      required={required}
      maxLength={maxLength}
      name={name}
    />
  );
};

export default BaseInput;
