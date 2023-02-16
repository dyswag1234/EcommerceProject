/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./style.css";

const Banner = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="banner container bg-white p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-4">
        {/* Men */}
        <div className="h-full relative item-col overflow-hidden ">
          <img
            src="https://zandokh.com/image/catalog/banner/2022/ten11/pchum-ben/category-collection/banner/men.jpg"
            alt=""
            className="w-full h-full object-cover ease-linear duration-100"
          />
          <a
            href="#"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center h-12 w-36 bg-white text-black hover:bg-black hover:text-white ease-linear duration-100"
          >
            <span className="text-inherit">Men</span>
          </a>
        </div>
        {/* Women */}
        <div className="h-full relative item-col overflow-hidden ">
          <img
            src="https://zandokh.com/image/catalog/banner/2022/ten11/pchum-ben/category-collection/banner/women.jpg"
            alt=""
            className="w-full h-full object-cover ease-linear duration-100"
          />
          <a
            href="#"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center h-12 w-36 bg-white text-black hover:bg-black hover:text-white ease-linear duration-100"
          >
            <span className="text-inherit">Women</span>
          </a>
        </div>
        {/* Bag */}
        <div className="h-full relative item-col overflow-hidden">
          <img
            src="https://zandokh.com/image/cache/catalog/products/2023-01/2522212002/Team-Bag%20(3)-cr-450x672.jpg"
            alt=""
            className="w-full h-full object-cover ease-linear duration-100"
          />
          <a
            href="#"
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center items-center h-12 w-36 bg-white text-black hover:bg-black hover:text-white ease-linear duration-100"
          >
            <span className="text-inherit">Bag</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
