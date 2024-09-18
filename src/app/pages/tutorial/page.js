import React from 'react';
import Video from 'next-video';
import introductionVideo from '../../../../videos/introduction.mp4'
import Header from '../../components/header';


const Tutorial = () => {
    return (
      <div>
            <Header/>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}> 
			<Video src={introductionVideo} />;
			</div>
      </div>
  );
}

export default Tutorial;