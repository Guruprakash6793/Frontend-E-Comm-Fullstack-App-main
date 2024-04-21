import React, { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaGrinAlt,FaBuffer } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import axios from "axios";
import Categories from "../Subcomponents/Categories";
import ProfitChart from "../Subcomponents/ProfitChart";


function Dashboard() {
  const [revenues, setRevenue] = useState([]);
  const [details, setDetails] = useState(false);
  const [stock,setStocks] = useState([])

  const getRevenue = async () => {
    try {
      const revenues = await axios.get(
        "http://localhost:4000/revenue/Dashboard"
      );
      const profit = revenues.data.data;
      const apidata = profit[profit.length - 1];
      const dayProfit = apidata.grossprofit;
     setRevenue(dayProfit);
    
    } catch (err) {
      console.log(err);
    }
  };  
  const getStocks = async()=>{
    try{
     const result = await axios.get("http://localhost:4000/api2/inventory")
      const stockData=result.data.data
      const limitStocks = stockData[stockData.length-1]
      const showStocks = limitStocks.stocks
      setStocks(showStocks)
      if(stock < 50){
        alert("Remainder : Stocks are too low.")
      }
       }catch(err){console.log(err)}

     }
  useEffect(() => {
    getRevenue();
    getStocks();
  }, []);

  const handleClick = () => {
    setDetails(true);
  };

  return (
    <>
      {/* <h5>Dashboard</h5> */}

      <div className="row">
        <div className="col">
          <div className="card bg-success text-light">
            <div className="card-header">
              <h5 className="text-center fs-5">
                <BiCategory /> Category
              </h5>
            </div>

            <div className="card-body">
              <div className=" text-center">
                <button
                  className="btn btn-success"
                  onMouseLeave={() => {
                    setDetails(false);
                  }}
                  onMouseOver={handleClick}
                >
                  Click to Know
                </button>
                {details ? <Categories /> : null}
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card bg-danger text-light">
            <div className="card-header">
              <h5 className="text-center fs-5">
                <GrDocumentPerformance /> Revenue
              </h5>
            </div>
            <div className="card-body">
              <p>
                Today profit is
                <span style={{ color: "yellow", display: "block" }}>
                  <u>
                    <b> {revenues}</b>
                  </u>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-warning text-light">
            <div className="card-header">
              <h5 className="text-center fs-5">
                <FaBuffer  /> Stocks
              </h5>
            </div>
            <div className="card-body">
              <p className="text-center">{stock}</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card bg-secondary text-light">
            <div className="card-header">
              <h5 className="text-center fs-5">
                <FaGrinAlt /> Customers
              </h5>
            </div>
            <div className="card-body">
              <p className="text-center">10000</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col">
          <h5>Day profit Chart</h5>
          <ProfitChart />
        </div>
      </div>
      
    </>
  );
}

export default Dashboard;
