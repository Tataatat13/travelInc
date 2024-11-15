import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import LoaderPage from './Loader/LoaderPage';
import MyWeatherComponent from "./MyWeatherComponent";
import TodayDate from "./TodayDate";
import "./WeatherStyles.css";
import { IoSunnyOutline } from "react-icons/io5";



function Weather () {

    const MY_POINT = "https://api.openweathermap.org/data/2.5/";
    const MY_KEY = "8603fecfc37a8994382b7cb2ba068a6e";


    const [mySearch, setMySearch] = useState("");
    const [stateLoader, setStateLoader] = useState(false);
    const [myWeathers, setMyWeathers] = useState([]);
    const [wordSubmitted, setWordSubmitted]=useState("")
    
    

    useEffect(() => {
        const getWeather = async () => {
            if (wordSubmitted === "") return;
            setStateLoader(true);
            try {
                const response = await fetch(`${MY_POINT}weather?q=${wordSubmitted}&units=metric&appID=${MY_KEY}`);
                if (response.ok) {
                    const data = await response.json();
                    console.log(data);
                    setMyWeathers([data]); 
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Enter the correct name of the city",
                    });
                }
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong. Please try again later.",
                });
            } finally {
                setStateLoader(false);
            }
        };
        getWeather();
    }, [wordSubmitted]);

    const myWeatherSearch = (e) => {
        setMySearch(e.target.value);
    };

    const finalSearch = (e) => {
        e.preventDefault();
        setWordSubmitted(mySearch);
    };

    return (
    <div className="headbox">
        <div className="container">
            <div className="w-image">
            <img src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="WeatImg"/>
            </div>
            <div className="w-input">
                        <p className="checkbx">Current weather and forecast</p>
                        

                        <form onSubmit={finalSearch}>
                        
                        <input
                        className="search"
                        placeholder="Enter the name of the city"
                        onChange={myWeatherSearch}
                        value={mySearch}
                        />
                        
                        <button className="btn">
                        <IoSunnyOutline />
                        </button>
                        </form>

                        {stateLoader && <LoaderPage />}

                        <div><TodayDate/></div>
                <div>
                    {myWeathers.length > 0 && myWeathers.map((element, index) => (
                    <MyWeatherComponent
                    key={index}
                    name={element.name}
                    temp={element.main.temp}
                    feelslike={element.main.feels_like}
                    country={element.sys.country}
                    description={element.weather[0].description}
                    wind={element.wind.speed}
                    />
            ))}
                </div>
            </div>
        </div>
    </div>
    )
}


export default Weather;