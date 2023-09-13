import React, { useState, useEffect } from 'react';



const SetEntry = ({ index, entry, addEntry }) => {

  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [notes, setNotes] = useState('');

  let entryToSubmit = {};
  useEffect(() => {
    addEntry(entryToSubmit);
  }, [])


  useEffect(() => {

    entry[index] = entryToSubmit[index] = {
      weight: weight,
      reps: reps,
      notes: notes
    }
  }, [weight, reps, notes])



  return (
    <form >
      {console.log('entry', entryToSubmit)}
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