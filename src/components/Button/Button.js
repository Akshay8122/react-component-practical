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
  htmlType,
}) => {
  return (
    <Button
      className={className}
      type={type}
      onClick={onClick}
      htmlType="submit"
      href={href}
      // href={"https://developer.apple.com/sign-in-with-apple/"}
    >
      {icon}
      {value}
    </Button>
  );
};

export default BaseButton;
