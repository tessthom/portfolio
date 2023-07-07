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
        description='Landing, form, and confirmation pages for a fictional floral arrangement event'
      />
      <Project 
        title='BarKey' 
        href='https://www.figma.com/proto/sgutY6lqJsenGo8xbAAdYm/BarKey-Wireframe?node-id=89-207&scaling=scale-down&page-id=89%3A206&starting-point-node-id=89%3A207">
        <img src="images/bkHomePage.png' 
        src={bkHomePage} 
        alt='Figma wireframe of home page for BarKey app' 
        description='Figma wireframes for a WIP app that allows users to create and organize custom cocktail recipes, share them with friends or staff, set read and/or write permissions and search via tags or ingredients.'
      />
      <Project 
        title='Resume Builder' 
        href='https://wcet.waketech.edu/abthomas3/WEB115/finalproject/finalproject.html' 
        src={resumeBuilder}
        alt='Form page for resume builder app' 
      />
    </article>
  );
}

export default Projects;