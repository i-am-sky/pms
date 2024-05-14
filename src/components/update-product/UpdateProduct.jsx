import React, { useEffect, useState } from "react";
import { getProduct, updateProduct } from "../../services/productservices";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {

  const { productId } = useParams();

  const [product, setProduct] = useState({
    product_id: productId,
    product_name: "",
    price: "",
    description: "",
    product_code: "",
    release_date: "",
    image_url: "",
    star_rating: "",
  });

  const navigate = useNavigate();


  const getOldProduct = () => {
    getProduct(productId)
      .then((res) => {
        setProduct({...res.data})
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOldProduct();
  }, []);

  const divStyles = {
    position: "absolute",
    top: "80px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "500px",
    textAlign: "left",
    marginBottom: "50px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredUpdatedProduct = Object.fromEntries(
      Object.entries(product).filter(([key, value]) => value !== "")
    );
    console.table(filteredUpdatedProduct);

    if (window.confirm("Do you want to update this product?")) {
      updateProduct(filteredUpdatedProduct, productId)
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
    width: "fit-content",
    marginBottom: "50px",
    backgroundColor: "#ddd",
  };

  let design = (
    <div className="container m-5" style={divStyles}>
      <div>
        <button
          type="button"
          style={backBtn}
          className="btn btn-light"
          onClick={() => navigate(-1)}
        >
          BACK
        </button>
        <h1 className="text-center mb-5">UPDATE PRODUCT</h1>
      </div>
      <form action="" onSubmit={handleSubmit} className="mb-5">
        <div className="ff">
          <label htmlFor="product_id">PRODUCT ID</label>
          <input
            type="text"
            className="form-control"
            id="product_id"
            placeholder="Enter product id"
            disabled
            value={productId}
            // onChange={(e) => setPId(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  product_id: e.target.value,
                }
              }
            ) }
          />
        </div>

        <div className="ff">
          <label htmlFor="product_name">PRODUCT NAME</label>
          <input
            type="text"
            className="form-control"
            id="product_name"
            placeholder="Enter product name"
            value={product.product_name}
            // onChange={(e) => setpName(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  product_name: e.target.value,
                }
              }
            ) }
          />
        </div>

        <div className="ff">
          <label htmlFor="price">PRODUCT PRICE</label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter product price"
            value={product.price}
            // onChange={(e) => setPPrice(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  price: e.target.value,
                }
              }
            ) }
          />
        </div>

        <div className="ff">
          <label htmlFor="description">PRODUCT DESCRIPTION</label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter product description"
            value={product.description}
            // onChange={(e) => setpDesc(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  description: e.target.value,
                }
              }
            ) }
          ></textarea>
        </div>

        <div className="ff">
          <label htmlFor="product_code">PRODUCT CODE</label>
          <input
            type="text"
            className="form-control"
            id="product_code"
            placeholder="Enter product code"
            value={product.product_code}
            // onChange={(e) => setPCode(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  product_code: e.target.value,
                }
              }
            ) }
          />
        </div>

        <div className="ff">
          <label htmlFor="release_date">PRODUCT RELEASE DATE</label>
          <input
            type="date"
            className="form-control"
            id="release_date"
            placeholder="Enter product release date"
            value={product.release_date}
            // onChange={(e) => setPRelDate(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  release_date: e.target.value,
                }
              }
            ) }
          />
        </div>

        <div className="ff">
          <label htmlFor="image_url">PRODUCT URL</label>
          <input
            type="text"
            className="form-control"
            id="image_url"
            placeholder="Enter product url"
            value={product.image_url}
            // onChange={(e) => setPUrl(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  image_url: e.target.value,
                }
              }
            ) }
          />
        </div>

        <div className="ff">
          <label htmlFor="star_rating">PRODUCT RATING</label>
          <input
            type="text"
            className="form-control"
            id="star_rating"
            placeholder="Enter product rating"
            value={product.star_rating}
            // onChange={(e) => setPRating(e.target.value)}
            onChange={ e => setProduct(
              (oldState) => {
                return {
                  ...oldState,
                  star_rating: e.target.value,
                }
              }
            ) }
            
          />
        </div>

        <div className="text-center">
          <button className="btn btn-primary w-50 mt-2" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );

  return design;
}

export default UpdateProduct;
