import React from "react";

const Reviews = (revs) => {
  console.log("reviews comp", revs);
  return (
    <div>
      <p>from reviews component</p>
      <ul className="list-group mb-4">
        {revs.revs.map((rev) => (
          <li key={rev.id} className="list-group-item">
            {rev.userReview}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Reviews;
