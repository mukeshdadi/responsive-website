import React from 'react'
import Home from './Home'
import { Routes ,Route} from 'react-router-dom'
import About from './About'
import Services from './Services';
import './Main.css'
import Header from './Header';
import Contact from './Contact';
import Copyrights from './Copyrights';
const Main = () => {
  return (
    <div className='main'>
        <Header />
        <Home />
        <About />
        <Services />
        <Contact/>
        <Copyrights />
    </div>
  )
}

export default Main
