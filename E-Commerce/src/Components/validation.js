// src/Components/validation.js
import '../App.css';
// Validate email format
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
  return emailPattern.test(email);
};

// Validate password strength
export const validatePassword = (password) => {
  return password.length >= 6; // Minimum length
};

// Validate name (not empty)
export const validateName = (name) => {
  return name.trim() !== ''; // Checks if name is not just whitespace
};

// Validate date of birth
export const validateDOB = ({ day, month, year }) => {
  const isValidDay = day > 0 && day <= 31;
  const isValidMonth = month > 0 && month <= 12;
  const isValidYear = year >= 1900 && year <= new Date().getFullYear(); // Ensure year is current or past
  return isValidDay && isValidMonth && isValidYear;
};

// Validate card number
export const validateCardNumber = (cardNumber) => {
  const cardNumberPattern = /^\d{16}$/; // 16 digits
  return cardNumberPattern.test(cardNumber);
};

// Validate card CVC
export const validateCardCVC = (cvc) => {
  const cvcPattern = /^\d{3}$/; // 3 digits
  return cvcPattern.test(cvc);
};

// Validate expiry date
export const validateExpiryDate = ({ month, year }) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Month is 0-indexed
  // Check if the expiry year is valid and not in the past
  return year > currentYear || (year === currentYear && month >= currentMonth);
};
