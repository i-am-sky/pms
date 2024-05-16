import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "../add-product/AddProduct";
import Products from "../products/Products";
import UpdateProduct from "../update-product/UpdateProduct";
// import SingleProduct from "../single-product/SingleProduct";
import Home from "../home/Home";

import "./navbarStyle.css";
import SingleProductWithRedux from "../single-product/SingleProductWithRedux";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 10px 0",
    padding: "auto",
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md bg-primary">
        <div className="container-fluid">
          <Link  to="/">
            <span className="navbar-brand text-white  ">PRODUCT MANAGEMENT SYSTEM</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={{ textAlign: "left" }}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <span
                className="divider"
                style={{ margin: "0 5px 0", color: "#aaa" }}
              >
                |
              </span>
              <Link style={linkStyle} className="nav-item" to="/">
                <span className="item active">HOME</span>
              </Link>
              <span
                className="divider"
                style={{ margin: "0 5px 0", color: "#aaa" }}
              >
                |
              </span>
              <Link style={linkStyle} className="nav-item" to="/products">
                <span className=" item">PRODUCTS</span>
              </Link>
              <span
                className="divider"
                style={{ margin: "0 5px 0", color: "#aaa" }}
              >
                |
              </span>
              <Link style={linkStyle} className="nav-item" to="/add">
                <span className=" item">ADD PRODUCT</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:productId" element={<UpdateProduct />} />
        <Route path="/product/:prodId" element={<SingleProductWithRedux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
