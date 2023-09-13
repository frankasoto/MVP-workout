import React, { useState, useEffect } from 'react';
import axios from 'axios';
import format from 'date-fns/format'
import moment from 'moment';

const DisplayDates = ({ date }) => {

  const [workoutInfo, setWorkoutInfo] = useState('...loading')

  date = moment(date).format('MM-DD-yyyy');
  const grabWorkout = () => {
    axios.get(`/exercises/dates/${date}`)
      .then((results) => {
        console.log('results are', results.data)
        setWorkoutInfo(results.data);
      })
  }

  // date = moment(date).format('MM-DD-yyyy');


  return (
    <div onClick={grabWorkout}>
      {date}
    </div>
  )



}


export default DisplayDates;