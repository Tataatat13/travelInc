import './About.css';
import Choise from './Choise';
import Type from './Type';
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import NavBar from "../Component/NavBar";

function About (){



    
    return (
    <div>
        <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Discover the world in a new way"
        btnClass="hide"
        />
        <div className='about-us'>
        <h4>Why Choose us?</h4>
        <Choise/>
        </div>
            <Type/>
            <Footer/>
    </div>
    )
}
export default About;