import React from "react";
import test from "./../../assets/test.jpg";
import Button from "./../../components/button/Button";
import { AiOutlineHeart } from "react-icons/ai";
const PropertyCard = () => {
  return (
    <div
      className="group propertyCard max-w-[30ch] max-h-[425px] rounded-md my-3 bg-[#274773] shadow-md shadow-[#112239] bg-cover bg-no-repeat bg-center pt-[3rem] text-white lg:hover:scale-105 lg:focus-within:scale-105 transition-all duration-300 overflow-hidden"
      style={{
        backgroundImage: `url(${test})`,
      }}
    >
      <div
        className="info-section pt-12 pb-4 rounded-md px-1 h-full lg:translate-y-[42%] lg:group-hover:translate-y-[0%] lg:group-focus-within:translate-y-[0%] transition-all duration-700 ease-in-out delay-200"
        style={{
          background:
            "linear-gradient(hsl(215 54% 15% / 0),hsl(215 54% 15% / 0.65) 50%,hsl(215, 54%, 15%)",
        }}
      >
        <div
          className="property-title mt-32 w-max relative font-semibold after:absolute after:h-1  after:w-full after:bg-[#F9995D] after:rounded-3xl after:mt-1 after:left-0 after:bottom-0 lg:after:scale-x-0 lg:group-hover:after:scale-100 lg:group-focus-within:after:scale-100 after:transition-all after:duration-700 after:delay-200 after:origin-left"
          style={{ fontSize: 19 }}
        >
          A brand new mansion is for sal
        </div>
        <div className="property-owner-name lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out text-lg mt-2">
          Abu Hurairah
        </div>

        <div className="property-details lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          corporis eum adipisci fugia love u
        </div>
        <div className="bottom-section flex justify-around lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-within:opacity-100 transition-all delay-300 duration-1000 ease-in-out">
          <button>
            <AiOutlineHeart size={25} color="red" />
          </button>
          <a href="tel:03207443537">
            <Button label="Contact Owner" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
