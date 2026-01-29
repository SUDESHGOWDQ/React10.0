import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const App = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_ybggv25', 'template_p4tkzkb', form.current, {
        publicKey: 'FmOIszszd4CiYs9ob',
      })
      .then(
        () => {
          console.log('SUCCESS!');  
		  alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
		  alert('Failed to send email. Please try again later.');
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default App