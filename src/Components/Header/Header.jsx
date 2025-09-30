import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
       <video autoPlay loop muted playsInline className="header-video">
        <source src="/header-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
     <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>From local favorites to global cuisines, we bring the best food straight to you. Order in seconds, enjoy in minutes.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
