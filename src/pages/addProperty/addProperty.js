import React from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ButtonLoader from "../../components/buttonLoader/ButtonLoader";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const AddProperty = () => {
  return (
    <div
      className="max-w-screen flex flex-col justify-between h-[100vh]"
      style={{
        fontFamily: "work sans",
      }}
    >
      <div className="navbarContainer">
        <Navbar />
      </div>
      <div className="mx-auto">
        <div
          className="loginForm w-[80vw] flex flex-col items-center justify-evenly my-8 min-h-[60vh]"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-4xl font-bold text-center">
            Add Property Detail <br />
            (You Want to Sell)
          </h1>
          <div className=" flex flex-col space-y-5 justify-center my-8  ">
            <input
              type="text"
              placeholder="Enter Property Title"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="text"
              placeholder="Enter Property Type e.g Villa ,Apartment,studio etc."
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="text"
              placeholder="Enter Area Covered per square feet"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="text"
              placeholder="Enter Finish Type e.g furnished,finished without AC's"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="number"
              placeholder="Number of Washrooms"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="number"
              placeholder="Set Asking Price"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />

            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter Property Location"
                className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                name="password"
                required
              />
            </div>
          </div>
          <div className="mb-8">
            <Button label="Sell my Property" textCol="black" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AddProperty;
