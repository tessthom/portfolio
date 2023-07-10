import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  }

  const setThankYou = () => {
    alert(`Thanks for reaching out, ${name}. I'll be in touch at ${email} shortly!`);
  }

  return (
    <article id='contact' className='contact-container'>
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor='name'>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} type='text' id='name' name='name' />
        </div>
        <div className="field">
          <label htmlFor='email'>Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type='email' id='email' name='email' />
        </div>
        <div className="field">
          <label htmlFor='message'>Message</label>
          <textarea value={message} onChange={e => setMessage(e.target.value)} id='message' name='message'></textarea>
        </div>
        <button onClick={setThankYou} type='submit'>Submit</button>
      </form>
    </article>
  )
}

export default Contact;