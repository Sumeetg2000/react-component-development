import React from "react";
import { Avatar } from "antd";

const CustomAvatar = ({ src }) => {
  return (
    <div className="avatar">
      <Avatar size={56} src={src} />
    </div>
  );
};

export default CustomAvatar;
