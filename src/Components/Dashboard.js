import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faUserCircle,
  faGear,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [userData, setUserData] = useState([]);

  const userId = localStorage.getItem("userId");
  useEffect(() => {
    const getUser = async () => {
      try {
        const loggedInUser = localStorage.getItem("userId");
        const isLoggedIn = !!loggedInUser;

        console.log(userId);
        if (userId) {
          const response = await fetch(
            `https://myreceipt.onrender.com/api/auth/getUsers`,
            {
              method: "GET",
              headers: {},
            }
          );
          const data = await response.json();
          // console.log(data); // Just an example of what you can do with the response data
          const user = data.id;
          data.map((user) => {
            if (user._id === loggedInUser) {
              setUserData(user);
              // console.log(user)
            }
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    getUser();
  }, []);
  return (
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
          <span className="text-xl font-bold">{userData.username}</span>
          <section className="text-lg text-blue-400 gap-2 flex items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="">Address</span>
          </section>
        </div>
        <hr />

        <div className="flex  xs:flex-col">
          <span className="w-[120px]">Username :</span>
          <span className="font-semibold text-gray-500">
            {userData.username}
          </span>
        </div>
        <div className="flex  xs:flex-col">
          <span className="w-[120px]">Email :</span>
          <span className="font-semibold text-gray-500">{userData.email}</span>
        </div>
        <div className="flex  xs:flex-col">
          <span className="w-[120px]">Plan :</span>
          <span>Basic</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
