import React from 'react'
import './Footer.css'
export default function Footer() {
    return <>
    <footer className="text-center text-capitalize">
        <div className="container py-4">
            <div className="container mb-3 py-4">
                <div className="row gy-2">
                    <div className="col-lg-4 ">
                        <div className="innerFooter">
                        <h2 className='mb-4'>
                            location
                        </h2>
                        <p>
                        2215 John Daniel Drive Clark, MO 65243
                        </p>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="innerFooter">
                        <h2 className='mb-4'>
                        AROUND THE WEB
                        </h2>
                        <div className="socialIconContainer d-flex align-items-center justify-content-center">
                            <div className="socialIcon"><i className="fa-brands fa-facebook-f"></i></div>
                            <div className="socialIcon"><i className="fa-brands fa-twitter"></i></div>
                            <div className="socialIcon"><i className="fa-brands fa-linkedin-in"></i></div>
                            <div className="socialIcon"><i className="fa-brands fa-dribbble"></i></div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ">
                        <div className="innerFooter">
                        <h2 className='mb-4'>
                        ABOUT FREELANCER
                        </h2>
                        <p>
                        Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id='copyright' className='p-4'>
            Copyright © Your Website {new Date().getFullYear()}
        </div>

        </footer>
        </>

}
