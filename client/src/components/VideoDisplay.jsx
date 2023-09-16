import React from 'react';
import styled from 'styled-components';
import {StyledButton, DisplayModal} from './Styles/Themes.jsx';


const StyledContent = styled.div`
text-align: center;
display: flex;
flex-direction: column;
`

const VideoDisplay = ({ link, setShowVideo }) => {

  console.log('videoDisplay')
  return (
    <DisplayModal>
      <iframe
        width="560"
        height="480"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe> <br/>
      <StyledButton onClick={() => setShowVideo(false)}>Close</StyledButton>
    </DisplayModal>

  )
}

export default VideoDisplay;