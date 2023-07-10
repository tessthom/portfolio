import React from 'react';
import Project from './Project'
import bkHomePage from '../images/bkHomePage.png';
import petalsHome from '../images/petalsHome.png';
import resumeBuilder from '../images/resumeBuilder.png';
import '../styles/Projects.css';

function Projects() {
  /* Make this a single project component and use props to add the image and text for each one? */
  return (
    <article id="projects" className="projects-container">
      <h3>Projects</h3>
      <Project 
        title='Petals in the Park' 
        href='https://wcet.waketech.edu/abthomas3/web110/finalProject/index.html' 
        src={petalsHome} 
        alt='Landing page for Petals in the Park event' 
        description='Landing page, sign-up form, and confirmation page for a floral arrangement event.'
        skills='HTML, CSS, Design, SEO, Accessibility'
      />
      <Project 
        title='BarKey' 
        href='https://www.figma.com/proto/sgutY6lqJsenGo8xbAAdYm/BarKey-Wireframe?node-id=89-207&scaling=scale-down&page-id=89%3A206&starting-point-node-id=89%3A207">
        <img src="images/bkHomePage.png' 
        src={bkHomePage} 
        alt='Figma wireframe of home page for BarKey app' 
        description='Hi-fi wireframes for a WIP mobile app. BarKey allows users to create and organize custom cocktail recipes, share them with friends or staff, set read and/or write permissions and search via tags or ingredients.'
        skills='UX Research, Wireframing, Prototyping, Design, Figma'
      />
      <Project 
        title='Resume Builder' 
        href='https://wcet.waketech.edu/abthomas3/WEB115/finalproject/finalproject.html' 
        src={resumeBuilder}
        alt='Form page for resume builder app' 
        description='A dynamic form page that allows users to input their information, adding fields as needed, and then generates a formatted resume "on the fly".'
        skills='Event-driven JavaScript, HTML, CSS, Design'
      />
    </article>
  );
}

export default Projects;