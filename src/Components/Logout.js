import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        
}
  return (
    <NavLink
          to="/"
          onClick={handleLogout}
      className="flex gap-2 cursor-pointer hover:text-white hover:bg-red-600 ease-in-out duration-500 items-center w-100 my-4 p-2 mb-0 text-red-600 font-bold text-xl justify-center"
    >
      <FontAwesomeIcon icon={faRightFromBracket} flip="" />
      <span className="">Log out</span>
    </NavLink>
  );
};

export default Logout;
