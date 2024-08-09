import { useEffect, useLayoutEffect, useState } from "react";



import Swal from "sweetalert2";
import LoaderPage from './Loader/LoaderPage';
import MyWeatherComponent from "./MyWeatherComponent";
import TodayDate from "./TodayDate";
import gsap from "gsap";

function Home (){

    useLayoutEffect (()=> {
        gsap.to(".head_text", { rotation: 360, duration: 2});
        gsap.fromTo(".text_about", { opacity:0, x: -100,}, {duration: 3, opacity: 1, x: 0});
        gsap.fromTo(".container", { opacity:0, x: 100,}, {duration: 3, opacity: 1, x: 0});
    },[]);
    
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

    return (<div className="home_container">
        
            <h1 className="head_text">enjoy the travel</h1>
    
        
    <div className="headbox_logo">

        <div className="text_about">
            <hr></hr>
                <ul className="logo_bigbox">
                    <li className="list"><a href="https://github.com/Tataatat13"><img className="logo_img" src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000" alt="logo" width="30px"/></a></li>
                    <li className="list"><a href="https://github.com/Tataatat13"><img className="logo_img" src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000" alt="logo" width="30px"/></a></li>
                    <li className="list"><a href="https://github.com/Tataatat13"><img className="logo_img" src="https://img.icons8.com/?size=100&id=86875&format=png&color=000000" alt="logo" width="30px"/></a></li>
                </ul> 
                <div className="logo_bigbox">
                    <p className="about">Trust our experience, we will find the best trip,
                    the best destinations for you. We have valuable travel
                    experience and can recommend the most amazing resorts,
                    cities and countries to visit!</p>
                </div>
        </div>
    
        <div className="container">
        
                <div className="inputweather">
                    <p className="check_box">check the weather</p>
                
                    <form onSubmit={finalSearch}>
                    <input
                        className="search"
                        placeholder="Enter the name of the city"
                        onChange={myWeatherSearch}
                        value={mySearch}
                        
                    />
                    <button className="btn">
                    <img
                        src="https://img.icons8.com/?size=100&id=EWXLJBR0k8Tm&format=png&color=40C057"
                        alt="icon"
                        width="20px"
                    />
                </button>
                    </form>

                    {stateLoader && <LoaderPage />}

                <div>
                    <TodayDate/>
                </div>

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
</div>
    );
};



export default Home;