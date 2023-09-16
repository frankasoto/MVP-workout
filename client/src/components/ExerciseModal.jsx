import React, { useState, useEffect } from 'react';
import { StyledModal, CloseButton, TypesSection, TypesButton, Exercise, ExerciseList } from './Styles/Themes.jsx';
import styled from 'styled-components';
import axios from 'axios';



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
        <TypesSection>
        {exerciseTypes.map((category, index) => (
          <TypesButton key={index} onClick={(e) => setTypeToSearch(e.target.textContent)}>{category}</TypesButton>
        ))}
        </TypesSection>
        <ExerciseList>
        {exerciseList.map((entry, index) => (
          <Exercise key={index} onClick={(e) => addExerciseToRender(e)}>{entry.exercise_name}</Exercise>
        ))}
        </ExerciseList>

        </div>
      )
    }
  }

  return (
    <StyledModal>
          {renderList()}
        <CloseButton onClick={toggleModal}>Close</CloseButton>
    </StyledModal>
  )
}

export default ExerciseModal;