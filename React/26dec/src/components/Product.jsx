import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      qty: 0,
    };
console.log(this.state.qty);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  increaseQty() {
    this.setState({ qty: this.state.qty + 1 });
  }

  decreaseQty() {
    if (this.state.qty > 0) {
      this.setState({ qty: this.state.qty - 1 });
    }
  }

  addToCart() {
    if (this.state.qty > 0) {
      alert(`Added ${this.state.qty} item(s) to cart`);
    } else {
      alert("Please add at least 1 item");
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="card text-center" style={{ width: "18rem" }}>
 
          <img
            src="https://j6e2i8c9.delivery.rocketcdn.me/wp-content/uploads/2020/09/Chicken-Biryani-Recipe-01-1-500x500.jpg"
            className="card-img-top"
            alt="product"
          />

          <div className="card-body">
            
            <h5 className="card-title">Chicken Biryani</h5>

       
            <p className="card-text mb-1">💰 Price: ₹299</p>
            <p className="card-text">⭐ Rating: 4.8</p>

            
            <div className="d-flex justify-content-center align-items-center mb-3">
              <button className="btn btn-outline-danger" onClick={this.decreaseQty}>
                −
              </button>

              <span className="mx-3 fw-bold">{this.state.qty}</span>

              <button className="btn btn-outline-success" onClick={this.increaseQty}>
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="btn btn-success w-100" onClick={this.addToCart}>
              Add to Cart 🛒
            </button>
          </div>
        </div>
      </div>
    );
  }
}
