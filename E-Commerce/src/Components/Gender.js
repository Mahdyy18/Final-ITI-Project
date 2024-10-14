import React from 'react';
import '../App.css';

  const Gender = ({ setValid = () => {} }) => {

  const handleGenderChange = (e) => {
    setValid(e.target.checked); 
  };

  return (
    <div className="col-half">
      <h4 className='Payment-Details'>Gender</h4>
      <div className="input-group">
        <input id="gender-male" type="radio" name="gender" value="male" onChange={handleGenderChange} />
        <label htmlFor="gender-male">Male</label>
        <input id="gender-female" type="radio" name="gender" value="female" onChange={handleGenderChange} />
        <label htmlFor="gender-female">Female</label>
      </div>
    </div>
  );
};

export default Gender;
