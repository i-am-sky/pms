import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/productservices";
import "./singleProduct.css";
import UpdateProduct from "../update-product/UpdateProduct";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const [respStatus, setRespStatus] = useState(false);

  const getData = () => {
    getProduct(10)
      .then((response) => {
        const data = response.data;
        setProduct(data);
        setErrMsg("");
        setRespStatus(true);
      })
      .catch((err) => {
        setErrMsg(err);
        setProduct(undefined);
        setRespStatus(true);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const loadUpdateComp = () => {
    <UpdateProduct productId={product.product_id}/> 
  }

  let design;
  if (!respStatus) {
    design = <span>Loading...</span>;
  } else if (errMsg !== "") {
    design = <span>{errMsg}</span>;
  } else if (!product) {
    design = <span>NO PRODUCT FOUND</span>;
  } else {
    design = (
      <div className="product-display">
        <table className="table table-hover">
          <tbody>
            <tr>
              <td>PRODUCT NAME: </td>
              <td>{product.product_name}</td>
            </tr>
            <tr>
              <td>DESCRIPTION: </td>
              <td>{product.description}</td>
            </tr>
            <tr>
              <td>PRODUCT CODE: </td>
              <td>{product.product_code}</td>
            </tr>
            <tr>
              <td>PRODUCT AVAILABILITY: </td>
              <td>{product.release_date}</td>
            </tr>
            <tr>
              <td>PRICE: </td>
              <td>{product.price}</td>
            </tr>
            <tr>
              <td>PRODUCT RATING: </td>
              <td>{product.star_rating}</td>
            </tr>
            <tr>
              <td><button className="btn btn-dark">Back</button> </td>
              <td><button className="btn btn-dark" onClick={loadUpdateComp}>Edit</button> </td>
            </tr>
          </tbody>
        </table>
        <div className="pe-5">
          <img src={product.image_url} width={350} />
        </div>
      </div>
    );
  }
  return design;
}

export default SingleProduct;
