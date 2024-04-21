import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import TableOrderBody from "../Subcomponents/TableOrderBody";

function Orderstatus() {
  const [order, setOrder] = useState([]);
  // console.log(order);

  const getOrder = async () => {
    try {
      const order = await axios.get("http://localhost:4000/api3/orderstatus");

      const apidata = order.data.data;

      setOrder(apidata);
    } catch (err) {
    console.log(err);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
      <h3>List of Orders</h3>

      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Type</th>
            <th>Quantity</th>
            <th>Name</th>
            <th>Shipping Address</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.map((tag, _id) => {
            return <TableOrderBody tag={tag} _id={_id} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default Orderstatus;
