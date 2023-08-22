import React from "react";
import { Avatar } from "antd";
import CustomAvatar from "../Avatar/Avatar";
import firstAvatar from "../../assets/images/avatar1.jpeg";
import secondAvatar from "../../assets/images/avatar2.png";
import thirdAvatar from "../../assets/images/avatar3.png";
import "./AboutTeam.scss";

const AboutTeam = () => {
  return (
    <div className="about-team-card">
      <Avatar.Group >
        <CustomAvatar src={firstAvatar} />
        <CustomAvatar src={secondAvatar} />
        <CustomAvatar src={thirdAvatar} />
      </Avatar.Group>
      <div className="about-details">
        <p className="number">1.289 </p>
        <p className="label">Our Remote Team</p>
      </div>
    </div>
  );
};

export default AboutTeam;
