import React from 'react'
import './About.css'
import user from '../../assets/user-1.png'
const About = () => {
  return (
    <div  className='main1'>
     <div className="left-section">
    <img src={user} alt="" />
     </div>
     <div className="right-section">
    
        <div className="top-section">
          <h1 className='heading'>About Me</h1>
        </div>
        <div className="middle-section">
        As a passionate software developer with over 5 years of experience in backend development, I thrive on solving complex problems and delivering high-quality software solutions. My expertise includes Python, Java, and various web frameworks such as Django and Spring Boot. I have a proven track record of developing scalable and efficient applications, with a focus on user experience and performance.
        </div>
        <h4 >skills</h4>
        <div className="skills-section bottom-section">
          
          <div className="list1">
            <div className="ul">
              <div className="type">
                UI/UX
              </div>
              <div className="details">
                Designing Web / App interfaces
              </div>
            </div>

            <div className="ul">
              <div className="type">
               Web Development
              </div>
              <div className="details">
                Web App Development
              </div>
            </div>

            <div className="ul">
              <div className="type">
                App Development
              </div>
              <div className="details">
                Building Android / iOS apps
              </div>
            </div>
          </div>
        </div>
      
     </div>
    </div>
  )
}

export default About
