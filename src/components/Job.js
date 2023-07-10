import React from 'react';
import '../styles/Job.css';

function Job(props) {
  return (
    <div className='job-container'>
      <div className="job-header">
        <h4>{props.title}</h4>
        <span className='dates'><p>{props.dates}</p></span>
      </div>
      <p>{props.employer}</p>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Job;