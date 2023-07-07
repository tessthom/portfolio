import React from 'react';
import '../styles/Contact.css';

const useState = React.useState;

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }

  return (
    <article id='contact' className='contact-container'>
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' placeholder='Name' />
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' name='email' placeholder='Email' />
        <label htmlFor='message'>Message</label>
        <textarea id='message' name='message' placeholder='Message'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </article>
  )
}

export default Contact;