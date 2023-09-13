import React, { useState, useEffect } from 'react';
import SetEntry from './SetEntry.jsx';
import axios from 'axios';




const ExerciseEntry = ({ name, exerciseIndex, exerciseToAdd }) => {

  const [sets, setSets] = useState([''])
  const [entry, setEntry] = useState([])

  let entryToAdd = {};
  entryToAdd = {
    name: name
  };
  // entryToAdd[exerciseIndex] = entry;

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

  return (

    <div>
      {/* {console.log('entry', exerciseIndex)} */}
      <h3>Exercise: {name}</h3>
      {console.log('date', Date())}
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

      {sets.length < 5 ? <button className="addSet" onClick={addSet}>Add Set</button> : <></>}
      <button onClick={submit}>submit entry</button>
    </div>


  )


}

export default ExerciseEntry;