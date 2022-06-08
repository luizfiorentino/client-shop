import React from "react";

export default function Reviews(props) {
  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        <li>{props.review}</li>
      </ul>
    </div>
  );
}
