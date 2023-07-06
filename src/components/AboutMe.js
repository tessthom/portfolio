import React from 'react';
import '../styles/AboutMe.css';
import headCrop from '../images/headCrop.png';

function AboutMe() {
  return (
    <div>
      <h3>Hi, I'm Tess</h3>
      <img className="profile-img" src={headCrop} alt="Tess Thomas" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias molestiae facere debitis dolorem nisi unde sit quia! Debitis, quaerat! Amet! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, nisi. Ab sed voluptates quia veniam voluptatum, natus deleniti modi dicta.</p>
    </div>
  )
}

export default AboutMe;