import React, { useState } from "react";
import { addProduct } from "../../services/productservices";
import "./addProduct.css";
import { Link, useNavigate } from "react-router-dom";
import {
  descriptionValidation,
  nameValidation,
  priceValidation,
  productCodeValidation,
  ratingValidation,
  releaseDateValidation,
  urlValidation,
} from "../../validations/customValidations";

function AddProduct() {
  const [pId, setPId] = useState(0);
  const [pName, setpName] = useState("");
  const [pPrice, setPPrice] = useState(0);
  const [pDesc, setpDesc] = useState("");
  const [pCode, setPCode] = useState("");
  const [pRelDate, setPRelDate] = useState("");
  const [pUrl, setPUrl] = useState("");
  const [pRating, setPRating] = useState(0);
  const [isFormValid, setIsFormValid] = useState(false);

  const [errors, setErrors] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    rDate: "",
    code: "",
    url: "",
    rating: "",
  });

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

  const formValidation = () => {
    setErrors((currState) => {
      return {
        ...currState,
        id: "",
        name: nameValidation(pName),
        price: priceValidation(pPrice),
        description: descriptionValidation(pDesc),
        rDate: releaseDateValidation(pRelDate),
        code: productCodeValidation(pCode),
        url: urlValidation(pUrl),
        rating: ratingValidation(pRating),
      };
    });

    setIsFormValid(
      pId &&
        pName &&
        pPrice &&
        pDesc &&
        pCode &&
        pRelDate &&
        pUrl &&
        pRating &&
        true
    );

    console.log("is form valid: ", isFormValid);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation();

    if (isFormValid) {
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

      if (window.confirm("do you want to add this product")) {
        addProduct(newProductObj)
          .then((response) => {
            window.alert("Product added successfully");
            navigate("/products");
          })
          .catch((err) => {
            window.alert("Error while adding product");
          });
      }
    }
  };

  let design = (
    <div className="container m-5" style={divStyles}>
      <h1 className="text-center mb-5">ADD PRODUCT</h1>
      <form action="" onSubmit={handleSubmit} className="mb-5">
        <div className="ff">
          <label for="product_id">PRODUCT ID</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product id"
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
            onChange={(e) => setpName(e.target.value)}
          />
        </div>
        <span className="text-danger">{nameValidation(pName)}</span>

        <div className="ff">
          <label for="product_name">PRODUCT PRICE</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter product price"
            onChange={(e) => setPPrice(e.target.value)}
          />
        </div>
        <span className="text-danger">{priceValidation(pPrice)}</span>


        <div className="ff">
          <label for="product_name">PRODUCT DESCRIPTION</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter product description"
            onChange={(e) => setpDesc(e.target.value)}
          ></textarea>
        </div>
        <span className="text-danger">{descriptionValidation(pDesc)}</span>


        <div className="ff">
          <label for="product_name">PRODUCT CODE</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product code"
            onChange={(e) => setPCode(e.target.value)}
          />
        </div>
        <span className="text-danger">{productCodeValidation(pCode)}</span>


        <div className="ff">
          <label for="product_name">PRODUCT RELEASE DATE</label>
          <input
            type="date"
            className="form-control"
            id="product_name"
            placeholder="Enter product release date"
            onChange={(e) => setPRelDate(e.target.value)}
          />
        </div>
        <span className="text-danger">{releaseDateValidation(pRelDate)}</span>


        <div className="ff">
          <label for="product_name">PRODUCT URL</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product url"
            onChange={(e) => setPUrl(e.target.value)}
          />
        </div>
        <span className="text-danger">{urlValidation(pUrl)}</span>


        <div className="ff">
          <label for="product_name">PRODUCT RATING</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product rating"
            onChange={(e) => setPRating(e.target.value)}
          />
        </div>
        <span className="text-danger">{" "}{ratingValidation(pRating)}{" "}</span>


        <div className="text-center">
          <button className="btn btn-primary w-25 mx-3 mt-2" type="submit">
            SUBMIT
          </button>
          <Link to={-1}>
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
