import React from "react";
import "./Input.scss";

const BaseInput = ({
  placeholder,
  type,
  className,
  required,
  name,
  maxLength,
  icon,
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className={className}
      required={required}
      maxLength={maxLength}
      name={name}
      icon={icon}
    />
  );
};

export default BaseInput;
