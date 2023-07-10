import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <article id='skills'>
      <div className="skills-heading">
        <h3>Skills</h3>
        <svg className='blue-line' width="580" height="17" viewBox="0 0 580 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 15C287.054 -1.7469 292.946 -1.7469 578 15" stroke="url(#paint0_linear_106_6)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round"/>
          <defs>
          <linearGradient id="paint0_linear_106_6" x1="290" y1="2.38001" x2="290" y2="15" gradientUnits="userSpaceOnUse">
          <stop stop-color="#4B9FFF"/>
          <stop offset="1" stop-color="#4B9FFF" stop-opacity="0.42"/>
          </linearGradient>
          </defs>
        </svg>
      </div>

      <div className='skills-container'>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-nodejs" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path>
              <path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path>
            </svg>
          </div>
          <p>Node.js</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-react" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
            </svg>
          </div>
          <p>React</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
              <path d="M7.5 8h3v8l-2 -1"></path>
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
            </svg>
          </div>
          <p>JavaScript</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
            </svg>
          </div>
          <p>HTML5</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
            </svg>
          </div>
          <p>CSS3</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mongodb" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 3v19"></path>
              <path d="M18 11.227c0 3.273 -1.812 4.77 -6 9.273c-4.188 -4.503 -6 -6 -6 -9.273c0 -4.454 3.071 -6.927 6 -9.227c2.929 2.3 6 4.773 6 9.227z"></path>
            </svg>
          </div>
          <p>MongoDB</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mysql" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path>
              <path d="M9 7h.01"></path>
            </svg>
          </div>
          <p>SQL</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-git" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
              <path d="M12 15v-6"></path>
              <path d="M15 11l-2 -2"></path>
              <path d="M11 7l-1.9 -1.9"></path>
              <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path>
            </svg>
          </div>
          <p>Git</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-figma" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M6 3m0 3a3 3 0 0 1 3 -3h6a3 3 0 0 1 3 3v0a3 3 0 0 1 -3 3h-6a3 3 0 0 1 -3 -3z"></path>
              <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15"></path>
            </svg>
          </div>
          <p>Figma</p>
        </div>
        <div className='skill'>
          <div className="icon-box">
            <svg className='skill-icon' xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-accessible" width="50" height="50" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
              <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"></path>
              <circle cx="12" cy="7.5" r=".5" fill="currentColor"></circle>
            </svg>
          </div>
          <p>Accessibility</p>
        </div>
      </div>
    </article>
  );
}

export default Skills;