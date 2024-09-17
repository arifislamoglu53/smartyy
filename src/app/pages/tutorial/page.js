import React from 'react';
import Header from '../../components/header';


const Tutorial = () => {
    return (
      <div>
            <Header></Header>
			<div id='videoComponent'>
				<video width="600" controls>
					<source src="/videos/introduction.mp4" type="video/mp4" />
				</video>
			</div>
      </div>
  );
}

export default Tutorial;