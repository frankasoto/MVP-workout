import React, { useState } from 'react';
import styled from 'styled-components';


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

const WorkoutModal = ({ workoutInfo, toggleModal }) => {

  return (
    <StyledModal>
      {workoutInfo && workoutInfo.map((exercise, index) => (
        <StyledContent key={index}>
          <b>{exercise.exercise_name}</b>
          {exercise.info.map((set, index) => (
            <div key={index}><b>Set:</b> { index + 1 } <br/>
              <i>weight:</i> {set[index + 1].weight} <br/>
              <i>reps:</i> {set[index + 1].reps} <br/>
              <i>notes:</i> {set[index + 1].notes}
            </div>
          ))}
        </StyledContent>
      ))}
      <button onClick={() => toggleModal()}>Close</button>


    </StyledModal>

  )

}


export default WorkoutModal;