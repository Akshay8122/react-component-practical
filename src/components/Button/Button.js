import React from "react";
import "./Button.scss";
import { Button } from "antd";

const BaseButton = ({ value, type, icon, className }) => {
  return (
    <Button className={className} type={type}>
      {icon}
      {value}
    </Button>
  );
};

export default BaseButton;
