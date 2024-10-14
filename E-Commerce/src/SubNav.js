import React from "react";
import "boxicons/css/boxicons.min.css";
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import { Link, useNavigate } from "react-router-dom";

const notyf = new Notyf();

const SubNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Remove login status
    // navigate('/Login'); // Redirect to Login page
    notyf.success("LogOut successful!");
  };

  return (
    <nav className="sub-nav">
      <div className="form">
        <div className="register">
          <div className="sign-up">
            <Link to="/SignUp">Sign Up</Link>
          </div>

          <div className="login">
            <Link to="/Login">Log In</Link>
          </div>
        </div>

        <div className="icons-box">
          <a href="#" className="facebook-icon py-2">
            <i className="bx bxl-facebook-square"></i>
          </a>
          <a href="#" className="twitter-icon py-2">
            <i className="bx bxl-twitter"></i>
          </a>
          <a href="#" className="youtube-icon py-2">
            <i className="bx bxl-youtube"></i>
          </a>
          <a href="#" className="instagram-icon py-2">
            <i className="bx bxl-instagram-alt"></i>
          </a>
          <button onClick={handleLogout} className="logout-icon btn-logout btn btn-danger">
            <i className="bx bx-log-out"></i> 
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SubNav;
