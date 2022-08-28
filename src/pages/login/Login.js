import React from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useLogin from "./useLogin";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    buttonLoading,
    loginData,
    onChangeHandler,
    onLoginHandler,
    setIsPasswordAppear,
    isPasswordAppear,
  } = useLogin();
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
          className="loginForm w-[80vw] flex flex-col items-center justify-evenly min-h-[60vh]"
          style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        >
          <h1 className="text-4xl font-bold">Login Form</h1>
          <div className=" flex flex-col space-y-5 justify-center">
            <input
              type="number"
              placeholder="Enter Your Roll No. e.g 22100"
              className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
              name="userName"
              value={loginData.userName}
              onChange={(e) => {
                onChangeHandler(e);
              }}
              required
            />
            {isPasswordAppear ? (
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter Your password"
                  className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  required
                />
                <AiFillEyeInvisible
                  size={20}
                  style={{
                    marginLeft: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsPasswordAppear(!isPasswordAppear);
                  }}
                />
              </div>
            ) : (
              <div className="flex items-center">
                <input
                  type="password"
                  placeholder="Enter Your password"
                  className="border-2 border-gray-300 px-3 py-1 w-[60vw] rounded outline-0"
                  name="password"
                  value={loginData.password}
                  onChange={(e) => {
                    onChangeHandler(e);
                  }}
                  required
                />
                <AiFillEye
                  size={20}
                  style={{
                    marginLeft: 10,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setIsPasswordAppear(!isPasswordAppear);
                  }}
                />
              </div>
            )}
          </div>
          <div className="">
            <Button
              label={buttonLoading ? <ButtonLoader color="#DE5C0B" /> : "Login"}
              textCol="black"
              event={(e) => {
                onLoginHandler(e);
              }}
              disabled={buttonLoading}
            />
          </div>
          <p>
            Don't have an account Please{" "}
            <Link to="/register" className="underline underline-offset-2">
              Sign Up
            </Link>
            .
          </p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
