import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  return (
    <div className="reset-body">
      <div className="sub-body">
        <form>
          <div className="title text-xl font-semibold">Forgot Password</div>
          {/* <div className="message">
              <p>Enter your email and we'll send you a link to reset your password</p>
           </div> */}
          <div className="input-box">
            <p className="message">
              Enter your email and we'll send you a recovery code to reset your
              password
            </p>
            <input type="email" placeholder="Enter email" />
          </div>
          <div className="button-container">
            <button className="btn btn-primary">
              <Link to="/ResetCode">Submit</Link>
            </button>
          </div>
          <div className="login-reroute">
            <Link to="/">Back to Login</Link>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
