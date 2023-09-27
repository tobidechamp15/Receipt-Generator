import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import pic from '../pic.svg';

function Login() {
  return (
    <div className="flex flex-col h-screen container-fluid">
      <div className="h-full ">
        <div className="flex justify-center items-center">
          <span className="font-semibold text-xl my-[3.8%]">
            Receipt Generator
          </span>
        </div>
        <div className="flex w-100 justify-center ">
          <div className="control boxShadow  bg-white py-[5%] my-[5%] px-[2.5%] sm:w-2/5 xs:w-full md:w-[30%] lg:w-[30%]">
            <div className="flex flex-col justify-center items-center  gap-4 my-[2%]">
              <span className="text-xl font-semibold">Welcome Back !</span>
              <span className="text-sm">Sign in to continue</span>
            </div>

            <form className="form-body mt-5">
              <div className="user-details">
                <div className="input-box gap-2 flex flex-col">
                  <span className="text-base tracking-wider font-semibold">
                    Email
                  </span>
                  <input className="input" type="text" placeholder="Email" />
                </div>
                <div className="input-box gap-2 flex flex-col">
                  <span className="text-base tracking-wider font-semibold">
                    Password
                  </span>
                  <input className="input" type="password" placeholder="Password" />
                </div>
                <div className="text-danger">
                  <Link to="/ForgotPassword">Forgot password?</Link>
                </div>
              </div>
              <div className="py-4 d-flex justify-content-center align-items-center">
                <Link to="/home">
                  <button className="btn btn-primary">Login</button>
                </Link>
              </div>
              <div>
                <span className="me-1">Don't have an account?</span>
                <Link to="/signup">
                  <span className=" w-fit text-center text-green-500 font-medium transition-all duration-500 underline underline-offset-2">
                    Sign up
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
