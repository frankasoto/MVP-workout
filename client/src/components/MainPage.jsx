import React, { useState, useEffect } from 'react';
import DisplayDates from './DisplayDates.jsx';
import axios from 'axios';
import {ThemeProvider} from 'styled-components';
import App from './App.jsx';
import { OuterContainer, CreateButton, ResultsButton, Header, theme, Container, Nav } from './Styles/Themes.jsx';



const MainPage = () => {

  const [dates, setDates] = useState('...Loading');
  const [willDisplay, setWillDisplay] = useState(false);
  const [switchPage, setSwitchPage] = useState(false);
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

  return (
    <ThemeProvider theme={theme}>


      <OuterContainer>
        <Header>Workout Tracker</Header>
        <ResultsButton onClick={renderDates}>Review previous workouts</ResultsButton>
        <CreateButton onClick={() => setSwitchPage(true)}>Create Your Workout</CreateButton>
        <Container>
        {switchPage ? <App setSwitchPage={setSwitchPage}/> : <></>}
        {willDisplay ? display() : <></>}
        </Container>
      </OuterContainer>
      </ThemeProvider>


  )
}


export default MainPage;