import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Label } from 'recharts';
import axios from 'axios';
import styled from 'styled-components';

const StyledModal = styled.div`
top: 50%;
left: 50%;
z-index: 7;
position: absolute;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
background-color: white;
`
const StyledContent = styled.div`
display: flex;
text-align: center;
justify-content: center;
align-items: center;
top: 80%;
left: 50%;

`


const GraphDisplay = ({ exerciseName }) => {

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
    <StyledModal>
      <StyledContent>

        {isUpdated ? renderLineChart() : <></>}

      </StyledContent>
    </StyledModal>


  )

}

export default GraphDisplay;