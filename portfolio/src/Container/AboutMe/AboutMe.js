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
    const fadeInSubscription = Scroll.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const SCREEN_ITEMS = {
      description: "Young and motivated web developer",
      highlights: {
        bullets:[
          "Full stack and web",
          "Bootstrap",
          "React",
          "TypeScript",
          "NodeJS"
      ],
      heading:"Here a few highlights"
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
              <span className='about-me-description'>{SCREEN_ITEMS.description}</span>
              <div className='about-me-highlights'>
                <div className='highlight-heading'>
                  <span>{SCREEN_ITEMS.highlights.heading}</span>
                </div>
                {renderHighlight()}
              </div>
              <div className='about-me-options'>
              <button className='btn primary-btn' onClick={() => Scroll.scrollHandler.scrollToHireMe()}>Hire me</button>   
                    <a href="ehizcv.pdf" download='Nqkvo CV.pdf'>
                      <button className="btn highlighted-btn">Get Resume</button>
                    </a>      
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}
