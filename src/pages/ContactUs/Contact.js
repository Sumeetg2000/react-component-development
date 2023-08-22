import React from "react";
import BaseButton from "../../components/Button/Button";
import girlImg from "../../assets/images/contactus.png";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="section-contact">
      <div className="container">
        <div className="contact-details">
          <h2>Contact us today and let us know what you need</h2>
          <p className="contact-text">
            When does a mere internet 'SEO' company grow into a trusted partner
            that stays in front of the latest industry trends? When it's time to
            partner with Mocer, that's when.
          </p>
          <BaseButton type="text" text="Contact With Us" />
        </div>
      </div>
      <img
        src={girlImg}
        className="contact-img"
        alt="A girl standing while holding a laptop in her hand."
      />
    </div>
  );
};

export default Contact;
