function MyWeatherComponent ({name, country, temp, feelslike, description, wind}) {
    return (
        <div className="container_weather">
            <h3 className="smallbox_weather">{name}, {country}</h3>
            <h3 className="smallbox_weather">{temp.toFixed()}<span>&deg;</span></h3>
            <h4 className="box_feelslike">Feels like: {feelslike.toFixed()}<span>&deg;</span></h4>
            <div className="boxes">
                <div className="box">
                    <p className="check_box">{description}</p>
                </div>
                <div className="box wind"> 
                    <img src="https://img.icons8.com/?size=100&id=31842&format=png&color=000000" alt="icon" width="20px"/>
                    <p className="check_box">Wind {wind.toFixed(2)} m/s</p>
                </div> 
            </div>
        </div>
    )
}
export default MyWeatherComponent;