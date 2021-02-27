import React from 'react';
import "./videopreview.scss";
import {Text} from 'atoms'

const VidePreview = ({data}) => {

  const {snippet, id} = data
  console.log(data)
  return (
    <div className="video-preview-container" onMouseOver={() => {console.log("uuu")}}>
      <img src={`https://img.youtube.com/vi/${id}/2.jpg`} className="thumbnail" />
      <Text content={snippet.title} className="" />
    </div>
  )
}

export default VidePreview