import React from 'react';

const Dropdown = ({ onMouseOver, onMouseOut }) => {
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="flex flex-col px-2 bg-white text-blue-400 text-lg  rounded-md absolute top-[50px] right-0 me-3 duration-500 ease-in-out delay delay-700"
    >
      <ul className="flex flex-col g">
        <li className="cursor-pointer text-lg hover:bg-gray-200  hover:rounded-xl  px-8 duration-500 py-1">
          Profile
        </li>
        <li className="cursor-pointer text-lg hover:bg-gray-200  px-8 duration-500 py-1  hover:rounded-xl">
          Settings
        </li>
        <li className="cursor-pointer text-lg hover:bg-gray-200  px-8 duration-500 py-1  hover:rounded-xl">
          Log out
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
