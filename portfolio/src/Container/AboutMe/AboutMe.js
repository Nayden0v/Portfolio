import React,{useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Scroll from '../../utilities/Scroll'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
      if(screen.fadeInScreen !== props.id)
      return;
      Animations.animations.fadeInScreen(props.id)
    }
    Scroll.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_ITEMS = {
      description: "",
      highlights: {
        bullets:[],
      heading:""
    }
  }
  const renderHighlight = ()=>{
    return(
    SCREEN_ITEMS.highlights.bullets.map((value, i)=>(
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ))
  )  
} 
  return (
    <div className='about-me-container screen-container fade-in' id={props.id || ""}>
      <div className='about-me-parent'>
          <ScreenHeading title={'About Me'} subHeading={"Why Choose Me?"}/>
          <div className='about-me-card'>
            <div className='about-me-profile'></div>
            <div className='about-me-details'>
              <span className='about-me-description'><span>Hi there, I'm a junior web developer, located in Sofia, Bulgaria.</span><br/>
              <span>A few years ago, I started working in the marketing area as a survey programmer. At that time I only had basic knowledge of html and javascript. And that's all the knowledge I needed to start this job. Over time, the more I worked, the more interesting the code became. From then on, I realized that I wanted to do programming more seriously. So, while I was working at my company,I started to learn and develop my skills every day.Also I took a couple of courses in web development (HTML, CSS, JS, React JS etc.) and starting to build from the simplest to more complex applications. </span>
              <br/>
              <br/>
              <span>So, if you are looking for a highly motivated and dedicated person open to new challenges and ready to develop his knowledge every day. Don't hesitate to contact me!</span>
              </span>
              <div className='about-me-highlights'>
                <div className='highlight-heading'>
                  <span>{SCREEN_ITEMS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className='about-me-options'>
              <button className='btn primary-btn' onClick={() => Scroll.scrollHandler.scrollToHireMe()}>Hire me</button>   
                    <a href="Naydenov.pdf" download='Naydenov_CV.pdf'>
                      <button className="btn highlighted-btn">Download CV</button>
                    </a>      
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}
