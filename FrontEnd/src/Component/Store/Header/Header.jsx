import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = (props) => {
  return (
    <div className="w-full bg-gray-200 flex flex-col items-center justify-center">
      {/* Top Header */}
      <div className=" w-full flex justify-center  border-b-2 border-gray-300">
        <div className="container h-8 flex justify-between items-center">
          {/* Social */}
          <div className="space-x-2">
            <i class="fa-brands fa-facebook-f hover:text-blue-600">
              <span className="ml-2 cursor-pointer">10K Followers</span>
            </i>
            <i class="fa-brands fa-instagram hover:text-red-600">
              <span className="ml-2 cursor-pointer">23K Followers</span>
            </i>
          </div>
          <div className="flex space-x-4">
            <div className="language">
              English <i class="fa-solid fa-chevron-down text-xs"></i>
            </div>
            <div className="currency">
              USD <i class="fa-solid fa-chevron-down text-xs"></i>
            </div>
          </div>
          {/* Language */}
        </div>
      </div>
      {/* Navbar */}
      <div className="container h-16  flex justify-center items-center">
        {/*Ham */}

        {/*Logo */}
        <div className="w-1/3 flex items-center ">
          <span className="text-5xl font-bold">HANDO</span>
        </div>

        <div className=" w-1/3 flex items-center justify-center text-2xl">
          <ul className="nav-item flex text-base font-semibold space-x-7">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`shop`}>Shop</Link>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        {/*nav button */}
        <div className="w-1/3 flex items-center justify-end">
          <div className="search relative">
            <input type="text" className="w-48 h-8 px-8" placeholder="Search" />
            <span className="absolute top-1 left-2">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div className="text-xl ml-2 space-x-2">
            <i class="fa-regular fa-bell"></i>
            <i class="fa-solid fa-gear"></i>
            <button>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
