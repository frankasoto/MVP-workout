import React from 'react';
import { DisplayModal, VideoWindow, VideoClose } from './Styles/Themes.jsx';



const VideoDisplay = ({ link, setShowVideo }) => {

  console.log('videoDisplay')
  return (
    <DisplayModal>
      <VideoWindow>
      <iframe
        width="560"
        height="315"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen>
      </iframe> <br/>
      <VideoClose onClick={() => setShowVideo(false)}>Close</VideoClose>
      </VideoWindow>
    </DisplayModal>

  )
}

export default VideoDisplay;