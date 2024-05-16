import React, { useEffect, useReducer } from "react";
import { getProduct } from "../../services/productservices";
import "./singleProduct.css";
import { Link, useNavigate, useParams } from "react-router-dom";

function SingleProductWithRedux() {
  const { prodId } = useParams();
  const navigate = useNavigate();

  const initialState = {
    product: {},
    errMsg: "",
    respStatus: false,
  };

  const reducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
      case "SEND-REQUEST":
        newState = {
          ...state,
          respStatus: false,
        };
        break;
      case "GET-DATA":
        newState = {
          product: { ...action.payload },
          errMsg: "",
          respStatus: true,
        };
        break;
      case "FAILED-RESPONSE":
        newState = {
          errMsg: action.payload,
          product: {},
          respStatus: true,
        };
        break;
      default: {
        newState = {
          ...state,
        };
      }
    }
    return newState;
  };

  const [updatedState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SEND-REQUEST" });
    getProduct(prodId)
      .then((res) => dispatch({ type: "GET-DATA", payload: res.data }))
      .catch((err) =>
        dispatch({ type: "FAILED-RESPONSE", payload: err.message })
      );
  }, [prodId]);

  const {product, errMsg, respStatus} = updatedState;

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
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate(-1)}
                  >
                    BACK
                  </button>
                </td>
                <td>
                  <Link to={`/update/${updatedState.product.product_id}`}>
                    <button className="btn btn-primary">EDIT</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="pe-5 img-div">
          <img
            className="product-image"
            src={updatedState.product.image_url}
            alt="product"
          />
        </div>
      </div>
    );
  }

  return design;
}

export default SingleProductWithRedux;
