import React from "react";
import "./styles.css";

export default function ProductCard(props) {
  return (
    <div className="productCard">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.image} style={{ width: 400, padding: 20 }} />
    </div>
  );
}
export { ProductCard };
