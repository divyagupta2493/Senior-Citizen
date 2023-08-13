import React, { useState } from 'react';

function EatingHabits() {
  const [meals, setMeals] = useState('');
  const [snacks, setSnacks] = useState('');
  const [waterIntake, setWaterIntake] = useState('');
  const [loggedData, setLoggedData] = useState(null);

  function logDailyIntake() {
    const data = {
      meals: meals.split(',').map(item => item.trim()),
      snacks: snacks.split(',').map(item => item.trim()),
      waterIntake: parseInt(waterIntake),
    };

    // Perform any additional logic, such as sending data to a server
    setLoggedData(data);
    setMeals('');
    setSnacks('');
    setWaterIntake('');
  }

  return (
    <div  >
      <h2 className='form-group' >Log Your Daily Intake</h2>
      <div  className='form-group' >
        <label htmlFor="mealInput">Meals:</label>
        <input
          type="text"
          id="mealInput"
          value={meals}
          onChange={(e) => setMeals(e.target.value)}
          placeholder="Enter your meals, separated by commas"
        />
      </div>

      <div className='form-group' >
        <label htmlFor="snackInput">Snacks:</label>
        <input
          type="text"
          id="snackInput"
          value={snacks}
          onChange={(e) => setSnacks(e.target.value)}
          placeholder="Enter your snacks, separated by commas"
        />
      </div>

      <div className='form-group' >
        <label htmlFor="waterInput">Water Intake (ml):</label>
        <input
          type="number"
          id="waterInput"
          value={waterIntake}
          onChange={(e) => setWaterIntake(e.target.value)}
          placeholder="Enter your water intake in milliliters"
        />
      </div>

      <button onClick={logDailyIntake} className="submit-button" >Log Daily Intake</button>
      <div>
    {loggedData && ( // Render only if loggedData is not null
      <div>
        <h2>Logged Data</h2>
        <p>Meals: {loggedData.meals.join(', ')}</p>
        <p>Snacks: {loggedData.snacks.join(', ')}</p>
        <p>Water Intake: {loggedData.waterIntake} ml</p>
      </div>
    )}
  </div>
  </div>
);
}
export default EatingHabits;
