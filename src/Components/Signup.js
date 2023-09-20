import React from "react";
import "./Signup.css";

function Signup() {
  return (
    <div className="container bg-gray-300">
      <div className="p-5 Signup-form">
        <h1>SIGN UP</h1>
        <form>
          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <label>Company Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your company name"
                className=" p-3 rounded=md outline-none bg-gray-200 form-control"
                required
              />
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-8">
              <label>E-mail Address</label>
              <input
                type="email"
                id="name"
                name="name"
                placeholder="E-mail Address"
                className=" p-3 rounded=md outline-none bg-gray-200 form-control"
                required
              />
            </div>
          </div>

          <div className="row justify-content-center align-items-center">
            <div className="col-md-4">
              <label>Password</label>
              <input
                type="password"
                id="name"
                name="name"
                placeholder="Password"
                className=" p-3 rounded=md outline-none bg-gray-200 form-control col-md-6"
                required
              />
            </div>
            <div className="col-md-4">
              <label>Confirm Password</label>
              <input
                type="password"
                id="name"
                name="name"
                placeholder="Confirm password"
                className=" p-3 rounded=md outline-none bg-gray-200 form-control col-md-6"
                required
              />
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <button className="btn btn-primary col-md-4">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
