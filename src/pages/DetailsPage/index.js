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
import PageDetails from "../../components/PageDetails";
import "./styles.css";
import Pagination from "../../components/Pagination";
import axios from "axios";

export default function DetailsPage() {
  const [review, setReview] = useState("");
  // Pagination feature
  const [revs, setRevs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [revsPerPage, setRevsPerPage] = useState(5);
  //
  const dispatch = useDispatch();
  const productDetails = useSelector(selectProductDetails);
  console.log("selector", productDetails);
  const reviews = useSelector(selectAllReviews);
  console.log("page prod det - sic", productDetails);
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [fetchProductDetails, id]);

  // useEffect(() => {
  //   dispatch(fetchReviews());
  //   setRevs(productReviews);
  // }, [fetchReviews]);

  useEffect(() => {
    const fetchRevs = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:4000/products/reviews/all");
      setRevs(res.data.allReviews);
      setLoading(false);
    };
    fetchRevs();
  }, []);
  console.log("reviews", reviews);
  //setRevs(reviews);
  const productReviews = reviews?.filter((rev) => {
    return rev.productId === productDetails?.id;
  });
  console.log("prod reviews", productReviews);

  // Get current reviews
  const indexOfLastRev = currentPage * revsPerPage;
  const indexOfFirstRev = indexOfLastRev - revsPerPage;
  const currentRevs = revs.slice(indexOfFirstRev, indexOfLastRev);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    const prodId = productDetails?.id;
    console.log("prodId=", prodId);
    event.preventDefault();
    dispatch(postReview(review, prodId));
    console.log("review", review);
    setReview("");
  }

  return (
    <div>
      <h3>Product Details:</h3>
      <p>{id}</p>
      <h2>{productDetails?.title}</h2>
      {/* <p>Category: {productDetails?.category.title}</p> */}
      <p>Category: {productDetails?.category?.title}</p>
      <img
        src={productDetails?.mainImage}
        style={{ width: 400, padding: 20 }}
      />
      <h3>Price: $ {productDetails?.price}</h3>
      <h3>{productDetails?.description}</h3>
      <h4>Rating: {productDetails?.rating}</h4>
      <div className="container mt-5">
        <h3 className="text-primary mb-5">User's Reviews</h3>
        <Reviews revs={currentRevs} loading={loading} />
        <Pagination
          revsPerPage={revsPerPage}
          totalRevs={revs.length}
          paginate={paginate}
        />
      </div>
      <div></div>

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

      {/* <ul>
        {productReviews.map((rev) => {
          return <li key={rev.id}>{rev.userReview}</li>;
        })}
      </ul> */}
    </div>
  );
}

export { DetailsPage };
