import React from "react";
import "./Button.scss";
import { Button } from "antd";

const BaseButton = ({
  value,
  type,
  icon,
  className,
  onClick,
  href,
  onFocus,
}) => {
  return (
    <Button
      className={className}
      type={type}
      onClick={onClick}
      htmlType="submit"
      href={href}
      onFocus={onFocus}
    >
      {icon}
      {value}
    </Button>
  );
};

export default BaseButton;
