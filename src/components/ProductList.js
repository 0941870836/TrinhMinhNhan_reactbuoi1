import React, { Component } from "react";
import Product from "./Product";

class ProductList extends Component {
  render() {
    return (
      <div className="row">
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
}

export default ProductList;
