import React, { useState } from 'react';
import Toggle from './Toggle';
import '../styles/NavBar.css';
import logoLight from '../images/ttLogoFBFDFF.svg';
import logoDark from '../images/ttLogo2B2F3A.svg';

function NavBar() {
  const [theme, setTheme] = useState('dark');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  let logoSrc;

  if (theme === 'dark') {
    logoSrc = logoLight;
  } else if (theme === 'light') {
    logoSrc = logoDark;
  }

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
        <img src={logoSrc} alt='Tess Thomas logo' />

        {/* <div className="list-container"> */}
          <div className="navbar-toggle" onClick={handleMenuToggle}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className='nav-list'>
            <li className='nav-item'>
              <a className='nav-link' href='#about'>About</a>
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
          <Toggle theme={theme} onChange={handleToggle} />
        {/* </div> */}
      </nav>
    </>
  );
}

export default NavBar;

// import React, { useState } from 'react';
// import Toggle from './Toggle';
// import '../styles/NavBar.css';
// import logoLight from '../images/ttLogoFBFDFF.svg';
// import logoDark from '../images/ttLogo2B2F3A.svg';

// function NavBar() {
//   const [theme, setTheme] = useState('dark');
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleToggle = () => {
//     if (theme === 'dark') {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   };

//   const handleMenuToggle = () => {
//     setMenuOpen(!menuOpen);
//   };

//   let logoSrc;

//   if (theme === 'dark') {
//     logoSrc = logoLight;
//   } else if (theme === 'light') {
//     logoSrc = logoDark;
//   }

//   return (
//     <nav className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
//       <div className="logo-container">
//         <img src={logoSrc} alt='Tess Thomas logo' />
//       </div>

//       <button className="navbar-toggle" onClick={handleMenuToggle}>
//         <span className="bar"></span>
//         <span className="bar"></span>
//         <span className="bar"></span>
//       </button>

//       <div className="list-container">
//         <ul className='nav-list'>
//           <li className='nav-item'>
//             <a className='nav-link' href='#about'>About</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#projects'>Projects</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#skills'>Skills</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#experience'>Experience</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#contact'>Contact</a>
//           </li>
//         </ul>
//         <Toggle theme={theme} onChange={handleToggle} />
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

// import React, { useState } from 'react';
// import Toggle from './Toggle';
// import '../styles/NavBar.css';
// import logoLight from '../images/ttLogoFBFDFF.svg';
// import logoDark from '../images/ttLogo2B2F3A.svg';

// function NavBar() {
//   const [theme, setTheme] = useState('dark');

//   const handleToggle = () => {
//     if (theme === 'dark') {
//       setTheme('light');
//     } else {
//       setTheme('dark');
//     }
//   };

//   let logoSrc;

//   if (theme === 'dark') {
//     logoSrc = logoLight;
//   } else if (theme === 'light') {
//     logoSrc = logoDark;
//   }

//   return (
//     <>
//       <nav className='navbar'>
//         <img src={logoSrc} alt='Tess Thomas logo' />

//         <div className="list-container">
//           <ul className='nav-list'>
//             <li className='nav-item'>
//               <a className='nav-link' href='#about'>About</a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#projects'>Projects</a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#skills'>Skills</a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#experience'>Experience</a>
//             </li>
//             <li className='nav-item'>
//               <a className='nav-link' href='#contact'>Contact</a>
//             </li>
//           </ul>
//           <Toggle theme={theme} onChange={handleToggle} />
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;

// import React from 'react';
// import '../styles/NavBar.css';
// import logoLight from '../images/ttLogoFBFDFF.svg';
// import logoDark from '../images/ttLogo2B2F3A.svg';

// function NavBar({ theme }) {
//   // const logoSrc = theme === 'dark' ? logoLight : logoDark;
//   console.log(`theme: ${theme}`);
//   let logoSrc;

//   if (theme === 'dark') {
//     logoSrc = logoLight;
//     console.log('logoSrc', logoSrc);
//     console.log('theme', theme);
//   } else if (theme === 'light') {
//     logoSrc = logoDark;
//     console.log('logoSrc', logoSrc)
//     console.log('theme', theme);
//   }

//   return (

//     <>
//       <input type='checkbox' id='menu-toggle' />
//       <nav className='navbar'>
//         <img src={logoSrc} alt='Tess Thomas logo' />

//         <label class="navbar-toggle" for="toggle">
//           <span class="bar"></span>
//           <span class="bar"></span>
//           <span class="bar"></span>
//         </label>

//         <ul className='nav-list'>
//           <li className='nav-item'>
//             <a className='nav-link' href='#about'>About</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#projects'>Projects</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#skills'>Skills</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#experience'>Experience</a>
//           </li>
//           <li className='nav-item'>
//             <a className='nav-link' href='#contact'>Contact</a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }

// export default NavBar;

  // const [theme, setTheme] = useState('dark');
  // const [logoSrc, setLogoSrc] = useState(logoLight);

  // useEffect(() => {
  //   const applyTheme = () => {
  //     if (theme === 'dark') {
  //       setLogoSrc(logoLight);
  //       document.body.classList.remove('light');
  //     } else {
  //       setLogoSrc(logoDark);
  //       document.body.classList.remove('dark');
  //     }
  //   };

  //   applyTheme();
  // }, [theme]);

  // const handleToggle = () => {
  //   setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  // }
