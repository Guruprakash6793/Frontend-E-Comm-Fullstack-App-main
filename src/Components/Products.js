import React, { useState, useEffect } from "react";
/* import { useNavigate } from 'react-router-dom'; */
import {NavLink} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "../Stylesheet/product.css";
import { AiOutlinePlus } from "react-icons/ai";
//import Card from "../Subcomponents/Card";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getproduct = async () => {
    const products = await axios.get("http://Localhost:4000/api1/productlists");
    const apidata = products.data.data;
    setProducts(apidata);
  };
  useEffect(() => {
    getproduct();
  }, []);

  return (
    <>
      <h3>Products List</h3>
      
      <button className="backto"><NavLink to="/productform"  style={{color:"white"}}><span className="plus"><AiOutlinePlus /></span></NavLink></button>
      
      <div className="container">
            <div className="product_list">
            {products.map((product) => (
              <div key={product._id}>
                <div className="product_item">
                  <span className="product_title">
                    <b>{product.title}</b>
                  </span>
                  <br />
                  <a className="product_img" href={"#" + product._id}>
                    <img
                      src={product.image}
                      alt={product.title}
                      width="250"
                      height="250"
                    ></img>
                  </a>
                  <p className="product_desc">
                    <b>{product.description}</b>
                  </p>
                
                </div>
              </div>
            ))}
         </div>
      </div>
    </>
  );
};

export default Products;
