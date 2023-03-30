import React, { useState } from 'react';
import './Contact.css';
export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate name
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    // Validate phone
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g
    if (!phone.trim() || !phoneRegex.test(phone)) {
      setPhoneError(true);
    } else {
      setPhoneError(false);
    }
    // If all inputs are valid, submit form
    if (name.trim() && email.trim() && emailRegex.test(email) && phone.trim() && phoneRegex.test(phone)) {
      // Clear form fields
      setName('');
      setEmail('');
      setPhone('');
    }
  };
  return (
    <section id="contact" className="p-5 pt-0">
      <div className="container p-5 pt-2">
        <div className="sectionHeader contactHeader">
          <p className="header">CONTACT ME</p>
          <div className="starContainer">
            <i className="fa-solid fa-star star"></i>
          </div>
        </div>
        <form className="w-75 mx-auto" onSubmit={handleSubmit}>
          <div className="form-group form-floating controls mb-0 pb-2">
            <input className="form-control" id="Name"type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)}/>
            <label htmlFor="Name">Name</label>
            {nameError && <p className="help-block text-danger nameError fw-semibold">&bull; Please enter your name.</p>}
          </div>
          <div className="form-group form-floating controls mb-0 pb-2">
            <input className="form-control" id="email" type="text" placeholder="E-mail" value={email} onChange={(event) => setEmail(event.target.value)}/>
            <label htmlFor="email">E-mail</label>
            {emailError && ( <p className="help-block text-danger emailError fw-semibold">&bull; Please enter a valid email address.</p> )}
          </div>
          <div className="form-group form-floating controls mb-0 pb-2">
            <input className="form-control"id="phone" type="text" placeholder="Phone"value={phone} onChange={(event) => setPhone(event.target.value)} />
            <label htmlFor="phone">Phone</label>
            {phoneError && ( <p className="help-block text-danger phoneError fw-semibold">&bull; Please enter a valid phone number.</p> )}
          </div>
        <div className='form-group form-floating  controls mb-2 pb-2'>
          <textarea className='form-control' rows={5} id="message" type="text" placeholder="Message"/>
          <label htmlFor='message'>Message</label>
          <p className='help-block text-danger messageerorr d-none'></p>
        </div>
          <button className="sendBtn">Send</button>
            </form>
     </div>
    </section>
   )
 }
