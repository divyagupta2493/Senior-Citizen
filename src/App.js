// src/App.js
import React, { useState } from 'react';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';
import Reports from './components/Reports';
import Metrics from './components/Metrics';
import EatingHabits from './components/EatingHabits';
import './styles.css';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="container">
    <div className="header">
      <h1>Fitness Tracker</h1>
    </div>
    <div className="workout-form">
      <WorkoutForm addWorkout={addWorkout} />
    </div>
    <div className="workout-list">
      <WorkoutList workouts={workouts} />
    </div >
    <div className="workout-list">
      <Reports workouts={workouts} />
    </div>
    <div className="eating-habits">
      <EatingHabits />
    </div>
    <div className="workout-list">
      <Metrics workouts={workouts} />
    </div>
  </div>
);
  
}

export default App;


  

