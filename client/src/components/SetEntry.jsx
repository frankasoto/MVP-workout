import React, { useState, useEffect } from 'react';



const SetEntry = ({ index, entry, addEntry, name, exerciseIndex, exerciseToAdd }) => {

  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [notes, setNotes] = useState('');

  let entryToSubmit = {};
  // useEffect(() => {
  //   addEntry(entryToSubmit);
  // }, [])
  // console.log('eIndex', exerciseIndex);

  useEffect(() => {

     entryToSubmit[index + 1] = {
      weight: weight,
      reps: reps,
      notes: notes
    }
    entry[index] = entryToSubmit;
    exerciseToAdd[exerciseIndex] ={
      name: name,
      entry: entry
    };


  }, [weight, reps, notes])



  return (
    <form >

      <label>Weight:
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>Reps:
        <input
          type="number"
          placeholder="0"
          onChange={(e) => setReps(e.target.value)}
        />
      </label>
      <label>Notes:
        <input
          type="text"
          placeholder="Only rested for ..."
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
    </form>

  );


}

export default SetEntry;