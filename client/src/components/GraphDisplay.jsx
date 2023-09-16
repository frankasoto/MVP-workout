import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Label } from 'recharts';
import axios from 'axios';
import styled from 'styled-components';
import { DisplayModal, StyledButton } from './Styles/Themes.jsx';

const StyledContent = styled.div`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
top: 80%;
left: 50%;

`


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
      // <ResponsiveContainer >
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

      // </ResponsiveContainer>
    )
  };

  return (
    <DisplayModal>
      <StyledContent>

        {isUpdated ? renderLineChart() : <></>}

      </StyledContent>
        <StyledButton onClick={() => setShowGraph(false)}>Close</StyledButton>
    </DisplayModal>


  )

}

export default GraphDisplay;