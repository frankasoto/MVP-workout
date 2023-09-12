import React, { useState } from 'react';
import SetEntry from './SetEntry.jsx';




const ExerciseEntry = ({ name }) => {

  const [sets, setSets] = useState([<SetEntry key={0} />])
  const [numOfSets, setNumOfSets] = useState(1)



  const addSet = () => {
    console.log('set added');
    if (numOfSets < 5) {
      setNumOfSets( numOfSets + 1);
      setSets([...sets, <SetEntry key={numOfSets}/>]);
    }

  }
  return (

    <div>
      <h3>Exercise: {name}</h3>
      {sets.map(entry => entry)}

      {numOfSets < 5 ? <button className="addSet" onClick={addSet}>Add Set</button> : <></>}
    </div>


  )


}

export default ExerciseEntry;