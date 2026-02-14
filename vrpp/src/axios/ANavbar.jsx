import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "./CartContext";

export default function ANavbar() {
  const { cart } = useContext(CartContext);

  // Calculate total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm fixed-top">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Left side: Brand + Links */}
        <div className="d-flex align-items-center gap-4">
          <NavLink className="navbar-brand fw-bold" to="/">
            ReactApp
          </NavLink>

          <NavLink className="nav-link text-light" to="/">
            Home
          </NavLink>

          <NavLink className="nav-link text-light" to="/product">
            Products
          </NavLink>

          <NavLink className="nav-link text-light" to="/dashboard">
            Dashboard
          </NavLink>
        </div>

        {/* Right side: Cart with dynamic count */}
        <div>
          <NavLink className="btn btn-warning position-relative" to="/cart">
            🛒 Cart
            {totalItems > 0 && (
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.75rem" }}
              >
                {totalItems}
              </span>
            )}
          </NavLink>
        </div>

      </div>
    </nav>
  );
}
