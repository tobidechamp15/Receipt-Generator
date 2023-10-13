import React from "react";
import "./Signup.css";
import "./Login.css";

const Settings = () => {
  
  const handleSubmit = () => {
    alert('Your Profile has been created')
  }
  return (
    <div className="w-100 flex justify-center">
      <div className="boxShadow control bg-white p-[5%] m-[5%] sm:w-1/2 xs:w-full md:w-[70%] lg:w-[70%] xl:w-[50%]">
        <form className=" flex  flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-blue-500">
              Company Name
            </span>
            <input
              type="text"
              className="input-box input form-control"
              placeholder="Enter Company Name"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-blue-500">Address</span>
            <input
              type="text"
              className="input-box input form-control"
              placeholder="Enter Company Address"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-blue-500">Email</span>
            <input
              type="email"
              className="input-box input form-control"
              placeholder="Enter Company Email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-lg text-blue-500">
              Phone Number
            </span>
            <input
              type="number"
              className="input-box input form-control"
              placeholder="Enter Company Phone Number"
              required
            />
          </div>
          <button
            type="submit"
            className=" btn btn-outline-success w-auto m-3 font-bold"
          >
            Create Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
