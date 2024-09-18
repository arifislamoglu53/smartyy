import React from 'react';
import Video from 'next-video';
import introductionVideo from '../../../../videos/introduction.mp4'
import Header from '../../components/header';


const Tutorial = () => {
    return (
      <div>
            <Header/>
			<div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '100px' }}> 
			<a
                  className="inline-block rounded bg-teal-600 mt-2 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-600 focus:outline-none focus:ring active:bg-[#acf2a1]"
                  href="/pages/start"
                >
                  Jetzt Starten
                </a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}> 
			<Video src={introductionVideo} />;
			</div>
      </div>
  );
}

export default Tutorial;