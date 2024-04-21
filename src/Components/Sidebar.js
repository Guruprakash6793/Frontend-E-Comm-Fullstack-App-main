import React from 'react';
 import '../Stylesheet/side.css' 
import { NavLink,Outlet} from 'react-router-dom';
import { FaClipboardList,FaCoins,FaCopy,FaChartBar,FaDatabase} from "react-icons/fa6";






function Sidebar() {
    
    
  return (
    <>
          <div className="sidebar">

            <nav>
                
                <ul>
                <li>
                        <NavLink to="/"><FaClipboardList /> <span id="menu">Dashboard</span>  </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products"><FaCoins /><span id="menu">  Products</span>  </NavLink>
                    </li>
                    <li> 
                        <NavLink to="/inventory"><FaDatabase /> <span id="menu">  Inventory manage</span> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/salesanalytics"><FaChartBar /> <span id="menu">  Sales analytics</span> </NavLink>
                    </li>
                    <li>
                        <NavLink to="/orderstatus"><FaCopy /><span id="menu">   Order Status</span> </NavLink>
                    </li>
                    
            </ul>
        </nav>

        <Outlet />
    </div>
    </>
  )
}

export default Sidebar;


