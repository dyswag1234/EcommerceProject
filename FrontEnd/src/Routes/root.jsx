import React from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../Component/Admin/Sidebar/Sidebar";

export default function Root() {
  return (
    <>
      <div className="sidebar flex">
        <Sidebar />
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
