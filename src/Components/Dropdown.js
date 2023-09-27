import React from "react";
import settings from "../assets/settings.png";
import profile from "../assets/user (1).png";
import Dashboard from "../assets/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

const Dropdown = () => {
  return (
    <div className="flex flex-col px-2 py-1 bg-white text-blue-400 text-sm sm:rounded-xl  absolute top-[70px] right-0  duration-500 ease-in-out delay delay-700 w-full sm:w-fit sm:right-[20px] ">
      <ul className="flex flex-col g">
        <li className="flex gap-3  items-center cursor-pointer fw-bold  text-sm hover:bg-gray-200  hover:rounded-xl  px-8 duration-500 py-1">
          <FontAwesomeIcon icon={faHome} size="2x" />
          {/* <img src={home} className="w-[24px]" alt="" /> */}
          Dashboard
        </li>
        <li className="flex gap-3  items-center cursor-pointer text-sm hover:bg-gray-200  hover:rounded-xl  px-8 duration-500 py-1">
          <FontAwesomeIcon icon={faUserCircle} size="2x" />
          {/* <img src={profile} alt="" /> */}
          Profile
        </li>
        <li className="flex gap-3  items-center cursor-pointer text-sm hover:bg-gray-200  px-8 duration-500 py-1  hover:rounded-xl">
          {/* <img src={settings} alt="" /> */}
          <FontAwesomeIcon icon={faGear} size="2x" />
          Settings
        </li>
        <section className=" border-t   py-1 mt-2">
          <li className="flex gap-2  items-center cursor-pointer text-sm text-red-400 hover:bg-gray-200  px-8 duration-500 py-1  hover:rounded-xl">
            <FontAwesomeIcon icon={faPowerOff} size="2x" />
            Log out
          </li>
        </section>
      </ul>
    </div>
  );
};

export default Dropdown;
