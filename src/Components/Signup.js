import React, { useState, useEffect } from "react";
import axiosInstance from "./axios/axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

function Signup() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoader] = useState(false);
  const [errors, setErrors] = useState({});
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setErrors({});
    setSignUpError(null);
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!input.username.trim()) {
      validationErrors.username = "Username is required";
    }
    if (!input.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (/\S+@\S\.\S+/.test(input.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!input.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (input.password.length < 6) {
      validationErrors.password = "password should be at least 6 characters";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoader(true);
        await axiosInstance.post("/signup", input).then((res) => {
          console.log(res.data);
          setInput(res.data);
          navigate("/");
          alert("User registered successfully");
        });
      } catch (err) {
        console.log(err);
        if (err.response && err.response.status === 400) {
          setSignUpError("User already exists");
        }
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="d h-[100vh] w-full md:w-4/5 flex w-100 justify-center items-center">
          <div className="left h-100 lg:w-2/3 w-100">
            <div className="nav flex items-center fixed top-0 w-100">
              <h3 className="font-semibold ">Receipt Generator</h3>
              <h3>
                <span className="flex ">Already have an account? </span>
                <span className="login-button btn btn-outline-primary lg:text-white">
                  <Link to="/">Log in</Link>
                </span>
              </h3>
            </div>
            <div className="flex items-center w-full justify-center h-full ">
              <div className="flex flex-col control align-self-center bg-white py-3  rounded-xl p-[5%]  gap-7  sm:px-8 md:w-[60%]">
                <div className="title  mb-2">
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <span className="font-semibold">Create New Account</span>
                    <span className="text-center ">
                      Get your free Receipt Generator account now
                    </span>
                  </div>
                </div>

                <form className="form-body w-full" onSubmit={onSubmit}>
                  <div className="user-details">
                    <div className="input-box gap-2 flex flex-col">
                      <span className="text-base tracking-wider font-semibold">
                        Username
                      </span>
                      <input
                        value={input.username}
                        id="username"
                        className="input form-control"
                        type="text"
                        placeholder="Enter username"
                        //name="username"
                        onChange={handleOnChange}
                      />
                      {errors.username && (
                        <span className="text-danger">{errors.username}</span>
                      )}
                    </div>

                    <div className="input-box gap-2 flex flex-col">
                      <span className="text-base tracking-wider font-semibold">
                        Email
                      </span>
                      <div
                        className={`${
                          signUpError
                            ? "bg-red-400 border border-red-400 text-white px-3 py-1 rounded relative"
                            : "hidden"
                        }`}
                        role="alert"
                      >
                        <strong className="font-bold">Error: </strong>
                        {signUpError}
                      </div>
                      <input
                        value={input.email}
                        id="email"
                        className="input form-control"
                        type="text"
                        placeholder="Enter email"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                      />
                      {errors.email && (
                        <span className="text-danger">{errors.email}</span>
                      )}
                    </div>

                    <div className="input-box gap-2 flex flex-col">
                      <span className="text-base tracking-wider font-semibold">
                        Password
                      </span>
                      <input
                        value={input.password}
                        id="password"
                        className="input form-control"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={handleOnChange}
                      />

                      {errors.password && (
                        <span className="text-danger">{errors.password}</span>
                      )}
                    </div>
                  </div>

                  <div className="py-4 d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-outline-primary transition-all duration-500"
                      type="submit"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className=" hidden md:flex w-1/3  gradient h-100"></div>
        </div>
      )}
    </>
  );
}

export default Signup;
