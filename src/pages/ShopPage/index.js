import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ProductCard } from "../../components";
import { fetchProducts } from "../../store/products/actions";
import { selectallProducts } from "../../store/products/selectors";

export default function ShopPage() {
  // const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector(selectallProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [fetchProducts]);

  // console.log("from comp page: allProducts", test);
  // useEffect(() => {
  //   try {
  //     async function fetchProducts() {
  //       const URL = `http://localhost:4000/products`;
  //       const response = await axios.get(URL);
  //       console.log("response.data=", response.data);
  //       setProducts(response.data);
  //     }
  //     fetchProducts();
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }, []);
  // console.log("products", products);
  return (
    <div>
      <h1>Shop</h1>
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

// return (
//   <div>
//     <h1>::::Helcome to the Harry Potter's Home Page::::</h1>
//     {sortedCharacters.map((character, index) => {
//       return (
//         <CharacterCard
//           key={index}
//           id={character.id}
//           name={character.name}
//           birth={character.born}
//           image={character.imgUrl}
//           house={character.houseId}
//         />
//       );
//     })}
//   </div>
// );
// }

export { ShopPage };
