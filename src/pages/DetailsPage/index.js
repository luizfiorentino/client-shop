import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "../../store/products/actions";
import { selectProductDetails } from "../../store/products/selectors";
import { postNewCart } from "../../store/shopCarts/actions";
import Reviews from "../../components/Reviews";

export default function DetailsPage() {
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);
  console.log("page prod det - sic", productDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [fetchProductDetails, id]);

  console.log("det page - productDetails", productDetails);

  const addProductToCart = () => {
    dispatch(
      postNewCart(
        productDetails?.id,
        productDetails?.title,
        productDetails?.price,
        null
      )
    );
  };

  function submitReview(event) {
    event.preventDefault();
    console.log("review", review);
  }
  return (
    <div>
      <h3>Product Details:</h3>
      <p>{id}</p>
      <h2>{productDetails?.title}</h2>
      <p>Category: {productDetails?.category.title}</p>
      <img
        src={productDetails?.mainImage}
        style={{ width: 400, padding: 20 }}
      />
      <h3>Price: $ {productDetails?.price}</h3>
      <h3>{productDetails?.description}</h3>
      <h4>Rating: {productDetails?.rating}</h4>
      <button onClick={addProductToCart}>Add to shop cart</button>

      <body>
        <label for="name">Leave your review!:</label>
        <input
          type="text"
          id="name"
          style={{ width: 300 }}
          value={review}
          onChange={(event) => setReview(event.target.value)}
        />
        <button onClick={submitReview}>Submit</button>
      </body>
      <Reviews review={review} />
    </div>
  );
}

export { DetailsPage };
