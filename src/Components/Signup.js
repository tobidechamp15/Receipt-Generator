import React, { useState, useEffect } from 'react';
import axios from 'axios';
import axiosInstance from './axios/axios'
import './Signup.css';
import { Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
// import { isDisabled } from '@testing-library/user-event/dist/utils';

function Signup() {
  const [input, setInput] = useState({
    username: "",
    email: "",
    password: "",
  })
  const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });
  // // const [input, setInput] = useState({
  // //   username: '',
  // //   email: '',
  // //   password: '',
  // // });
  // const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false); // Add loading state



  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.id] : e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance
        .post(
          '/auth/signup',
          input
        )
        .then((res) => {
          console.log(res.data);
          setInput(res.data);
          navigate("/login");
          alert("User registered successfully");
        });
    } catch (err) {
      console.log(err)
    }
  }
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Set loading to true while waiting for response
  //   setTimeout(() => {
  //     const validationErrors = {};
  //     if (!formData.username.trim()) {
  //       validationErrors.username = 'Username is required';
  //     }

  //     if (!formData.email.trim()) {
  //       validationErrors.email = 'Email is required';
  //     } else if (/\S+@\S\.\S+/.test(formData.email)) {
  //       validationErrors.email = 'Email is not valid';
  //     }

  //     if (!formData.password.trim()) {
  //       validationErrors.password = 'password is required';
  //     } else if (formData.password.length < 6) {
  //       validationErrors.password = 'password should be at least 6 characters';
  //     }

  //     setErrors(validationErrors);
  //     setLoading(false); // Set loading to false when the response is received

  //     if (Object.keys(validationErrors).length === 0) {
  //       // window.location.href = '/login';
  //       // button.link.href = "/login";
  //       const requestData = {
  //         username: formData.username,
  //         email: formData.email,
  //         password: formData.password,
  //       };
  //       axios
  //         .post('http://localhost:6002/api/auth/signup', requestData, {
  //           headers: {
  //             'Content-Type': 'application/json', // Set the content type header
  //           },
  //         })
  //         .then((response) => {
  //           console.log(response.json); // Handle the response data as needed
  //           // Redirect to the login page or do something else
  //         })
  //         .catch((error) => {
  //           console.error('Error:', error);
  //         });
  //     }
  //   }, 5000); // Simulated 2-second delay, replace with your actual API call
  // };

  // const isButtonDisabled =
  //   !formData.username.trim() ||
  //   !formData.email.trim() ||
  //   !formData.password.trim();
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios
  //       .post('http://localhost:6002/api/auth/signup', input)
  //       .then((res) => {
  //         console.log(res.data);
  //         setInput(res.data);
  //         navigate('/login');
  //         alert('User registerd successfully');
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <div className="d h-[100vh] w-full sm:w-4/5 md:w-full flex  ">
      <div className="left h-100 lg:w-2/3 w-100">
        <div className="nav flex items-center ">
          <h3 className="font-semibold ">Receipt Generator</h3>
          <h3>
            <span className="hidden">Already have an account? </span>
            <span className="login-button btn btn-outline-primary">
              <Link to="/login">Log in</Link>
            </span>
          </h3>
        </div>
        <div className="flex items-center w-full justify-center">
          <div className="flex flex-col control align-self-center bg-white py-3 xs:px-2 h-[100%] gap-7 rounded-md sm:px-8 md:w-[60%]">
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
                  {/* {errors.username && (
                    <span className="text-danger">{errors.username}</span>
                  )} */}
                </div>

                <div className="input-box gap-2 flex flex-col">
                  <span className="text-base tracking-wider font-semibold">
                    Email
                  </span>
                  <input
                     value={input.email}
                    id="email"
                    className="input"
                    type="text"
                    placeholder="Enter email"
                    //name="email"
                    onChange={handleOnChange}
                  />
                  {/* {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )} */}
                </div>

                <div className="input-box gap-2 flex flex-col">
                  <span className="text-base tracking-wider font-semibold">
                    Password
                  </span>
                  <input
                    value={input.password}
                    id="password"
                    className="input"
                    type="password"
                    placeholder="Password"
                    //name="password"
                    onChange={handleOnChange}
                  />

                  {/* {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )} */}
                </div>
              </div>
              {/* <div className="py-4 d-flex justify-content-center align-items-center">
                <button
                  className="btn btn-outline-primary transition-all duration-500"
                  type="submit"
                >
                  Sign up
                </button>
              </div> */}
              <div className="py-4 d-flex justify-content-center align-items-center">
                {/* {loading ? ( */}
                <div className="loader"></div>
                   {/* // Render the loader when loading is true */}
                {/* ) : ( */}
                  <button
                    className="btn btn-outline-primary transition-all duration-500"
                    type="submit"
                  >
                    Sign up
                  </button>
                {/* )} */}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" hidden md:flex w-1/3  gradient h-100"></div>
    </div>
  );
}

export default Signup;
