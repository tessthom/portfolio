import React from 'react';
import '../styles/NavBar.css';
import ttLogoFBFDFF from '../images/ttLogoFBFDFF.svg';

function NavBar() {
  return (
    <nav className='navbar'>
      <img src={ttLogoFBFDFF} alt='TT logo' />
      <ul className='nav-list'>
        <li className='nav-item'>
          <a className='nav-link' href='#about'>About Me</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#projects'>Projects</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#skills'>Skills</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#experience'>Experience</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;