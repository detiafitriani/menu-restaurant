import React from "react";

const Image = ({ name, category, image }) => {
  return (
    <div className="image">
      <img src={image} alt={name} />
      <div className="name">{name}</div>
      <div className="category">{category}</div>
    </div>
  );
};

export default Image;
