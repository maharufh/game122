import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "./CartContext";
import axios from "axios";



function ProductDetails() {
  
  const navigate = useNavigate();
  const { id } = useParams();
  const [prod, setProd] = useState(null);

  const { addToCart } = useContext(CartContext);  

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProd(res.data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [id]);

  function handleReturn() {
    navigate("/product");
  }

  function handleAddToCart() {
    addToCart(prod);
    alert(`${prod.title} added to cart!`);
  }

  if (!prod) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4">
            {/* Image */}
            <div className="text-center p-4">
              <img
                src={prod.image}
                alt={prod.title}
                className="img-fluid"
                style={{ height: "280px", objectFit: "contain" }}
              />
            </div>

            {/* Body */}
            <div className="card-body text-center">
              <h5 className="fw-bold mb-3">{prod.title}</h5>
              <h4 className="text-success mb-3">₹ {prod.price}</h4>
              <p className="text-muted small">{prod.description}</p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button
                  className="btn btn-warning px-4"
                  onClick={handleAddToCart} // Add to cart
                >
                  🛒 Add to Cart
                </button>

                <button
                  className="btn btn-outline-dark px-4"
                  onClick={handleReturn}
                >
                  ← Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
