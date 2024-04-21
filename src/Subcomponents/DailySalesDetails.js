import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";

function DailySalesDetails() {
  const [data, setData] = useState({
    date: "",
    salesrevenue: "",
    costofgoods: "",
  });
  const [gross, setGross] = useState("");

  const handle = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };
  useEffect(() => {
    setGross(data.salesrevenue - data.costofgoods);
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.date === "") {
      alert("Pls enter date");
    } else if (data.salesrevenue === "") {
      alert("Pls enter salesevenue");
    } else if (data.costofgoods === "") {
      alert("Pls enter costofgoods");
    } else {
      try {
        await axios.post("http://localhost:4000/api4/salesanalytics", {
          date: data.date,
          salesrevenue: data.salesrevenue,
          costofgoods: data.costofgoods,
          grossprofit: gross,
        });

        alert("Sales Details Saved Successfully");
        setData({ date: "", salesrevenue: "", costofgoods: "" });
        setGross("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setData({ date: "", salesrevenue: "", costofgoods: "" });
    setGross("");
  };

  return (
    <section
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form className="form">
        <fieldset
          style={{
            width: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
            overflow: "auto",
          }}
        >
          <legend style={{ fontSize: "25px" }}>Sales Details</legend>
          <div
            style={{
              width: "80%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <NavLink to="/salesanalytics">
              <button className="btn btn-warning"><FaAnglesLeft /></button>
            </NavLink>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "80%",
            }}
          >
            <label style={{ fontSize: "18px", fontWeight: "normal" }}>
              Date
            </label>
            <input
              style={{
                padding: "5px",
                borderRadius: "5px",
                outline: "none",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                border: "2px solid rgba(0,0,0,0.2)",
              }}
              type="date"
              id="date"
              value={data.date}
              onChange={handle}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "80%",
            }}
          >
            <label style={{ fontSize: "18px", fontWeight: "normal" }}>
              Profit of Sales
            </label>
            <input
              style={{
                padding: "5px",
                borderRadius: "5px",
                outline: "none",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                border: "2px solid rgba(0,0,0,0.2)",
              }}
              type="number"
              id="salesrevenue"
              value={data.salesrevenue}
              onChange={handle}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "80%",
            }}
          >
            <label style={{ fontSize: "18px", fontWeight: "normal" }}>
              Cost of Goods
            </label>
            <input
              style={{
                padding: "5px",
                borderRadius: "5px",
                outline: "none",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                border: "2px solid rgba(0,0,0,0.2)",
              }}
              type="number"
              id="costofgoods"
              value={data.costofgoods}
              onChange={handle}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "80%",
            }}
          >
            <label style={{ fontSize: "18px", fontWeight: "normal" }}>
              Gross Profit
            </label>
            <input
              style={{
                padding: "5px",
                borderRadius: "5px",
                outline: "none",
                boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                border: "2px solid rgba(0,0,0,0.2)",
              }}
              type="number"
              id="grossprofit"
              disabled
              value={gross}
            />
          </div>

          <div
            style={{
              margin: "5px",
              display: "flex",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <button
              className="btn btn-primary"
              type="submit"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
            <button
              onClick={handleClear}
              className="btn btn-secondary"
              style={{
                padding: "5px",
                width: "35px",
              }}
            >
              {
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-2 h-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              }
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}

export default DailySalesDetails;
