import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productservices";
import DeleteProduct from "../delete-product/DeleteProduct";
import { Link } from "react-router-dom";
// import SingleProduct from "../single-product/SingleProduct";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);
  const [selectState, setSelectState] = useState(2);

  const [isDeleted, setIsDeleted] = useState(0);

  const getData = () => {
    getProducts(selectState)
      .then((response) => {
        const respData = response.data;
        setProductData(respData);
        setErrMsg("");
        setRequestStatus(true);
        console.table(respData)
      })
      .catch((err) => {
        setErrMsg(err.message);
        setProductData(undefined);
        setRequestStatus(true);
      });
  };

  const handleDeleteStatus = (dataFromDelete) => {
    setIsDeleted(dataFromDelete);
  };

  useEffect(() => {
    getData();
  }, [selectState, isDeleted]);

  const selectHandler = (e) => {
    setSelectState(e.target.value);
  };

  let design;
  if (!requestStatus) {
    design = <span>Loading Data...</span>;
  } else if (errMsg !== "") {
    design = <span>{errMsg}</span>;
  } else if (!productData || productData.length === 0) {
    design = <span>NO RECORDS FOUND</span>;
  } else {
    design = (
      <div className="container" style={{ minWidth: "600px", width: "80%" }}>
        <select
          onClick={selectHandler}
          style={{ width: "10rem", textAlign: "center" }}
        >
          <option selected disabled value={selectState}>
            SORT BY --
          </option>
          <option value={2}>SORT BY NAME</option>
          <option value={3}>SORT BY PRICE</option>
          <option value={8}>SORT BY RATING</option>
        </select>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>PRICE</th>
              <th>RATING</th>
              <th>DELETE</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.product_id}  style={{dislpay:'flex'}}>
                <td >
                  <Link to={`/product/${product.product_id}`} state={product}>
                    <img src={product.image_url} width={100} />
                  </Link>
                </td>
                <td style={{alignSelf:'center'}}>{product.product_name}</td>
                <td>$&nbsp;{product.price}</td>
                <td>{product.star_rating}</td>
                <td>
                  <DeleteProduct
                    deleteStatus={handleDeleteStatus}
                    productId={product.product_id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return design;
};

export default Products;
