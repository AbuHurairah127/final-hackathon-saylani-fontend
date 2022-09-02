import React from "react";
import Typewriter from "typewriter-effect";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
import hero from "./../../assets/hero.jpg";
const Hero = (props) => {
  const isUserLoggined = useSelector(
    (store) => store.authReducer.isAuthenticated
  );
  return (
    <div
      id="hero"
      className="w-full h-[70vh] flex flex-col bg-top justify-center md:bg-cover"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(2, 48, 71, 0.95),rgba(0, 180, 216, 0.15)),url(${hero})`,
        objectFit: "contain",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap w-[80vw]">
        <h1
          className="text-6xl text-[#F9995D]  md:ml-5"
          style={{ fontFamily: "work sans" }}
        >
          Hurairah&nbsp;
        </h1>
        <h1
          className="text-6xl text-[#F9995D]"
          style={{ fontFamily: "work sans" }}
        >
          Real&nbsp;
        </h1>
        <h1
          className="text-6xl text-white md:ml-5 lg:ml-0"
          style={{ fontFamily: "work sans" }}
        >
          Estate
        </h1>
      </div>
      {!props.modalOpen && (
        <div className="text-3xl text-white pt-5 hidden md:block ml-5 w-[80vw]">
          <Typewriter
            options={{
              strings: [
                "An Excellent place to buy and sell properties",
                "Properties can also be rent out.",
                "An authentic platform for the dealing of properties.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      )}

      <div className="mt-8 ml-5 max-w-fit">
        {isUserLoggined ? (
          <Link to="/add-properties">
            <Button label="Sell Property" />
          </Link>
        ) : (
          <div className="flex items-center">
            <Link to="/login">
              <Button label="Login" />
            </Link>
            <span className="mx-4 text-xl text-white">or</span>
            <Link to="/register">
              <Button label="Register" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
