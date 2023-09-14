import React, { useState, useEffect } from 'react';
import DisplayDates from './DisplayDates.jsx';
import axios from 'axios';
import styled from 'styled-components';
import App from './App.jsx';
const StyledButton = styled.button`
background: none;
border-radius: 10px;
width: 150px;

`


const MainPage = () => {

  const [dates, setDates] = useState('...Loading');
  const [willDisplay, setWillDisplay] = useState(false);
  useEffect(() => {
    axios.get('/exercises/dates')
      .then((results) => {
        setDates(results.data);
      })
      .catch((err) => console.log(err));
  }, [])

  // used to display dates
  const display = () => {

    return (
      <div>
      {dates.map((date, index) =>  (
      <DisplayDates
      key={ index }
      date={ date.date_completed }
      /> ))}
      </div>
    )
  }
  const renderDates = () => {
    if(!willDisplay) {
      setWillDisplay(true);
    } else {
      setWillDisplay(false);
    }
  }
  // above this is used to display dates
  const renderApp = () => {
    console.log('this runs');
    return (
      <div>

      <App />
      </div>
    )
  }






  return (
    <div>
      <StyledButton onClick={() => renderApp()}>Create Your Workout</StyledButton>
      <StyledButton>CHoose from template</StyledButton>
      <StyledButton onClick={renderDates}>Review previous workouts</StyledButton>
      {willDisplay ? display() : <></>}
    </div>

  )
}


export default MainPage;