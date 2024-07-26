import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div>
      <div className="services">
        <div className="top-section">
          <h1>My Services</h1>
        </div>
        <div className="bottom-section">
          <div className="list">
          <i class=" icon fa-brands fa-web-awesome"></i>
          <h3>Web Design</h3>
          <div>
          Web design involves translating the designs into a functional website using programming languages like HTML, CSS, and JavaScript 
          </div>
          <div className='span'>Learn More</div>
          </div>

          <div className="list">
          <i class=" icon fa-brands fa-dropbox"></i>         
           <h3>UI?UX Design</h3>
          <div>
          Web design involves translating the designs into a functional website using programming languages like HTML, CSS, and JavaScript 
          </div>
          <div className='span'>Learn More</div>
          </div>

          <div className="list">
          <i class=" icon fa-brands fa-square-xing"></i>
          <h3>App Design</h3>
          <div>
          Web design involves translating the designs into a functional website using programming languages like HTML, CSS, and JavaScript 
          </div>
          <div className='span'>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
