import React, { useState, useEffect } from 'react';


import axios from 'axios';
import { StyledModal, Exercise, Container,  Types } from './Styles/Themes.jsx';


const ExerciseModal = ({toggleModal, addExercise}) => {
  const exerciseTypes = ['chest', 'back', 'triceps', 'biceps', 'legs', 'shoulders', 'reset filter'];
  const [typeToSearch, setTypeToSearch] = useState('')
  const [exerciseList, setExerciseList] = useState('...Loading');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get(`/exercises?type=${typeToSearch}`)
      .then((results) => {
        setExerciseList([...results.data]);
        setIsLoaded(true);

      })
      .catch((err) => console.log(err));
  }, [typeToSearch])

  const addExerciseToRender = (e) => {
    addExercise(e.target.textContent);
    toggleModal(false);
  }



  const renderList = () => {
    if (isLoaded) {
      return (
        <div>
        {exerciseTypes.map((category, index) => (
          <Types key={index} onClick={(e) => setTypeToSearch(e.target.textContent)}>{category}</Types>
        ))}

        {exerciseList.map((entry, index) => (
          <Exercise key={index} onClick={(e) => addExerciseToRender(e)}>{entry.exercise_name}</Exercise>
        ))}

        </div>
      )
    }
  }

  return (
    <Container>
    <StyledModal>
      {/* <div className="exercise-types"> */}
        {/* <StyledContent> */}
          {renderList()}
        {/* </StyledContent> */}
      {/* </div> */}
        <button onClick={toggleModal}>Close</button>
    </StyledModal>
    </Container>
  )


}

export default ExerciseModal;