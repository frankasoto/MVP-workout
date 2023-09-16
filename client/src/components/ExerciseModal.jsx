import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import axios from 'axios';

const StyledModal = styled.div`
top: 50%;
left: 50%;
z-index: 7;
position: absolute;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
background-color: white;
`
const StyledContent = styled.div`
text-align: center;
display: flex;
flex-direction: column;
`
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
          <button key={index} onClick={(e) => setTypeToSearch(e.target.textContent)}>{category}</button>
        ))}

        {exerciseList.map((entry, index) => (
          <div key={index} onClick={(e) => addExerciseToRender(e)}>{entry.exercise_name}</div>
        ))}

        </div>
      )
    }
  }

  return (
    <StyledModal>
      <div className="exercise-types">
        <StyledContent>
          {renderList()}
        </StyledContent>
      </div>
        <button onClick={toggleModal}>Close</button>
    </StyledModal>

  )


}

export default ExerciseModal;