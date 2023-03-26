import React from "react";
import "./Card.css";

function Card({ Name, BranchType, DeliveryStatus, District, Division }) {
  return (
    <div className="cardData">
      <p>Name : {Name}</p>
      <p>BranchType : {BranchType}</p>
      <p>District : {District}</p>
      <p>Division : {Division}</p>
      <p>DeliveryStatus: {DeliveryStatus}</p>
    </div>
  );
}

export default Card;
