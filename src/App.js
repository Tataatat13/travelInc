
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import Home from './Home/Home';
import About from './About/About';
import Tours from './Tours/Tours';
import Gallery from './Gallery/Gallery';
import Contacts from './Contacts/Contacts';
import Footer from './Footer';




function App() {


  
  return ( <div className='head_container'>
  <Router>
      <nav>
      <Link to="/" className='link'>Home</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/tours" className='link'>Tours</Link>
      <Link to="/gallery" className='link'>Gallery</Link>
      <Link to="/contacts" className='link'>Contacts</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/tours' element = {<Tours/>}/>
        <Route path='/gallery' element = {<Gallery/>}/>
        <Route path='/contacts' element = {<Contacts/>}/>

      </Routes>
  </Router>

    <Footer/>
        
  </div>
  

  
  );
}

export default App;
