import React, { useEffect, useState } from 'react'
import './Portfolio.css'
import img1 from '../../images/cabin.png';
import img2 from '../../images/cake.png';
import img3 from '../../images/circus.png';
import img4 from '../../images/game.png';
import img5 from '../../images/safe.png';
import img6 from '../../images/submarine.png';
export default function Portfolio() {
  const [img , setImg] = useState('')
  const [title , setTitle] = useState('')
  const [lightBoxSection ,setLightBoxSection] = useState(false)
  let showLightBox = (e)=>{
    e.stopPropagation()
      if (e.target.classList.value == "lightBox") {
        closeLightBox()
      }
       if (e.target.classList.value.includes("openLightBox") ) {
      setImg(e.target.attributes[1].value)
      setTitle(e.target.attributes[2].value)
      setLightBoxSection(true)
  }
}
  const closeLightBox = ()=>{
    setLightBoxSection(false);
  }
  return (<>
    <section id='portfolio' className='p-5 pt-0'> 
    {lightBoxSection &&
    <div className="lightBox" onClick={showLightBox}>
      <div className="lightBoxContainer rounded text-center">
      <i className="fa-solid fa-xmark" onClick={closeLightBox}  id='closeIcon'></i>
         <div className="sectionHeader portfolioHeader">
          <p className="header lightboxHeader">
          {title}
          </p>
          <div className="starContainer">
                <i className="fa-solid fa-star star"></i>
                </div>
        </div>
        <div className="lightboxContent">
        <div className="lightBoxImg">
          <img src={img} alt="" className='w-100 rounded'/>
        </div>
        <div className="lightBoxData mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit delectus eaque exercitationem quaerat eligendi! Inventore hic quibusdam ex dolores in ullam. Atque, obcaecati possimus. Animi iste accusamus aliquid nulla, corrupti harum quia deleniti eveniet, ducimus quo, voluptatum enim ea veritatis vitae assumenda id labore aliquam ut saepe quas tempore voluptates?
        </div>
        </div>
        <button className='closeBtn' onClick={closeLightBox}>
        <i className="fa-solid fa-xmark"></i> Close window
        </button>
      </div>
    </div>
    }
      <div className="container p-5 pt-0 text-center">
        <div className="sectionHeader portfolioHeader">
        <p className="header ">
        PORTFOLIO
        </p>
        <div className="starContainer">
              <i className="fa-solid fa-star star"></i>
              </div>
        </div>
        <div className="row gy-4">
          <div className="col-md-4">
            <div  className="innerImg">
            <div className="openLightBox overlay rounded" data-img-src={img1} data-title="LOG CABIN" onClick={showLightBox}>
            <i className="openLightBox fa-solid fa-plus fs-1 text-white" data-img-src={img1} data-title="LOG CABIN"></i>
            </div>
            <img  src={img1} alt="" className='w-100 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div  className="innerImg">
            <div className="openLightBox overlay rounded" data-img-src={img2} data-title="TASTY CAKE" onClick={showLightBox}>
            <i className="openLightBox fa-solid fa-plus fs-1 text-white" data-img-src={img2} data-title="TASTY CAKE"></i>
            </div>
            <img  src={img2} alt="" className='w-100 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div  className="innerImg">
            <div className="openLightBox overlay rounded" data-img-src={img3} data-title="CIRCUS TENT" onClick={showLightBox}>
            <i className="openLightBox fa-solid fa-plus fs-1 text-white" data-img-src={img3} data-title="CIRCUS TENT"></i>
            </div>
            <img  src={img3} alt="" className='w-100 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div  className="innerImg">
            <div className="openLightBox overlay rounded" data-img-src={img4} data-title="CONTROLLER" onClick={showLightBox}>
            <i className="openLightBox fa-solid fa-plus fs-1 text-white" data-img-src={img4} data-title="CONTROLLER"></i>
            </div>
            <img  src={img4} alt="" className='w-100 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div  className="innerImg">
            <div className="openLightBox overlay rounded" data-img-src={img5} data-title="LOCKED SAFE" onClick={showLightBox}>
            <i className="openLightBox fa-solid fa-plus fs-1 text-white" data-img-src={img5} data-title="LOCKED SAFE"></i>
            </div>
            <img  src={img5} alt="" className='w-100 rounded' />
            </div>
          </div>
          <div className="col-md-4">
            <div  className="innerImg">
            <div className="openLightBox overlay rounded" data-img-src={img6} data-title="SUBMARINE" onClick={showLightBox}>
            <i className="openLightBox fa-solid fa-plus fs-1 text-white" data-img-src={img6} data-title="SUBMARINE"></i>
            </div>
            <img  src={img6} alt="" className='w-100 rounded' />
            </div>
          </div>

        </div>
        </div>
    </section>
        </>
  )
}
