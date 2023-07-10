import React, { useEffect } from 'react';
import '../styles/Toggle.css';
import { ReactComponent as Sun } from '../images/sun.svg';
import { ReactComponent as Moon } from '../images/moon.svg';

// passes theme and onChange from Header.js as props
function Toggle({ theme, onChange }) {
  useEffect(() => {
    const applyTheme = () => {
      document.body.classList.remove('light', 'dark'); // removes both classes so that only one is applied
      document.body.classList.add(theme); // updates theme class with current theme
    };

    applyTheme();
  }, [theme]); // the second argument is a dependency array that tells useEffect to run again if the value of theme changes

  return (
    <label className='switch' htmlFor="switch">
        <input type="checkbox" checked={theme === 'light'} onChange={onChange} name="switch" id="switch" />
        <span className="slider round"></span>
        <div className='icons'>
          <Moon className='moon' />
          <Sun className='sun' />
        </div>
    </label>
  )
}

export default Toggle;