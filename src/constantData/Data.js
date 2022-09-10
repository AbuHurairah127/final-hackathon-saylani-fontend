import { AiOutlineSearch } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
// NavLink Constant Data
export const navLinks = [
  { label: "Home", hashLink: "/" },
  { label: "Sell Properties", hashLink: "/add-properties" },
  { label: "My Properties", hashLink: "/my-properties" },
  { label: <AiFillHeart size={25} />, hashLink: "/liked-properties" },
  { label: <AiOutlineSearch size={25} />, hashLink: "/filter-properties" },
];
