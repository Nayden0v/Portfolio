import React, {useState} from 'react'
import {TypeAnimation} from 'react-type-animation'
import axios from 'axios'
import {toast} from 'react-toastify' 

import imgBack from '../../../src/images/mailz.jpeg'
import load1 from '../../../src/images/load2.gif'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Scroll from '../../utilities/Scroll'
import Animations from '../../utilities/Animations'
import Footer from '../Footer/Footer'
import './ContactMe.css'


export default function ContactMe(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animations.animations.fadeInScreen(props.id)
      }
      const fadeInSubscription = Scroll.currentScreenFadeIn.subscribe(fadeInScreenHandler)

      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [message, setMessage] = useState("")
      const [banner, setBanner] = useState("")
      const [bool, setBool] = useState(false)

      const handleName = (e)=>{
        setName(e.target.value);
      };
      const handleEmail = (e)=>{
        setEmail(e.target.value);
      };
      const handleMessage = (e)=>{
        setMessage(e.target.value);
      };

    const submitForm = async (e)=>{
        e.preventDefault();
        try {
            let data={
                name,
                email,
                message,
            };
            setBool(true)
            const res = await axios.post('/contact', data);
            if(name.length === 0 || email.length === 0 || message.length === 0){
                setBanner(<p className='red'>{res.data.msg}</p>)
                toast.error(res.data.msg)
                setBool (false)
            }else if(res.status === 200){
                setBanner(<p className='green'>{res.data.msg}</p>)
                toast.success(res.data.msg)
                setBool (false)
            }
            
        } catch (error) {  
            
        }

        setName("");
        setEmail("");
        setMessage("");

    }

  return (
    <div className='main-container fade-in' id={props.id || ''}>
        <ScreenHeading
        subHeading = {"Let's Keep In Touch"}
        title={'Contact Me'}
        />
      <div className='central-form'>
        <div className='col'>
            
        <h2 className='title'>
             <TypeAnimation 
             repeat={Infinity}
             sequence={[
                 "Get in Touch 📧",
                 2000,
             ]}
             />
        </h2>
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
        <div className='back-form'>
            <div className='img-back'>
                <h4>Send Your Email Here!</h4>
                <img src={imgBack} alt="image not found" />
            </div>
            <form onSubmit={submitForm}>
                {/* {banner} */}
                <label htmlFor="name">Name</label>
                <input type="text" 
                onChange={handleName}
                value={name}/>

                <label htmlFor="email">Email</label>
                <input type="email" 
                onChange={handleEmail}
                value={email}
                />

                <label htmlFor="message">Message</label>
                <textarea type="text" 
                onChange={handleMessage}
                value={message}
                />

                <div className='send-btn'>
                    <button type='submit'>
                        send <i className='fa fa-paper-plane'/>
                        {bool?(<b className='load'>
                            <img src={load1} alt="Loading..."/>
                        </b>):("")}
                    </button>
                </div>
            </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
