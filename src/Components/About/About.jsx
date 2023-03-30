import React from 'react'
import './About.css'
export default function About() {
  return (
    <section id="about" className='about p-5 pt-0'>
      <div className="container p-5 pt-2">
      <div className="sectionHeader aboutHeader">
        <p className="header">
        ABOUT
        </p>
        <div className="starContainer">
              <i className="fa-solid fa-star star"></i>
              </div>
        </div>
        <div className="aboutContent">
        <div className="row">
          <div className="col-md-6">
            <p>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-6">
            <p>
            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
