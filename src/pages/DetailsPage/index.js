import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductDetails,
  fetchReviews,
} from "../../store/products/actions";
import {
  selectProductDetails,
  selectAllReviews,
} from "../../store/products/selectors";
import { postNewCart } from "../../store/shopCarts/actions";
import Reviews from "../../components/Reviews";
import { postReview } from "../../store/products/actions";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { productsFetchedSuccess } from "../../store/products/slice";

export default function DetailsPage() {
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);
  const reviews = useSelector(selectAllReviews);
  console.log("page prod det - sic", productDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [fetchProductDetails, id]);

  useEffect(() => {
    dispatch(fetchReviews());
  }, [fetchProductDetails]);

  console.log("det page, reviews selector", reviews);

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
    const prodId = productDetails.id;
    console.log("prodId=", prodId);
    event.preventDefault();
    dispatch(postReview(review, prodId));
    console.log("review", review);
  }

  const productReviews = reviews.filter(
    (rev) => rev.productId === productDetails.id
  );
  console.log("prod reviews", productReviews);

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

      <Form>
        <h3>Post your review</h3>
        <Form.Group>
          <Form.Label>review</Form.Label>
          <Form.Control
            value={review}
            onChange={(event) => setReview(event.target.value)}
            type="text"
            placeholder="enter a review"
          />
          {/* <input
            type="text"
            id="name"
            style={{ width: 300 }}
            value={review}
            onChange={(event) => setReview(event.target.value)}
          /> */}
        </Form.Group>

        <Form.Group>
          <Button type="submit" onClick={submitReview}>
            Submit
          </Button>
        </Form.Group>

        {/* <button onClick={() => submitReview}>Submit</button> */}
      </Form>
      {/* <Reviews productDetails={productDetails} review={review} />
      {productDetails.review.map((rev) => {
        return <li key={rev.id}>{rev.userReview}</li>;
      })} */}
      {/* <Reviews productDetails={reviews} /> */}
      <ul>
        {productReviews.map((rev) => {
          return <li key={rev.id}>{rev.userReview}</li>;
        })}
      </ul>
    </div>

    // {spaces.map(space => {
    //   return (
    //     <Space
    //       key={space.id}
    //       id={space.id}
    //       title={space.title}
    //       description={space.description}
    //       backgroundColor={space.backgroundColor}
    //       color={space.color}
    //       showLink={true}
    //     />
    //   );
    // })}
  );
}

export { DetailsPage };
