import React from "react";

import "./Card.scss";

const Card = ({ image, name, designation }) => {
  return (
    <figure className="member-card">
      <img
        className="member-img"
        src={image}
        alt={`${designation} - ${name}`}
      />
      <h3 className="member-name">{name}</h3>
      <p className="member-designation">{designation}</p>
    </figure>
  );
};

export default Card;
