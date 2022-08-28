import React from "react";
import { navLinks } from "./../../constantData/Data";
import NavLinks from "./navLinks/NavLinks";
const MobileNavigation = () => {
  return (
    <div className="w-screen h-max bg-[#1D3557]">
      {navLinks.map((item, index) => (
        <NavLinks data={item} key={index} />
      ))}
    </div>
  );
};

export default MobileNavigation;
