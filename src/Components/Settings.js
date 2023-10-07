import React from "react";
import "./Signup.css";
import "./Login.css";

const Settings = () => {
  return (
    <div className="w-100 flex justify-center">
      <div className="boxShadow control bg-white p-[5%] m-[5%] sm:w-1/2 xs:w-full md:w-[70%] lg:w-[70%] xl:w-[50%]">
        <form className=" flex  flex-col gap-2">
          <div className="flex flex-col gap-2">
            <span>Company Name</span>
            <input
              type="text"
              className="input-box input"
              placeholder="Enter Company Name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span>Address</span>
            <input
              type="text"
              className="input-box input"
              placeholder="Enter Company Address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <span>Email</span>
            <input
              type="email"
              className="input-box input"
              placeholder="Enter Company Address"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span>Phone Number</span>
            <input
              type="number"
              className="input-box input"
              placeholder="Enter Company Phone Number"
            />
          </div>
          <button type="submit" className=" btn btn-outline-success w-auto m-3 font-bold">Create Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
