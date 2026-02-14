import React, { Component } from "react";

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
  {
    id: 103,
    name: "Tanduri",
    imgUrl:
      "https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg",
    price: 149,
    rating: "⭐️ 4.2",
    qty: 0,
  },
];

export default class Products extends Component {
  constructor(props) {
    super(props);

     
    this.state = {
      items: data,
    };

     
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }

  handleInc(id) {
    const updatedData = this.state.items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );

    this.setState({ items: updatedData });
  }

  handleDec(id) {
    const updatedData = this.state.items.map((item) =>
      item.id === id && item.qty > 0
        ? { ...item, qty: item.qty - 1 }
        : item
    );

    this.setState({ items: updatedData });
  }

  render() {
    const { items } = this.state;

    return (
      <div className="container mt-4">
        <nav className="bg-body d-flex justify-content-between p-2 border">
          <h4>Maharufh</h4>
        </nav>

        <h2 className="text-center mb-4 mt-3">Product Table</h2>

        <table className="table table-bordered table-hover text-center w-100">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total Price</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, name, imgUrl, price, qty }) => (
              <tr key={id}>
                <td>{id}</td>

                <td>
                  <img src={imgUrl} width="60" alt={name} />
                </td>

                <td>{name}</td>

                <td>₹{price}.00</td>

                <td>
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => this.handleDec(id)}
                  >
                    ➖
                  </button>

                  <span>{qty}</span>

                  <button
                    className="btn btn-sm btn-success ms-2"
                    onClick={() => this.handleInc(id)}
                  >
                    ➕
                  </button>
                </td>

                <td>₹{(price * qty).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
