import React, { useEffect, useState } from "react";
import { getProduct, updateProduct } from "../../services/productservices";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const { productId } = useParams();

  const [pId, setPId] = useState(productId);
  const [pName, setpName] = useState("");
  const [pPrice, setPPrice] = useState("");
  const [pDesc, setpDesc] = useState("");
  const [pCode, setPCode] = useState("");
  const [pRelDate, setPRelDate] = useState("");
  const [pUrl, setPUrl] = useState("");
  const [pRating, setPRating] = useState("");

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

  const getOldProduct = () => {
    getProduct(productId)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOldProduct();
  }, []);

  let updatedProduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    updatedProduct = {
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
    const finalUpdatedProduct = Object.fromEntries(
      Object.entries(updatedProduct).filter(([key, value]) => value !== "")
    );
    console.table(finalUpdatedProduct);

    if (window.confirm("Do you want to update this product?")) {
      updateProduct(finalUpdatedProduct, productId)
        .then((response) => {
          console.log(response.data);
          window.alert("Product updated successfully");
          navigate(-1);
        })
        .catch((err) => {
          window.alert("Error while updating product");
          console.log(err);
        });
    }
  };

  const backBtn = {
    position: "absolute",
    top: "10px",
    left: "-20px",
    transform: "translateX(-50%)",
    width: 'fit-content',
    marginBottom: "50px",
    backgroundColor: '#ddd',
  }


  let design = (
    <div className="container m-5" style={divStyles}>
      <div>
      <button type="button" style={backBtn} className="btn" onClick={() => navigate(-1)} >BACK</button>
      <h1 className="text-center mb-5">UPDATE PRODUCT</h1>
      </div>
      <form action="" onSubmit={handleSubmit} className="mb-5">
        <div className="ff">
          <label htmlFor="product_name">PRODUCT ID</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product id"
            disabled
            value={productId}
            onChange={(e) => setPId(e.target.value)}
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT NAME</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product name"
            // value={oldData.product_name}
            onChange={(e) => setpName(e.target.value)}
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT PRICE</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product price"
            // value={oldData.price}
            onChange={(e) => setPPrice(e.target.value)}
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT DESCRIPTION</label>
          <textarea
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product description"
            // value={oldData.description}
            onChange={(e) => setpDesc(e.target.value)}
          ></textarea>
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT CODE</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product code"
            // value={oldData.product_code}
            onChange={(e) => setPCode(e.target.value)}
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT RELEASE DATE</label>
          <input
            type="date"
            className="form-control"
            id="product_name"
            placeholder="Enter product release date"
            // value={oldData.release_date}
            onChange={(e) => setPRelDate(e.target.value)}
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT URL</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product url"
            // value={oldData.image_url}
            onChange={(e) => setPUrl(e.target.value)}
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT RATING</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product rating"
            // value={oldData.star_rating}
            onChange={(e) => setPRating(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button className="btn btn-dark w-50 mt-2" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );

  return design;
}

export default UpdateProduct;
