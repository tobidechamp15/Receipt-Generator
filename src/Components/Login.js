import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "./axios/axios";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();

    // You can add validation here if needed

    // Make a POST request to your API
    axiosInstance
      .post("/auth/signIn", { email, password })
      .then((response) => {
        // Handle a successful response from the API
        console.log(response.data);
        navigate("/dashboard")
        // setSuccessMessage("Login successful"); // Set a success message if needed
      })
      .catch((error) => {
        // Handle errors from the API
        console.error("Error:", error);
        setError("Login failed"); // Set an error message if needed
      });
  }
  return (
    <div className="flex flex-col h-screen container-fluid">
      <div className="h-full ">
        <div className="flex justify-center items-center">
          <span className="font-semibold text-xl my-[3.8%]">
            Receipt Generator
          </span>
        </div>
        <div className="flex w-100 justify-center ">
          <div className="control boxShadow  bg-white py-[5%] my-[5%] px-[2.5%] sm:w-1/2 xs:w-full md:w-[40%] lg:w-[30%]">
            <div className="flex flex-col justify-center items-center  gap-4 my-[2%]">
              <span className="text-xl font-semibold">Welcome Back !</span>
              <span className="text-sm">Sign in to continue</span>
            </div>

            <form className="form-body mt-5" onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box gap-2 flex flex-col">
                  <span className="text-base tracking-wider font-semibold">
                    Email
                  </span>
                  <input className="input" type="email" placeholder="Email" onChange={handleEmailChange} value={email}/>

                </div>
                <div className="input-box gap-2 flex flex-col">
                  <span className="text-base tracking-wider font-semibold">
                    Password
                  </span>
                  <input className="input" type="text" placeholder="Password" onChange={handlePasswordChange} value={password}/>
                </div>
                <div className="text-danger">
                  <Link to="/ForgotPassword">Forgot password?</Link>
                </div>
              </div>
              <div className="py-4 d-flex justify-content-center align-items-center">
                <button className="btn btn-primary" type="submit">
                  <Link to="/home">Login</Link>
                </button>

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
