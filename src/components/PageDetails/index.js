import React from "react";

export default function PageDetails(props) {
  return (
    <div>
      <h2>Product Details</h2>
      <h3>Product Details:</h3>
      <h2>{props.title}</h2>
      <p>Category: {props.category.title}</p>
      <img src={props.mainImage} style={{ width: 400, padding: 20 }} />
      <h3>Price: $ {props.price}</h3>
      <h3>{props.description}</h3>
      <h4>Rating: {props.rating}</h4>
    </div>
  );
}
