import React from "react";
import test from "./../../assets/test.jpg";
import Button from "./../../components/button/Button";
import { AiOutlineHeart } from "react-icons/ai";
const PropertyCard = () => {
  return (
    <div className="w-[95vw] md:w-[30vw] h-[450px] border-2 rounded-xl my-3 border-gray-900 flex flex-col justify-between">
      <div className="h-1/2 rounded-t-xl bg-gray-100 overflow-hidden">
        <img src={test} alt="" />
      </div>
      <h1 className="text-2xl font-bold mb-3 mx-2">
        A Brand New Banglow is for sale
      </h1>
      <div className="title mx-2 mb-5">
        <p className="">
          House No. 127/E Block ,Chandni Chowk ,Ghulam Muhammad Abad,Faisalabad
        </p>
        <p className="font-bold">Price :10000000Pkr</p>
      </div>
      <div className="flex justify-between items-center mb-5 mx-2">
        <AiOutlineHeart size={25} color="red" />
        <a href="">
          <Button label="Contact Owner" />
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
