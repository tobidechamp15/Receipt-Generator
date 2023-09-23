import React, { useState } from 'react';
import userImg from '../assets/user.png';
import menu from '../assets/menu-ham.png';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [showDropdownComponent, setShowDropdownComponent] = useState(false);

  const handleMouseOver = () => {
    setShowDropdownComponent(true);
  };
  const handleMouseOut = () => {
    setShowDropdownComponent(false);
  };
  return (
    <nav className="w-full fixed top-0 flex justify-between item-center  bg-secondary py-2 px-9 h-1/9 h-[8%]">
      <span className="text-red-500 md:text-3xl text-sm  p-2 cursor-pointer font-semibold flex items-center justify-center">
        <img src={menu} alt="Add logo" className=" me-3 sm:hidden" />
        <span className="xs:hidden">Add Company Logo</span>
      </span>

      <div className="flex items-center justify-center text-white">
        <img
          src={userImg}
          alt="profile"
          onClick={(handleMouseOver,handleMouseOut)}
          // onMouseOut={handleMouseOut}
          className="cursor-pointer xs:h-[10vw] relative"
        />
        <span className="hidden md:flex">Company name</span>
        {showDropdownComponent && (
          <Dropdown
            onClick={(handleMouseOver, handleMouseOut)}
            // onClick={handleMouseOut}
            className="transition-700 ease-in-out"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
