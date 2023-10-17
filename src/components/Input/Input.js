import React from "react";
import "./Input.scss";

const BaseInput = ({
  placeholder,
  type,
  className,
  required,
  name,
  minLength,
  maxLength,
  icon,
  pattern,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      name={name}
      pattern={pattern}
      // pattern="^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$|^[a-zA-Z0-9_]{3,16}$"
      icon={icon}
    />
  );
};

export default BaseInput;
