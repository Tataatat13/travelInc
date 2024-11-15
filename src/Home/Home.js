import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import NavBar from "../Component/NavBar";
import TravelTime from "../Component/TravelTime";
import Weather from "../Component/Weather";
import HomeImg from "../assets/foto1.jpg";


function Home (){



    return (
    <div>


        <NavBar/>
        <Hero
        cName="hero"
        heroImg={HomeImg}
        title="Enjoy Your Travel"
        text="Choose Your Favourite Destination."
        buttonText="Tours"
        btnClass="show"
        url="/"
        />
        <TravelTime/>
        <Weather/>
        <Footer/>
    </div>
    );
};
export default Home;