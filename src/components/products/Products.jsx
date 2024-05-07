import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productservices";
import DeleteProduct from "../delete-product/DeleteProduct";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [requestStatus, setRequestStatus] = useState(false);
  const [selectState, setSelectState] = useState(2);

  const getData = () => {
    getProducts(selectState)
      .then((response) => {
        const respData = response.data;
        setProductData(respData);
        setErrMsg("");
        setRequestStatus(true);
      })
      .catch((err) => {
        setErrMsg(err.message);
        setProductData(undefined);
        setRequestStatus(true);
      });
  };

  useEffect(() => {
    getData();
  }, [selectState]);

  const selectHandler = (e) => {
    setSelectState(e.target.value);
  };

  const showProduct = () => {
    return (
      <>
        <button
          type="button"
          class="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target="#modelId"
        >
          Launch
        </button>

        <div
          class="modal fade"
          id="modelId"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Body</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
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
      <div className="container">
        <select onClick={selectHandler}>
          <option selected disabled value={selectState}>
            --sort--
          </option>
          <option value={2}>Sort By Name</option>
          <option value={3}>Sort By Price</option>
          <option value={8}>Sort By Rating</option>
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
              <tr key={product.id}>
                <td>
                  <a href="#" onClick={showProduct}>
                    <img src={product.image_url} alt="" width={100} />
                  </a>
                </td>
                <td>{product.product_name}</td>
                <td>{product.price}</td>
                <td>{product.star_rating}</td>
                <td>
                  <DeleteProduct productId={product.product_id} />
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
