import React from "react";
import { Button } from "antd";
import "./Button.scss";

const BaseButton = ({ type, text, icon, ...rest }) => {
  return (
    <Button type={type}>
      <>
        {text}
        {icon}
      </>
    </Button>
  );
};

export default BaseButton;
