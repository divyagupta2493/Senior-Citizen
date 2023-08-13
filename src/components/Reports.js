// src/components/Reports.js
import React from 'react';

function Reports({ workouts }) {
  const calculateTotalDuration = () => {
    return workouts.reduce((total, workout) => total + workout.duration, 0);
  };

  return (
    <div className='form-group'>
      <h2>Reports</h2>
      <p><strong>Total Workout Duration: </strong> {calculateTotalDuration()}<strong>minutes</strong> </p>
    </div>
  );
}

export default Reports;
