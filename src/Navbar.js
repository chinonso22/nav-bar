
// import React from 'react'
// import "./Navbar.css"

// function Navbar() {
//   return (
//     <div>
//     <nav className="navigation">
//     <a href="/" className="brand-name">
//       MacroSoft
//     </a>
//     <button className="hamburger">
//       {/* icon from heroicons.com */}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-5 w-5"
//         viewBox="0 0 20 20"
//         fill="white"
//       >
//         <path
//           fillRule="evenodd"
//           d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//           clipRule="evenodd"
//         />
//       </svg>
//     </button>
//     <div
//       className="navigation-menu">
//       <ul>
//         <li>
//           <a href="/home">Home</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//         <li>
//           <a href="/contact">Contact</a>
//         </li>
//       </ul>
//     </div>
//     </nav>
//     </div>
//   )
// }

// export default Navbar

import { NavLink, Outlet } from "react-router-dom";
import React,{useState} from 'react';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
	const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);
    setResponsiveclose(isResponsiveclose === false ? true : false);
  };
  let boxClass = ["nav__container"];
  if(isMenu) {
    boxClass.push('responsive__nav__show');
  }else{
    boxClass.push('');
  }
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };
  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }
  return (
  <div className='nav'>
	  {isResponsiveclose === true ? <> 
      <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
    </> : <> 
      <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
    </>}
    <ul className={boxClass.join(' ')} >
    <div className="img-ctn">     <img src={require("../src/imagess/logo.png")}></img></div>
<div className="nav_links">
      {/* Approach #1 --- Active  */}
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/">About</NavLink></li>

      {/* Approach #2 --- Active  */}
      <li>
        <NavLink onClick={toggleClass} style={({ isActive }) => {
          return { 
            color: isActive ? "#ffe500" : ""
          };
        }} to="/Home">What We Do</NavLink>
      </li>
      <li onClick={toggleSubmenu} className="sub__menus__arrows" id="drop-dnw"><NavLink className={({ isActive }) => isActive ? "active" : ""} to="/user">Solutions <FiChevronDown /> </NavLink>
        <ul className={boxClassSubMenu.join(' ')} > 
          <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/user">Solution 1</NavLink></li>
          <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/user/admin">Solution2</NavLink></li>
        </ul>
      </li>
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/invoice">Products</NavLink></li>
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/object_route"> Cloud Services </NavLink></li>
      <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/career"> Careers </NavLink></li>
      <li id="contactUs"><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/contact"> Contact Us </NavLink></li>

      <Outlet />
</div>
    </ul>
  </div>
  );
};

export default Navbar;
