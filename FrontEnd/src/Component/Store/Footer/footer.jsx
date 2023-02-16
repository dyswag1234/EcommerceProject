import React from "react";

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto flex flex-wrap items-center">
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h4 class="font-bold text-xl">About Us</h4>
          <p class="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </p>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h4 class="font-bold text-xl">Categories</h4>
          <ul class="list-reset py-2">
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                Men
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                Women
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                Bag
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h4 class="font-bold text-xl">Contact</h4>
          <ul class="list-reset py-2">
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                Email : hando@store.com
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                Phone : +8551243403
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                Address : Phnom Penh
              </a>
            </li>
          </ul>
        </div>
        <div class="w-full md:w-1/4 text-center md:text-left">
          <h4 class="font-bold text-xl">Follow Us</h4>
          <ul class="list-reset py-2">
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                <i class="fa-brands fa-facebook mr-2"></i>
                Facebook
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                <i class="fa-brands fa-twitter mr-2"></i>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" class="text-white hover:text-blue-500">
                <i class="fa-brands fa-instagram mr-2"></i>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bg-gray-800 py-4">
        <div class="container mx-auto flex text-center text-sm">
          <p class="text-white ">Copyright © 2022 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
