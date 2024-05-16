import React, { useEffect, useState } from "react";
import { getProduct } from "../../services/productservices";
import "./singleProduct.css";
// import UpdateProduct from "../update-product/UpdateProduct";
import { Link, useNavigate, useParams } from "react-router-dom";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [errMsg, setErrMsg] = useState("");
  const [respStatus, setRespStatus] = useState(false);

  const { prodId } = useParams();

  const navigate = useNavigate()

  const getData = () => {
    getProduct(prodId)
      .then((response) => {
        const data = response.data;
        console.log(response);
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
        <div className="tbl-div">
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
                <td>$&nbsp;{product.price}</td>
              </tr>
              <tr>
                <td>PRODUCT RATING: </td>
                <td>{product.star_rating}</td>
              </tr>
              <tr>
                <td>
                    <button className="btn btn-primary" onClick={() => navigate(-1)} >BACK</button>
                </td>
                <td>
                  <Link to={`/update/${product.product_id}`}>
                    <button className="btn btn-primary">EDIT</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pe-5 img-div">
          <img className="product-image" src={product.image_url} />
        </div>
      </div>
    );
  }
  return design;
}

export default SingleProduct;
