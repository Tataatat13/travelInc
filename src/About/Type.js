import { useState } from 'react';
import { typedata } from './Typedata';
import left from "../assets/left.png";
import right from "../assets/right.png";

function Type () {

    const [moment, setMoment]= useState(0);
    const {type, tourimg} = typedata[moment];

    const previosMoment = () => {
            setMoment((moment => {
                moment --;
                    if (moment < 0) {
                        return typedata.length -1;
                    }
                    return moment;
                }))
        }
    const nextMoment = () => {
                setMoment ((moment => {
                moment ++; 
                if (moment > typedata.length -1) {
                        moment = 0;
                    }
                    return moment;
                }))
        }

    return ( 
    
    <div className='type-tour'>
        <h2>Let's Discover The World Together</h2>
    
        <div className='type-box'>

            <button onClick={previosMoment}>
            <img className="type-icon" src={left} alt='leftIcons'/>
            </button>

            <div className='type-img'>
            <h4>{type}</h4>
            <img className="img" src={tourimg} alt='foto'/>
            </div>

            <button onClick={nextMoment}>
            <img className="type-icon" src={right} alt='rightIcons'/>
            </button>

        </div>
    </div>
    )
}
export default Type;