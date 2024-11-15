
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Tours from './Tours/Tours';
import Contacts from './Contacts/Contacts';





function App() {

  
  return ( <div>

  <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/tours' element = {<Tours/>}/>
        <Route path='/contacts' element = {<Contacts/>}/>
      </Routes>

    
  </Router>


        
  </div>
  

  
  );
}

export default App;
