import React, { useEffect, useState } from 'react';
import '../containers/earnings.css';

const API_KEY = 'AIzaSyAdYfn1np69k5fQbucHA4lRNOOSE5KYz8Q';
const Earnings = ({ videoId }) => {
  const [videoData, setVideoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics`
        );
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setVideoData(data.items[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [videoId]);

  return (
    <div>
      <h1 className='text'>Earnings Page</h1>
      {videoData.snippet && (
        <div>
          <h2 className='videoTitle'>Video Title: {videoData.snippet.title}</h2>
          <p>Views: {videoData.statistics.viewCount}</p>
          <p>Comments: {videoData.statistics.commentCount}</p>
          <p>Likes: {videoData.statistics.likeCount}</p>
          <p>Subscribers: {videoData.statistics.subscriberCount} access deny</p>
          <h3>Total Earnings</h3>
          <p>
  {parseInt(videoData.statistics.viewCount) +
    10 * parseInt(videoData.statistics.commentCount) +
    5 * parseInt(videoData.statistics.likeCount)}/-
</p>
          <button>Call Back Request</button>
        </div>
        
      )}
    </div>
  );
};

export default Earnings;
