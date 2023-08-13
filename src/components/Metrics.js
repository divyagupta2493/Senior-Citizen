// src/components/Metrics.jimport React from 'react'import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Metrics({ workouts }) {
  let datasets = [];
  let groupedWorkouts = {};

  workouts.map((workout) => {
    groupedWorkouts[workout.exercise] ||= [];
    groupedWorkouts[workout.exercise].push(workout);
    return null;
  })

  function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  Object.entries(groupedWorkouts).forEach((entry) => {
    const [key, value] = entry;
    const color = getRandomColor();
    datasets.push(
      {
        label: key,
        data: value.map((workout) => workout.duration),
        borderColor: color,
        backgroundColor: color,
        fill: true,
      }
    );
  });

  console.log(datasets);

  const data = {
    labels: workouts.map((workout) =>
      moment(workout.date).format('MM/DD/YYYY')
    ),
    datasets: datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  return (
    <div className='form-group'>
      <h2>Metrics Tracking</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default Metrics;
