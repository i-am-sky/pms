import React, { useState } from "react";
import { deleteProduct } from "../../services/productservices";

const DeleteProduct = (props) => {

  const deleteProductFn = () => {
    let q = window.confirm("Are you sure you want to delete");
    if(q==true) {
      deleteProduct(props.productId)
        .then((response) => {
          console.log("Response : ",response.data);
          console.log("delete successful");
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
