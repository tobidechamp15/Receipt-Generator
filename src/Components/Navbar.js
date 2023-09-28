
import React, { useState } from "react";
import userImg from "../assets/user.png";
import menu from "../assets/menu-ham.png";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [showDropdownComponent, setShowDropdownComponent] = useState(false);

  const handleMouseOver = () => {
    setShowDropdownComponent(true);
  };

  const handleMouseOut = () => {
    setShowDropdownComponent(false);
  };
  const handleShowDropdownComponent = () => {
        setShowDropdownComponent(!showDropdownComponent);

  }
  return (
    <nav className="w-full fixed top-0 flex justify-between item-center bg-blue-600 py-2 px-9 h-1/9 h-[8%]">
      <span className="text-white md:text-3xl text-sm p-2 cursor-pointer font-semibold flex items-center justify-center">
        <img src={menu} alt="Add logo" className="me-3 sm:hidden" />
        <span className="xs:hidden">Receipt Generator</span>
      </span>

      <div className="flex items-center justify-center text-white">
        <div className="flex ">
          <img
            src={userImg}
            alt="profile"
            onClick={handleShowDropdownComponent}
            // onMouseOver={handleMouseOver} // Use onMouseOver event
            // onMouseOut={handleMouseOut} // Use onMouseOut event
            className="cursor-pointer h-[36px] w-[36px] relative"
          />
          <span className="hidden md:flex">Company name</span>
        </div>
        {showDropdownComponent && (
          <Dropdown
            onMouseOver={() => setShowDropdownComponent(true)} // Close dropdown on click
            className="transition-700 ease-in-out"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
