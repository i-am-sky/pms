import React, { useState } from "react";
import { updateProduct } from "../../services/productservices";

function UpdateProduct(props) {
  const [pId, setPId] = useState(props.productId);
  const [pName, setpName] = useState("");
  const [pPrice, setPPrice] = useState(0);
  const [pDesc, setpDesc] = useState("");
  const [pCode, setPCode] = useState("");
  const [pRelDate, setPRelDate] = useState("");
  const [pUrl, setPUrl] = useState("");
  const [pRating, setPRating] = useState(0);

  const divStyles = {
    position: "absolute",
    top: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    textAlign: "left",
    marginBottom: "50px",
  };

  let updatedProductObj;

  const handleSubmit = (e) => {
    e.preventDefault();
    updatedProductObj = {
      product_id: pId,
      product_name: pName,
      price: pPrice,
      description: pDesc,
      product_code: pCode,
      release_date: pRelDate,
      image_url: pUrl,
      star_rating: pRating,
    };
    // window.alert("Product object created successfully");
    console.table(updatedProductObj);

    if (window.confirm("Do you want to update this product?")) {
      updateProduct(updatedProductObj, props.productId)
        .then((response) => {
          console.log(response.data);
          window.alert("Data updated successfully");
        })
        .catch((err) => {
          window.alert("Error while updating data");
          console.log(err);
        });
    }
  };

  let design = (
    <div className="container m-5" style={divStyles}>
      <h2 className="text-center mb-3">Update Product</h2>
      <form action="" onSubmit={handleSubmit} className="mb-5">
        <div className="ff">
          <label for="product_name">PRODUCT ID</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product id"
            disabled
            value={pId}
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
            value={pName}
            onChange={(e) => setpName(e.target.value)}
          />
        </div>

        <div className="ff">
          <label for="product_name">PRODUCT PRICE</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product price"
            value={pPrice}
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
            value={pDesc}
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
            value={pCode}
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
            value={pRelDate}
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
            value={pUrl}
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
            value={pRating}
            onChange={(e) => setPRating(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button className="btn btn-dark w-50 mt-2" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );

  return design;
}

export default UpdateProduct;
