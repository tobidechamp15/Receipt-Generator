import React, { useState, useEffect, useRef } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBars,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Logout from "./Logout";

const Invoicer = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track active dropdown

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

  const handleDropdownClick = (index) => {
    // Toggle the dropdown when its title is clicked
    setActiveDropdown((prev) => (prev === index ? null : index));
  };
  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const dropdownData = [
    {
      title: "Profile Menu 1",
      items: ["Item 1", "Item 2"],
    },
    {
      title: "Profile Menu 2",
      items: ["Item A", "Item B"],
    },
    // Add more dropdown data as needed
  ];

  return (
    <section className="w-100">
      <section
        className={`flex w-[250px]   bg-gray-50  flex-col h-screen shadow-lg z-50 fixed transition-all ease-in-out duration-700 ${
          sidebarOpen ? "left-0  " : "xsm:-left-[250px]"
        }`}
        ref={sidebarRef}
        id="side-bar"
      >
        <div className="w-100 flex flex-col self-center gap-2 h-full ">
          <section className="text-lg font-bold  text-center">Menu</section>
          <div className="flex flex-col w-100 h-full justify-between">
            <section className="flex flex-col ">
              <NavLink
                to="/invoicer/profile"
                className={({ isActive }) =>
                  `${isActive ? "active-tab" : "text-blue-500"} sideBar-tabs
              `
                }
              >
                Profile
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
              <ul className="list list-non w-full flex gap-2 flex-col items-center   transition-all ease-in-out duration-500">
                {dropdownData.map((dropdown, index) => (
                  <li
                    className="w-full flex flex-col hm bg-slate-200 p-[5%]"
                    key={index}
                  >
                    <div
                      className="flex  items-center justify-between w-full transition-all ease-in-out duration-500"
                      onClick={() => handleDropdownClick(index)}
                    >
                      {dropdown.title}
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className={`icon ${
                          activeDropdown === index ? "rotate" : ""
                        }`}
                      />
                    </div>
                    <div
                      className={`${
                        activeDropdown === index
                          ? "dropdown-content dropdown-open flex flex-col"
                          : "dropdown-content dropdown-transition flex flex-col"
                      }`}
                    >
                      {dropdown.items.map((item, itemIndex) => (
                        <span key={itemIndex}>{item}</span>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
            <>
              <Logout />
            </>
          </div>
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
