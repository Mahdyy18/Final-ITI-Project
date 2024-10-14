import React, { useState, useEffect } from "react";
import '../App.css';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import "boxicons/css/boxicons.min.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  useEffect(() => {
    document.body.classList.add('form');

    return () => {
      document.body.classList.remove('form');
    };
  }, []);

  const notyf = new Notyf();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const namePattern = /^[a-zA-Z ]{2,}$/;
    const usernamePattern = /^[a-zA-Z0-9_.-]{2,}$/;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_-])[A-Za-z\d@$!%*?&_-]{8,}$/;

    if (!formData.name.match(namePattern)) newErrors.name = "Please enter a valid Name";
    if (!formData.username.match(usernamePattern)) newErrors.username = "Please enter a valid Username";
    if (!formData.email.match(emailPattern)) newErrors.email = "Please enter a valid email";
    if (!formData.password.match(passPattern)) newErrors.password = "Password must be 8+ characters with a mix of letters and symbols.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      notyf.success("Signup successful!");
      setFormData({ name: "", username: "", email: "", password: "", confirmPassword: "" });
      setErrors({}); // Clear errors after successful submission
    } else {
      Object.values(validationErrors).forEach((error) => {
        notyf.error(error);
      });
    }
  };

  return (
    <div className="container container-form form">
      <header>Sign Up Form</header>
      <form onSubmit={handleSubmit}>
        <div className={`field ${errors.name ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              aria-describedby={errors.name ? "name-error" : null}
              required
            />
          </div>
          {errors.name && <p id="name-error" className="error-text">{errors.name}</p>}
        </div>

        <div className={`field ${errors.username ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type="text"
              name="username"
              placeholder="Enter your Username"
              value={formData.username}
              onChange={handleChange}
              aria-describedby={errors.username ? "username-error" : null}
              required
            />
          </div>
          {errors.username && <p id="username-error" className="error-text">{errors.username}</p>}
        </div>

        <div className={`field ${errors.email ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              aria-describedby={errors.email ? "email-error" : null}
              required
            />
          </div>
          {errors.email && <p id="email-error" className="error-text">{errors.email}</p>}
        </div>

        <div className={`field ${errors.password ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              aria-describedby={errors.password ? "password-error" : null}
              required
            />
            <span 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
            </span>
          </div>
          {errors.password && <p id="password-error" className="error-text">{errors.password}</p>}
        </div>

        <div className={`field ${errors.confirmPassword ? "invalid" : ""}`}>
          <div className="input-field">
            <input
              type={showPassword ? "text" : "password"} // Toggle between text and password
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              aria-describedby={errors.confirmPassword ? "confirmPassword-error" : null}
              required
            />
            <span 
              className="password-toggle" 
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? <i className="bx bx-hide"></i> : <i className="bx bx-show"></i>}
            </span>
          </div>
          {errors.confirmPassword && <p id="confirmPassword-error" className="error-text">{errors.confirmPassword}</p>}
        </div>

        <div className="links">
          <a href="#">Forgot Password</a>
          <Link to="/login">Log In</Link>
        </div>

        <div className="input-field button">
          <input type="submit" value="Sign Up Now" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;

