import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ProductCard } from "../../components";
import { fetchProducts } from "../../store/products/actions";
import { selectallProducts } from "../../store/products/selectors";

export default function ShopPage() {
  const [category, setCategory] = useState([0]);
  //const [products, setCategoryproducts] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const allProducts = useSelector(selectallProducts);
  const products = allProducts;
  console.log("products", products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [fetchProducts]);

  //setCategoryproducts(allProducts);
  return (
    <div>
      <h1>Shop</h1>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      ></input>
      <select
        name="categories"
        value={category}
        onChange={(event) => setCategory(parseInt(event.target.value))}
      >
        <option value={0}>All</option>
        {products.map((product) => (
          <option value={product.categoryId}>{product.category.title}</option>
        ))}
      </select>
      <div>
        {products
          .filter((product) =>
            category ? product.categoryId === category : true
          )
          .filter((product) => {
            return (
              product.title.toLowerCase().includes(search) ||
              product.category.title.toLowerCase().includes(search)
            );
          })
          .map((product, i) => (
            <ProductCard
              key={i}
              id={product.id}
              title={product.title}
              category={product.category.title}
              image={product.mainImage}
            />
          ))}
        {/* {allProducts.sort((a, b) =>
          a.title
            .localeCompare(b.title)
            .filter((product) =>
              category ? product.categoryId === category : true
            )
            .map((product, i) => (
              <ProductCard
                key={i}
                id={product.id}
                title={product.title}
                image={product.mainImage}
              />
            ))
        )} */}
      </div>
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
