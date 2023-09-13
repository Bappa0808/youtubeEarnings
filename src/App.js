import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Import the Navbar component
import Body from './components/Body';
import Earnings from './pages/Earnings';

function App() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleVideoSubmit = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div className="App">
      <Navbar/>
      <Body onVideoSubmit={handleVideoSubmit} />
      {selectedVideoId && <Earnings videoId={selectedVideoId} />}
    </div>
  );
}

export default App;
