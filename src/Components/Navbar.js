import React, { useState } from 'react';
import userImg from '../assets/user.png';
import addBtn from '../assets/add.png';
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
      <span className="text-red-500 md:text-3xl text-sm border-red-300 border-5 p-2 cursor-pointer font-semibold flex items-center justify-center">
        <img src={addBtn} alt="Add logo" className=" me-3 " />
        <span className="xs:hidden">Add Company Logo</span>
      </span>

      <div className="flex items-center justify-center text-white">
        <img
          src={userImg}
          alt="profile"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="cursor-pointer xs:h-[10vw] relative"
        />
        <span className="hidden md:flex">Company name</span>
        {showDropdownComponent && (
          <Dropdown
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="transition-700 ease-in-out"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
