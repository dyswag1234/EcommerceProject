import React, { useState } from "react";

const ProductInputForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description, price, stock, category);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-400 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-gray-400 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border border-gray-400 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Stock</label>
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border border-gray-400 p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-400 p-2"
        />
      </div>
      <button className="mr-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-700">
        Cancel
      </button>
      <button className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
        Submit
      </button>
    </form>
  );
};

export default ProductInputForm;
