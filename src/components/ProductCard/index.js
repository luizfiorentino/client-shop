import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <div className="productCard">
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <img src={props.image} style={{ width: 400, padding: 20 }} />
      </div>

      <div>
        <button>
          <Link to={`/details/${props.id}`}>Details</Link>
        </button>
      </div>
    </div>
  );
}
export { ProductCard };
