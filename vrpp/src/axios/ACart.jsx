import React, { useContext } from "react";
import CartContext from "./CartContext";

function ACart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) {
    return <h4 className="text-center mt-5 pt-5">Your cart is empty</h4>;
  }

  return (
    <div className="container mt-5 pt-5">
      <h3 className="mb-4 fw-bold">My Cart</h3>
      <div className="row g-3">
        {cart.map((item) => (
          <div key={item.id} className="col-md-6">
            <div className="card shadow-sm p-3 d-flex flex-row align-items-center">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid me-3"
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />
              <div>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="mb-1 text-success">₹ {item.price}</p>
                <p className="mb-1 text-muted">Qty: {item.qty}</p>
                <button
                  className="btn btn-sm btn-danger mt-2"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ACart;
