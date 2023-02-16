import React from "react";
import "./style.css";

import { Shopitem } from "./Shopitem";

export const ShopDisplay = () => {
  return (
    <>
      <section className="shop w-full">
        <div className="shop-title flex justify-center">
          <h2 className="text-5xl font-bold my-5">Shop</h2>
        </div>
        <div className="shop-container container mx-auto">
          <div className="shop-navbar w-full flex justify-between my-5">
            <div className="left">
              <h5>Showing all 0 results</h5>
            </div>
            <div className="right flex ">
              <div className="nav-item">
                <label htmlFor="showItem">Show</label>
                <select name="showItem" id="showItem">
                  <option value="15">15</option>
                  <option value="25">25</option>
                </select>
              </div>
              <div className="nav-item">
                <label htmlFor="showItem">Sort</label>
                <select name="showItem" id="showItem">
                  <option value="default">Default</option>
                  <option value="sortByPop">Sort by popularity</option>
                  <option value="sortByTime">Sort by latest</option>
                  <option value="sortLtoH">Sort by price: low to high</option>
                  <option value="sortHtoL">Sort by price: high to low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Shopitem />
    </>
  );
};
