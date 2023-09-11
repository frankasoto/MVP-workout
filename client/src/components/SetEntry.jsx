import React, { useState } from 'react';



const SetEntry = () => {
  const [weight, setWeight] = useState(0);
  const [reps, setReps] = useState(0);
  const [notes, setNotes] = useState('');


  return (
    <form>
      <label>Weight:
        <input type="number" placeholder="0" onChange={(e) => setWeight(e.target.value)}/>
      </label>
      <label>Reps:
        <input type="number" placeholder="0" onChange={(e) => setReps(e.target.value)}/>
      </label>
      <label>Notes:
        <input type="text" placeholder="Only rested for ..." onChange={(e) => setNotes(e.target.value)}/>
      </label>
    </form>


  );


}

export default SetEntry;