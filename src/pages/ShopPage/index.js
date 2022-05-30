import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../components";

export default function ShopPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      async function fetchProducts() {
        const URL = `http://localhost:4000/products`;
        const response = await axios.get(URL);
        console.log(response);
        setProducts(response.data);
      }
      fetchProducts();
    } catch (e) {
      console.log(e);
    }
  }, []);
  console.log("products", products);
  return (
    <div>
      <h1>Shop</h1>
      <div>
        {!products
          ? "Loading..."
          : products.map((product) => {
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
