import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Inventory = () => {
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [purchaseprice, setPurchaseprice] = useState("");
  const [totalamount, setTotalAmount] = useState("");
  const [stocks, setStocks] = useState("");

  useEffect(() => {
    setTotalAmount(quantity * purchaseprice);
  }, [quantity, purchaseprice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (date === "") {
      alert("pls enter date");
    } else if (category === "") {
      alert("pls enter category");
    } else if (quantity === "") {
      alert("pls enter quantity");
    } else if (purchaseprice === "") {
      alert("pls enter purchaseprice");
    } else if (stocks === "") {
      alert("pls enter stocks");
    } else {
      try {
        await axios.post("http://localhost:4000/api2/inventory", {
          date,
          category,
          quantity,
          purchaseprice,
          totalamount,
          stocks,
        });
        alert("inventry added successfully");
        setDate("");
        setCategory("");
        setQuantity("");
        setPurchaseprice("");
        setStocks("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <section>
      <form className="invent_form" onSubmit={handleSubmit}>
        <h3>Managing Invents</h3>
        <label>Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />

        <label>Category</label>
        <input
          type="text"
          value={category}
          id="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <br />
        <br />

        <label> Quantity</label>
        <input
          type="number"
          value={quantity}
          id="quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <br />
        <br />
        <label> Purchase Price</label>
        <input
          type="number"
          value={purchaseprice}
          id="purchaseprice"
          onChange={(e) => setPurchaseprice(e.target.value)}
        />
        <br />
        <br />
        <label> Total Amount</label>
        <input
          type="number"
          name="totalamount"
          id="totalamount"
          value={totalamount}
          disabled
        />
        <br />
        <br />
        <label> Stocks</label>
        <input
          type="number"
          value={stocks}
          id="stock"
          onChange={(e) => setStocks(e.target.value)}
        />
        <br />
        <br />

        <button className=" btn btn-success" type="submit ">
          Add
        </button>
        <h4>
        {" "}
        <NavLink to="/inventorytable">Report of Stock </NavLink>
      </h4>
      </form>
     
    </section>
  );
};

export default Inventory;
