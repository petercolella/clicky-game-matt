import React from "react";
import "./Charactercard.css";

const Charactercard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Charactercard;
