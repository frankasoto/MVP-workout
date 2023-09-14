import React from 'react';
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
text-align: center;
display: flex;
flex-direction: column;
`

const VideoDisplay = ({ link, setShowVideo }) => {

  console.log('videoDisplay')
  return (
    <StyledModal>
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe> <br/>
      <button onClick={() => setShowVideo(false)}>Close</button>
    </StyledModal>

  )
}

export default VideoDisplay;