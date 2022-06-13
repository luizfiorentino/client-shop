import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ProductCard } from "../../components";
import { fetchProducts } from "../../store/products/actions";
import { selectallProducts } from "../../store/products/selectors";

export default function ShopPage() {
  const [category, setCategory] = useState([0]);
  const dispatch = useDispatch();
  const allProducts = useSelector(selectallProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [fetchProducts]);

  return (
    <div>
      <h1>Shop</h1>
      <select
        name="categories"
        value={category}
        onChange={(event) => event.target.value}
      >
        <option value={0}>All</option>
        {allProducts.map((product) => (
          <option value={product.categoryId}>{product.category.title}</option>
        ))}
      </select>
      <div>
        {!allProducts
          ? "Loading..."
          : allProducts.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  image={product.mainImage}
                />
              );
            })}
      </div>
    </div>
  );
}

export { ShopPage };
