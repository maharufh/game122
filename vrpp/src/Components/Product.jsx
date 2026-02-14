import React, { useState } from 'react';

function Product() {

  const [product, setProduct] = useState({
    id: 101,
    name1: 'Biryani',
    imgUrl: "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg",
    price: 299.00,
    rating: "⭐️ 4.9",
    qty: 0
  });

  const { name1, imgUrl, price, rating, qty } = product;

  function handleInc() {
    setProduct((obj) => ({
      ...obj,
      qty: obj.qty + 1
    }));
  }

  function handleDec() {
    setProduct((obj) => ({
      ...obj,
      qty: obj.qty > 0 ? obj.qty - 1 : 1
    }));
  }

  return (
    <div className="card">
      <div className="card-header">
        <img src={imgUrl} alt="" className="img-fluid" />
      </div>

      <div className="card-body">
        <h2>{name1}</h2>
        <h3>₹ {price}</h3>
        <h3>{rating}</h3>

        <button onClick={handleDec}>➖</button>
        <span style={{ margin: "0 10px" }}>{qty}</span>
        <button onClick={handleInc}>➕</button>
      </div>
    </div>
  );
}

export default Product;
