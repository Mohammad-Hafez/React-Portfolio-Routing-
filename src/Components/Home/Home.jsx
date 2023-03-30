import React from 'react'
import './Home.css'
import headerImg from '../../images/avataaars.svg'
export default function Home() {
  return (
      <header>
          <div className="container p-5">
            <div className="headerContent text-center">
              <div className="imgContainer mb-4">
              <img src={headerImg} alt="" className='w-100' />
              </div>
              <h1 className='mb-4'>
                  start react
              </h1>
              <div className="starContainer">
              <i className="fa-solid fa-star star"></i>
              </div>
              <p className='mb-3'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
    </header>
  )
}
