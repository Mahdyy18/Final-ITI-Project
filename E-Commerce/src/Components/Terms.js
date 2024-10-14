import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


  const Terms = ({ setValid = () => {} }) => {

  const handleTermsChange = (e) => {
    setValid(e.target.checked); 
  };

  return (
    <div className="row">
      <h4 className='Payment-Details mt-1'>Terms and Conditions</h4>
      <div className="input-groupf d-flex">
        <input id="terms" type="checkbox" required onChange={handleTermsChange} />
        <label htmlFor="terms">
          <br></br>
          &nbsp;&nbsp;&nbsp;I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.
          <span className="check-icon m-4">
            <FontAwesomeIcon icon={faCheck} />
          </span>
        </label>
      </div>
    </div>
  );
};

export default Terms;
