import React from "react";
import "./WorkshopCard.css";

function WorkshopCard({ title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Learn amazing skills in this workshop.</p>
      <button className="button">Register</button>
    </div>
  );
}

export default WorkshopCard;
