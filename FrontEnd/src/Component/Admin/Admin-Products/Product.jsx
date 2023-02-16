import React from "react";
import { useState, useEffect } from "react";
import moment from "moment";
import Switch from "@mui/material/Switch";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import "animate.css";

import "./style.css";

import { Link } from "react-router-dom";
import EditProductModal from "./EditProductModal";

//icon
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CloseIcon from "@mui/icons-material/Close";

import DoneIcon from "@mui/icons-material/Done";

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [refresh, setRefresh] = useState(false);

  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          "http://localhost:4000/product/allproduct"
        );
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchData();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  if (!data) return null;

  const handleSortClick = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };
  // eslint-disable-next-line array-callback-return
  const sortedData = [...data].sort((a, b) => {
    if (sortBy === "name") {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    } else if (sortBy === "price") {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    } else if (sortBy === "stock") {
      if (sortOrder === "asc") {
        return a.stock - b.stock;
      } else {
        return b.stock - a.stock;
      }
    } else if (sortBy === "createdAt") {
      if (sortOrder === "asc") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
    }
  });

  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / productsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setProductsPerPage(event.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentItems = sortedData.slice(startIndex, endIndex);

  return (
    <main className="w-full p-10 h-screen overflow-scroll">
      <h3 className="font-extrabold text-3xl uppercase">Products</h3>
      {/* Breadcrup */}
      <nav class="flex mb-4 mt-2" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-3">
          <li class="inline-flex items-center">
            <Link
              to="/admin"
              class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-gray-800"
            >
              <svg
                aria-hidden="true"
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Admin
            </Link>
          </li>
          <li aria-current="page">
            <div class="flex items-center">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Product
              </span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Breadcrup End*/}
      <div className="button w-full flex items-center justify-between space-x-4 mb-4">
        <div className="flex items-center space-x-4">
          <AddProduct
            setShowAlert={setShowAlert}
            setErrorMsg={setErrorMsg}
            handleRefresh={handleRefresh}
          />
          <div
            className="refresh bg-gray-800 text-white hover:bg-gray-900 px-3 py-2 rounded shadow shadow-gray-500 hover:shadow-lg outline-none focus:outline-none "
            onClick={handleRefresh}
          >
            <AutorenewIcon />
          </div>
        </div>
        {/* alert */}
        {showAlert ? (
          <div
            class="flex items-center px-3 py-2 text-sm text-green-800 rounded-lg bg-green-50 border border-green-600"
            role="alert"
          >
            <span class="sr-only">Info</span>
            <div>
              <DoneIcon />
              <span class="font-medium mx-2">{errorMsg}</span>
              <CloseIcon
                className="cursor-pointer"
                onClick={() => setShowAlert(false)}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="product-container w-full relative">
        {/* loading */}
        {loading ? (
          <>
            <div className="text-center w-full h-full absolute top-1/2 ">
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-10 h-10 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        ) : null}
        {/* end of loading */}
        {/* Error detect */}
        {error ? (
          <>
            <p>Error: {error.message}</p>;
          </>
        ) : null}
        <table className="w-full">
          <thead className="bg-gray-200 text-black border">
            <tr>
              <th onClick={() => handleSortClick("name")}>
                <div className="py-2 flex justify-center">
                  <span>Name</span>
                  <div className="indicator flex flex-col justify-center ml-4 -space-y-4">
                    <i
                      className={`fa-solid fa-sort-up ${
                        sortBy === "name" && sortOrder === "asc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                    <i
                      className={`fa-solid fa-sort-down ${
                        sortBy === "name" && sortOrder === "desc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                  </div>
                </div>
              </th>
              <th onClick={() => handleSortClick("price")}>
                <div className="flex justify-start">
                  <span>Price</span>
                  <div className="indicator flex flex-col justify-center ml-4 -space-y-4">
                    <i
                      className={`fa-solid fa-sort-up ${
                        sortBy === "price" && sortOrder === "asc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                    <i
                      className={`fa-solid fa-sort-down ${
                        sortBy === "price" && sortOrder === "desc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                  </div>
                </div>
              </th>
              <th>Category</th>
              <th onClick={() => handleSortClick("stock")}>
                <div className="py-2 flex justify-center">
                  <span className="ml-4">Stock</span>
                  <div className="indicator flex flex-col justify-center ml-4 -space-y-4">
                    <i
                      className={`fa-solid fa-sort-up ${
                        sortBy === "stock" && sortOrder === "asc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                    <i
                      className={`fa-solid fa-sort-down ${
                        sortBy === "stock" && sortOrder === "desc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                  </div>
                </div>
              </th>
              <th onClick={() => handleSortClick("createdAt")}>
                <div className="py-2 flex justify-center">
                  <span>Created At</span>
                  <div className="indicator flex flex-col justify-center ml-4 -space-y-4">
                    <i
                      className={`fa-solid fa-sort-up ${
                        sortBy === "createdAt" && sortOrder === "asc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                    <i
                      className={`fa-solid fa-sort-down ${
                        sortBy === "createdAt" && sortOrder === "desc"
                          ? "visible"
                          : "invisible"
                      }`}
                    ></i>
                  </div>
                </div>
              </th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((product, index) => (
              <tr className="border-b h-3">
                <td className=" flex items-center p-1">
                  <img
                    src={product.image}
                    alt=""
                    className="h-12 w-12 object-cover rounded-md shadow-sm"
                  />
                  <Link
                    to="/admin/product"
                    className="ml-4 text-blue-700 hover:text-black focus:text-blue-700  cursor-pointer"
                  >
                    {product.name}
                  </Link>
                </td>
                <td className="h-full text-left">${product.price}</td>
                <td className="h-full">{product.category}</td>
                <td className="h-full relative">
                  {product.stock}
                  {/* {product.stock < 5 ? (
                    <span className="absolute top-1/2 -right-2 -translate-y-1/2 right-0  bg-red-400 text-xs text-white px-2 rounded">
                      Low stock
                    </span>
                  ) : null} */}
                </td>
                <td className="h-full">
                  {moment(product.createdAt).format("MMM D YYYY : kk:mm:ss")}
                </td>
                <td className="h-full">
                  <Switch defaultChecked />
                </td>
                <td>
                  <div className="flex h-full w-full justify-center items-center">
                    <EditProductModal proId={product._id} />
                    <DeleteProduct
                      proId={product._id}
                      setShowAlert={setShowAlert}
                      setErrorMsg={setErrorMsg}
                      handleRefresh={handleRefresh}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-4 ">
          {/*
          <div className="mb-4 text-sm">
            Showing {currentItems.length} of {totalItems} products
          </div>
           */}
          <select
            value={productsPerPage}
            onChange={handleItemsPerPageChange}
            className="p-2 rounded text-xs font-semibold"
          >
            <option value={10}>10/Page</option>
            <option value={25}>25/Page</option>
            <option value={50}>50/Page</option>
            <option value={100}>100/Page</option>
          </select>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="ml-4 p-2 rounded bg-slate-800 text-white text-xs font-normal"
          >
            <i class="fa-solid fa-angle-left"></i>
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`p-2 px-4 mx-2 rounded text-xs font-semibold ${
                currentPage === page ? " bg-slate-800 text-white" : ""
              }`}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className=" p-2 rounded bg-slate-800 text-white text-xs font-normal"
          >
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};
export default Product;
