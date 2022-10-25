import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import './Profile.css'

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                    <a href="https://www.facebook.com/vesko.naydenov.5">
                        <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/veselin-naydenov-92b6a0231/">
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href="https://github.com/Nayden0v">
                        <i className='fa fa-github'></i>
                    </a>
                    <a href="https://www.instagram.com/veskonaydenov/">
                        <i className='fa fa-instagram'></i>
                    </a>
                    </div>
                </div>

                <div className='profile-details-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>Veselin</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <TypeAnimation 
                            repeat={Infinity}
                            sequence={[
                                "React Developer",
                                2000,
                            ]}
                            />
                        </h1>
                        <span className='profile-role-tagline'>
                            Building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className='profile-options'> 
                    <a href="Naydenov.pdf" download='Naydenov_CV.pdf'>
                            <button className="btn highlighted-btn">Download CV</button>
                    </a>      
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>
            </div>
        </div>
    </div>
  )
}
