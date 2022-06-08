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

  //   const array = [1, 2, 3, 4];
  // let sum = 0;

  // for (let i = 0; i < array.length; i++) {
  //     sum += array[i];
  // }
  // console.log(sum);

  // const arr = [5, 15, 45];

  // const sum = arr.reduce((accumulator, value) => {
  //   return accumulator + value;
  // }, 0);

  // console.log(sum);
  const prices = carts.map((cart) => cart.price);
  //console.log("prices", prices);
  const shopCartAmount = prices.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  console.log("shopCartAmount", shopCartAmount);

  console.log("shopCart, carts", carts);

  return (
    <div>
      <h3>ShopCart</h3>
      <ul>
        {!carts
          ? "Loading"
          : carts.map((cart) => (
              <li>
                <h3>{cart.productName}</h3>
                <p>{cart.price}</p>
              </li>
            ))}
      </ul>
      <h3>
        {" "}
        <p>Total amount: {parseInt(shopCartAmount)}</p>
      </h3>
    </div>
  );
}

export { ShopCart };
