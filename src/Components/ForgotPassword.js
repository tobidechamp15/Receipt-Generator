import React, { useState } from "react";
import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import axiosInstance from "./axios/axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    try {
      await axiosInstance.post("/forgotPassword", email).then((response) => {
        setStatus(response.data.Status);
        console.log(response);
        // if (!response.data.error) {
        //   setStatus("An Email has been sent to your registered email address!");
        // } else {
        //   setStatus("Invalid Username or Password");
        // }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="reset-body">
      <div className="sub-body">
        <form onSubmit={handleSubmit}>
          <div className="title text-xl font-semibold">Forgot Password</div>
          {/* <div className="message">
              <p>Enter your email and we'll send you a link to reset your password</p>
           </div> */}
          <div className="input-box">
            <p className="message">
              Enter your email and we'll send you a recovery code to reset your
              password
            </p>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <span>{status}</span>
          <button type="submit" className="btn btn-outline-primary">
            Submit
          </button>
          <div className="login-reroute">
            <Link to="/">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
