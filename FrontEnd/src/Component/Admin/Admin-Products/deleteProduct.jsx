import React from "react";
import { useState } from "react";
import axios from "axios";
import "animate.css";

//icon
import DeleteIcon from "@mui/icons-material/Delete";
import ReportProblemRoundedIcon from "@mui/icons-material/ReportProblemRounded";

const DeleteProduct = ({ setShowAlert, setErrorMsg, handleRefresh, proId }) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `http://localhost:4000/product/delete/${proId}`
      );
      console.log(response.data);
      setLoading(false);
      setShowModal(false);
      setShowAlert(true);
      setErrorMsg("Product have been deleted.");
      handleRefresh(); // perform a refresh after deleted
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <button
        className="text-red-600 text-sm p-2 rounded"
        onClick={() => setShowModal(true)}
      >
        <DeleteIcon />
      </button>

      {showModal ? (
        <>
          <div
            className={`justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none animate__animated ${
              showModal ? "animate__bounceIn" : "animate__bounceOut"
            }`}
          >
            <div className="relative w-1/2 my-10 mx-auto max-w-sm">
              <div className="py-10 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="modal-text">
                  <div className="icon-danger w-14 h-14 bg-red-100 flex justify-center items-center rounded-full mx-auto">
                    <ReportProblemRoundedIcon className="scale-150 text-red-500 " />
                  </div>
                  <h5 className="font-bold my-2">Delete Product</h5>
                  <p>
                    You're about to delete this product. <br />
                    Are you sure?
                  </p>
                </div>
                <div className="form-items space-x-4">
                  <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    No, Keep it.
                  </button>
                  <button
                    class="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                    onClick={() => handleDelete(proId)}
                  >
                    Yes, Delete!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`opacity-25 fixed inset-0 z-40 bg-black `}></div>
        </>
      ) : null}
    </>
  );
};

export default DeleteProduct;
