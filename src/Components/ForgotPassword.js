import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

function ForgotPassword() {
  return (
    <div className="reset-body">
      <div className="sub-body">
        <form>
          <div>
            <img />
          </div>
          <div className="title text-xl font-semibold">Forgot Password</div>
          {/* <div className="message">
              <p>Enter your email and we'll send you a link to reset your password</p>
           </div> */}
          <div className="input-box">
            <p className="message">
              Enter your email and we'll send you a link to reset your password
            </p>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="button-container">
            <button className="btn btn-primary">Submit</button>
          </div>
          <div className="my-3 flex items-center justify-center gap-3">
            <Link to="/">
              <FaAngleLeft />
            </Link>
              <span>Back to Login</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
