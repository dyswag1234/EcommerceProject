import * as React from "react";
import { TextField } from "@mui/material";

import "./test.css";

const test = () => {
  return (
    <div className="flex justify-center">
      <form action="" className="container">
        <div className="addProduct-navbar container flex  justify-between border shadow">
          <h4 className="text-xl font-bold uppercase p-4">Create Product</h4>
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>
        <div className="form-items w-full flex justify-between">
          <div className="form-left w-80 border">
            <div className="form-input-item">
              <label htmlFor="proName">Product Title</label>
              <br />
              <TextField
                id="filled-basic"
                label="Enter product title"
                variant="filled"
                name="proName"
              />
            </div>
            <div className="form-input-item">
              <label htmlFor="proName">Product Description</label>
              <br />

              <TextField
                id="filled-multiline-static"
                multiline
                rows={4}
                variant="filled"
              />
            </div>
          </div>
          <div className="form-right"></div>
        </div>
      </form>
    </div>
  );
};

export default test;
