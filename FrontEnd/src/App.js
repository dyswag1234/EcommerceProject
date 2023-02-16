import React from "react";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Store/Home";
import Shop from "./Component/Store/Shop";
import "./Asset/app.css";

//tailwindcss

import "./index.css";

//css from theme

import "./Asset/css/style.css";
import "./Asset/css/elegant-icons.css";
import "./Asset/css/customs.css";

//Admin Page
import Product from "./Component/Admin/Admin-Products/Product";
import Sidebar from "./Component/Admin/Sidebar/Sidebar";
import Dashboard from "./Component/Admin/Admin-Dashboard/Dashboard";
import Category from "./Component/Admin/Admin-Category/Category";
/*
// test page
*/
import Test from "./Component/test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <div className="flex">
        <Routes>
          <Route path="/admin" element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/category" element={<Category />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
