/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link, Outlet } from "react-router-dom";

import PersonIcon from "@mui/icons-material/Person";

import "./style.css";

const Sidebar = () => {
  return (
    <>
      <section className="sidebar w-72 bg-slate-800 h-screen">
        <div className="logo w-full h-16 py-4 flex justify-center border-b border-slate-500">
          <span className="text-xl font-bold text-white">Admin</span>
        </div>
        <div className="sidebar-content p-4 pl-6 text-base ">
          <ul>
            <li>
              <Link to="/admin">
                <i class="fa-solid fa-chart-line"></i>
                <span>Dashboard</span>
              </Link>
            </li>
          </ul>
          <span className="text-xs text-slate-400">Store Management</span>
          <ul>
            <li>
              <Link to="/admin/product">
                <i class="fa-solid fa-box-open"></i>
                <span>Product</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/category">
                <i class="fa-solid fa-boxes-stacked"></i>
                <span>Category</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-scroll"></i>
                <span>Page</span>
              </a>
            </li>
          </ul>
          <span className="text-xs text-slate-400">Store Management</span>
          <ul>
            <li>
              <Link to="/admin/user">
                <PersonIcon />
                <span>User</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/category">
                <i class="fa-solid fa-boxes-stacked"></i>
                <span>Category</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-scroll"></i>
                <span>Page</span>
              </a>
            </li>
          </ul>
          <span className="text-xs text-slate-400">Configuration</span>
          <ul>
            <li>
              <a href="#">
                <i class="fa-solid fa-gear"></i>
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-user"></i>
                <span>Account Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span>Log out</span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Outlet />
    </>
  );
};

export default Sidebar;
