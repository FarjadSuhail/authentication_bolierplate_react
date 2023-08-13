import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
}from "react-icons/fa";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
// import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
// import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<AiOutlineAppstore/>
        },
        {
            path:"/about",
            name:"About",
            icon:<BsPerson/>
        },
        {
            path:"/analytics",
            name:"Analytics",
            icon:<HiOutlineDatabase/>
        },
        {
            path:"/comment",
            name:"Comment",
            icon:<MdMenu/>
        },
        {
            path:"/product",
            name:"Product",
            icon:<RiBuilding3Line/>
        },
        {
            path:"/productList",
            name:"Product List",
            icon:<MdMenu/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "315px" : "60px"}} className="sidebar">
               <div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   {/* <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div> */}
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
<div className="top_section">
                   {/* <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;