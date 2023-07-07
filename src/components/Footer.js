import React from 'react';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id='footer'>
      <p>Copyright &copy; {currentYear} Tess Thomas. All rights reserved.</p>
    </footer>
  );
}

export default Footer;