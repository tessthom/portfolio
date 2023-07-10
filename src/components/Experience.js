import React from 'react';
import Job from './Job';
import '../styles/Experience.css';

function Experience() {
  return (
    <article id='experience' className="experience-container">
      <h3>Experience</h3>
      <svg className='yellow-line' width="580" height="17" viewBox="0 0 580 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15C287.054 -1.7469 292.946 -1.7469 578 15" stroke="url(#paint0_linear_105_5)" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_105_5" x1="290" y1="2.38001" x2="290" y2="15" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFD155"/>
        <stop offset="1" stop-color="#FFD155" stop-opacity="0.42"/>
        </linearGradient>
        </defs>
      </svg>


      <div className="jobs-box">
        <Job title='Student'
        dates='Class of 2024'
        employer='Wake Tech Community College'
        skills={['Associate of Applied Science - Web Development']} />
        <Job title='Furniture Maker'
        dates='2018 - 2020'
        employer='Troscan Design'
        skills={['Hand crafted studio furniture for a boutique fine woodworking shop in Chicago, IL', 'Utilized proprietary mechanisms to create massive wood turnings', 'Managed drying program for solid walnut blanks', 'Cut custom joinery to spec per Troscan designs']} />
        <Job title='Head Carpenter'
        dates='2015 - 2018'
        employer='TTS Studios'
        skills={['Lead team of carpenters for custom fabrication shop', 'Collaborated with designers, clients and studio department heads to design and build set pieces for theater and live events', 'Optimized shop workflow systems', 'Created and performed safety demos and staff training']} />
      </div>
    </article>
  );
}

export default Experience;
