import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import CartContext from "./CartContext";
import { useNavigate } from "react-router-dom";

function AProduct() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Fetch all products
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await Axios.get("https://fakestoreapi.com/products");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (products.length === 0)
    return <h4 className="text-center mt-5">Loading...</h4>;

  return (
    <div className="container mt-5">
      <h3 className="mb-4 fw-bold">Products</h3>
      <div className="row g-4">
        {products.map((prod) => (
          <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card shadow-sm h-100">
              <img
                src={prod.image}
                alt={prod.title}
                className="card-img-top p-3"
                style={{ height: "180px", objectFit: "contain", cursor: "pointer" }}
                onClick={() => navigate(`/product/${prod.id}`)} // Go to Product Details
              />
              <div className="card-body d-flex flex-column">
                <h6
                  className="card-title fw-bold"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`/product/${prod.id}`)}
                >
                  {prod.title}
                </h6>
                <p className="text-success mb-2">₹ {prod.price}</p>
                <p className="text-muted small flex-grow-1">
                  {prod.description.substring(0, 60)}...
                </p>
                <button
                  className="btn btn-warning mt-2"
                  onClick={() => addToCart(prod)}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AProduct;
