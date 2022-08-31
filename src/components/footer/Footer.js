import React from "react";
import UseFooter from "./UseFooter";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  const { year } = UseFooter();
  return (
    <div className="w-full text-center min-h-16 text-[#628dc5] bg-[#1d3557] py-1">
      <span className=" px-2">
        &copy; {year} All rights reserved by{" "}
        <HashLink smooth to="/#top">
          <span className="text-[#F9995D]">Hurairah Real Estate</span>
        </HashLink>
      </span>
      <p>
        Created by{" "}
        <a href={"/"} className="underline underline-offset-2">
          {" "}
          Abu Hurairah
        </a>
      </p>
    </div>
  );
};

export default Footer;
