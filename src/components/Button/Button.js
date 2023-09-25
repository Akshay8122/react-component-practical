import React from "react";
import "./Button.scss";
import { Button } from "antd";

const BaseButton = ({ value, type, icon, className, onClick }) => {
  return (
    <Button className={className} type={type} onClick={onClick}>
      {icon}
      {value}
    </Button>
  );
};

export default BaseButton;
