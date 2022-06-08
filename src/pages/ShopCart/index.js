import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchShopCarts } from "../../store/shopCarts/actions";
import { selectAllCarts } from "../../store/shopCarts/selectors";

export default function ShopCart() {
  const dispatch = useDispatch();
  const carts = useSelector(selectAllCarts);

  useEffect(() => {
    dispatch(fetchShopCarts());
  }, [fetchShopCarts]);

  console.log("shopCart, carts", carts);

  return (
    <div>
      <h3>ShopCart</h3>
      <ul>
        {!carts
          ? "Loading"
          : carts.map((cart) => (
              <li>
                <p>{cart.productName}</p>
              </li>
            ))}
      </ul>
    </div>
  );
}

export { ShopCart };
