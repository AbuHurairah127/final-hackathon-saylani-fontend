import React from "react";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useRegister from "./useRegister";
import ButtonLoader from "./../../components/buttonLoader/ButtonLoader";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginBG from "./../../assets/loginBG.png";
const Register = () => {
  const {
    buttonLoading,
    registerData,
    onChangeHandler,
    onRegisterHandler,
    setIsPasswordAppear,
    isPasswordAppear,
  } = useRegister();
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
          <h1 className="text-center text-white text-3xl pt-5">Register</h1>
          <form
            onSubmit={(e) => {
              onRegisterHandler(e);
            }}
          >
            <div className="w-full flex flex-col items-center ">
              <div className="md:w-[60vw] flex flex-col flex-wrap justify-between items-center my-5 mx-5">
                <div className="w-full flex justify-between">
                  <label
                    htmlFor="firstName"
                    className="self-start text-white text-lg"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name *"
                    required
                    className="md:w-[18vw] outline-0 px-4 py-2 rounded-sm border-2"
                    value={registerData.firstName}
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <label
                    htmlFor="lastName"
                    className="self-start text-white text-lg"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name *"
                    required
                    className="md:w-[18vw] outline-0 px-4 py-2 rounded-sm border-2"
                    value={registerData.lastName}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div className="w-full flex justify-between mt-5">
                  <label
                    htmlFor="userName"
                    className="self-start text-white text-lg"
                  >
                    Username:
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    placeholder="Username *"
                    required
                    className="md:w-[18vw] outline-0 px-4 py-2 rounded-sm border-2"
                    value={registerData.userName}
                    onChange={(e) => onChangeHandler(e)}
                  />
                  <label
                    htmlFor="phone"
                    className="self-start text-white text-lg"
                  >
                    Number:
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    min={"03000000000"}
                    placeholder="Phone Number *"
                    required
                    className="md:w-[18vw] outline-0 px-4 py-2 rounded-sm border-2"
                    value={registerData.phone}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                <div className="w-full flex justify-between mt-5">
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
                    className="md:w-[48.5vw] outline-0 px-4 py-2 rounded-sm border-2"
                    value={registerData.email}
                    onChange={(e) => onChangeHandler(e)}
                  />
                </div>
                {!isPasswordAppear ? (
                  <>
                    <div className="w-full flex justify-between mt-5">
                      <label
                        htmlFor="password"
                        className="self-start text-white text-lg"
                      >
                        Password:
                      </label>

                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your Password *"
                        required
                        className="md:w-[48.5vw] outline-0 px-4 py-2 rounded-sm border-2"
                        value={registerData.password}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    </div>
                    <button
                      className="self-end"
                      type="button"
                      onClick={() => {
                        setIsPasswordAppear(!isPasswordAppear);
                      }}
                    >
                      <AiFillEye size={25} color="#F9995D" />
                    </button>
                  </>
                ) : (
                  <>
                    <div className="w-full flex justify-between mt-5">
                      <label
                        htmlFor="password"
                        className="self-start text-white text-lg"
                      >
                        Password:
                      </label>

                      <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Your Password *"
                        required
                        className="md:w-[48.5vw] outline-0 px-4 py-2 rounded-sm border-2"
                        value={registerData.password}
                        onChange={(e) => onChangeHandler(e)}
                      />
                    </div>
                    <button
                      className="self-end"
                      type="button"
                      onClick={() => {
                        setIsPasswordAppear(!isPasswordAppear);
                      }}
                    >
                      <AiFillEyeInvisible size={25} color="#F9995D" />
                    </button>
                  </>
                )}
                <span className="mt-5 text-white">
                  Already have an account.Please{" "}
                  <Link to="/login">
                    <span className="text-[#F9995D] underline underline-offset-2">
                      Login
                    </span>
                  </Link>
                </span>
              </div>
              <div className="mb-5">
                <Button
                  label={
                    buttonLoading ? (
                      <ButtonLoader color="#DE5C0B" />
                    ) : (
                      "Register"
                    )
                  }
                  type="submit"
                  disabled={buttonLoading}
                />
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

export default Register;
