import React, { useState, useEffect } from 'react';
import '../App.css';


  const DateOfBirth = ({ setValid = () => {} }) => {

  
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [error, setError] = useState('');

  const validate = () => {
    const { day, month, year } = dob;
    if (!day || !month || !year) {
      setError('All fields are required');
      setValid(false);
    } else if (isNaN(day) || isNaN(month) || isNaN(year)) {
      setError('Please enter valid numbers');
      setValid(false);
    } else if (parseInt(day) < 1 || parseInt(day) > 31 || parseInt(month) < 1 || parseInt(month) > 12 || parseInt(year) < 1900) {
      setError('Please enter a valid date');
      setValid(false);
    } else {
      setError('');
      setValid(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDob({ ...dob, [name]: value });
  };

  useEffect(() => {
    validate();
  }, [dob]);

  return (
    <div className="col-half">
      <h4 className='Payment-Details mt-2'>Date of Birth</h4>
      <div className="input-group">
        <div className="col-third">
          <input 
            
            name="day" 
            type="text" 
            placeholder="DD" 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="col-third">
          <input 
            name="month" 
            type="text" 
            placeholder="MM" 
            onChange={handleInputChange} 
            required 
          />
        </div>
        <div className="col-third">
          <input 
            name="year" 
            type="text" 
            placeholder="YYYY" 
            onChange={handleInputChange} 
            required 
          />
        </div>
      </div>
      {error && <span className="error mb-2">{error}</span>}
    </div>
  );
};

export default DateOfBirth;
