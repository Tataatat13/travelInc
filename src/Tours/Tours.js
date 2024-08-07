import { useLayoutEffect, useState } from 'react';
import './Tours.css';
import { data } from './data';



import TypeOfTours from './TypeOfTours';
import Buttons from './Buttons';
import gsap from 'gsap';

function Tours (){

    useLayoutEffect (()=> {
        gsap.fromTo(".head_tourstext", { opacity:0, y: -100,}, {duration: 3, opacity: 1, y: 0});
    },[]);

    const [typeTours, settypeTours]=useState(data);

    const chosenTours =(searchTerm) => {
        const newTours =data.filter(element => element.searchTerm === searchTerm);
        settypeTours(newTours);
    }


    return (<div>
        <div className="head_tours">
            <img className='head_toursimg' src="https://good-nature-blog-uploads.s3.amazonaws.com/uploads/2023/01/0D45479D-C795-48BC-A26A-EDCBF5A39136.jpeg" alt="foto"/>
            <p className='head_tourstext'>Adventure Begins Here</p>
            <p className='head_toursfind'>Find Your Special Tour</p>
            <Buttons filteredTours ={chosenTours} settypeTours = {settypeTours}/>
        </div>
        
        <TypeOfTours listTours={typeTours}/>
        </div>
    )
}
export default Tours;