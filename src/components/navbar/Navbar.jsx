import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AddProduct from "../add-product/AddProduct";
import Products from "../products/Products";
import UpdateProduct from "../update-product/UpdateProduct";
import SingleProduct from "../single-product/SingleProduct";

function Navbar() {

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    margin: '0 10px 0',
  }

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid p-2">
          <Link className="navbar-brand ps-2" to="/">
            Product Management System
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link  style={linkStyle} className="nav-item" to="/">
                Home
              </Link>
              <Link style={linkStyle} className="nav-item" to="/products">
                Products
              </Link>
              <Link  style={linkStyle} className="nav-item" to="/add">
                Add Product
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update/:productId" element={<UpdateProduct />} />
        <Route path="/product/:prodId" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navbar;
