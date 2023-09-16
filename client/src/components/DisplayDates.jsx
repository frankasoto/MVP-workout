import React, { useState, useEffect } from 'react';
import axios from 'axios';

import moment from 'moment';
import WorkoutModal from './WorkoutModal.jsx';

const DisplayDates = ({ date }) => {

  const [workoutInfo, setWorkoutInfo] = useState([])
  const [showModal, setShowModal] = useState(false);

  date = moment(date).format('MM-DD-yyyy');
  const grabWorkout = () => {
    axios.get(`/exercises/dates/${date}`)
      .then((results) => {
        setWorkoutInfo(results.data);
        toggleModal();
      })
      .catch((err) => console.log(err));
  }

  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }


  return (
    <div onClick={grabWorkout}>
      {date}
      {showModal ?<WorkoutModal workoutInfo={ workoutInfo } toggleModal={ toggleModal }/> : <></>}
    </div>
  )



}


export default DisplayDates;