import React, { Component } from "react";

export default class FetchProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      categories: [],
      searchText: "",
      selectedCategory: "all",
      loading: true,
    };
  }

  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          products: data,
          categories: [...new Set(data.map((item) => item.category))],
          loading: false,
        })
      );
  }

  handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  handleCategory = (cat) => {
    this.setState({ selectedCategory: cat });
  };

  render() {
    const { products, categories, searchText, selectedCategory, loading } =
      this.state;

     
    const filteredProducts = products.filter((prod) => {
      const matchSearch = prod.title
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchCategory =
        selectedCategory === "all" || prod.category === selectedCategory;

      return matchSearch && matchCategory;
    });

    return (
      <div>
        
        <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
          <span className="navbar-brand fw-bold">Maharufh</span>
          <input
            type="search"
            className="form-control w-25"
            placeholder="Search product..."
            onChange={this.handleSearch}
          />
        </nav>

        <div className="container mt-4">
        
          <div className="mb-4 d-flex gap-2 flex-wrap">
            <button
              className={`btn btn-sm ${
                selectedCategory === "all"
                  ? "btn-dark"
                  : "btn-outline-dark"
              }`}
              onClick={() => this.handleCategory("all")}
            >
              All
            </button>

            {categories.map((cat, index) => (
              <button
                key={index}
                className={`btn btn-sm ${
                  selectedCategory === cat
                    ? "btn-dark"
                    : "btn-outline-dark"
                }`}
                onClick={() => this.handleCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

         
          {loading && <p>Loading products...</p>}

          <div className="row g-4">
            {filteredProducts.map((prod) => (
              <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm h-100">
                  <img
                    src={prod.image}
                    alt={prod.title}
                    className="card-img-top p-3"
                    style={{
                      height: "180px",
                      objectFit: "contain",
                    }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h6 className="fw-bold">
                      {prod.title.substring(0, 30)}
                    </h6>
                    <p className="text-success text-center">₹ {prod.price}</p>
                    <p className="text-muted small flex-grow-1">
                      {prod.description.substring(0, 60)}...
                    </p>
                    <button className="btn btn-warning mt-2">
                      🛒 Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <p className="text-center">No products found</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}
