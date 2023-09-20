import React from "react";
import "./Input.scss";

const BaseInput = ({ placeholder, type, icon }) => {
  return <input placeholder={placeholder} type={type} />;
};

export default BaseInput;
