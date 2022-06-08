import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="container">
      NavBar
      <div className="left-bars">
        <h3>
          <NavLink
            to="/shop"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            {" "}
            Shop Page{" "}
          </NavLink>
          <NavLink
            to="/"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            {" "}
            Home Page{" "}
          </NavLink>
          <NavLink
            to="/details/1"
            className="links"
            style={({ isActive }) =>
              isActive ? { color: "white" } : undefined
            }
          >
            {" "}
            Details Page{" "}
          </NavLink>
        </h3>
      </div>
      <div className="right-bar">
        <h3>
          Left Bar <AiOutlineUser />{" "}
          <Link to="/shopCart">
            <AiOutlineShoppingCart />
          </Link>{" "}
          <AiOutlineHeart />
        </h3>
      </div>
    </div>
  );
}

export { NavBar };
