import React, {useState} from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import pic from "../pic.svg"
import { isDisabled } from "@testing-library/user-event/dist/utils";





function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password:''
  })

  const [errors, setErrors] = useState({})


  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({
      ...formData, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}
    if(!formData.username.trim()) {
      validationErrors.username = "username is required"
    }

    if(!formData.email.trim()) {
      validationErrors.email = "Email is required"
    }else if(/\S+@\S\.\S+/.test(formData.email)){
      validationErrors.email = "Email is not valid"
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 6) {
      validationErrors.password = "password should be at least 6 characters";
    }

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0){
      window.location.href = "/login";
      // button.link.href = "/login";
    }
  }

  // const isButtonDisabled =
  //   !formData.username.trim() ||
  //   !formData.email.trim() ||
  //   !formData.password.trim();

  
  return (
    <div className="conatainer">
      <div className="left">
        <div className="nav">
          <h3>Receipt Generator</h3>
          <h3>
            <span className="hide">Already have an account? </span>
            <span className="login-button btn btn-outline-primary">
              <Link to="/login">Log in</Link>
            </span>
          </h3>
        </div>

        <div className="control">
          <div className="title">Sign Up</div>

          <form className="form-body" onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <input
                  className="input"
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                />
                {errors.username && (
                  <span className="text-danger">{errors.username}</span>
                )}
              </div>

              <div className="input-box">
                <input
                  className="input"
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>

              <div className="input-box">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />

                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>
            </div>
            <div className="py-4 d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-primary" type="submit">
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="right">
        <div className="image-container">
          <img src={pic} alt="background" className="hide" />
        </div>
      </div>
    </div>
  );
}

export default Signup;

// <div className="container bg-gray-300">
//   <div className="p-5 Signup-form">
//     <h1>SIGN UP</h1>
//     <form>
//       <div className="row justify-content-center align-items-center">
//         <div className="col-md-8">
//           <label>Company Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Your company name"
//             className=" p-3 rounded=md outline-none bg-gray-200 form-control"
//             required
//           />
//         </div>
//       </div>

//       <div className="row justify-content-center align-items-center">
//         <div className="col-md-8">
//           <label>E-mail Address</label>
//           <input
//             type="email"
//             id="name"
//             name="name"
//             placeholder="E-mail Address"
//             className=" p-3 rounded=md outline-none bg-gray-200 form-control"
//             required
//           />
//         </div>
//       </div>

//       <div className="row justify-content-center align-items-center">
//         <div className="col-md-4">
//           <label>Password</label>
//           <input
//             type="password"
//             id="name"
//             name="name"
//             placeholder="Password"
//             className=" p-3 rounded=md outline-none bg-gray-200 form-control col-md-6"
//             required
//           />
//         </div>
//         <div className="col-md-4">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             id="name"
//             name="name"
//             placeholder="Confirm password"
//             className=" p-3 rounded=md outline-none bg-gray-200 form-control col-md-6"
//             required
//           />
//         </div>
//       </div>

//       <div className="d-flex justify-content-center align-items-center">
//         <button className="btn btn-primary col-md-4">Sign up</button>
//       </div>
//       <div className="row justify-content-center align-items-center">
//         <div className="col-md-3">
//           <a href="./Home.js">
//             <p>
//               Already have an account? <Link to='/login' className="text-primary">Login</Link>
//             </p>
//           </a>
//         </div>
//       </div>
//     </form>
//   </div>
// </div>
