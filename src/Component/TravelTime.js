import "./TravelTimeStyles.css";

const TravelTime = () => {
    return (
    <div className="travelTime">
            <h1>Time to travel</h1>
        

        <div className=" first-trv">
            <div className="travtext">
                <h2>Plan Your Trip with Travel Inc</h2>
                <p>Trust our experience, we will find the best trip,
                    the best destinations for you. We have valuable travel
                    experience and can recommend the most amazing resorts,
                    cities and countries to visit!</p>
            </div>

            <div className="image">
                <img src="https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
                <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img"/>
            </div>

        </div>
    </div>
    )
}
export default TravelTime;