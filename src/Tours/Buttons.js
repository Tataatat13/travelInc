import { data } from "./data";

function Buttons({filteredTours, settypeTours}) {

    return (
        <div className='head_toursbtn'>
            <button className="toursbtn" onClick={()=> settypeTours(data)}>All Trip</button>
            <button className="toursbtn" onClick={()=> filteredTours("Hiking")}>Hiking</button>
            <button className="toursbtn" onClick={()=> filteredTours("Camp Tent")}>Camp Tent</button>
            <button className="toursbtn" onClick={()=> filteredTours("Island Tour")}>Island Tour</button>
            <button className="toursbtn" onClick={()=> filteredTours("Cruise")}>Cruise</button>
            <button className="toursbtn" onClick={()=> filteredTours("Safari")}>Safari</button>
            <button className="toursbtn" onClick={()=> filteredTours("City Tour")}>City Tour</button>
            <button className="toursbtn" onClick={()=> filteredTours("Walking")}>Walking</button>
            <button className="toursbtn" onClick={()=> filteredTours("Adventures Tour")}>Adventures Tour</button>
            <button className="toursbtn" onClick={()=> filteredTours("Air Ride Tour")}>Air Ride Tour</button>
        </div>
    )
}
export default Buttons;