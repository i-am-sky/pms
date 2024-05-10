import React from "react";
import { deleteProduct } from "../../services/productservices";

const DeleteProduct = (props) => {
  const deleteProductFn = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      deleteProduct(props.productId)
        .then((response) => {
          console.log("Response : ", response.data);
          console.log("delete successful");
          props.deleteStatus(true)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  let design = (
    <button className="btn btn-outline-danger" onClick={deleteProductFn}>
      DELETE
    </button>
  );
  return design;
};

export default DeleteProduct;
