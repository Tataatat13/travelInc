
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

        <div className='bottom_line'>
          <div>
          <a className='bottom_logo' href="https://github.com/Tataatat13"><img src="https://img.icons8.com/?size=100&id=118466&format=png&color=000000" alt="logo" width="25px"/></a>
          <a className='bottom_logo' href="https://github.com/Tataatat13"><img src="https://img.icons8.com/?size=100&id=59813&format=png&color=000000" alt="logo" width="25px"/></a>
          <a className='bottom_logo' href="https://github.com/Tataatat13"><img src="https://img.icons8.com/?size=100&id=86875&format=png&color=000000" alt="logo" width="25px"/></a>
          </div>
          <p className='education_bottom'>This website has been created for education purposes ⓒT.Natalia</p>
        </div>
  </div>
  

  
  );
}

export default App;
