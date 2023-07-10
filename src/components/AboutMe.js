import React from 'react';
import '../styles/AboutMe.css';
import headCrop from '../images/headCropBW.png';

function AboutMe() {
  return (
    <article id='about' className='about-container'>
      <div className='about-text'>
        <p>I'm a creative web development student and long-time process nerd with 10+ years experience in art, building, and design. There's nothing I love more than helping people bring ambitious ideas to life.</p>
        <br></br>
        <p>My extensive background in crafting physical objects for end-users means I'm a big fan of staying curious, and makes doing the same digitally - from UI development to database configuration - feel like a true joy. I graduate in May of 2024 and can't wait to contribute to my new field.</p>
      </div>

        <img className='profile-img' src={headCrop} alt='Tess Thomas' />

    </article>
  )
}

export default AboutMe;