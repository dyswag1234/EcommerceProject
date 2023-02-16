import React from "react";
import { useState, useEffect } from "react";
import "../Trending/style.css";

export const Shopitem = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return null;

  return (
    <section className="product-container container mx-auto">
      <div className="my-5 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-5">
        {data.map((product, index) => (
          <div className="col-span-1 product-col w-62  overflow-hidden">
            <div className="image relative overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-full object-cover h-72"
              />
              <div className="hover-nav w-full h-full absolute flex flex-col justify-center items-center">
                <div className="hover-nav-btn">
                  <i class="fa-solid fa-cart-shopping"></i>
                  <a href="">Add to Cart</a>
                </div>
                <div className="hover-nav-btn">
                  <i class="fa-solid fa-eye"></i>
                  <a href="">Quick View</a>
                </div>
              </div>
            </div>
            <div className="product-des py-2">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <a className="price text-base text-gray-700" href="#">
                {product.price}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

/*
return (
    <section className="product-container container mx-auto">
      <div className="my-5 grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="col-span-1 product-col w-62  overflow-hidden">
          <div className="image relative overflow-hidden">
            <img
              src="https://zandokh.com/image/cache/catalog/products/2023-01/2222301060/Floral-Dress%20(3)-cr-450x672.jpg"
              alt=""
              className="w-full object-cover"
            />
            <div className="hover-nav w-full h-full absolute flex flex-col justify-center items-center">
              <div className="hover-nav-btn">
                <i class="fa-solid fa-cart-shopping"></i>
                <a href="">Add to Cart</a>
              </div>
              <div className="hover-nav-btn">
                <i class="fa-solid fa-eye"></i>
                <a href="">Quick View</a>
              </div>
            </div>
          </div>
          <div className="product-des py-2">
            <h3 className="text-lg font-semibold">Floral Dress</h3>
            <a className="price text-base text-gray-700" href="#">
              $19.95
            </a>
          </div>
        </div>
      </div>
    </section>
  );
 */
