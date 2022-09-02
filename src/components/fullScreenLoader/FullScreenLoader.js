import React from "react";
import Lottie from "lottie-react";
import building from "./../../assets/71623-harpoon.json";
const FullScreenLoader = () => {
  return (
    <div className="min-w-screen min-h-[100vh] flex justify-center items-center">
      <div className="w-[45vw]">
        <Lottie animationData={building} />
      </div>
    </div>
  );
};

export default FullScreenLoader;
