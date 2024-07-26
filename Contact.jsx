import React from 'react'
import './Contact.css'
const Contact = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert('your application is successful')
  }
  return (
    <div>
      <div className="contact">
        <div className="contact-left">
            <h1>Contact Me</h1>
            <div className="icon-section">
            <div className="icon-list">
            <i class="pink fa-brands fa-telegram"></i>
            <div>contact@gmail.com</div>
            </div>

            <div className="icon-list">
            <i class="pink fa-solid fa-phone"></i>
            <div>0123456789</div>
            </div>
            
            <div className="icons">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            </div>
            </div>
            <div >
                <button className='download'>Download CV</button>
            </div>

        </div>

        <div className="contact-right">
            <h2>Contact Us</h2>
           < form  onSubmit={submitHandler}>
           <input type="text" placeholder='Your Name' />
            <input type="text" placeholder='Your Email' />
            <textarea placeholder='summary...' name="" id=""></textarea>
            <button className='download submit' type='submit'>submit</button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
