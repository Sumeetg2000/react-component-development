import React from "react";
import { Button } from "antd";
import "./Button.scss";

const BaseButton = ({ type, text, ...rest }) => {
  return <Button  type={type}>{text}</Button>;
};

export default BaseButton;
