import React, { useState } from "react";

const data = [
  {
    id: 101,
    name: "Biryani",
    imgUrl:
      "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg",
    price: 299,
    rating: "⭐️ 4.9",
    qty: 0,
  },
  {
    id: 102,
    name: "Kebab",
    imgUrl:
      "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg",
    price: 149,
    rating: "⭐️ 4.2",
    qty: 0,
  },
];

function Product2() {
  const [items, setItems] = useState(data);
  const [isLogIn, setIsLogIn] = useState(true);

 
  function getAvailability(qty) {
    if (qty > 10) {
      return { text: "Out of Stock", color: "text-danger fw-bold" };
    }
    if (qty >= 5 && qty <= 10) {
      return { text: "Very Few Left", color: "text-warning fw-bold" };
    }
    return { text: "In Stock", color: "text-success fw-bold" };
  }

 
  function handleInc(id) {
    const newObj = [...items];
    for (let item of newObj) {
      if (item.id === id) {
        item.qty += 1;
        break;
      }
    }
    setItems(newObj);
  }

 
  function handleDec(id) {
    const newObj = items.map((item) =>
      item.id === id && item.qty > 0
        ? { ...item, qty: item.qty - 1 }
        : item
    );
    setItems(newObj);
  }

  
  function grandTotal() {
    let total = 0;
    for (let item of items) {
      total += item.qty * item.price;
    }
    return total.toFixed(2);
  }

  
  function handleLogIn() {
    setIsLogIn(false);
  }

  function handleLogOut() {
    setIsLogIn(true);
  }

  return (
    <div className="container mt-4">

     
      <section>
        <nav className="bg-body d-flex justify-content-between p-2 border">
          <h4>Maharufh</h4>

          <div className="buttons">
            {isLogIn ? (
              <button className="btn btn-success me-2" onClick={handleLogIn}>
                Login
              </button>
            ) : (
              <button className="btn btn-danger me-2" onClick={handleLogOut}>
                Logout
              </button>
            )}
          </div>
        </nav>

        {isLogIn && <h4 className="mt-3 text-secondary">Welcome Guest</h4>}
        {!isLogIn && <h4 className="mt-3 text-success">Welcome User</h4>}
      </section>
 
      {!isLogIn && (
        <>
          <h2 className="text-center mb-4 mt-3">Product Table</h2>

          <table className="table table-bordered table-hover text-center w-100">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Price</th>
                <th>Availability</th>
                <th>Qty</th>
                <th>Total Price</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item) => {
                const { id, name, imgUrl, price, qty } = item;
                const avail = getAvailability(qty);

                return (
                  <tr key={id}>
                    <td>{id}</td>

                    <td>
                      <img src={imgUrl} width="60" alt={name} />
                    </td>

                    <td>{name}</td>

                    <td>₹{price}.00</td>

                    
                    <td className={avail.color}>{avail.text}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() => handleDec(id)}
                      >
                        ➖
                      </button>

                      <span>{qty}</span>

                      <button
                        className="btn btn-sm btn-success ms-2"
                        onClick={() => handleInc(id)}
                      >
                        ➕
                      </button>
                    </td>

                    <td>₹{(price * qty).toFixed(2)}</td>
                  </tr>
                );
              })}

              
              <tr className="table-secondary fw-bold">
                <td colSpan={5}></td>
                <td>Grand Total:</td>
                <td>₹{grandTotal()}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Product2;
