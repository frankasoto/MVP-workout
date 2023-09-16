import React, { useState, useEffect } from 'react';
import SetEntry from './SetEntry.jsx';
import axios from 'axios';
import VideoDisplay from './VideoDisplay.jsx';
import GraphDisplay from './GraphDisplay.jsx';
import { StyledButton, EntryButton, EntryDiv } from './Styles/Themes.jsx';

const ExerciseEntry = ({ name, exerciseIndex, exerciseToAdd }) => {

  const [sets, setSets] = useState([''])
  const [entry, setEntry] = useState([])

  const [videoLink, setVideoLink] = useState('');
  const [showVideo, setShowVideo] = useState(false)

  const [showGraph, setShowGraph] = useState(false);




  const addEntry = (newEntry) => {
    setEntry([...entry, newEntry]);
  }
  const addSet = () => {
    if (sets.length < 5) {
      setSets([...sets, '']);
    }
  }

  const submit = () => {
    axios.post('/exercises', {
      name: name,
      set_info: entry
    })
    .then(()=>console.log('complete'))
    .catch((err) => console.log(err));
  }

  const grabVideo = () => {
    axios.get(`/exercises/video?name='${name}'`)
      .then((results) => {
      setVideoLink(results.data[0].videolink);
      setShowVideo(true);
    })

  }

  return (

    <div>
      <EntryDiv>

      <EntryButton onClick={grabVideo}>How to</EntryButton>
      <EntryButton onClick={() => setShowGraph(true)}>Display data</EntryButton>
      </EntryDiv>
      {showGraph ? <GraphDisplay exerciseName={ name } setShowGraph={ setShowGraph }/> : <></>}
      <h3>Exercise: {name}</h3>
      {sets.map((set, index) => (
      <SetEntry
        key={ index }
        index={ index }
        entry={ entry }
        addEntry={ addEntry }
        name={ name }
        exerciseIndex={ exerciseIndex }
        exerciseToAdd={ exerciseToAdd }
      />
      ))}
      {showVideo ? <VideoDisplay link={ videoLink } setShowVideo={setShowVideo} /> : <></>}

      {sets.length < 5 ? <StyledButton className="addSet" onClick={addSet}>Add Set</StyledButton> : <></>}
    </div>


  )


}

export default ExerciseEntry;