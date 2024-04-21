import React, { useState, useEffect } from "react";
import axios from "axios";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { NavLink } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";

export default function TableContainer() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const sales = await axios.get(
        "http://localhost:4000/api4/salesanalytics"
      );
      const apidata = sales.data.data;
      setSales(apidata);
    };

    getData();
  }, []);

  // console.log(sales);
  return (
    <>
      <h3>Sales Report</h3>
      <NavLink to="/salesanalytics">
        <button className="btn btn-danger"><FaAnglesLeft /></button>
      </NavLink>
      <br />
      <br />
      <table className="table table-responsive-sm table-striped">
        <TableHead />
        <tbody>
          {sales.map((sale, _id) => (
            <TableRow data={sale} id={_id} key={_id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

/* export default TableContainer */
