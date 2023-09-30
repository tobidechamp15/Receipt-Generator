import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import menu from "../assets/menu-ham.png";

const Invoicer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <section className="w-100">
      <section
        className={`flex w-[250px] p-2  xsm:bg-white  text flex-col h-screen z-50 fixed transition-all ease-in-out duration-700 ${
          sidebarOpen ? "left-0  " : "xsm:-left-[250px]"
        }`}
        ref={sidebarRef}
        id="side-bar"
      >
        <div className="w-[80%] flex flex-col self-center gap-2 ">
          <section className="text-lg font-bold  text-center">Menu</section>

          <span className="">
            <NavLink
              to="/dashboard/receipt"
              className={({ isActive }) =>
                isActive ? "text-blue-400" : "text-red-500"
              }
            >
              Invoicer
            </NavLink>
          </span>
          <NavLink
            to="/dashboard/home"
            className={({ isActive }) =>
              isActive ? "text-blue-400" : "text-red-500"
            }
          >
            <span className="-">Add Receipt</span>
          </NavLink>
        </div>
      </section>
      <section className=" flex flex-col md:ms-[250px] h-screen">
        <div className="flex w-100 b p-3 justify-between">

          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="me-3 sm:hidden cursor-pointer text-3xl text-blue-700 hover:fa-spin" spin
          />
          <span className="text-xl xs:hidden font-bold">Receipt Generator</span>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="items-end justify-end self-end text-[20px] text-blue-400 bg-white p-1 rounded-[50%]"
            />
          </div>
        </div>

        <Outlet />
      </section>
    </section>
  );
};

export default Invoicer;
