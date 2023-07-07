import React from 'react';

function Project(props) {
  return (
    <div className='project'>
      <a target='_blank' href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </div>
  );
}

export default Project;