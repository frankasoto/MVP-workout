import React, { useState, useEffect } from 'react';
import ExerciseModal from './ExerciseModal.jsx';
import ExerciseEntry from './ExerciseEntry.jsx';



const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [exercisesToRender, setExercisesToRender] = useState([])

  const addExercise = (exerciseName) => {
    if(!exercisesToRender.includes(exerciseName)) {
      setExercisesToRender([...exercisesToRender, exerciseName]);
    }
  }

  const toggleModal = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }




  return (
    <div>
      <h1>Exercise Tracker</h1>
      {isOpen ? <ExerciseModal toggleModal={toggleModal} addExercise={addExercise}/> : <></>}
      {/* <ExerciseEntry name={exerciseName}/> */}
      {exercisesToRender?.map((exerciseName, index) => (
        <ExerciseEntry name={ exerciseName } key={ index } />
      ))}

      <button onClick={toggleModal}>Add exercise</button>
    </div>
  )
}

export default App;