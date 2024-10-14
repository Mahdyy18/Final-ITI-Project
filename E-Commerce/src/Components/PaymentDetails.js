// src/Components/PaymentDetails.js

import React, { useState, useEffect } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcVisa, faCcPaypal } from '@fortawesome/free-brands-svg-icons';
import { faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  validateCardNumber,
  validateCardCVC,
  validateExpiryDate,
} from './validation'; 


const PaymentDetails = ({ setValid = () => {} }) => {
  

    const [cardNumber, setCardNumber] = useState('');
    const [cardCVC, setCardCVC] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [errors, setErrors] = useState({ cardNumber: '', cardCVC: '', expiryDate: '' });
  
    const validate = () => {
      const newErrors = {};
      let isValid = true;
  
      const cardNumberRegex = /^\d{16}$/;
      if (!cardNumberRegex.test(cardNumber)) {
        newErrors.cardNumber = 'Card number must be 16 digits';
        isValid = false;
      }
  
      const cardCVCRegex = /^\d{3}$/;
      if (!cardCVCRegex.test(cardCVC)) {
        newErrors.cardCVC = 'CVC must be 3 digits';
        isValid = false;
      }
  
      const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      if (!expiryDateRegex.test(expiryDate)) {
        newErrors.expiryDate = 'Expiry date must be in MM/YY format';
        isValid = false;
      }
  
      setErrors(newErrors);
      setValid(isValid);
    };
  
    useEffect(() => {
      validate(); // Initial validation
    }, [cardNumber, cardCVC, expiryDate]);
  
    const handleCardNumberChange = (e) => {
      setCardNumber(e.target.value);
      validate();
    };
  
    const handleCardCVCChange = (e) => {
      setCardCVC(e.target.value);
      validate();
    };
  
    const handleExpiryDateChange = (e) => {
      setExpiryDate(e.target.value);
      validate();
    };
  
    return (
      <div className="row">
       
    
        <h4 className='Payment-Details mt-2'>Payment Details</h4>
        <div className="input-groupf">
          <input className= 'input-payment' id="payment-method-card" type="radio" name="payment-method" value="card" defaultChecked />
          <label htmlFor="payment-method-card">
            <span>
              <FontAwesomeIcon icon={faCcVisa} /> Credit Card
            </span>
          </label>
          <input className= 'input-payment' id="payment-method-paypal" type="radio" name="payment-method" value="paypal" />
          <label htmlFor="payment-method-paypal">
            <span>
              <FontAwesomeIcon icon={faCcPaypal} /> Paypal
            </span>
          </label>
        </div>
  
        <div className="input-groupf input-group-icon">
          <input 
            className= 'input-payment'
            type="text" 
            placeholder="Card Number" 
            value={cardNumber} 
            onChange={handleCardNumberChange} 
            required 
          />
          <div className="input-icon">
            <FontAwesomeIcon icon={faCreditCard} />
          </div>
          {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        </div>
  
        <div className="col-half">
          <div className="input-groupf input-group-icon">
            <input 
              className= 'input-payment'
              type="text" 
              placeholder="Card CVC" 
              value={cardCVC} 
              onChange={handleCardCVCChange} 
              required 
            />
            <div className="input-icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            {errors.cardCVC && <span className="error">{errors.cardCVC}</span>}
          </div>
        </div>
  
        {/* Expiry Date Input */}
        <div className="col-half">
          <div className="input-groupf">
            <input 
              className= 'input-payment'
              type="text" 
              placeholder="Expiry Date (MM/YY)" 
              value={expiryDate} 
              onChange={handleExpiryDateChange} 
              required 
            />
            {errors.expiryDate && <span className="error">{errors.expiryDate}</span>}
          </div>
        </div>

        
      </div>
    );
  
};



export default PaymentDetails;
