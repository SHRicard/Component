import React from "react";

const Card = ({ props }) => {
  return (
    <div>
      <div>{props.name}</div>
      <img src={props.background_image} height="100px" width="auto" alt="" />
    </div>
  );
};

export default Card;
