import React from 'react';
import userImg from '../assets/user.png';
import addBtn from '../assets/add.png';
import Dropdown from './Dropdown';

const Navbar = () => {
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
          className="cursor-pointer xs:h-[7vw] relative"
        />
        <span className="hidden md:flex">Company name</span>
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
