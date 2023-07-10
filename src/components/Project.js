import React from 'react';
import '../styles/Project.css';

function Project(props) {
  return (
    <div className='project'>
      <div className="project-text">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <br />
        <p>{props.skills}</p>
      </div>
      <div className="thumbnail-box">
        <a target='_blank' href={props.href}>
          <img src={props.src} alt={props.alt} />
        </a>
      </div>
    </div>
  );
}

export default Project;