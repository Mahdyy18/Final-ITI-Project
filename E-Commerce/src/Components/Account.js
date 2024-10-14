import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Account = ({ setValid = () => {}, setFullName, setUserEmail }) => {
  const [fullName, setFullNameLocal] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    let isValid = true;

    if (fullName.trim() === '' || fullName.split(' ').length < 2) {
      newErrors.fullName = 'Full Name must be at least two words';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain at least one letter and one number';
      isValid = false;
    }

    setErrors(newErrors);
    setValid(isValid);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    if (name === 'fullName') {
      setFullNameLocal(value);
      setFullName(value);
    } else if (name === 'email') {
      setEmail(value);
      setUserEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  useEffect(() => {
    validate();
  }, [fullName, email, password]);

  return (
    <div className="row">
      <h4 className='Payment-Details pb-2'>Account</h4>
      <form>
        <div className="input-groupf input-group-icon">
          <input
            className='w-100 mb-1'
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={handleChange}
            required
          />
          <div className="input-icon">
            <FontAwesomeIcon icon={faUser} />
          </div>
          {errors.fullName && <span className="error mb-2">{errors.fullName}</span>}
        </div>
        <div className="input-groupf input-group-icon">
          <input
            className='w-100 mb-1'
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            required
          />
          <div className="input-icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          {errors.email && <span className="error mb-2">{errors.email}</span>}
        </div>
        <div className="input-groupf input-group-icon">
          <input
            className='w-100 mb-1'
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
            required
          />
          <div className="input-icon">
            <FontAwesomeIcon icon={faKey} />
          </div>
          {errors.password && <span className="error mb-2">{errors.password}</span>}
        </div>
      </form>
    </div>
  );
};

export default Account;
