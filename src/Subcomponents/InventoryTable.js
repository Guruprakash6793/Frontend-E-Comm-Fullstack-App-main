import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAnglesLeft } from "react-icons/fa6";
import InventoryTablebody from "./InventoryTablebody";
import { NavLink } from "react-router-dom";

function InventoryTable() {
  const [datas, setDatas] = useState([]);
  // console.log(datas);

  async function getData() {
    try {
      const datas = await axios.get("http://localhost:4000/api2/inventory");
      const apidata = await datas.data.data;
      setDatas(apidata);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <h3> Invents Reports</h3>
      <NavLink to="/inventory" className="btn btn-success">
      <FaAnglesLeft />{" "}
      </NavLink>
      <br /> <br />
      <table className="table table-striped table-responsive-sm">
        <thead>
          <tr>
            <th className="bg-info">Date</th>
            <th className="bg-info">Category</th>
            <th className="bg-info">Quantity</th>
            <th className="bg-info">Purchase Price</th>
            <th className="bg-info">Total Amount</th>
            <th className="bg-info">Stocks</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, _id) => {
            return <InventoryTablebody data={data} id={_id} key={_id} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default InventoryTable;
