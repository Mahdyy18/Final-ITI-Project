import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Account from './Components/Account';
import DateOfBirth from './Components/DateOfBirth';
import PaymentDetails from './Components/PaymentDetails';
import Terms from './Components/Terms';
import emailjs from '@emailjs/browser';

function App() {
  const [accountValid, setAccountValid] = useState(false);
  const [dobValid, setDobValid] = useState(false);
  const [paymentValid, setPaymentValid] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [fullName, setFullName] = useState(''); // حالة الاسم الكامل
  const [userEmail, setUserEmail] = useState(''); // حالة البريد الإلكتروني

  const handleSubmit = (e) => {
    e.preventDefault();

    if (accountValid && dobValid && paymentValid && termsAccepted) {
      // إرسال البريد الإلكتروني هنا
      sendConfirmationEmail();

      Swal.fire({
        icon: 'success',
        title: 'Form Submitted!',
        text: 'Your form has been submitted successfully.',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Form Invalid!',
        text: 'Please check the form fields and try again.',
      });
    }
  };

  const sendConfirmationEmail = () => {
    const templateParams = {
      full_name: fullName, // استخدم حالة الاسم الكامل
      user_email: userEmail, // استخدم حالة البريد الإلكتروني
      message: 'Your purchase has been confirmed!',
    };

    emailjs.send('service_q5fe9sp', 'template_py36adg', templateParams, '8q1Qex3fxpnN707Wc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        // إعادة تعيين الحقول بعد نجاح الإرسال
        setFullName('');
        setUserEmail('');
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div className="container containerPayment">
      <form id="paymentForm" onSubmit={handleSubmit}>
        <Account setValid={setAccountValid} setFullName={setFullName} setUserEmail={setUserEmail} /> {/* تمرير الحالات إلى Account */}
        <div className="row row-payment">
          <DateOfBirth setValid={setDobValid} />
        </div>
        <PaymentDetails setValid={setPaymentValid} />
        <Terms setValid={setTermsAccepted} />
        <div className="row">
          <div className="input-groupf">
            <button type="submit" className="btn-payment">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
