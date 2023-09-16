import React, { useState } from 'react';
import SetEntry from './SetEntry.jsx';
import axios from 'axios';
import VideoDisplay from './VideoDisplay.jsx';
import GraphDisplay from './GraphDisplay.jsx';
import { Exerciseentry, Dropdown, DropdownButton, SetButton,  SetData } from './Styles/Themes.jsx';

const ExerciseEntry = ({ name, exerciseIndex, exerciseToAdd }) => {

  const [sets, setSets] = useState([''])
  const [entry, setEntry] = useState([])

  const [videoLink, setVideoLink] = useState('');
  const [showVideo, setShowVideo] = useState(false)

  const [showGraph, setShowGraph] = useState(false);

  const [open, setOpen] = useState(false);

  const dropdown = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

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
      <Exerciseentry>
      {/* <Dropdown onClick={dropdown}>...
      </Dropdown>
      {open ? (
        <ul style={{'list-style-type': 'none'}}>
          <li><DropdownButton onClick={grabVideo}>How to</DropdownButton></li>
          <li><DropdownButton onClick={() => setShowGraph(true)}>Display data</DropdownButton></li>
        </ul>
      ) : <></>} */}
      <Dropdown>


        <DropdownButton onClick={grabVideo}>How to</DropdownButton>
        <DropdownButton onClick={() => setShowGraph(true)}>Display data</DropdownButton>
      </Dropdown>
      {showGraph ? <GraphDisplay exerciseName={ name } setShowGraph={ setShowGraph }/> : <></>}
      < SetData>
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
      </SetData>
      {showVideo ? <VideoDisplay link={ videoLink } setShowVideo={setShowVideo} /> : <></>}

      {sets.length < 5 ? <SetButton className="addSet" onClick={addSet}>Add Set</SetButton> : <></>}
      </Exerciseentry>
    </div>


  )


}

export default ExerciseEntry;