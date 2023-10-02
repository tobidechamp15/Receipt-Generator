import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axios/axios";
import "./Login.css";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [networkError, setNetworkError] = useState("");
  const navigate = useNavigate();

  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailError(null);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (email) {
      setEmailError("");
    }
    // You can add validation here if needed

    // Make a POST request to your API
    axiosInstance
      .post("/auth/signIn", { email, password })
      .then((response) => {
        // Handle a successful response from the API
        console.log(response.data);
        navigate("/invoicer/profile");
        // setSuccessMessage("Login successful"); // Set a success message if needed
      })
      .catch((error) => {
        // Handle errors from the API
        console.log("error is supposed to be displayed here");
        console.error("Error:", error);
        setError("Login failed"); // Set an error message if needed
        if (error.response && error.response.status === 401) {
          setEmailError("Email not registered"); // Set an error message for email
        }
        if (error.request.status === 0) {
          setNetworkError("Check your connection");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <>
      <div
        className={`${
          networkError
            ? "h-screen flex absolute bg-gray-200 w-full opacity-75  text-5xl justify-center items-center text-red-700 font-bold gap-2 flex-col  "
            : "hidden"
        }`}
      >
        <FontAwesomeIcon icon={faCircleExclamation} bounce />
        {networkError}
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col h-screen container-fluid ">
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
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        value={email}
                        required
                      />
                      <div
                        className={`${
                          emailError
                            ? "bg-white border border-red-400 text-red-700 px-4 py-3 rounded relative"
                            : "hidden"
                        }`}
                        role="alert"
                      >
                        {/* <strong className="font-bold">Error:</strong> */}
                        {emailError}
                      </div>
                    </div>
                    <div className="input-box gap-2 flex flex-col">
                      <span className="text-base tracking-wider font-semibold">
                        Password
                      </span>
                      <input
                        className="input"
                        type="text"
                        placeholder="Password"
                        onChange={handlePasswordChange}
                        value={password}
                        required
                      />
                    </div>
                    <div className="text-danger">
                      <Link to="/ForgotPassword">Forgot password?</Link>
                    </div>
                  </div>
                  <div className="py-4 d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-primary text-blue-500"
                      type="submit"
                    >
                      Login
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
      )}
    </>
  );
};

export default Login;
