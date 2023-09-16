import React, { useState, useEffect } from 'react';
import DisplayDates from './DisplayDates.jsx';
import axios from 'axios';
import {ThemeProvider} from 'styled-components';
import App from './App.jsx';
import { OuterContainer, AddButton, StyledButton, Header, theme, Container, Nav, StyledModal } from './Styles/Themes.jsx';


document.body.style =`
margin: 0;
padding: 0;`


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
        <Container>
        <Header>Workout Tracker</Header>
          <Nav>
            <AddButton onClick={() => setSwitchPage(true)}>Create Your Workout</AddButton>
            <StyledButton onClick={renderDates}>Review previous workouts</StyledButton>
          </Nav>
        {switchPage ? <StyledModal><App setSwitchPage={setSwitchPage}/></StyledModal> : <></>}
        {willDisplay ? display() : <></>}
        </Container>
      </OuterContainer>
      </ThemeProvider>


  )
}


export default MainPage;