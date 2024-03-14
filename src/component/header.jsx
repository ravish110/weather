import React from 'react';
import Cloud from '../assets/cloud.PNG';


const Header = () => {
  return (
    <div className='header'>
      <div className='toggleTab'>
        <button>Today</button>
        <button>Week</button>
      </div>
      <div className='rightHeader'>
        <div className="toggleCF">
          <button>C</button>
          <button>F</button>
        </div>
        <div className="profle">
          <img src={Cloud} alt="profile" />
        </div>
      </div>
    </div>
  )
}

export default Header