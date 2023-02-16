import axios from "axios";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

export default function AddProduct({
  setShowAlert,
  setErrorMsg,
  handleRefresh,
}) {
  const [showModal, setShowModal] = React.useState(false);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [stock, setStock] = useState();
  const [category, setCategory] = useState();
  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("image", image);
    formData.append("category", category);

    try {
      await axios.post("http://localhost:4000/product/addproduct", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setShowAlert(true);
      setErrorMsg("Product added successfully");
      setShowModal(false);
      handleRefresh();
    } catch (error) {
      setLoading(false);
      setErrorMsg("Product adding failed");
      console.error(error);
    }
  };

  return (
    <>
      <button
        className="flex items-center bg-gray-800 text-white hover:bg-gray-900 font-semibold uppercase text-sm px-3 py-2 rounded shadow shadow-gray-500 hover:shadow-sm outline-none focus:outline-none  ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AddIcon />
        <span className="ml-2">Add Product</span>
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-10 mx-auto max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Add new product
                  </h3>
                  <button
                    className="p-2 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-xl leading-none font-medium outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <form className="bg-white p-6 rounded-lg shadow-md">
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border border-gray-400 p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      className="px-10 py-2 rounded"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="">-- Select category --</option>
                      <option value="Shirt">Shirt</option>
                      <option value="Pant">Pant</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      name="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full border border-gray-400 p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full border border-gray-400 p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="stock"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Stock
                    </label>
                    <input
                      type="number"
                      name="stock"
                      value={stock}
                      onChange={(e) => setStock(e.target.value)}
                      className="w-full border border-gray-400 p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="image">Image</label> <br />
                    <input type="file" name="image" onChange={handleChange} />
                  </div>

                  <button
                    className="mr-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-700"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
