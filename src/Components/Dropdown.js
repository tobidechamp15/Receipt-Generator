import React from 'react';

const Dropdown = () => {
  return (
    <div className="hidden flex-col bg-gray-300 text-blue-400 text-lg py-3 px-10 rounded-md absolute top-[8%] right-auto duration-500 ease-in-out">
      <ul className="flex flex-col gap-4" >
        <li>Profile</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default Dropdown;
