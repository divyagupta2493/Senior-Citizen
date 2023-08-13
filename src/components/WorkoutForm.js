// src/components/WorkoutForm.js
import React, { useState } from 'react';

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && duration && date) {
      const workoutData = {
        exercise,
        duration: parseInt(duration),
        date: new Date(date),
      };
      addWorkout(workoutData);
      setExercise('');
      setDuration('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
      <h2>Add Daily Workouts</h2>
        <label htmlFor="exercise">Exercise</label>
        <input
          type="text"
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          placeholder="Type of Exercise"
        />
      </div>
      <div className='form-group'>
        <label htmlFor="duration">Duration (minutes)</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration in minutes"
        />
      </div>
      <div className='form-group'>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        /><br></br>
      </div>
      <button type="submit"className="submit-button">Log Workout</button>
    </form>
  );
}

export default WorkoutForm;
