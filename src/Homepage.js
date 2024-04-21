import React from 'react'
import Sidebar from './Components/Sidebar'
import './Stylesheet/side.css';
import { Routes,Route } from 'react-router-dom';
import Products from './Components/Products';
import Inventory from './Components/Inventory';
import Salesanalytic from './Components/Salesanalytics';
import Orderstatus from './Components/Orderstatus';

 
function Homepage() {
  return (
    <>
    <div>
    <Sidebar />
        <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/sales" element={<Salesanalytic />} />
            <Route path="/orderstatus" element={<Orderstatus /> }/>
        </Routes>
        
    </div>
        

    </>
  )
}

export default Homepage