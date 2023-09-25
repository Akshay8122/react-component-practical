import React from "react";
import "./Input.scss";

const BaseInput = ({
  placeholder,
  type,
  className,
  required,
  maxLength,
  minLength,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
    />
  );
};

export default BaseInput;
