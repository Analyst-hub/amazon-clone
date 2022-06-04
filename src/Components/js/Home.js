import React from 'react'
import banner from '../images/banner.png';
import '../css/Home.css'

function Home() {
  return (
    <div className='home'>
        <img 
            className='home__image'
            src={banner} 
            alt=""
        />
        <h1>Home.....bitch</h1>
    </div>
  )
}

export default Home