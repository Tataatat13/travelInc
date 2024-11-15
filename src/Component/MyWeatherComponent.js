

function MyWeatherComponent ({name, country, temp, feelslike, description, wind}) {
    return (
        <div className="w-card">
            <h3 className="w-sbx">{name}, {country}</h3>
            <h2 className="w-sbx">{temp.toFixed()}<span>&deg;</span></h2>
            <h4 className="feelslikebx">Feels like: {feelslike.toFixed()}<span>&deg;</span></h4>
            <div className="w-bx">
                <div className="windbx">
                    <p>{description}</p>
                </div>
                <div className="windbx"> 
                    <p>Wind {wind.toFixed(2)} m/s</p>
                </div> 
            </div>
        </div>
    )
}
export default MyWeatherComponent;