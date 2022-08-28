import React from "react";

import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Register = () => {
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
          <h1 className="text-4xl font-bold text-center">Register</h1>
          <div className=" flex flex-col space-y-5 justify-center my-8  ">
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="text"
              placeholder="Enter Your User Name"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
            <div className="flex items-center">
              <input
                type="password"
                placeholder="Enter password"
                className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                name="password"
                required
              />
            </div>
            <input
              type="number"
              placeholder="Enter Your phone Number"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              required
            />
          </div>
          <div className="mb-8">
            <Button label="Register" textCol="black" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Register;
