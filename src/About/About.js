import gsap from 'gsap';
import './About.css';
import { useLayoutEffect, useState } from 'react';

import { Typedata } from './Typedata';
import { choisedata } from './choisedata';
import Choise from './Choise';
import Type from './Type';

function About (){


    useLayoutEffect (()=> {
        gsap.fromTo(".about_choose", { opacity:0, y: 100,}, {duration: 3, opacity: 1, y: 0});
        gsap.fromTo(".about_smallbox", { opacity:0, y: -100,}, {duration: 3, opacity: 1, y: 0});
    },[]);

    const [choise] = useState(choisedata);
    const [typeOfTour] = useState(Typedata);


    return (
        <div className="about_headbox">
            
                    <div className='about_header'>
                        <img className="about_image" src='https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt='foto'/>
                        <h2 className='about_choose'>Why Choose us?</h2>
                    </div>

                    <Choise listchoise={choise}/>

                <div className='about_type'>
                
                    <div className='type_tour'>
                        <div className='header_typeoftour'>
                        <h3 className="smallbox_weather">Diverse Tour Type</h3>
                        </div>

                        <Type listtype={typeOfTour}/>

                    </div>

            </div>
                    <div className='bottom_typeoftour'>
                    <p className='bottom_about'>Discover the world in a new way</p>
                
            </div>
    </div>
    )
}
export default About;