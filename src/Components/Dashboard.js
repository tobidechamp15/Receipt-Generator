import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import FontAwesomeIcon from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import {
  faHome,
  faUserCircle,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";

import menu from "../assets/menu-ham.png";

const Dashboard = () => {
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
        <div className="w-[80%] flex flex-col self-center ">
          <section className="text-lg font-bold  text-center">Menu</section>

          <span className="bg-gradient-to-r  font-bold duration-300 bg-blue-300  rounded-xl px-3 py-2 t text-lg my-4">
            Dashboard
          </span>
          <Link to="/home">
            <span className="px-3 py-2  text-lg bg-">Add Receipt</span>
          </Link>
        </div>
      </section>
      <section className=" flex flex-col md:ms-[250px] h-screen">
        <div className="flex w-100 b p-3 justify-between">
          <img
            src={menu}
            alt="Add logo"
            id="ham"
            className="me-3 sm:hidden cursor-pointer"
            onClick={toggleSidebar}
          />
          <span className="text-xl xs:hidden font-bold">Receipt Generator</span>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="items-end justify-end self-end text-[20px] text-blue-400 bg-white p-1 rounded-[50%]"
            />
          </div>
        </div>
        <div className="bg-gray-200 py-3 h-full">
          <span className="text-blue-400 m-3 my-3 font-bold text-xl">
            Profile Overview
          </span>
          <div className="flex gap-3 flex-wrap bg-white flex-col p-[5%] m-[5%] rounded-lg">
            <FontAwesomeIcon
              icon={faUser}
              className="bg-gray-300 p-3 rounded-[50%] text-[70px] w-fit mx-3"
            />
            <div className="flex flex-col ">
              <span className="text-xl font-bold">Company Name</span>
              <section className="text-lg text-blue-400 gap-2 flex items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                <span className="">Address</span>
              </section>
            </div>
            <hr />
            <div className="flex  xs:flex-col">
              <span className="w-[120px]">Mobile :</span>
              <span>+232 4334 2343</span>
            </div>
            <div className="flex  xs:flex-col">
              <span className="w-[120px]">Email :</span>
              <span>Demoem232@gmail.com</span>
            </div>
            <div className="flex  xs:flex-col">
              <span className="w-[120px]">Plan :</span>
              <span>Basic</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Dashboard;
