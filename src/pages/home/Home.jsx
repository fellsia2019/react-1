import React from 'react';
import VideoPlayer from '../../components/videoPlayer/VideoPlayer/VideoPlayer';

const Home = () => {
  return (
    <div className='home-page'>
      <div className='container'>
        Home page
        <VideoPlayer/>
      </div>
    </div>
  );
}

export default Home;
