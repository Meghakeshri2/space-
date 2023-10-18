import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/home/tspl/Documents/space/src/image/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css"
const Navbar = () => {
  const [menuopen, setMenuopen] = useState(false);

  return (
    <header className="top-0 left-0 w-full h-24 px-5 box-border absolute  ">
      <nav className=" flex items-center justify-between sm:sticky top-0 ">
        <div className="logo_home ">
          <Link to="/">
            <img src={logo} alt="image" className="lg:m-4 mt-2" />
          </Link>
        </div>
        <ul
          className={`${menuopen? "right-[20] opacity-100  ": "right-[-282px]  opacity:0 hidenav sm:opacity-100 "} custom-css transiton-width  w-3/4 md:w-3/4 lg:w-3/5 flex-1 h-screen  absolute sm:static z-10 top-0  right-0  text-gray-200   sm:backdrop-filter-none   sm:h-16 flex flex-col sm:flex-row justify-center sm:p-5 xl:mt-6 md:mb-1 xl:mb-6 md:ml-28 xl:ml-96 mr-0  gap-2.5 sm:justify-between sm:text-center mainNav`}
        >
          <Link to="/" className="cool-link">
            <li className=" text-lg litop li1   ">
              <span className="md:invisible lg:visible ">00</span> HOME</li>
          </Link>
          <NavLink to="/destination" className="cool-link">
            <li className="  text-lg litop li2">
              <span className="md:invisible lg:visible">01</span> DESTINATION
            </li>
          </NavLink>
          <NavLink to="/crew" className="cool-link">
            <li className=" text-lg litop li3 ">
              <span className="md:invisible lg:visible">02</span> CREW
            </li>
          </NavLink>
          <NavLink to="/technology" className="cool-link">
            <li className="  text-lg  litop li4">
              <span className="md:invisible lg:visible">03</span> TECHNOLOGY
            </li>
          </NavLink>
        </ul>
        <div
          className=" z-20  sm:hidden  cursor-pointer  "
          onClick={() => setMenuopen(!menuopen)}
        >
          <FontAwesomeIcon icon={faBars} className="text-white" />
        </div>

       
      </nav>
    </header>
  );
};

export default Navbar;
