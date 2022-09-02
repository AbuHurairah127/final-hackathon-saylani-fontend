import React from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useLogin from "./useLogin";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginBG from "./../../assets/loginBG.png";
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
      className="max-w-screen flex flex-col items-center justify-between h-[100vh] bg-center bg-cover"
      style={{
        fontFamily: "work sans",
        backgroundImage: `linear-gradient(0deg,rgba(2, 48, 71, 0.95),rgba(0, 180, 216, 0.15)),url(${loginBG})`,
      }}
    >
      <div className="navbarContainer">
        <Navbar />
      </div>
      <main>
        <div
          className="md:w-[70vw] rounded-md"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            backgroundColor: "rgba(2, 48, 71, 0.65)",
          }}
        >
          <h1 className="text-center text-white text-3xl pt-5">Login</h1>
          <form
            onSubmit={(e) => {
              onLoginHandler(e);
            }}
          >
            <div className="w-full flex flex-col items-center ">
              <div className="md:w-[60vw] flex flex-col flex-wrap justify-between items-center my-5 mx-5">
                <label
                  htmlFor="email"
                  className="self-start text-white text-lg"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email *"
                  required
                  className="md:w-[39vw] outline-0 px-4 py-2 rounded-sm border-2"
                  value={loginData.email}
                  onChange={(e) => onChangeHandler(e)}
                />
                {!isPasswordAppear ? (
                  <>
                    <label
                      htmlFor="password"
                      className="self-start text-white text-lg"
                    >
                      Password:
                    </label>
                    <div className="flex items-center mt-5">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password *"
                        required
                        className="md:w-[35vw] outline-0 px-4 py-2 rounded-sm border-2 mr-3"
                        value={loginData.password}
                        onChange={(e) => onChangeHandler(e)}
                      />
                      <button
                        className=""
                        type="button"
                        onClick={() => {
                          setIsPasswordAppear(!isPasswordAppear);
                        }}
                      >
                        <AiFillEye size={25} color="#F9995D" />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <label
                      htmlFor="password"
                      className="self-start text-white text-lg"
                    >
                      Password:
                    </label>
                    <div className="flex items-center mt-5">
                      <input
                        type="type"
                        name="password"
                        id="password"
                        placeholder="Your Password *"
                        required
                        className="md:w-[35vw] outline-0 px-4 py-2 rounded-sm border-2 mr-3"
                        value={loginData.password}
                        onChange={(e) => onChangeHandler(e)}
                      />
                      <button className="" type="button">
                        <AiFillEyeInvisible
                          size={25}
                          color="#F9995D"
                          onClick={() => {
                            setIsPasswordAppear(!isPasswordAppear);
                          }}
                        />
                      </button>
                    </div>
                  </>
                )}
                <span className="mt-5 text-white">
                  Don't have an account.Please{" "}
                  <Link to="/register">
                    <span className="text-[#F9995D] underline underline-offset-2">
                      Register
                    </span>
                  </Link>
                </span>
              </div>
              <div className="mb-5">
                <Button label="Login" type="submit" />
              </div>
            </div>
          </form>
        </div>
      </main>
      <div className="w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
