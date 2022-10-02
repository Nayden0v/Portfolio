import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Scroll from '../../utilities/Scroll'
import Animations from '../../utilities/Animations'
import { useState } from 'react'
import './Resume.css'

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
    const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
      }
      Scroll.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const ResumeHeading = (props) =>{
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
                <div className='heading-bullet'></div>
                    <span>{props.heading?props.heading:""}</span>
                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>{props.fromDate + "-" + props.toDate}
                        </div>
                    ): (
                        <div></div>
                    )}
                </div>
                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
                <div className='resume-heading-description'>
                    <span>{props.description ? props.description : ""}</span>
                </div>
            </div>
    );
};

    const resumeBullets = [
        {label: "Education", logoSrc:"education.svg"},
        {label: "Work History", logoSrc: "work-history.svg"},
        {label: "Programming Skills", logoSrc: "programming-skills.svg"},
        {label: "Interests", logoSrc: "interests.svg"}
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 70},
        {skill: "React Js", ratingPercentage: 65},
        {skill: "React Native", ratingPercentage: 60},
        {skill: "Node JS", ratingPercentage: 50},
        {skill: "Mongo DB", ratingPercentage: 50},
        {skill: "TypeScript", ratingPercentage: 60},
        {skill: "CSS", ratingPercentage: 80},
        {skill: "Git", ratingPercentage: 70},
        {skill: "Jira", ratingPercentage: 60},

    ];


    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"ProgressBG"}
            subHeading={"Ceritificates in web design & coding"}
            fromDate={"2021"}
            toDate={"2022"}
            />
            <ResumeHeading
            heading={"Technical university of Sofia"}
            subHeading={"Bachelor degree of electrical engineering"}
            fromDate={"2011"}
            toDate={"2016"}
            />
          <ResumeHeading
            heading={'Sofia vocational high school of electronics "John Atanasov"' }
            subHeading={"Speciality - Computer networks"}
            fromDate={"2006"}
            toDate={"2011"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience">
          <div className='experience-container'>
            <ResumeHeading
            heading={"MAP Marketing Research"}
            subHeading={"Working as a survey programmer"}
            fromDate={"2017"}
            toDate={"present"}
            />
          </div>
        </div>,
                <div className='resume-screen-container programming-skills-container'
                key="programming-skills"
                >
                {programmingSkillDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className='skill-percentage'>
                            <div style={{width: skill.ratingPercentage + "%"}} className="active-percentage">

                            </div>
                        </div>
                    </div>
                ))}    
                </div>,

                <div className='resume-screen-container' key="interests">
                    <ResumeHeading 
                    heading="Music &amp; Movies"
                    description="Listening some favourite songs is the best stress reliever for me. Same with watching a good movie."
                    />
                    <ResumeHeading 
                    heading="Competitive Sports"
                    description="I like to challenge my reflexes and improve my skills and stamina a lot, while competing in my favourite sports like football and tennis, pushing the rank and having interactive gaming sessions excites me the most."
                    />
                    <ResumeHeading 
                    heading="Chill in the nature"
                    description="I love to go somewhere into the wild."
                    />
            </div>,
    ];

    const handleCarousel = (index)=>{
        let offsetHeight = 360;
        let newCarouselOffset ={
            style: {transform: "translateY("+ index * offsetHeight * -1 + "px)"}
        };
        setCarouselOffSetStyle(newCarouselOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = ()=>{
        return resumeBullets.map((bullet, index)=>(
            <div onClick={()=>handleCarousel(index)} className={index===selectedBulletIndex ? "bullet selected-bullet" : "bullet"} key={index}>
                <img className='bullet-logo' 
                src={require(`../../assets/Resume/${bullet.logoSrc}`)}
                alt="No internet connection"
                />
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getResumeScreen =()=>{
        return(
            <div
            style ={carouselOffSetStyle.style}
            className="resume-details-carousel"
            >
                {resumeDetails.map((ResumeDetail)=> ResumeDetail)}
            </div>
        )
    }

  return (
    <div className='resume-container screen-container fade-in' id={props.id || ""}>
        <div className='resume-content'>
            <ScreenHeading title={"Resume"} subHeading={'My Formal Bio Details'}/>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'></div>
                        <div className='bullets'>{getBullets()}</div>
                    </div>
                </div>
                <div className='resume-bullet-details'>{getResumeScreen()}</div>
            </div>
        </div>    
    </div>
  )
}
