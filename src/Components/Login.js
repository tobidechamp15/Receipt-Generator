import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import pic from "../pic.svg";

function Login() {
  return (
    <div className="conatainer">
      <div className="login-left">
        <div className="image-container">
          <img src={pic} alt="background" />
        </div>
      </div>
      <div className="login-right">
        <div className="nav">
          <h3>Receipt Generator</h3>
          <h3>
            Don't have an account?{" "}
            <span className="login-button">
              <Link to="/">Sign up</Link>
            </span>
          </h3>
        </div>

        <div className="control">
          <div className="title">Login</div>

          <form className="form-body">
            <div className="user-details">
              <div className="input-box">
                <input className="input" type="text" placeholder="Email" />
              </div>
              <div className="input-box">
                <input className="input" type="text" placeholder="Password" />
              </div>
              <div className="text-danger">Forgot password?</div>
            </div>
            <div className="py-4 d-flex justify-content-center align-items-center">
              <button className="btn btn-primary">
                <Link to="/home">Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

{
  /* <div className="container bg-gray-300">
        <div className="p-5 Login-form">
          <h1>
            Login
          </h1>
          <form>
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
              <div className="col-md-8">
                <label>Password</label>
                <input
                
                  type="password"
                  id="name"
                  name="name"
                  placeholder="Password"
                  className=" p-3 rounded=md outline-none bg-gray-200 form-control"
                  required
                />
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <Link to='/home'>
              <button className="btn btn-primary col-md-4">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div> */
}
