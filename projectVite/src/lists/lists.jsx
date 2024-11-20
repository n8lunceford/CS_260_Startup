// Lists.jsx
import React from 'react';
import './lists.css';

export const Lists = () => {
    const assignments = [
      'Math HW 4',
      'Writing 316 Reading CH 7',
      'CS 224 Project 2'
    ];
  
    const dates = [
      'Ask out',
      'Second date'
    ];
  
    const ordinances = [
      'Proxy Ordinances',
      'Endowment',
      'Sealing',
      'Initiatory'
    ];
  
    return (
      <div>
        <h1>Lists</h1>
        <h2>Assignments</h2>
        <ul>
          {assignments.map(assignment => <li key={assignment}>{assignment}</li>)}
        </ul>
        <h2>Dates</h2>
        <ul>
          {dates.map(date => <li key={date}>{date}</li>)}
        </ul>
        <h2>Where</h2>
        <h2>Ordinances</h2>
        <ul>
          {ordinances.map(ordinance => <li key={ordinance}>{ordinance}</li>)}
        </ul>
      </div>
    );
  };
  
  //ReactDOM.render(<Lists />, document.getElementById('root'));