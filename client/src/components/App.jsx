import React, { useState } from 'react';
import ExerciseModal from './ExerciseModal.jsx';
import ExerciseEntry from './ExerciseEntry.jsx';
import { OuterContainer, Container, StyledButton, Header, ExerciseBox } from './Styles/Themes.jsx';
import axios from 'axios';

const App = () => {
  const [isOpen, setIsOpen] = useState(false)

  const [exercisesToRender, setExercisesToRender] = useState([]);
  const [exerciseToAdd, setExerciseToAdd] = useState([]); //exercises that will be submitted upon click




  const submitEntry = () => {
    axios.post('/exercises', exerciseToAdd)
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
      <OuterContainer>
        <Container>
          <Header>Exercise Tracker</Header>
          {isOpen ?
          <ExerciseModal
          toggleModal={ toggleModal }
          addExercise={ addExercise }
          /> : <></>}

          <ExerciseBox>
            {exercisesToRender?.map((exerciseName, index) => (
              <ExerciseEntry
              key={ index }
              name={ exerciseName }
              exerciseIndex={ index }
              exerciseToAdd={ exerciseToAdd }
              />
            ))}
          </ExerciseBox>
          <StyledButton onClick={ toggleModal }>Add exercise</StyledButton>
          {exercisesToRender.length > 0 ?
          <StyledButton
            onClick={ submitEntry }>
              Finish workout
          </StyledButton> : <></>}
          </Container>
      </OuterContainer>
    </div>
  )
}

export default App;