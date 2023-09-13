import React, { useState, useEffect } from 'react';
import ExerciseModal from './ExerciseModal.jsx';
import ExerciseEntry from './ExerciseEntry.jsx';
import axios from 'axios';


const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [exercisesToRender, setExercisesToRender] = useState([]);
  const [exerciseToAdd, setExerciseToAdd] = useState([]); //exercises that will be submitted upon click






  const submitEntry = () => {
    axios.post('/exercises', exerciseToAdd)
      .then(() => console.log('successfully submitted'))
      .catch((err) => console.log(err));
  }


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
      {isOpen ?
      <ExerciseModal
      toggleModal={ toggleModal }
      addExercise={ addExercise }
      /> : <></>}
  {console.log('workout', exerciseToAdd)}
      {exercisesToRender?.map((exerciseName, index) => (
        <ExerciseEntry
        key={ index }
        name={ exerciseName }
        exerciseIndex={ index }


        />
      ))}

      <button onClick={ toggleModal }>Add exercise</button>
      <button onClick={ submitEntry }>Finish workout</button>
    </div>
  )
}

export default App;