import React, { useState, useEffect } from 'react';
import DisplayDates from './DisplayDates.jsx';
import axios from 'axios';

const MainPage = () => {

  const [dates, setDates] = useState('...Loading');
  const [willDisplay, setWillDisplay] = useState(false);
  useEffect(() => {
    axios.get('/exercises/dates')
      .then((results) => {
        setDates(results.data);
        console.log('results', results.data);
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
      console.log('setting to true')
      setWillDisplay(true);
    } else {
      setWillDisplay(false);
    }
  }
  // above this is used to display dates
  return (
    <div>
      <button>Create Your Workout</button>
      <button>CHoose from template</button>
      <button onClick={renderDates}>Review previous workouts</button>
      {willDisplay ? display() : <></>}
    </div>

  )
}


export default MainPage;