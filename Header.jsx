import React, { useState } from 'react'
import './Header.css'

const Header = () => {
  const [menu,setmenu] = useState(false)
  return (
    <div className='header'>
      <div className="left-section">
        <span>k</span><h1>evin</h1>
      </div>
      <i className="nav" onClick={(e) => setmenu(prev => prev=== true? false: true)}>
        <i class="fa-solid fa-bars" ></i>
       </i>
      <div className="right-section">
        <ul className={`${menu === false? 'ul': 'small-container'}`}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
           </ul>
      
       
      </div>
    </div>
  )
}

export default Header
