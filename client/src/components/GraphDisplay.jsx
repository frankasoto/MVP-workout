import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Label, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { VideoWindow, VideoClose, DisplayModal } from './Styles/Themes.jsx';




const GraphDisplay = ({ exerciseName, setShowGraph }) => {

  const [exerciseData, setExerciseData] = useState('')
  const [isUpdated, setIsUpdated] = useState(false)
  useEffect(() => {
    axios.get(`/exercises/results?name=${exerciseName}`)
      .then((results) => {

        setExerciseData([...results.data]);
        setIsUpdated(true);

      })
      .catch((err) => console.log(err));
  }, [])


  const renderLineChart = () => {
    return (

          <LineChart width={500} height={400} data={ exerciseData } >
            <Line type="monotone" dataKey="average_weight" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date_completed"  >
              <Label value="date" offset={0} interval="preserveStartEnd" position="insideBottom" />
            </XAxis>
            <YAxis >
              <Label style={{fontSize: "130%"}}value="average weight" angle={-90} position="insideLeft" />
            </YAxis>
          </LineChart>



    )
  };

  return (
    <DisplayModal>
      <VideoWindow>

        {isUpdated ? renderLineChart() : <></>}

        <VideoClose onClick={() => setShowGraph(false)}>Close</VideoClose>
      </VideoWindow>
    </DisplayModal>


  )

}

export default GraphDisplay;