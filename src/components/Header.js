import React from 'react';
import NavBar from './NavBar';
import '../styles/Header.css';

function Header() {
  return (
    <header>
      <NavBar />
      <div className="header-text">
        <div className='inline-container'>
          <h1>Hi, I'm Tess Thomas</h1>
        </div>
        <span className='cursor-box'>
          <h2>Full-Stack Developer in progress.</h2>
        </span>
      </div>
    </header>
  );
}

export default Header;

// import React, { useState } from 'react';
// import NavBar from './NavBar';
// import Toggle from './Toggle';
// import '../styles/Header.css';

// function Header() {
//   const [theme, setTheme] = useState('dark');

//   const handleToggle = () => {
//     if (theme === 'dark') {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   };

//   return (
//     <header>
//       <NavBar theme={theme} />
//       <div className="header-text">
//         <div className='inline-container'>
//           <h1>Hi, I'm Tess Thomas</h1>
//           <Toggle theme={theme} onChange={handleToggle} />
//         </div>
//         <span className='cursor-box'>
//           <h2>Full-Stack Developer in progress.</h2>
//         </span>
//       </div>
//     </header>
//   );
// }

// export default Header;