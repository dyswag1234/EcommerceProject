/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import axios from "axios";
// import AddIcon from "@mui/icons-material/Add";
// import DoneIcon from "@mui/icons-material/Done";
// import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
const EditProductModal = (props) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  const [product, setProduct] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchProduct = async (id) => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:4000/product/${id}`);

      setProduct(response.data);
      setImagePreview(response.data.image);
      product.oldImage = response.data.image;
      setLoading(false);
      setError(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);
    }
  };
  if (error) return <p>Error: {error.message}</p>;
  if (!product) return null;

  const handleChange = (event) => {
    const updatedProduct = { ...product };
    updatedProduct[event.target.name] = event.target.value;
    setProduct(updatedProduct);
  };

  const handleImageChange = (event) => {
    const updatedProduct = { ...product };
    updatedProduct.image = event.target.files[0];
    setProduct(updatedProduct);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    console.log("new image:", product.image, "old image:", product.oldImage);

    const formData = new FormData();

    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("stock", product.stock);
    formData.append("image", product.image);
    formData.append("category", product.category);

    try {
      const res = await axios.put(
        `http://localhost:4000/product/edit/${props.proId}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      console.log(res.data);
      setErrorMsg("Product edited successfully");
      setShowEditModal(false);
    } catch (error) {
      setLoading(false);
      setErrorMsg("Product editing failed");
      console.error(error);
    }
  };

  return (
    <>
      <div className="button">
        <button
          className="text-black text-sm p-2 rounded"
          type="button"
          onClick={() => {
            setShowEditModal(true);
            handleFetchProduct(props.proId);
          }}
        >
          <EditIcon />
        </button>
      </div>
      {showEditModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-10 mx-auto max-w-xl">
              {loading ? (
                <div className="text-center w-full h-screen flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
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
              ) : null}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Edit Product
                  </h3>
                </div>
                <form className="bg-white p-6 rounded-lg shadow-md">
                  <input
                    type="hidden"
                    name="oldImage"
                    value={product.oldImage || ""}
                  />
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
                      value={product.name || ""}
                      onChange={handleChange}
                      className="w-full border p-2"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="category"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Category
                    </label>
                    {/* <input
                      type="hidden"
                      name="category"
                      value={product.category || ""}
                      className="w-full border border-gray-400 p-2"
                    /> */}
                    <select
                      name="category"
                      className="px-10 py-2 rounded"
                      value={product.category || ""}
                      onChange={handleChange}
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
                      value={product.description || ""}
                      onChange={handleChange}
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
                      value={product.price || ""}
                      onChange={handleChange}
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
                      value={product.stock || ""}
                      onChange={handleChange}
                      className="w-full border border-gray-400 p-2"
                    />
                  </div>
                  <div className="mb-4 flex justify-center">
                    <label htmlFor="image">Image</label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={handleImageChange}
                    />
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="product"
                        width="100"
                        height="100"
                        className="shadow-lg rounded-md"
                      />
                    )}
                  </div>

                  <button
                    className="mr-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-700"
                    onClick={() => setShowEditModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSubmitEdit}
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
};
export default EditProductModal;
