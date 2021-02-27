import React from 'react';
import "./videoplay.scss"
import {Player} from 'atoms'
import {Comments, RelatedVideos} from 'molecules'

const VideoPlayView = () => {
  return(
    <div className="videplay-view-container">
      <div className="video-play">
        <div className="video-view">
          <Player />
        </div>
        <div className="comments-view">
          <Comments />
        </div>
      </div>
      <div className="video-play-side-view">
        <RelatedVideos />
      </div>
    </div>
  )
}

export default VideoPlayView;