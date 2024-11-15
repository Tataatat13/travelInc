import { useState } from 'react';
import './Tours.css';
import { data } from './data';
import TypeOfTours from './TypeOfTours';
import Buttons from './Buttons';
import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import NavBar from "../Component/NavBar";

function Tours (){



    const [typeTours, settypeTours]=useState(data);

    const chosenTours =(searchTerm) => {
        const newTours =data.filter(element => element.searchTerm === searchTerm);
        settypeTours(newTours);
    }


    return (<div>
        <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/01/0D45479D-C795-48BC-A26A-EDCBF5A39136.jpeg"
        title="Adventure Begins Here"
        btnClass="hide"
        />

        <div className="tours">
            <div className='header-trip'>
            <h3>Find Your Special Tour</h3>
            
            <Buttons filteredTours ={chosenTours} settypeTours = {settypeTours}/>
            
            </div>
        
            
                <TypeOfTours listTours={typeTours}/> 
        
        </div>
        
        <Footer/>
        </div>
    )
}
export default Tours;