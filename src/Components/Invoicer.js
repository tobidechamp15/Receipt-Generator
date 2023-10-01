import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink, Outlet } from "react-router-dom";
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
        className={`flex w-[250px]   bg-white  text flex-col h-screen z-50 fixed transition-all ease-in-out duration-700 ${
          sidebarOpen ? "left-0  " : "xsm:-left-[250px]"
        }`}
        ref={sidebarRef}
        id="side-bar"
      >
        <div className="w-100 flex flex-col self-center gap-2 ">
          <section className="text-lg font-bold  text-center">Menu</section>

          <NavLink
            to="/invoicer/receipt"
            className={({ isActive }) =>
              `${isActive ? "active-tab" : "text-blue-500"} sideBar-tabs
              `
            }
          >
            Invoicer
          </NavLink>
          <NavLink
            to="/invoicer/home"
            className={({ isActive }) =>
              `${isActive ? "active-tab" : "text-blue-500"} sideBar-tabs`
            }
          >
            <span className="-">Generate Receipt</span>
          </NavLink>
          <NavLink
            to="/invoicer/settings"
            className={({ isActive }) =>
              `${isActive ? "active-tab" : "text-blue-500"} sideBar-tabs`
            }
          >
            <span className="-">Settings</span>
          </NavLink>
          
        </div>
      </section>
      <section className=" flex flex-col  md:ms-[250px] h-screen">
        <div className="flex w-100 b p-3 justify-between">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="me-3 md:hidden  cursor-pointer text-3xl text-blue-700 hover:fa-spin"
            spin
          />
          <span className="text-xl xs:hidden font-bold"></span>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="items-end justify-end self-end text-[20px] text-blue-400 bg-white p-1 rounded-[50%]"
            />
          </div>
        </div>
        <div className="bg-white h-full">
          <Outlet />
        </div>
      </section>
    </section>
  );
};

export default Invoicer;
