import React from 'react'
import { Link } from "react-router-dom";
import './ResetPassword.css'

const ResetPassword = () => {
  return (
    <div className="reset-body">
      <div className="sub-body">
        <form>
          <div className="title text-xl font-semibold">Reset Password</div>
          <div className="user-details">
            <div>
              <span>Email</span>
              <input type="email" placeholder="Enter email" />
            </div>
            <div>
              <span>Password</span>
              <input type="password" placeholder="Enter password" />
            </div>
            <div>
              <span>Confirm Password</span>
              <input type="password" placeholder="Confirm password" />
            </div>
          </div>
          <div className="button-container">
            <button className="btn btn-primary">Submit</button>
          </div>
          <div className="login-reroute">
            <Link to="/">Back to Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword
