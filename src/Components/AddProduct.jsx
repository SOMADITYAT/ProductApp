import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FunctionAddProduct } from "../Redux/Action";
import { useNavigate } from "react-router-dom";
import Image from '../assets/img.jpeg'

const AddProduct = () => {
  const [name, nameChnage] = useState("");
  const [description, descriptionChnage] = useState("");
  const [price, priceChnage] = useState("");
  const [category, categoryChnage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const productobj = { name, description, price, category };
    dispatch(FunctionAddProduct(productobj));
    navigate("/productlist");

    console.log(productobj);
  };
  return (
    <div >
      <form onSubmit={handleSubmit} className="w-100 vh-100">
        <div className="card w-50 vh-70">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add Product</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => nameChnage(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => descriptionChnage(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Price</label>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => priceChnage(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-group">
                <label>Category</label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => categoryChnage(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
     
    </div>
  );
};

export default AddProduct;
