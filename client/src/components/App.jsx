import React, { useState } from 'react';

import ExerciseEntry from './ExerciseEntry.jsx';



const App = () => {
  const [exerciseList, setExerciseList] = useState([])

  const addExercise = () => {

  }
  return (
    <div>
      <h1>Exercise Tracker</h1>
      <ExerciseEntry name={'bench press'}/>
      <button onClick></button>
    </div>
  )
}

export default App;