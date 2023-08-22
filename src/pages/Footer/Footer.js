import React from "react";
import { Divider } from "antd";
import BaseButton from "../../components/Button/Button";
import { ReactComponent as Arrow } from "../../assets/images/rightArrow.svg";
import { ReactComponent as Facebook } from "../../assets/images/fbicon.svg";
import { ReactComponent as Twitter } from "../../assets/images/twittericon.svg";
import { ReactComponent as Instagram } from "../../assets/images/instaIcon.svg";
import { ReactComponent as LinkedIn } from "../../assets/images/linkedinIcon.svg";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="footer-intro">
        <div className="get-started">
          <h2>Ready to get started ?</h2>
          <p className="get-started-text">
            If there are questions you want to ask, we will answer all your
            question
          </p>
          <p className="get-started-text">Enter your email</p>
          <Divider className="get-started-divider" />
        </div>
        <div className="join-btn">
          <BaseButton type="primary" text="Join now" />
        </div>

        <div className="questions-box">
          <h3>Maybe your question is have been answered, check this out.</h3>
          <div className="questions">
            <h4 className="question"> What is Coca Soft</h4>
            <Arrow />
          </div>
          <Divider className="questions-divider" />
          <div className="questions">
            <h4 className="question"> How can I get service from Coca Soft</h4>
            <Arrow />
          </div>
          <Divider className="questions-divider" />
          <div className="questions">
            <h4 className="question"> What kind of service will I get</h4>
            <Arrow />
          </div>
        </div>
      </div>

      <Divider className="footer-divider" />

      <div className="footer-end">
        <div className="wrapper">
          <div className="social">
            <Facebook  className="social-icon"/>
            <Twitter  className="social-icon"/>
            <Instagram  className="social-icon"/>
            <LinkedIn  className="social-icon"/>
          </div>
          <div className="help">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Support</p>
          </div>
        </div>

        <p className="copyright">© Coca All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
