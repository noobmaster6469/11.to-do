import React from "react";
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center h-[50px] px-10 pr-16 shadow-md text-black bg-[#ECDFCC]">
        <h3 className="font-semibold cursor-pointer hover:scale-105 transition-all duration-200">
          Task Planner
        </h3>
        <span className="font-semibold cursor-pointer hover:scale-105 transition-all duration-200">
          User
        </span>
      </nav>
    </>
  );
};

export default Navbar;
