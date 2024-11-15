import Footer from "../Component/Footer";
import Hero from "../Component/Hero";
import NavBar from "../Component/NavBar";
import ContactForm from "./ContactForm";


function Contacts (){
    return ( <div>

        <NavBar/>
        <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact us"
        btnClass="hide"
        />
            <ContactForm/>
            <Footer/>
</div>
    )
}
export default Contacts;
