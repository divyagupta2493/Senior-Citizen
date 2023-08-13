// src/components/WorkoutList.js
import React from 'react';

function WorkoutList({ workouts }) {
  return (
    <div className='form-group' >
      <h2>Logged Workouts</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <strong>{workout.exercise}</strong> - {workout.duration} minutes
            (Date: {workout.date.toLocaleDateString()})<br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
