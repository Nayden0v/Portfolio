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
      const fadeInSubscription = Scroll.currentScreenFadeIn.subscribe(fadeInScreenHandler)

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
        {label: "Projects", logoSrc: "projects.svg"},
        {label: "Interests", logoSrc: "interests.svg"}
    ];

    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 80},
        {skill: "React Js", ratingPercentage: 80},
        {skill: "React Native", ratingPercentage: 60},
        {skill: "Node JS", ratingPercentage: 50},
        {skill: "Mongo DB", ratingPercentage: 50},
        {skill: "TypeScript", ratingPercentage: 70},
        {skill: "CSS", ratingPercentage: 70},
        {skill: "Git", ratingPercentage: 70},
        {skill: "Jira", ratingPercentage: 60},

    ];

    const projectDetails =[
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "A Personal Portfolio website tp showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },
        {
            title: "Simple ToDo App",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "A Personal Portfolio website tp showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, CSS",
        },
        {
            title: "Personal Portfolio Website",
            duration: {fromDate: "2020", toDate: "2021"},
            description: "A Personal Portfolio website tp showcase all my details and projects at one place",
            subHeading: "Technologies Used: React JS, Bootstrap",
        },

    ];

    const resumeDetails = [
        <div className='resume-screen-container' key="education">
            <ResumeHeading
            heading={"TU"}
            subHeading={"Bachelor degree"}
            fromDate={"2011"}
            toDate={"2016"}
            />
            <ResumeHeading
            heading={"Progress"}
            subHeading={"Bachelor degree"}
            fromDate={"2011"}
            toDate={"2016"}
            />
          <ResumeHeading
            heading={"John Atanasov"}
            subHeading={"Bachelor degree"}
            fromDate={"2018"}
            toDate={"present"}
            />
        </div>,

        <div className='resume-screen-container' key="work-experience">
          <div className='experience-container'>
            <ResumeHeading
            heading={"MAP"}
            subHeading={"Bachelor degree"}
            fromDate={"2011"}
            toDate={"2016"}
            />
            <div className='experience-description'>
                <span className='resume-description-text'>
                    Currently working as a survey programmer.
                </span>
            </div>

            <div className='experience-description'>
                <span className='resume-description-text'>
                    -Some Description here
                </span>
                <br />
                <span className='resume-description-text'>
                    -Some Other thing
                </span>
                <br />
                <span className='resume-description-text'>
                    -Another One
                </span>
                <br/>
            </div>
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

                <div className='resume-screen-container' key="projects">
                    {projectDetails.map((projectDetails, index)=>(
                        <ResumeHeading 
                        key={index}
                        heading={projectDetails.title}
                        subHeading={projectDetails.subHeading}
                        description={projectDetails.description}
                        fromDate={projectDetails.duration.fromDate}
                        toDate={projectDetails.duration.toDate}
                        />
                    ))}
                </div>,

                <div className='resume-screen-container' key="interests">
                    <ResumeHeading 
                    heading="Playing"
                    description="Dota 2 and other games I like"
                    />
                    <ResumeHeading 
                    heading="Programming"
                    description="JS and web sites"
                    />
                    <ResumeHeading 
                    heading="Playing Tennis"
                    description="Dota 2 and other games I like"
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
