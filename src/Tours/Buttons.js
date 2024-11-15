import { data } from "./data";

function Buttons({filteredTours, settypeTours}) {

    return (
        <div className='tours-btn'>
            <button onClick={()=> settypeTours(data)}>All Trip</button>
            <button onClick={()=> filteredTours("Popular")}>Most popular</button>
            <button onClick={()=> filteredTours("Hiking")}>Hiking</button>
            <button onClick={()=> filteredTours("Island Tour")}>Island Tour</button>
        </div>
    )
}
export default Buttons;