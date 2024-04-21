/* import logo from './logo.svg'; */
import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Login from "./Components/Login";
import Signup from './Components/Signup';
import Products from './Components/Products';
import Inventory from './Components/Inventory';
import Salesanalytic from './Components/Salesanalytics';
import Orderstatus from './Components/Orderstatus';
import Dashboard from './Components/Dashboard';
import Categories from './Subcomponents/Categories'
import InventoryTable from './Subcomponents/InventoryTable';
import DailySalesDetails from './Subcomponents/DailySalesDetails';
import TableContainer from './Subcomponents/TableContainer';

 

function App() {
  return (
    <div >
     {/*  <Routes>
                     <Route path="/login" element={<Login />} /> 
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/products" element={<Products />} />
                    
                    <Route path="/inventory" element={<Inventory />} />
                     <Route path="/inventorytable" element={<InventoryTable />} />  

                      <Route path="/salesanalytics" element={<Salesanalytic />} />
                      <Route path="/dailysalesdetails" element={ <DailySalesDetails />} />
                      <Route path="/tablecontainer" element={ <TableContainer />} />                                
                    <Route path="/orderstatus" element={<Orderstatus /> }/>
                    <Route path="/dashboard" element={<Dashboard />} > </Route>


                    </Routes> */}
      
      
    </div>
  );
}

export default App;
