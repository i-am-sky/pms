import React, { useState } from "react";
import { addProduct } from "../../services/productservices";
import "./addProduct.css";
import { Link, useNavigate } from "react-router-dom";

function AddProduct() {
  const [pId, setPId] = useState(0);
  const [pName, setpName] = useState("");
  const [pPrice, setPPrice] = useState(0);
  const [pDesc, setpDesc] = useState("");
  const [pCode, setPCode] = useState("");
  const [pRelDate, setPRelDate] = useState("");
  const [pUrl, setPUrl] = useState("");
  const [pRating, setPRating] = useState(0);

  const navigate = useNavigate();

  const divStyles = {
    position: "absolute",
    top: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    textAlign: "left",
    marginBottom: "50px",
  };

  let newProductObj;

  const handleSubmit = (e) => {
    e.preventDefault();
    newProductObj = {
      product_id: pId,
      product_name: pName,
      price: pPrice,
      description: pDesc,
      product_code: pCode,
      release_date: pRelDate,
      image_url: pUrl,
      star_rating: pRating,
    };
    // window.alert("Product object created successfully")
    console.table(newProductObj);

    if (window.confirm("do you want to add this product")) {
      addProduct(newProductObj)
        .then((response) => {
          window.alert("Product added successfully");
          console.log(response);
          navigate("/products");
        })
        .catch((err) => {
          window.alert("Error while adding product");
          console.log(err);
        });
    }
  };

  let design = (
    <div className="container m-5" style={divStyles}>
      <h1 className="text-center mb-5">ADD PRODUCT</h1>
      <form action="" onSubmit={handleSubmit} className="mb-5">
        <div className="ff">
          <label for="product_name">PRODUCT ID</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product id"
            // value={pId}
            onChange={(e) => setPId(e.target.value)}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT NAME</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product name"
            // value={pName}
            onChange={(e) => setpName(e.target.value)}
            onBlur={(e) => {
              e.target.value === "" ? (
                <span>Plsease Enter product name</span>
              ) : (
                <span></span>
              );
            }}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT PRICE</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product price"
            // value={pPrice}
            onChange={(e) => setPPrice(e.target.value)}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT DESCRIPTION</label>
          <textarea
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product description"
            // value={pDesc}
            onChange={(e) => setpDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT CODE</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product code"
            // value={pCode}
            onChange={(e) => setPCode(e.target.value)}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT RELEASE DATE</label>
          <input
            type="date"
            className="form-control"
            id="product_name"
            placeholder="Enter product release date"
            // value={pRelDate}
            onChange={(e) => setPRelDate(e.target.value)}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT URL</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product url"
            // value={pUrl}
            onChange={(e) => setPUrl(e.target.value)}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT RATING</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product rating"
            // value={pRating}
            onChange={(e) => setPRating(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-25 mx-3 mt-2" type="submit">
            SUBMIT
          </button>
          <Link to={`/`}>
            <button className="btn btn-danger w-25 mx-3 mt-2" type="button">
              CANCEL
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
  return design;
}

export default AddProduct;
