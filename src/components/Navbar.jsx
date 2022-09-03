import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-3">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden">
        {!nav ? <AiOutlineClose size={28} /> : <GiHamburgerMenu size={28} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-800 h-full bg-[#303030] drop-shadow-2xl ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-3 p-5">
          REACT.
        </h1>
        <ul className="mt-12 p-5 uppercase">
          <li className="p-4 border-b border-[#00df98a4]">Home</li>
          <li className="p-4 border-b border-[#00df98a4]">Company</li>
          <li className="p-4 border-b border-[#00df98a4]">Resources</li>
          <li className="p-4 border-b border-[#00df98a4]">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
