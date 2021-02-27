import React, { useEffect, useState } from 'react';
import "./dashboard.scss";
import {Text, VideoPreview} from 'atoms';
import { getTrending } from 'api/youtube'
const youtube = "AIzaSyA4Hde2-k2pkcwisd49Qe6CId5GazvPtsM";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [nextPage, setNextPageToken] = useState('')
  const perPageItems = 15;
  const youtubeResultsPerPage = 5

  useEffect(() => {
    get()
  }, [])

  const get = async() => {
    const { items, nextPageToken } = await getTrending();
    setData(items);
    setNextPageToken(nextPageToken)
  }

  const RenderVideoPreview = () => {
    let value = []

    if(data.length){
      data.forEach((item) => {
        value.push(
          <VideoPreview data ={item} />
        )
      })
    }
    return (
      <>
        {value}
      </>
    )
  }

  return(
    <div className="dashboard-container" >
      <RenderVideoPreview />
    </div>
  )
}

export default Dashboard;