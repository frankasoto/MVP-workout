import React, { useState, useEffect } from 'react';
import ExerciseModal from './ExerciseModal.jsx';
import ExerciseEntry from './ExerciseEntry.jsx';
import axios from 'axios';
import { OuterContainer, StyledButton, Header, Container, Nav, StyledModal } from './Styles/Themes.jsx';

const App = ({ setSwitchPage }) => {
  console.log('app');
  const [isOpen, setIsOpen] = useState(false)

  const [exercisesToRender, setExercisesToRender] = useState([]);
  const [exerciseToAdd, setExerciseToAdd] = useState([]); //exercises that will be submitted upon click



  const submitEntry = () => {
    console.log('exercise to add', exerciseToAdd);
    axios.post('/exercises', exerciseToAdd)
      .then(() => console.log('successfully submitted'))
      .catch(() => console.log('Did not successfully submit'));

    setSwitchPage(false);
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
      // <StyledModal>
    <OuterContainer>
      <Container>
      <Header>Workout Tracker</Header>


      {isOpen ?
      <ExerciseModal
      toggleModal={ toggleModal }
      addExercise={ addExercise }
      /> : <></>}

      {exercisesToRender?.map((exerciseName, index) => (
        <ExerciseEntry
        key={ index }
        name={ exerciseName }
        exerciseIndex={ index }
        exerciseToAdd={ exerciseToAdd }
        />
      ))}
      <Nav>
        <StyledButton onClick={ toggleModal }>Add exercise</StyledButton>
        {exercisesToRender.length >= 1 ? <StyledButton onClick={ submitEntry }>Finish workout</StyledButton> : <></>}
        <StyledButton onClick={() => setSwitchPage(false)}>Cancel</StyledButton>
      </Nav>
      </Container>
    </OuterContainer>
      // </StyledModal>
  )
}

export default App;