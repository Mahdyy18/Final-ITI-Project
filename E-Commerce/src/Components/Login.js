import React, { useState, useEffect } from "react";
import '../App.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import "boxicons/css/boxicons.min.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('form');
    return () => {
      document.body.classList.remove('form');
    };
  }, []);

  const notyf = new Notyf();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "user", // Default to 'user'
    adminSecret: "" // Secret code for admin
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Add state to toggle password visibility

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;

    if (!formData.email.match(emailPattern)) newErrors.email = "Please enter a valid email";
    if (!formData.password.match(passPattern)) newErrors.password = "Password must be 8+ characters with a mix of letters and symbols.";

    // If the user is an admin, check for the correct admin secret
    if (formData.userType === 'admin' && formData.adminSecret !== "12345") {
      newErrors.adminSecret = "Incorrect admin secret!";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      notyf.success("Login successful!");

      // Save login status to localStorage as a string
      localStorage.setItem('isLoggedIn', 'true');

      // Redirect based on user type
      if (formData.userType === 'admin') {
        window.location.href = "https://designers-admins-dashboard.netlify.app"; // Redirect to admin dashboard
      } else {
        navigate('/'); // Redirect to the home page
      }

      // Reset form data
      setFormData({ email: "", password: "", adminSecret: "", userType: "user" });
    } else {
      Object.values(validationErrors).forEach((error) => {
        notyf.error(error);
      });
    }
  };

  return (
    <div className="container container-form form">
      <header>Login Form</header>
      <form onSubmit={handleSubmit}>
        <div className={`field ${errors.email ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className={`field ${errors.password ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type={showPassword ? "text" : "password"} // Change type based on showPassword
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span 
              className={`password-toggle ${showPassword ? 'visible' : ''}`} 
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
            </span>
          </div>
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        {/* User Type Selection */}
        <div className="field">
          <div>
            <label className="user-type-label">
              <input
                type="radio"
                name="userType"
                value="user"
                checked={formData.userType === "user"}
                onChange={handleChange}
              />
              User
            </label>
            <label className="user-type-label">
              <input
                type="radio"
                name="userType"
                value="admin"
                checked={formData.userType === "admin"}
                onChange={handleChange}
              />
              Admin
            </label>
          </div>
        </div>

        {/* Admin Secret Field (only visible if Admin is selected) */}
        {formData.userType === "admin" && (
          <div className={`field ${errors.adminSecret ? "invalid" : ""}`}>
            <div className="input-field">
              <input
                type="password"
                name="adminSecret"
                placeholder="Enter Admin Secret"
                value={formData.adminSecret}
                onChange={handleChange}
              />
            </div>
            {errors.adminSecret && <p className="error-text">{errors.adminSecret}</p>}
          </div>
        )}

        <div className="links">
          <a href="#">Forgot Password</a>
          <Link to="/signup">Sign Up</Link>
        </div>

        <div className="input-field button">
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
  );
};

export default Login;
